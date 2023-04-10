<script setup>
const props = defineProps({
    size: {
        default: 'big'
    }
})
import PlusIcon from '@/components/icons/PlusIcon.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import { ref } from 'vue'

const file = ref(null)
const preloadSrc = ref('')

function inputClick() {
    file.value.click()
}

function uploadImage(e) {
    const image = e.target.files[0]
    if (image) {
        const reader = new FileReader()
        reader.onload = () => {
            preloadSrc.value = reader.result
        }
        reader.readAsDataURL(image)
    }
}
</script>
<template>
    <div class="cover">
        <label
            :for="'cover_upload' + props.size"
            class="cover-label"
            :class="{ mid: props.size === 'mid', small: props.size === 'small' }"
        >
            <plus-icon v-if="!preloadSrc" />
            <input :id="'cover_upload' + props.size" ref="file" @change="uploadImage" type="file" />
            <img :src="preloadSrc" :alt="preloadSrc" v-if="preloadSrc" class="preload-image" />
        </label>
        <div class="info">
            <div class="text">
                <p v-if="props.size === 'big'" class="sub-1">Feautered cover</p>
                <p v-if="props.size === 'big'" class="b-2-regular">
                    960x480. Used in the site's main carousel
                </p>

                <p v-if="props.size === 'mid'" class="sub-1">Catalogue cover</p>
                <p v-if="props.size === 'mid'" class="b-2-regular">
                    414x256. Used in the catalog showcase
                </p>

                <p v-if="props.size === 'small'" class="sub-1">Game icon</p>
                <p v-if="props.size === 'small'" class="b-2-regular">
                    44x44. Used in the menu panel
                </p>
            </div>
            <div class="button">
                <main-button :secondary="true" :small="true" @click="inputClick"
                    >upload</main-button
                >
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './scss/cover-input.scss';
</style>
