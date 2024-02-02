<template>
  <div>
    <button @click="model++">子组件点击修改count</button>
  </div>
</template>
  
<script setup lang='ts' generic="T extends string | number">
import { toRef, reactive } from "vue";
defineProps<{
  id: T,
  modelValue: number
}>()
// const emit = defineEmits<{
//   (e: 'change', id: number): void
//   (e: 'update', value: string): void
// }>()
const emit = defineEmits<{
  change: [id: number] // 具名元组语法
  update: [value: string]
}>()

const model = defineModel()
await callOnce(async () => {
  console.log('This will only be logged once')
})
</script>
  
<style lang='less' scoped></style>
  