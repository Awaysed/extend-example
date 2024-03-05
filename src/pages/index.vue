<template>
    <div>

        <div class="container">
            <Base>
            </Base>
        </div>
    </div>
    <div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from "vue";
// import newCharta from "./../page-view/newCharta/index.vue";
import Base from "./../page-view/base/index.vue";
const num = ref(1)
</script>

<style lang='less' scoped>
.container {
    width: 800px;
    margin: 30px auto;
}
</style>
