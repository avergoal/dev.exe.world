<script setup>
import { ref, watch } from 'vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import timestampToDate from '@/mixins/timestampToDate'

const emit = defineEmits(['update:data'])
const props = defineProps({
    data: Object,
    titles: Array
})

const keys = ref([])

watch(
    () => props.data.data,
    (newValue) => {
        if (newValue) {
            if (newValue.length) keys.value = Object.keys(props.data.data[0])
        }
    }
)

const loadMore = () => {
    emit('update:data')
}
</script>
<template>
    <div class="table">
        <div class="header">
            <p class="b-1-medium item" :key="title" v-for="title in props.titles">{{ title }}</p>
        </div>
        <div class="table-row" :key="item" v-for="item in props.data.data">
            <p class="b-1-medium item">{{ item[keys[0]] }}</p>
            <a :href="`https://exe.world/user/${item?.uid}`" target="_blank" class="b-1-medium item">{{ item?.user?.user_name }}</a>
            <p class="b-1-regular item">{{ item[keys[2]] }}</p>
            <p class="b-1-regular item">{{ timestampToDate(item[keys[1]]) }}</p>
        </div>
        <main-button v-if="props.data.offset" @click="loadMore">Show more</main-button>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-table.scss';
</style>
