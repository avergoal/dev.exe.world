<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHelpStore } from '@/stores/help'
import VInput from '@/components/ui/form-elements/VInput.vue'
import VTextArea from '@/components/ui/form-elements/VTextArea.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import { useModalStore } from '@/stores/modal'

const route = useRoute()
const helpStore = useHelpStore()
const modalStore = useModalStore()
const title = ref('')
const mail = ref('')
const name = ref('')
const text = ref('')
const error = ref({})

const gameId = computed(() => route.params.id)

const sendTicket = async () => {
    error.value = {}

    if (!title.value.length) {
        error.value.title = 'title can`t be empty'
    }
    if (!mail.value.length) {
        error.value.mail = 'mail can`t be empty'
    }
    if (!name.value.length) {
        error.value.name = 'name can`t be empty'
    }
    if (!text.value.length) {
        error.value.text = 'text can`t be empty'
    }
    if (Object.keys(error.value).length) {
        return
    }

    let params = {
        gid: gameId.value,
        title: title.value,
        mail: mail.value,
        name: name.value,
        text: text.value
    }
    const res = await helpStore.actionSendTicket(params)
    title.value = ''
    mail.value = ''
    name.value = ''
    text.value = ''

    modalStore.toggleModal({ target: 'success-failed', open: true, data: res })
}
</script>
<template>
    <div class="help-content">
        <h1>Help</h1>
        <div class="help">
            <v-input
                limit="100"
                :input-value="title"
                @update:modelValue="title = $event"
                :error="error.title"
                >Title
            </v-input>
            <v-input :input-value="mail" @update:modelValue="mail = $event" :error="error.mail"
                >Email</v-input
            >
            <v-input :input-value="name" @update:modelValue="name = $event" :error="error.name"
                >Name</v-input
            >
            <v-text-area :input-value="text" @update:modelValue="text = $event" :error="error.text"
                >Describe the problem
            </v-text-area>
        </div>
        <div class="buttons">
            <main-button @click="sendTicket">send</main-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-help.scss';
</style>
