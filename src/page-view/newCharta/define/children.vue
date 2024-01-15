<template>
  <div>
    <h2>泛型组件&更简洁的语法defineEmits子组件</h2>
  </div>
</template>
  
<script setup lang='ts' generic="T extends string | number">
import { toRef, reactive } from "vue";
defineProps<{
  id: T
}>()
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
// const emit = defineEmits<{
//   change: [id: number] // 具名元组语法
//   update: [value: string]
// }>()
</script>
  
<style lang='less' scoped></style>
  