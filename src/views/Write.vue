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
                content: ''
            }
        },
        mounted (){
            // console.log('write mounted detail_date ' + this.detail_date);
            // console.log('year '+this.year);
            // console.log('month '+this.month);
            // console.log('detail date '+this.detail_date);

            this.date = this.detail_date == '' ? new Date() : new Date(this.year, this.month-1, this.detail_date);

            this.getContent(this.year, this.month, this.detail_date);
        },
        computed : mapState({
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
                console.log('year  ' + this.year);
                console.log('month  ' + this.month);
                console.log('whoParent  ' + this.whoParent);
            },
            getContent(year, month, day){

                this.title = '';
                this.content = '';

                // console.log('ttitle' + this.title);
                // console.log(this.content);

                let yearMonth = year.toString().substr(2, 2)+month.toString();
                let yearMonthDate = yearMonth+day;

                console.log(yearMonth);
                console.log(yearMonthDate);
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
                console.log(new Date(date));

                let changeDate = new Date(date);

                let month = (changeDate.getMonth()+1).toString().length === 1 ? '0'+(changeDate.getMonth()+1).toString(): (changeDate.getMonth()+1).toString();
                this.getContent(changeDate.getFullYear(), month, changeDate.getDate());
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
