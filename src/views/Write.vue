<template>
    <div>
        <WriteComGroup @goBackList="goList" @btnSaveClick="btnSaveClick" :date="date" @changeDate="changeDate"></WriteComGroup>
        <input class="title" v-model='title' placeholder="Dayun Story">
        <!--{{this.year}} {{this.month}} {{this.whoParent}}-->
        <vue-editor id="editor1" v-model="content"></vue-editor>
    </div>
</template>

<script>
    import firebase from '../main';
    import { VueEditor } from 'vue2-editor';
    import { mapState } from 'vuex';
    import WriteComGroup from '../components/mocules/WriteComGroup';

    export default {
        name: "Write",
        props : ['detail_date'],
        components: {
            VueEditor,
            WriteComGroup
        },
        data () {
            return{
                date: '',
                title: '',
                content: '',
                calendarDate: new Date()
            }
        },
        mounted (){
            // console.log('write mounted detail_date ' + this.detail_date);
            // console.log('year '+this.year);
            // console.log('month '+this.month);
            // console.log('detail date '+this.detail_date);

            this.date = this.detail_date == '' ? new Date() : new Date(this.year, this.month-1, this.detail_date);

            let date = new Date(this.date);
            let month = (date.getMonth()+1).toString().length === 1 ? '0'+(date.getMonth()+1).toString(): (date.getMonth()+1).toString();
            let day = (date.getDate()).toString().length === 1 ? '0'+(date.getDate()).toString(): (date.getDate()).toString();

            this.getContent(date.getFullYear(), month, day);
        },
        computed : mapState({ // that is needed no longer. the item for refactoring
            year :  (state) => state.combo.year,
            month : (state) => state.combo.month,
            whoParent : (state) => state.parent.who
        }),
        methods: {
            goList () {
                this.$router.push('/list')
                // alert(this.$store.state.combo.month);
            },
            btnSaveClick() {
                let date = this.calendarDate.getDate().toString().length === 1 ? '0'+this.calendarDate.getDate().toString() : this.calendarDate.getDate().toString();

                // console.log('date ' + date);
                // console.log('title ' + this.title);
                // console.log('content ' + this.content);
                console.log('writer ' + this.whoParent);

                var data = {
                    date: date,
                    title: this.title,
                    content: this.content,
                    writer: this.whoParent
                };

                let month = (this.calendarDate .getMonth()+1).toString().length === 1 ? '0'+(this.calendarDate .getMonth()+1).toString(): (this.calendarDate .getMonth()+1).toString();
                let yearMonth = this.calendarDate.getFullYear().toString().substr(2,2)+month;
                let yearMonthDate = yearMonth+date;

                // console.log('yearMonthDate '+yearMonthDate );

                let setDoc = firebase.firestore().collection('growthdiary').doc('diary').collection(yearMonth).doc(yearMonthDate).set(data);

                return setDoc.then(res => {
                    console.log('Set: ', res);
                });
            },
            getContent(year, month, day){

                this.title = '';
                this.content = '';

                // console.log('ttitle' + this.title);
                // console.log(this.content);

                let yearMonth = year.toString().substr(2, 2)+month.toString();
                let yearMonthDate = yearMonth+day;

                let ref = firebase.firestore().collection('growthdiary').doc('diary').collection(yearMonth).doc(yearMonthDate);

                ref.get()
                    .then(doc => {
                        if (!doc.exists) {
                            console.log('No such document!');
                        } else {
                            console.log('Document data:', doc.data().content);
                            this.title = doc.data().title;
                            this.content = doc.data().content;
                        }
                    })
                    .catch(err => {
                        console.log('Error getting document', err);
                    });

            },
            changeDate(date){
                this.calendarDate = new Date(date);

                let month = (this.calendarDate .getMonth()+1).toString().length === 1 ? '0'+(this.calendarDate .getMonth()+1).toString(): (this.calendarDate .getMonth()+1).toString();

                let day = (this.calendarDate .getDate()).toString().length === 1 ? '0'+(this.calendarDate .getDate()).toString(): (this.calendarDate .getDate()).toString();


                this.getContent(this.calendarDate .getFullYear(), month, day);

            }

        }
    }
</script>

<style scoped>
    #editor1 {
        height: 1000px;
    }

    .title {
        width: 100%;
        border: 1px solid green;
    }
</style>
