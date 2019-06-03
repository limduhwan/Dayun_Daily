<template>
    <select class="selectBox" v-model="month" @change="changeMonth($event)">
        <!--<option v-for="month in months" v-bind:key="month">-->
            <!--{{month}}-->
        <!--</option>-->
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
        <option>06</option>
        <option>07</option>
        <option>08</option>
        <option>09</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
    </select>
</template>

<script>
    import Constant from '../../Constant';
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: "selectBoxMonth",
        data: function(){
            return{
                 // month: ''
            }
        },
        computed: mapState({
           month : (state) => state.combo.month
        }),
        methods :{
            ...mapMutations({
                setMonth : Constant.SET_MONTH,
            }),
            changeMonth(event){
                // console.log('Change month ' + event.target.value);
                this.setMonth({month: event.target.value});
                // let month = event.target.value;
                // this.$store.dispatch((Constant.SET_MONTH, {month: month})).then(() =>{
                //
                // })

                // console.log(this.$store.state.combo.month);
                this.$emit('changeMonth', event.target.value);
            }
        }
    }
</script>

<style scoped>
    .selectBox {
        background-color: #6c757d;
        border: none;
        color: white;
        padding: 5px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        font-weight: bold;
    }
</style>
