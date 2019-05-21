<template>
    <div>
        <v-client-table :data="tableData" :columns="colums" :options="options">

        </v-client-table>
    </div>

</template>

<script>
    export default {
        name: "List",
        data: function () {
            return {
                content: '',
                colums: ['id', 'title'],
                tableData: [],
                options: {
                    headings: {
                        id: 'Date',
                        title: 'Title'
                    },
                    filterable: false,
                    perPageValues: [100],
                }
            }
        }
    }
</script>

<style scoped>

</style>
