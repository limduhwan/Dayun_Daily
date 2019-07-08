<template>
    <div>
        <WriteComGroup @goBackList="goList" @btnSaveClick="btnSaveClick" :date="calendarDate" @changeDate="changeDate"></WriteComGroup>
        <input class="title" v-model='title' placeholder="Dayun Story">
        <!--{{this.year}} {{this.month}} {{this.whoParent}}-->
        <vue-editor id="editor1" v-model="content"></vue-editor>
    </div>
</template>

<script>
    import firebase from '../main';
    import { VueEditor } from 'vue2-editor';
    import { mapState, mapMutations } from 'vuex';
    import Constant from '../Constant';
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
                title: '',
                content: '',
                calendarDate: new Date()
            }
        },
        mounted (){
            // console.log('write mounted detail_date ' + this.detail_date);
            // this.calendarDate = this.detail_date == '' ? new Date() : new Date(this.year, this.month-1, this.detail_date);
            this.calendarDate = this.detail_date == '' ? new Date() : this.detail_date;
            let date = new Date(this.calendarDate);
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
            ...mapMutations({
                setDaddyContent : Constant.SET_DADDYCONTENT,
                setMommyContent : Constant.SET_MOMMYCONTENT,
            }),
            goList () {
                this.$router.push('/list');

            },
            btnSaveClick() {
                let date = this.calendarDate.getDate().toString().length === 1 ? '0'+this.calendarDate.getDate().toString() : this.calendarDate.getDate().toString();

                // console.log('date ' + date);
                // console.log('title ' + this.title);
                // console.log('content ' + this.content);
                console.log('writer ' + this.whoParent);
                console.log('this.$store.state.content.mommy ' +this.$store.state.content.mommy);


                let mommyContent = '';

                if(typeof(this.$store.state.content.mommy) == 'undefined'){
                    mommyContent = '엄마 일기 써 주세용~❤'
                }else{
                    mommyContent = this.$store.state.content.mommy;
                }

                let daddyContent = '';

                if(typeof(this.$store.state.content.daddy) == 'undefined'){
                    daddyContent = '아빠 일기 써 주세용~❤'
                }else{
                    daddyContent = this.$store.state.content.daddy;
                }



                if(this.whoParent == "Daddy"){
                    var data = {
                        date: date,
                        title: this.title,
                        daddy_content : this.content,
                        mommy_content : mommyContent,
                        daddy_template: '<h4><span style="color: #0000ff;"><em>From Daddy</em></span></h4>',
                        mommy_template: '<br><h4><span style="color: #0000ff;"><em>From Mommy</em></span></h4>',
                        writer: this.whoParent
                    };
                }else if (this.whoParent == "Mommy"){
                    var data = {
                        date: date,
                        title: this.title,
                        daddy_content : daddyContent,
                        mommy_content : this.content,
                        daddy_template: '<h4><span style="color: #0000ff;"><em>From Daddy</em></span></h4>',
                        mommy_template: '<br><h4><span style="color: #0000ff;"><em>From Mommy</em></span></h4>',
                        writer: this.whoParent
                    };
                }

                let month = (this.calendarDate .getMonth()+1).toString().length === 1 ? '0'+(this.calendarDate .getMonth()+1).toString(): (this.calendarDate .getMonth()+1).toString();
                let yearMonth = this.calendarDate.getFullYear().toString().substr(2,2)+month;
                let yearMonthDate = yearMonth+date;

                // console.log('yearMonthDate '+yearMonthDate );

                let setDoc = firebase.firestore().collection('growthdiary').doc('diary').collection(yearMonth).doc(yearMonthDate).set(data);


                return setDoc.then(res => {
                   // alert('저장했어용~❤︎');
                    this.$router.push({ name: 'detail', params: {detail_date: this.calendarDate}});
                    this.setDaddyContent({daddy: ''});
                    this.setMommyContent({mommy: ''});
                });


            },
            getContent(year, month, day){

                this.title = '';
                this.content = '';

                let yearMonth = year.toString().substr(2, 2)+month.toString();
                let yearMonthDate = yearMonth+day;

                let ref = firebase.firestore().collection('growthdiary').doc('diary').collection(yearMonth).doc(yearMonthDate);
                ref.get()
                    .then(doc => {
                        if (!doc.exists) {
                            // console.log('No such document!');
                        } else {
                            // console.log('Document data:', doc.data().content);
                            this.title = doc.data().title;
                            if(this.whoParent == "Daddy"){
                                this.content = doc.data().daddy_content;
                            }else if (this.whoParent == "Mommy"){
                                this.content = doc.data().mommy_content;
                            }

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
