<template>
    <div>
        <div tyle="float: left; width: 0%; padding: 0px 0px 0px 0px;">
            <SelectBoxDay></SelectBoxDay>
            <button class="button" @click="goBackList()">닫기</button>
            <button class="button">저장</button>
        </div>
    </div>
</template>

<script>
    import SelectBoxDay from '../atom/select-box-day';

    export default {
        name: "WriteComGroup",
        components: {
            SelectBoxDay
        },
        methods: {
            goBackList() {
                this.$emit('goBackList', '');
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
