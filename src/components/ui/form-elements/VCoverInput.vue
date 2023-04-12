<script setup>
import { computed, ref } from 'vue'
import { useMediaStore } from '@/stores/media'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import { useRoute } from 'vue-router'

const props = defineProps({
    type: {
        default: 'carousel'
    }
})

const file = ref(null)
const preloadSrc = ref('')
const mediaStore = useMediaStore()
const route = useRoute()

const gameId = computed(() => route.params.id)
const mediaTypeId = computed(() => {
    return Object.values(mediaStore.getMediaTypes).find((item) => item.code === props.type).id
})

const inputClick = () => {
    file.value.click()
}

const uploadImage = (e) => {
    const image = e.target.files[0]
    let params = {
        gid: gameId.value,
        type: mediaTypeId.value
    }
    if (image) {
        const reader = new FileReader()
        reader.onload = () => {
            preloadSrc.value = reader.result
            mediaStore
                .uploadMedia(image, params, (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100)
                    console.log(`Upload progress: ${progress}%`)
                })
                .then((response) => {
                    console.log('Upload successful:', response.data)
                })
                .catch((error) => {
                    console.error('Upload error:', error)
                })
        }
        reader.readAsDataURL(image)
    }
}
</script>
<template>
    <div class="cover">
        <label
            :for="'cover_upload' + props.type"
            class="cover-label"
            :class="{ mid: props.type === 'cover', small: props.type === 'icon' }"
        >
            <plus-icon v-if="!preloadSrc" />
            <input
                accept="image/*"
                :id="'cover_upload' + props.type"
                ref="file"
                @change="uploadImage"
                type="file"
            />
            <img :src="preloadSrc" :alt="preloadSrc" v-if="preloadSrc" class="preload-image" />
        </label>
        <div class="info">
            <div class="text">
                <p v-if="props.type === 'carousel'" class="sub-1">Feautered cover</p>
                <p v-if="props.type === 'carousel'" class="b-2-regular">
                    960x480. Used in the site's main carousel
                </p>

                <p v-if="props.type === 'cover'" class="sub-1">Catalogue cover</p>
                <p v-if="props.type === 'cover'" class="b-2-regular">
                    414x256. Used in the catalog showcase
                </p>

                <p v-if="props.type === 'icon'" class="sub-1">Game icon</p>
                <p v-if="props.type === 'icon'" class="b-2-regular">
                    44x44. Used in the menu panel
                </p>
            </div>
            <div class="button">
                <main-button :secondary="true" :small="true" @click="inputClick"
                    >upload
                </main-button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './scss/cover-input.scss';
</style>
