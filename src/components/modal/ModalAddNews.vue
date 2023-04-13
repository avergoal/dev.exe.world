<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useGameStore } from '@/stores/game'
import { useModalStore } from '@/stores/modal'
import ModalCloseButton from '@/components/modal/ModalCloseButton.vue'
import VInput from '@/components/ui/form-elements/VInput.vue'
import VTextArea from '@/components/ui/form-elements/VTextArea.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'

onMounted(async () => {
    if (getModal.value.data) {
        console.log(getModal.value.data)
        await gameStore.actionGetGameNewsById(getModal.value.data.nid)
    }
})

const gameStore = useGameStore()
const modalStore = useModalStore()
const route = useRoute()
const title = ref('')
const description = ref('')
const additional = ref('')
const button = ref('')

const gameId = computed(() => route.params.id)

const getModal = computed(() => modalStore.getModal)

const getGameNewsById = computed(() => gameStore.getGameNewsById)

const addGameNews = async () => {
    let params = {
        gid: gameId.value,
        title: title.value,
        description: description.value,
        params: additional.value,
        button: button.value
    }
    if (getModal.value.data?.nid) {
        params.nid = getModal.value.data.nid
    }
    await gameStore.addGameNews(params)
    await gameStore.actionGetGameNews(gameId.value)
    modalStore.toggleModal({})
}
</script>
<template>
    <div class="modal-content">
        <modal-close-button />
        <h3>Add News</h3>
        <div class="form">
            <v-input :input-value="getGameNewsById?.title" @update:modelValue="title = $event"
                >Title</v-input
            >
            <v-text-area
                :input-value="getGameNewsById?.description"
                @update:modelValue="description = $event"
                >Description</v-text-area
            >
            <v-input :input-value="getGameNewsById?.params" @update:modelValue="additional = $event"
                >Additional url parameters:</v-input
            >
            <v-input :input-value="getGameNewsById?.button" @update:modelValue="button = $event"
                >Primary button text</v-input
            >
            <div class="from-buttons">
                <!--                <v-input :toggle="true">Secondary button text</v-input>-->
            </div>
            <!--            <div class="form-date">-->
            <!--                <v-date-input>Primary button text</v-date-input>-->
            <!--                <v-date-input date-type="time">Primary button text</v-date-input>-->
            <!--                <p class="c-1-regular">-->
            <!--                    Leave the date and time fields blank to publish the news immediately-->
            <!--                </p>-->
            <!--            </div>-->
            <div class="buttons">
                <!--                <div class="file">-->
                <!--                    <v-input-file />-->
                <!--                </div>-->
                <!--                <div class="action">-->
                <!--                    <main-button :secondary="true">preview</main-button>-->
                <main-button @click="addGameNews">publish</main-button>
                <!--                </div>-->
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/add-news.scss';
</style>
