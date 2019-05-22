import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        combo : [
            {year:"", month:""}
        ],
        parent :[
            {who:""}
        ]
    },
    mutations: {
        [Constant.SET_YEAR] : (state, payload) => {
            state.combo.year = payload.year;
        },
        [Constant.SET_MONTH] : (state, payload) => {
            state.combo.month = payload.month;
        }
    }
})

export default store;
