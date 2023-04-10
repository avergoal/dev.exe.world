<script setup>
import GameDateFilter from '@/components/my-games/GameDateFilter.vue'
import GameChart from '@/components/my-games/GameChart.vue'

const charts = [
    { height: '144', time: '03:30 pm' },
    { height: '78', time: '03:30 pm' },
    { height: '230', time: '03:30 pm' },
    { height: '182', time: '03:30 pm' },
    { height: '318', time: '03:30 pm' },
    { height: '81', time: '03:30 pm' },
    { height: '278', time: '03:30 pm' },
    { height: '144', time: '03:30 pm' },
    { height: '78', time: '03:30 pm' },
    { height: '230', time: '03:30 pm' },
    { height: '182', time: '03:30 pm' },
    { height: '318', time: '03:30 pm' },
    { height: '81', time: '03:30 pm' },
    { height: '278', time: '03:30 pm' }
]
</script>
<template>
    <div class="statistics">
        <h1>Statistics</h1>
        <game-date-filter />
        <div class="charts">
            <div class="item">
                <div class="header">
                    <h4>Install history</h4>
                    <p class="b-1-medium">04.12.2021</p>
                </div>
                <game-chart :charts="charts" />
            </div>
            <div class="item">
                <div class="header">
                    <h4>Delete history</h4>
                    <p class="b-1-medium">04.12.2021</p>
                </div>
                <game-chart :charts="charts" />
            </div>
            <div class="item">
                <div class="header">
                    <h4>View history</h4>
                    <p class="b-1-medium">04.12.2021</p>
                </div>
                <game-chart :charts="charts" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-statistics.scss';
</style>
