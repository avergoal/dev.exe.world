<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMediaStore } from '@/stores/media'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import CoverLoadingIcon from '@/components/icons/CoverLoadingIcon.vue'

const props = defineProps({
    type: {
        default: 'carousel'
    },
    src: String
})

onMounted(() => {
    if (props.src) {
        preloadSrc.value = props.src
    }
})

const file = ref(null)
const preloadSrc = ref('')
const mediaStore = useMediaStore()
const route = useRoute()
const loading = ref(false)

const gameId = computed(() => route.params.id)
const getMediaTypes = computed(() => mediaStore.getMediaTypes)
const mediaType = computed(() =>
    Object.values(getMediaTypes.value).find((media) => media.code === props.type)
)

const inputClick = () => {
    file.value.click()
}

const uploadImage = (e) => {
    const image = e.target.files[0]
    let params = {
        gid: gameId.value,
        type: props.type
    }
    let tmpSrc
    if (preloadSrc.value) {
        tmpSrc = preloadSrc.value
    }
    if (image) {
        const reader = new FileReader()
        reader.onload = () => {
            preloadSrc.value = reader.result
            loading.value = true
            mediaStore
                .uploadMedia(image, params)
                .then((response) => {
                    console.log('Upload successful:', response.data)
                })
                .catch((error) => {
                    console.error('Upload error:', error)
                    preloadSrc.value = tmpSrc
                })
                .finally(() => {
                    loading.value = false
                })
        }
        reader.readAsDataURL(image)
    }
}

watch(
    () => props.src,
    (newValue) => {
        if (newValue) {
            preloadSrc.value = newValue
        }
    }
)
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
            <cover-loading-icon class="loading" v-if="loading" />
            <img
                :src="preloadSrc"
                :class="{ blur: loading }"
                :alt="preloadSrc"
                v-if="preloadSrc"
                class="preload-image"
            />
        </label>
        <div class="info">
            <div class="text">
                <p v-if="props.type === 'carousel'" class="sub-1">Feautered cover</p>
                <p v-if="props.type === 'carousel'" class="b-2-regular">
                    {{ mediaType?.w }}x{{ mediaType?.h }}. Used in the site's main carousel
                </p>

                <p v-if="props.type === 'cover'" class="sub-1">Catalogue cover</p>
                <p v-if="props.type === 'cover'" class="b-2-regular">
                    {{ mediaType?.w }}x{{ mediaType?.h }}. Used in the catalog showcase
                </p>

                <p v-if="props.type === 'icon'" class="sub-1">Game icon</p>
                <p v-if="props.type === 'icon'" class="b-2-regular">
                    {{ mediaType?.w }}x{{ mediaType?.h }}. Used in the menu panel
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
