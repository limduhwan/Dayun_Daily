<template>
    <Datepicker class="calendar" :value="date" @selected="changeDate"></Datepicker>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';

    export default {
        name: 'button-calendar',
        props: ['date'],
        components: {
            Datepicker
        },
        mounted() {
          // this.today = this.date;
          //console.log('datepicker ' + this.date)
        },
        data: function () {
            return {
                today : new Date(),
            }
        },
        methods: {
            changeDate(date) {
                // console.log('change date   '+ date);
                this.$emit('changeDate', date);
            }
        }

    }
</script>

<style scoped>
    .calendar {
        background-color: #4CAF50;
        border: none;
        color: midnightblue;
        padding: 1px 1px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 1px 1px;
        cursor: pointer;
    }
</style>
