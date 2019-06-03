<template>
    <div>
        <div tyle="float: left; width: 0%; padding: 0px 0px 0px 0px;">
            <select-box-year @changeYear="changeYear"></select-box-year>
            <select-box-month @changeMonth="changeMonth"></select-box-month>
            <button class="button" @click="writeBtnClick()">Write</button>
        </div>
    </div>
</template>

<script>
    import SelectBoxYear from '../atom/select-box-year';
    import SelectBoxMonth from '../atom/select-box-month';

    export default {
        name: "YearMonth",
        components:{
            SelectBoxYear,
            SelectBoxMonth
        },
        methods: {
            writeBtnClick() {
                this.$emit('writeBtnClick', '');
            },
            changeMonth(month){
                this.$emit('changeMonth', month);
            },
            changeYear(year){
                this.$emit('changeYear', year);
            }
        }

    }
</script>

<style scoped>
    .button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 5px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>
