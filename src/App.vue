<template>
  <div>
    <Main></Main>
  </div>
</template>

<script>
  import Main from './views/Main';
  import Constant from './Constant';
  import { mapMutations } from 'vuex';

  export default {
      name: 'app',
      components: {
        Main
      },
      data() {
        return {
          currentYear : new Date().getFullYear(),
          currentMonth : new Date().getMonth()+1
        }
      },
      created () {
        console.log('create');


        this.setYear({year :  this.currentYear});
        this.setMonth({month : this.currentMonth.toString().length === 1 ? '0'+this.currentMonth.toString(): this.currentMonth});
        // this.setParent;
      },
      methods :{
        ...mapMutations({
          setYear  : Constant.SET_YEAR,
          setMonth : Constant.SET_MONTH,
          setParent : Constant.SET_PARENT
      })
    }
}
</script>

<style>
</style>
