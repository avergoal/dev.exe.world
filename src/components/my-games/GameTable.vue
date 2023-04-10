<script setup>
import { onMounted, ref } from 'vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'

const props = defineProps({
    data: Array,
    titles: Array
})
const keys = ref([])

onMounted(() => {
    keys.value = Object.keys(props.data[0])
})
</script>
<template>
    <div class="table">
        <div class="header">
            <p class="b-1-medium item" :key="title" v-for="title in props.titles">{{ title }}</p>
        </div>
        <div class="table-row" :key="item" v-for="item in props.data">
            <p class="b-1-medium item">{{ item[keys[0]] }}</p>
            <p class="b-1-regular item">{{ item[keys[1]] }}</p>
            <p class="b-1-regular item">{{ item[keys[2]] }}</p>
        </div>
        <main-button>Show more</main-button>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-table.scss';
</style>
