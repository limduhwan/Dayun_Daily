import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        combo : [
            {year:'', month:'', date:''}
        ],
        parent :[
            {who:''}
        ],
        content : [
            {daddy: '', mommy: ''}
        ]
    },
    mutations: {
        [Constant.SET_YEAR] : (state, payload) => {
            state.combo.year = payload.year;
        },
        [Constant.SET_MONTH] : (state, payload) => {
            state.combo.month = payload.month;
        },
        [Constant.SET_DATE] : (state, payload) => {
            state.combo.date = payload.date;
        },
        [Constant.SET_PARENT] : (state, payload) => {
            state.parent.who = payload.who;
        },
        [Constant.SET_DADDYCONTENT] : (state, payload) => {
            state.content.daddy = payload.daddy;
        },
        [Constant.SET_MOMMYCONTENT] : (state, payload) => {
            state.content.mommy = payload.mommy;
        },
    },
    actions : {
        [Constant.SET_MONTH] : (store, payload) => {
            store.commit(Constant.SET_MONTH, payload.month);
        },
    },
    getters :{
        getYear(state){
            return state.combo.year;
        },
        getMonth(state){
            return state.combo.month;
        }
    }
})

export default store;
