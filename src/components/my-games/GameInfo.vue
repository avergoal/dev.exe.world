<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useGameStore } from '@/stores/game'
import { useMediaStore } from '@/stores/media'
import { useModalStore } from '@/stores/modal'
import VInput from '@/components/ui/form-elements/VInput.vue'
import VSelect from '@/components/ui/form-elements/VSelect.vue'
import VTextArea from '@/components/ui/form-elements/VTextArea.vue'
import VCoverInput from '@/components/ui/form-elements/VCoverInput.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'

onMounted(async () => {
    getGameInfo.value.files?.filter((file) => {
        file.code = Object.values(mediaStore.getMediaTypes).find(
            (item) => item.id === parseInt(file.type)
        ).code
    })
    await setImages()
})

const route = useRoute()
const gameStore = useGameStore()
const mediaStore = useMediaStore()
const modalStore = useModalStore()
const title = ref('')
const description = ref('')
const type = ref('')
const coverTypes = ['carousel', 'cover', 'icon']
const files = ref({})

const gameId = computed(() => route.params.id)

const genres = computed(() => gameStore.getGenre)

const getGameInfo = computed(() => gameStore.getGameInfo)

const getMediaTypes = computed(() => mediaStore.getMediaTypes)

const updateGameInfo = async () => {
    let params = {
        gid: gameId.value,
        title: title.value,
        description: description.value,
        type: type.value
    }
    const res = await gameStore.updateGameInfo(params)
    modalStore.toggleModal({ target: 'success-failed', open: true, data: res })
}

const setImages = () => {
    coverTypes.forEach((type) => {
        let id = Object.values(getMediaTypes.value).find((item) => item.code === type)?.id
        files.value[type] = getGameInfo.value.files?.find(
            (item) => parseInt(item.type) === id
        )?.filename
    })
}

watch(
    () => getGameInfo.value,
    (newValue) => {
        if (newValue.files?.length && getMediaTypes.value) {
            setImages()
        }
    }
)
</script>
<template>
    <div class="info-content">
        <h1>Info</h1>
        <div class="info">
            <v-input
                limit="50"
                :input-value="getGameInfo.title"
                @update:modelValue="title = $event"
            >
                Title
            </v-input>
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
                findValue="cid"
                >Choose genre
            </v-select>
        </div>
        <h3>Covers</h3>
        <div class="covers">
            <v-cover-input :type="type" :key="type" :src="files[type]" v-for="type in coverTypes" />
        </div>
        <div class="buttons">
            <main-button @click="updateGameInfo">save changes</main-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-info.scss';
</style>
