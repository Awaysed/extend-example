<template>
  <div class="wp">
      <h2>starting-style</h2>
      <div class="starting-style">
        <button @click="start= !start">加</button>
        <div class="item" :class="{'display-none':start}">21313</div>
      </div>
  </div>
</template>

<script setup lang='ts'>
import { toRef, reactive ,ref} from "vue";
const count =  ref(1)
const start =  ref(true)
</script>

<style lang='less' scoped>
.wp {
  >div {
      margin-bottom: 20px;
      margin-top: 10px;
  }
  .starting-style{
    width:300px;
    border: 1px solid #bfc;
  }
}
.starting-style{
  .item{
    height:40px;
    background-color: green;
    margin:20px 10px;
    transition: height 5s;
  }
}
.display-none{
  display:none
}
@starting-style {
  .item {
    height: 0;
  }
}
</style>