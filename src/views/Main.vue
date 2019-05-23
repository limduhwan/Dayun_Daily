<template>
    <div>
        <!--<div v-if="listOrNot">-->
            <!--<ListComGroup @writeBtnClick="writeBtnClick"></ListComGroup>-->
        <!--</div>-->
        <!--<div v-else>-->
            <!--<WriteComGroup @goBackList="goBackList"></WriteComGroup>-->
        <!--</div>-->
        <!--<div>-->
            <!--<router-view></router-view>-->
        <!--</div>-->
        <router-view></router-view>
    </div>
</template>

<script>
    import ListComGroup from '../components/mocules/ListComGroup';
    import WriteComGroup from '../components/mocules/WriteComGroup';
    // import Constant from '../Constant';

    export default {
        name: "Main",
        components: {
            // ListComGroup,
            // WriteComGroup
        },
        mounted() {
            this.$router.push('/list')

        },
        // methods: {
        //     writeBtnClick () {
        //         this.$router.push('/write')
        //         this.listOrNot = false;
        //     },
        //     goBackList () {
        //         this.$router.push('/list')
        //         this.listOrNot = true;
        //         // alert(this.$store.state.combo.month);
        //     }
        //
        // }
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
