<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useMediaStore } from '@/stores/media'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import CoverLoadingIcon from '@/components/icons/CoverLoadingIcon.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'

const emit = defineEmits(['onDeleteSuccess'])

const props = defineProps({
    type: {
        default: 'carousel'
    },
    src: Array,
    multiple: {
        default: false
    }
})

const file = ref(null)
const preloadSrc = ref([])
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
    const images = e.target.files
    let params = {
        gid: gameId.value,
        type: props.type
    }

    let tmpSrc = preloadSrc.value

    const uploadPromises = []

    for (let i = 0; i < images.length; i++) {
        const image = images[i]
        const reader = new FileReader()
        reader.onload = () => {
            preloadSrc.value.push({ filename: reader.result })
            loading.value = true
            const uploadPromise = mediaStore
                .uploadMedia(image, params)
                .then((response) => {
                    console.log('Upload successful:', response.data)
                })
                .catch((error) => {
                    console.error('Upload error:', error)
                })
                .finally(() => {
                    loading.value = false
                })
            uploadPromises.push(uploadPromise)
        }
        reader.readAsDataURL(image)
    }

    Promise.all(uploadPromises)
        .then((r) => {
            console.log(r, 'All uploads completed.')
        })
        .catch((error) => {
            console.error('Error during multiple uploads:', error)
            preloadSrc.value = tmpSrc
        })
}

const deleteMedia = async (fid, delete_code) => {
    let params = {
        gid: gameId.value,
        fid,
        delete_code
    }
    const res = await mediaStore.deleteMedia(params)
    if (res) {
        emit('onDeleteSuccess')
    }
}

watchEffect(() => {
    preloadSrc.value = props.src
})
</script>
<template>
    <div class="cover">
        <label
            :key="src.fid"
            v-for="src in preloadSrc"
            :for="'cover_upload' + props.type"
            class="cover-label"
            :class="{ mid: props.type === 'cover', small: props.type === 'icon' }"
        >
            <cover-loading-icon class="loading" v-if="loading" />
            <img
                :src="src.filename"
                :class="{ blur: loading }"
                :alt="src.filename"
                v-if="src"
                class="preload-image"
            />
            <span class="delete" @click.prevent="deleteMedia(src.fid, src.delete_code)">
                <delete-icon />
            </span>
        </label>
        <label
            v-if="!preloadSrc?.length || props.multiple"
            :for="'cover_upload' + props.type"
            class="cover-label"
            :class="{ mid: props.type === 'cover', small: props.type === 'icon' }"
        >
            <plus-icon />

            <cover-loading-icon class="loading" v-if="loading" />
        </label>
        <input
            accept="image/*"
            :id="'cover_upload' + props.type"
            ref="file"
            :multiple="props.type === 'screenshot'"
            @change="uploadImage"
            type="file"
        />
        <div class="info">
            <div class="text">
                <p v-if="props.type === 'carousel'" class="sub-1">Feautered cover</p>
                <p v-if="props.type === 'carousel'" class="b-2-regular">
                    {{ mediaType?.w }}x{{ mediaType?.h }}. Used in the site's main carousel.
                </p>

                <p v-if="props.type === 'cover'" class="sub-1">Catalogue cover</p>
                <p v-if="props.type === 'cover'" class="b-2-regular">
                    {{ mediaType?.w }}x{{ mediaType?.h }}. Used in the catalog showcase.
                </p>

                <p v-if="props.type === 'icon'" class="sub-1">Game icon</p>
                <p v-if="props.type === 'icon'" class="b-2-regular">
                    {{ mediaType?.w }}x{{ mediaType?.h }}. Used in the menu panel.
                </p>

                <p v-if="props.type === 'screenshot'" class="sub-1">Game screenshot</p>
                <p v-if="props.type === 'screenshot'" class="b-2-regular">
                    {{ mediaType?.w }}x{{ mediaType?.h }}. Used in game preview.
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
