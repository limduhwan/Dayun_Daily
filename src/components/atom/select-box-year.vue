<template>
    <select class="selectBox" v-model="selectedYear">
        <option>2019</option>
    </select>
</template>

<script>
    export default {
        name: "selectBoxYear",
        data: function(){
            return{
                selectedYear: new Date().getFullYear(),
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
