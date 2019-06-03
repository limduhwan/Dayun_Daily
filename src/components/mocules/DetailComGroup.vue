<template>
    <div>
        <div tyle="float: left; width: 0%; padding: 0px 0px 0px 0px;">
            <SelectBoxDay :date="date" @changeDate="changeDate"></SelectBoxDay>
            <button class="button" @click="goBackList()">Go List</button>
            <button class="button" @click="goEdit()">Edit</button>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import SelectBoxDay from '../atom/select-box-day';

    export default {
        name: "DetailComGroup",
        props : ['date'],
        components: {
            SelectBoxDay
        },
        computed : mapState({
            year :  (state) => state.combo.year,
            month : (state) => state.combo.month,
            whoParent : (state) => state.parent.who
        }),
        methods: {
            goBackList() {
                this.$emit('goBackList', '');
            },
            goEdit() {
                this.$emit('goEdit', '');
            },
            changeDate (date){
                // console.log('write ' + date);
                this.$emit('changeDate', date);
            }

        }

    }
</script>

<style scoped>
    .button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>
