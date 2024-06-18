<template>
    <div class="week-calendar">
        <div class="calendar-header">
            <span class="date-tip">{{ getMonthInterval }}</span>
            <span class="date-now" @click="backNow">今</span>
            <button class="weep-up" @click="prevWeek">
                < </button>
                    <button class="weep-down" @click="nextWeek"> > </button>
        </div>
        <div class="calendar-weekday">
            <div v-for="day in weekdays" :key="day">{{ day }}</div>
        </div>
        <div class="week-body" :key="weekKey">
            <div class="calendar-dates">
                <div class="calendar-date" v-for="date in weekDates" :key="date.toISOString()"
                    :class="{ 'is-today': isToday(date), 'is-selected': isSelected(date) }" @click="selectDate(date)">
                    <span>{{ date.getDate() }}</span>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const today = new Date();
const selectedDate = ref(today);
const weekDates = ref([]);
const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
const getWeekDates = (date) => {
    const startOfWeek = date.getDate() - date.getDay();
    const dates = [];
    for (let i = 0; i < 7; i++) {
        dates.push(new Date(date.getFullYear(), date.getMonth(), startOfWeek + i));
    }
    return dates;
};

weekDates.value = getWeekDates(today);

const selectDate = (date) => {
    selectedDate.value = date;
};

const isToday = (date) => {
    return date.toDateString() === today.toDateString();
};

const isSelected = (date) => {
    return date.toDateString() === selectedDate.value.toDateString();
};

const prevWeek = () => {
    const startOfLastWeek = new Date(weekDates.value[0].getFullYear(), weekDates.value[0].getMonth(), weekDates.value[0].getDate() - 7);
    weekDates.value = getWeekDates(startOfLastWeek);
};

const nextWeek = () => {
    const startOfNextWeek = new Date(weekDates.value[6].getFullYear(), weekDates.value[6].getMonth(), weekDates.value[6].getDate() + 1);
    weekDates.value = getWeekDates(startOfNextWeek);
};
const backNow = ()=>{
    weekDates.value = getWeekDates(today)
    const selectedDate = ref(today);
}
const formatDate = (date, formatType) => {
    if (formatType === 'year-month') {
        return `${date.getFullYear()}年${date.getMonth() + 1}月`;
    }
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};
const getMonthInterval = computed(() => {
    if (weekDates.value.length < 1) return
    const start = weekDates.value[0]
    const end = weekDates.value[weekDates.value.length - 1]
    let monthInterval;
    monthInterval = `${start.getFullYear()}年${start.getMonth() + 1}月`
    if (start.getMonth() === end.getMonth()) {
        return monthInterval
    }
    monthInterval += `-${end.getFullYear()}年${end.getMonth() + 1}月`
    return monthInterval
})
</script>

<style lang="less">
.week-calendar {
    width: 100%;
    padding: 10px;
    margin: auto;
    position: relative;

    .weep-up {
        position: absolute;
        top: 60px;
        left: 15px;
    }

    .weep-down {
        position: absolute;
        top: 60px;
        right: 15px;
    }
}

.calendar-header {
    .date-tip {
        font-weight: bold;
        font-size: 16px;
    }

    .date-now {
        border-radius: 50%;
        background-color: #DF2D45;
        color: #FFF;
        padding: 5px
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.calendar-dates {
    display: flex;
}

.calendar-date {
    flex: 1;
    text-align: center;
    margin: 10px;
    cursor: pointer;
}

.calendar-date.is-today {
    border-radius: 50%;
    background-color: #DF2D45;
    color: #FFF;
}

.calendar-date.is-selected {
    border-radius: 50%;
    border: 1px solid #DF2D45;
}

.calendar-weekday {
    padding: 10px;
    padding-bottom: 0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    >div {
        text-align: center;
    }
}

.week-body {
    padding: 10px;
    padding-top: 0px;
}


/* 定义滑动过渡的样式 */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.slide-leave-from,
.slide-enter-to {
    transform: translateX(0);
}
</style>