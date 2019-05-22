<template>
    <div>
        <input class="title" placeholder="Title here">
        <vue-editor id="editor1"></vue-editor>
    </div>
</template>

<script>
    import { VueEditor } from 'vue2-editor';

    export default {
        name: "Write",
        components: {
            VueEditor
        }
    }
</script>

<style scoped>
    #editor1 {
        height: 1000px;
    }

    .title {
        width: 100%;
        border: 1px solid green;
    }
</style>
