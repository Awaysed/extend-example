<template>
    <div>
        <h2 style="color: red;" :style="{ color: red }">表格1</h2>
        <Htable :tableConfig="tableConfig" :tableData="tableData"></Htable>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import Htable from "./Htable/index.vue";

const value1 = ref(0)
const tableConfig = [
    {
        title: "标题",
        field: "tit",
        align: "left",
        width: 200,
        needTitle: true,
    },
    {
        title: "姓名",
        field: "name",
        align: "left",
        width: 200,
        needTitle: true,
    },
    {
        title: "身高",
        field: "height",
        align: "left",
        needTitle: true,
        setColor: true,
        format: 1,
    },
]
const tableData = [
    {
        tit: '撒旦发生',
        name: '撒打发',
        height: 12
    },
    {
        tit: '撒旦发qw生',
        name: '撒打发',
        height: 123
    },
    {
        tit: '撒旦发qwe生',
        name: '撒打发',
        height: 123
    },
    {
        tit: '撒旦发qw生',
        name: '撒打发',
        height: 31
    }
]
</script>

<style lang='less' scoped></style>
