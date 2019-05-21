<template>
    <div>
        <div v-if="listOrNot">
             <ListComGroup @writeBtnClick="writeBtnClick"></ListComGroup>
        </div>
        <div v-else>
            <WriteComGroup @goBackList="goBackList"></WriteComGroup>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import ListComGroup from '../components/mocules/ListComGroup';
    import WriteComGroup from '../components/mocules/WriteComGroup';

    export default {
        name: "Main",
        components: {
            ListComGroup,
            WriteComGroup
        },
        data() {
            return{
                listOrNot: false
            }
        },
        created() {
            this.listOrNot = true;
            this.$router.push('/list')
        },
        methods: {
            writeBtnClick () {
                this.$router.push('/write')
                this.listOrNot = false;
            },
            goBackList () {
                this.$router.push('/list')
                this.listOrNot = true;
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
