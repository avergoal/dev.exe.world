<script setup>
import { ref } from 'vue'

const filters = ['day', 'week', 'month', 'year']
const active = ref(0)
</script>
<template>
    <div class="filter">
        <div
            class="b-1-bold"
            :class="{ active: key === active }"
            @click="active = key"
            :key="key"
            v-for="(filter, key) in filters"
        >
            {{ filter }}
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './scss/game-date-filter.scss';
</style>
