<template>
    <div>
        <div class="header">
            <div v-for="item in nav" :key="item.name" :class="{ 'current': tab == item.link }">
                <button @click="tab = item.link">{{ item.name }}</button>
            </div>
        </div>
        <div class="content">
            <component :is="tabComp"> </component>
        </div>
    </div>
</template>

<script setup lang='ts'>
import BaseTable from "./base-table/index.vue";
import baseCalendar from "./base-calendar/index.vue";
const nav = [
    {
        name: '表格二次封装',
        link: 'BaseTable'
    },
    {
        name: '日历组件',
        link: 'baseCalendar'
    },
]
const TapMap = new Map([
    ['BaseTable', BaseTable],
    ['baseCalendar', baseCalendar],
])
const tab = ref('baseCalendar')
const tabComp = computed(() => TapMap.get(tab.value))
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
    background-color: aquamarine;
}
</style>