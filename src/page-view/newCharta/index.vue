<template>
  <div>
    <div class="header">
      <div v-for="item in nav" :key="item.name" :class="{ 'current': tab == item.link}">
        <button @click="tab = item.link">{{ item.name }}</button>
      </div>
    </div>
    <div class="content">
      <component :is="tab"></component>
    </div>
  </div>
</template>

<script setup lang='ts'>
import newToRef from "./new-toRef.vue";
import define from "./define/index.vue";
const nav = [
  {
    name: 'ToRef更好的支持getter',
    link: newToRef
  },
  {
    name: '泛型组件&更简洁的语法defineEmits',
    link: define
  },
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

.current {
  border: 1px solid #bfc;
  background-color: black;
}
</style>
