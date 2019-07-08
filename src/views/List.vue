<template>
    <div>
        <ListComGroup @writeBtnClick="writeBtnClick" @changeYear="changeYear" @changeMonth="changeMonth"></ListComGroup>
        <v-client-table :data="tableData" :columns="colums" :options="options">
            <div slot="title" slot-scope="props">
                <label @click="titleClick(props.row.date)">{{props.row.title}}</label>
            </div>
        </v-client-table>
    </div>

</template>

<script>
    import firebase from '../main';
    import ListComGroup from '../components/mocules/ListComGroup';
    import Constant from '../Constant';
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: "List",
        components: {
            ListComGroup
        },
        mounted (){
            this.getContent(this.year, this.month);
        },
        data: function () {
            return {
                content: '',
                colums: ['date', 'title'],
                tableData: [],
                options: {
                    headings: {
                        date: 'Date',
                        title: 'Title',
                    },
                    filterable: false,
                    perPageValues: [100],
                },
            }
        },
        computed :
            mapState ({
                year : (state) => state.combo.year,
                month : (state) => state.combo.month
            })
            // mapGetters ([
            //     'getYear',
            //     'getMonth'
            // ])
        ,
        methods: {
            getContent(year, month){
                this.tableData = [];
                let yearMonth = year.toString().substr(2, 2) + month.toString();

                let ref = firebase.firestore().collection('growthdiary').doc('diary').collection(yearMonth);
                ref.get()
                    .then(snapshot => {
                        snapshot.forEach(doc => {
                            // console.log(doc.id, '=>', doc.data());
                            this.tableData.push(doc.data());
                        });
                    })
                    .catch(err => {
                        console.log('Error getting documents', err);
                    });
            },
            writeBtnClick () {
                this.$router.push({ name: 'write', params: {detail_date: ''}})
            },
            titleClick (date) {
                this.setDate({date: date});

                // console.log('this.month   ' +this.month);
                // console.log('store month' + this.$store.state.combo.month);

                let clickedDate = new Date(this.year, this.$store.state.combo.month-1, date);

                // console.log('clickedDate '+clickedDate);
                this.$router.push({ name: 'detail', params: {detail_date: clickedDate}});
            },
            changeYear() {
                // console.log(this.$store.state.combo.month)
                this.getContent(this.$store.state.combo.year, this.month);
            },
            changeMonth() {
                // console.log(this.$store.state.combo.month)
                // this.month = this.$store.state.combo.month;

                this.getContent(this.year, this.$store.state.combo.month);
            },
            ...mapMutations ({
                setDate : Constant.SET_DATE
            })

        }
    }
</script>

<style scoped>

</style>
