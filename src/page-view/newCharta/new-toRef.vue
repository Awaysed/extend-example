<template>
  <div class="wp">
    <button @click="original.num++">子组件修改++{{ toRfeNum }}</button><span>原始值：{{ original.num }}</span>
    <div>toRefNum后的值:{{ toRfeNum }}</div>
    <div>toRef-getterNum后的值:{{ getterNum }}</div>
    <div>直接赋值{{ num1 }}</div>
  </div>
</template>

<script setup lang='ts'>
import { toRef, reactive } from "vue";
const props = withDefaults(defineProps<
  {
    num: number
  }
>(), {
})
const original = reactive({
  num: 1
})
const toRfeNum = toRef(original, 'num')
const getterNum = toRef(() => original.num)
const num1 = original.num

const count = ref({
  name:'哈哈哈哈'
})


</script>

<style lang='less' scoped>
.wp {
  >div {
    margin-bottom: 20px;
    margin-top: 10px;
  }
}
</style>
