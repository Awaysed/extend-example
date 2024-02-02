<template>
    <div class="conatiner">
        <div class="left">
            <VueDraggable v-model="list1" animation="1000" ghostClass="ghost" group="people">
                <div v-for="item in list1" :key="item.id" class="item mover">
                    {{ item.name }}
                </div>
            </VueDraggable>
        </div>
        <div class="right">
            <VueDraggable v-model="list2" group="people" animation="1000" ghostClass="ghost">
                <div v-for="item in list2" :key="item.id" class="item mover">
                    {{ item.name }}
                </div>
            </VueDraggable>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
const list1 = ref([
    {
        name: '巴适的板',
        id: '1'
    },
    {
        name: '劳资蜀道山',
        id: '2'
    },
    {
        name: '雄起',
        id: '3'
    },
    {
        name: '弯脚杆',
        id: '4'
    }
])
const list2 = ref([
    {
        name: '火锅',
        id: '1-1'
    },
    {
        name: '串串',
        id: '2-2'
    },
    {
        name: '钵钵鸡',
        id: '3-3'
    },
    {
        name: '夺夺粉',
        id: '4-4'
    }
])
</script>

<style lang="less">
.conatiner {
    display: flex;
    justify-content: space-evenly;

    >div {
        border: 1px solid rgb(237, 199, 199);
        min-width: 300px;
    }


    .item {
        cursor: pointer;
        margin: 10px;
        border: 1px solid #e6e6ff;

    }

    .graggable {
        min-width: 300px;
    }

    .footer {
        padding-top: 30px;
        padding-bottom: 30px;
    }
}
</style>