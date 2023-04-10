<script setup>
const props = defineProps({
    charts: Array
})
</script>
<template>
    <div class="chart-content">
        <div class="chart-overflow">
            <div class="chart">
                <div
                    class="chart-item"
                    :key="chart.height"
                    v-for="chart in props.charts"
                    :style="`height:${chart.height}px`"
                ></div>
            </div>
            <div class="time">
                <div
                    class="time-item c-1-regular"
                    :key="chart.height"
                    v-for="chart in props.charts"
                >
                    {{ chart.time }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-chart.scss';
</style>
