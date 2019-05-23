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
    }
})

export default store;
