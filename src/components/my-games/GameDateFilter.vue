<script setup>
import { defineEmits, ref } from 'vue'

const emit = defineEmits(['update:periodValue'])

const periods = ['day', 'week', 'month', 'year']
const activePeriod = ref(0)

const selectPeriod = (period, key) => {
    activePeriod.value = key
    emit('update:periodValue', period)
}
</script>
<template>
    <div class="filter">
        <div
            class="b-1-bold"
            :class="{ active: key === activePeriod }"
            @click="selectPeriod(period, key)"
            :key="key"
            v-for="(period, key) in periods"
        >
            {{ period }}
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './scss/game-date-filter.scss';
</style>
