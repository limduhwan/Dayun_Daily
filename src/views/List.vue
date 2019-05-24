<template>
    <div>
        <ListComGroup @writeBtnClick="writeBtnClick"></ListComGroup>
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
            this.tableData = [];
            let yearMonth = this.year.toString().substr(2, 2)+this.month.toString();
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
        data: function () {
            return {
                content: '',
                colums: ['date', 'title', 'writer'],
                tableData: [],
                options: {
                    headings: {
                        date: 'date',
                        title: 'Title',
                        writer: 'Writer'
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
        ,
        methods: {
            writeBtnClick () {
                // this.$router.push('/write')
                this.$router.push({ name: 'write', params: {detail_date: ''}})
            },
            titleClick (date) {
                //console.log('List  '+date);
                this.setDate({date: date});
                this.$router.push({ name: 'write', params: {detail_date: date}})
            },
            ...mapMutations ({
                setDate : Constant.SET_DATE
            })

        }
    }
</script>

<style scoped>

</style>
