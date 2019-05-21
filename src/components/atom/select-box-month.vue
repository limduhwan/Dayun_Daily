<template>
    <select class="selectBox" v-model="selectedMonth">
        <option v-for="month in months" >
            {{month}}
        </option>
    </select>
</template>

<script>
    export default {
        name: "selectBoxMonth",
        data: function(){
            return{
                selectedMonth: new Date().getMonth()+1,
                months: 12,
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
