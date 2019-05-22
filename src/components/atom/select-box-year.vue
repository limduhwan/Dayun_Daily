<template>
    <select class="selectBox" v-model="selectedYear" @change="changeYear">
        <option>2020</option>
        <option>2019</option>
    </select>
</template>

<script>
    import Constant from '../../Constant';

    export default {
        name: "selectBoxYear",
        data: function(){
            return{
                selectedYear: new Date().getFullYear(),
            }
        },
        mounted(){
            this.$store.commit(Constant.SET_YEAR, {year:this.selectedYear});


        },
        methods:{
            changeYear (){
                this.$store.commit(Constant.SET_YEAR, {year:this.selectedYear});
            }
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
