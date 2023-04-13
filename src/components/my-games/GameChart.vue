<script setup>
import { computed } from 'vue'

const props = defineProps({
    charts: Array
})

const maxValue = computed(() => {
    return props.charts.reduce((acc, curr) => {
        return curr.value > acc ? curr.value : acc
    }, Number.MIN_SAFE_INTEGER)
})
</script>
<template>
    <div class="chart-content">
        <div class="chart-overflow">
            <div class="chart">
                <div
                    class="chart-item"
                    :style="`height:${(240 / maxValue) * chart.value + 77}px`"
                    :key="chart.time"
                    v-for="chart in props.charts"
                >
                    <span class="chart-tooltip">{{chart.value}}</span>
                </div>
            </div>
            <div class="time">
                <div class="time-item c-1-regular" :key="chart.time" v-for="chart in props.charts">
                    {{ chart.time }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-chart.scss';
</style>
