<template>
    <div>
        <div v-if="listOrNot">
            <YearMonth></YearMonth>
            <!--<router-link to="/write" class="button" @click="btnAddClick('writeBtn')">작성</router-link>-->
            <button class="button" @click="btnClick('write')">작성</button>
        </div>
        <div v-else>
            <!--<router-link to="/list" class="button">닫기</router-link>-->
            <button class="button" @click="btnClick('list')">닫기</button>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import YearMonth from '../components/mocules/YearMonth';
    export default {
        name: "Main",
        components: {
            YearMonth,
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
            btnClick (btn) {
                if(btn == "write"){
                    this.$router.push('/write')
                    this.listOrNot = false;
                }else if(btn == "list"){
                    this.$router.push('/list')
                    this.listOrNot = true;
                }
            },
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
