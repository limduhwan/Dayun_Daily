<template>
    <div style="width: 100%;">
        <DetailComGroup @goBackList="goList" @goEdit="goEdit" :date="calendarDate" @changeDate="changeDate"></DetailComGroup>
        <input type="text" class="title" v-model='title'>
        <vue-editor v-model="content" :editorToolbar="customToolbar" disabled></vue-editor>
    </div>
</template>

<script>
    import firebase from '../main';
    import { VueEditor } from 'vue2-editor';
    import { mapState } from 'vuex';
    import DetailComGroup from '../components/mocules/DetailComGroup';

    export default {
        name: "Detail",
        props : ['detail_date'],
        components: {
            VueEditor,
            DetailComGroup
        },
        data: function () {
            return {
                title: '',
                content: '',
                customToolbar: [[],
                    [],
                    []],
                calendarDate: ''
            }
        },
        mounted() {
            // console.log('detail date ' + this.detail_date);

            this.calendarDate = this.detail_date;

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
            goList () {
                this.$router.push('/list')
            },
            goEdit () {
                // console.log('Edit this.calendar '+this.calendarDate);
                this.$router.push({ name: 'write', params: {detail_date: this.calendarDate}})
            },
            getContent(year, month, day){
                this.title = '';
                this.content = '';

                // console.log(year);
                // console.log(month);
                // console.log(day);

                let yearMonth = year.toString().substr(2, 2)+month.toString();
                let yearMonthDate = yearMonth+day;

                let ref = firebase.firestore().collection('growthdiary').doc('diary').collection(yearMonth).doc(yearMonthDate);

                ref.get()
                    .then(doc => {
                        if (!doc.exists) {
                            //console.log('No such document!');
                        } else {
                            this.title = doc.data().title;
                            this.content = doc.data().content;
                        }
                    })
                    .catch(err => {
                       // console.log('Error getting document', err);
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
    .box{ width: 100%;}
</style>
