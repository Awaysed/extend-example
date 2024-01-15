<template>
    <div class="wp">
        <children :id="true" @change="log"></children>
    </div>
</template>
  
<script setup lang='ts'>
import { toRef, reactive } from "vue";
import children from "./children.vue";

</script>
  
<style lang='less' scoped>
.wp {
    >div {
        margin-bottom: 20px;
        margin-top: 10px;
    }
}
</style>