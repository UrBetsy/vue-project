<template>
    <div class="page-container">
        <h1>倒计时</h1>
         <FuncTimer
            :startTime="startTime"
            :endTime="endTime"
            reverse
        >
            <template v-slot="{started, ended, duration}">
                <div v-if="started && !ended">
                    特惠还剩<span>{{duration.days}}</span>天
                    <span class="time-num">{{padTimeString(duration.hours)}}</span> :
                    <span class="time-num">{{padTimeString(duration.minutes)}}</span> :
                    <span class="time-num">{{padTimeString(duration.seconds)}}</span>
                </div>
            </template>
        </FuncTimer>
    </div>
</template>

<script>
import FuncTimer from '@/components/FuncTimer.vue';
export default {
    name: 'CountDown',
    components: {
        FuncTimer,
    },
    data () {
        return {
            startTime: '2021-01-04 12:12:12',
            endTime: '2090-01-07 12:12:12',
        };
    },
    methods: {
        padTimeString (timeNumber) {
            return String(timeNumber).padStart(2, '0');
        },
    },
};
</script>

<style scoped>

</style>
