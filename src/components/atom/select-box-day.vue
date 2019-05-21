<template>
    <div>
        <Datepicker class="button"></Datepicker>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';

    export default {
        name: 'button-calendar',
        components: {
            Datepicker
        }

    }
</script>

<style scoped>
    .button {
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
