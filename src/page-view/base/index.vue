<template>
    <div>
        <div class="header">
            <div v-for="item in nav" :key="item.name" :class="{ 'current': tab == item.link }">
                <button @click="tab = item.link">{{ item.name }}</button>
            </div>
        </div>
        <div class="content">
            <component :is="tab"> </component>
        </div>
    </div>
</template>

<script setup lang='ts'>
import BaseTable from "./base-table/index.vue";
const nav = [
    {
        name: '表格二次封装',
        link: BaseTable
    },

]
const tab = ref<any>(BaseTable)
</script>

<style lang='less' scoped>
.header {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-evenly;
}

.content {
    border: 1px solid #bfc;
    padding: 20px;
}

.current {
    border: 1px solid #bfc;
    background-color: black;
}
</style>