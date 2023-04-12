<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useGameStore } from '@/stores/game'
import VInput from '@/components/ui/form-elements/VInput.vue'
import VSelect from '@/components/ui/form-elements/VSelect.vue'
import VTextArea from '@/components/ui/form-elements/VTextArea.vue'
import VCoverInput from '@/components/ui/form-elements/VCoverInput.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'

onMounted(() => {
    gameStore.actionGetGameInfo(gameId.value)
    title.value = getGameInfo.value.title
    description.value = getGameInfo.value.description
    type.value = getGameInfo.value.type
})

const route = useRoute()
const gameStore = useGameStore()
const title = ref('')
const description = ref('')
const type = ref('')

const gameId = computed(() => route.params.id)

const genres = computed(() => gameStore.getGenre)

const getGameInfo = computed(() => gameStore.getGameInfo)

const updateGameInfo = () => {
    let params = {
        gid: gameId.value,
        title: title.value,
        description: description.value,
        type: type.value
    }
    gameStore.updateGameInfo(params)
}
</script>
<template>
    <div class="info-content">
        <h1>Info</h1>
        <div class="info">
            <v-input :input-value="getGameInfo.title" @update:modelValue="title = $event">
                Title</v-input
            >
            <v-text-area
                :input-value="getGameInfo.description"
                @update:modelValue="description = $event"
            >
                Description
            </v-text-area>
            <v-select
                @update:modelValue="type = $event"
                :data="genres"
                showSelect="title"
                id-type="cid"
                :selected-value="parseInt(getGameInfo.type)"
                >Choose genre
            </v-select>
        </div>
        <h3>Covers</h3>
        <div class="covers">
            <v-cover-input type="carousel" />
            <v-cover-input type="cover" />
            <v-cover-input type="icon" />
        </div>
        <div class="buttons">
            <main-button @click="updateGameInfo">save changes</main-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-info.scss';
</style>
