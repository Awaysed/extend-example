<template>
    <div>

        <div class="container">
            <newCharta/>
            <!-- <h2>新特性</h2>
            <button @click="num++">修改父组件数量++{{ num }}</button>
            <newToRef :num="num"></newToRef> -->
        </div>
        <div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import newCharta from "./../page-view/newCharta/index.vue";
const num = ref(1)
</script>

<style lang='less' scoped>
.container {
    width: 800px;
    margin: 30px auto;
}
</style>
