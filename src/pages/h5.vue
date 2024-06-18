<template>
    <div class="top">荣耀日历</div>
    <baseCalendar />
</template>

<script setup lang='ts'>
import baseCalendar from "./../page-view/base/base-calendar/index.vue";
defineOptions({
    name: ''
})
</script>

<style lang='less' scoped>
.top {
    margin: 20px 10px;
    text-align: center;
}
</style>
