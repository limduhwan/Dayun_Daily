<template>
    <select class="selectBox" v-model="year" @change="setYear({year: year})">
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
    </select>
</template>

<script>
    import Constant from '../../Constant';
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: "selectBoxYear",
        data: function(){
            return{
                selectedYear: new Date().getFullYear(),
            }
        },
        computed : mapState({
            year: (state) => state.combo.year
        }),
        methods:{
            ...mapMutations({
                setYear : Constant.SET_YEAR,
            })
        }

    }
</script>

<style scoped>
    .selectBox {
        background-color: #6c757d;
        border: none;
        color: white;
        padding: 5px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        font-weight: bold;
    }
</style>
