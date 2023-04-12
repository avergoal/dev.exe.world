<script setup>
import { useRoute } from 'vue-router'
import { useGameStore } from '@/stores/game'
import GameDateFilter from '@/components/my-games/GameDateFilter.vue'
import GameChart from '@/components/my-games/GameChart.vue'
import { computed, onMounted, ref } from 'vue'

onMounted(() => {
    let params = {
        gid: gameId.value,
        period: period.value
    }
    gameStore.actionGetGameStatistics(params)
})

const route = useRoute()
const gameStore = useGameStore()
const period = ref('day')

const gameId = computed(() => route.params.id)
const statistics = computed(() => gameStore.getGameStatistics)

const updateChart = ($event) => {
    if (period.value !== $event) {
        period.value = $event
        let params = {
            gid: gameId.value,
            period: period.value
        }
        gameStore.actionGetGameStatistics(params)
    }
}
</script>
<template>
    <div class="statistics">
        <h1>Statistics</h1>
        <game-date-filter @update:periodValue="updateChart($event)" />
        <div class="charts">
            <div class="item" :key="key" v-for="(statistic, key) in statistics">
                <div class="header">
                    <h4>Install history</h4>
                    <p class="b-1-medium">04.12.2021</p>
                </div>
                <game-chart :charts="statistic" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-statistics.scss';
</style>
