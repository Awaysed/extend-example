<template>
    <div class="wp">
        <h4>父组件count值:{{ count }}</h4>
        <children :id="6" @change="log" v-model="count"></children>
    </div>
</template>

<script setup lang='ts'>
import { toRef, reactive, ref } from "vue";
import children from "./children.vue";
const log = (id: string) => {

}
const count = ref(1)
</script>

<style lang='less' scoped>
.wp {
    >div {
        margin-bottom: 20px;
        margin-top: 10px;
    }
}
</style>