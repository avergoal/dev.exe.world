<script setup>
import VInput from '@/components/ui/form-elements/VInput.vue'
import VSelect from '@/components/ui/form-elements/VSelect.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import { useGameStore } from '@/stores/game'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

onMounted(() => {
    gameStore.actionGetGameSettings(gameId.value)
})

const gameStore = useGameStore()
const route = useRoute()
const main_url = ref('')
const payment_url = ref('')
const status = ref('')
const data = [
    { id: 0, status: 'Not published' },
    { id: 1, status: 'Published' },
    { id: 2, status: 'Technical works' }
]

const gameId = computed(() => route.params.id)
const getGameSettings = computed(() => gameStore.getGameSettings)

const saveSettings = () => {
    let params = {
        gid: gameId.value,
        main_url: main_url.value,
        payment_url: payment_url.value,
        status: status.value
    }
    gameStore.saveSettings(params)
}
</script>

<template>
    <div class="setting-content">
        <h1>Settings</h1>
        <div class="main-settings">
            <v-input :disabled="true" :input-value="getGameSettings.gid">App ID</v-input>
            <v-input :disabled="true" :input-value="getGameSettings.secret">Secret Key</v-input>
            <v-select
                :data="data"
                id-type="id"
                show-select="status"
                @update:modelValue="status = $event"
                find-value="id"
                :selected-value="parseInt(getGameSettings.status)"
                >Status
            </v-select>
        </div>
        <h3>Iframe container settings</h3>
        <div class="iframe-settings">
            <v-input :input-value="getGameSettings.main_url" @update:modelValue="main_url = $event"
                >Https address
            </v-input>
            <v-input
                :input-value="getGameSettings.payment_url"
                @update:modelValue="payment_url = $event"
                >Callback address
            </v-input>
        </div>
        <div class="buttons">
            <main-button @click="saveSettings">save changes</main-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-settings.scss';
</style>
