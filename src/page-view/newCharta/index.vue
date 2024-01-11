<template>
  <div>
    <div class="header">
      <div v-for="item in nav" :key="item.name">
        <button>{{ item.name }}</button>
      </div>
    </div>
    <div class="content">
      <component :is="tab"></component>
    </div>
  </div>
</template>

<script setup lang='ts'>
import newToRef from "./new-toRef.vue";
const nav = [
  {
    name: 'ToRef更好的支持getter',
    link: newToRef
  }
]
const tab = ref<any>(newToRef)
</script>

<style lang='less' scoped>
.header {
  margin-bottom: 20px;
}
.content {
  border: 1px solid #bfc;
  padding: 20px;
}
</style>
