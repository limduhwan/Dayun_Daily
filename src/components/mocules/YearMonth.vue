<template>
    <div class="theme-light-button-divider">
        <select-box-year></select-box-year>
        <select-box-month></select-box-month>

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
        }

    }
</script>

<style scoped>

</style>
