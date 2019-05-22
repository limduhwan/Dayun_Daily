<template>
    <select class="selectBox" v-model="selectedMonth" @change="changeMonth">
        <option v-for="month in months" v-bind:key="month">
            {{month}}
        </option>
    </select>
</template>

<script>
    import Constant from '../../Constant';

    export default {
        name: "selectBoxMonth",
        data: function(){
            return{
                selectedMonth: new Date().getMonth()+1,
                months: 12,
            }
        },
        mounted (){
            this.$store.commit(Constant.SET_MONTH, {month:this.selectedMonth});
        },
        methods :{
            changeMonth () {
                this.$store.commit(Constant.SET_MONTH, {month:this.selectedMonth});
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
