<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStatusStore } from '@/stores/status'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import LockIcon from '@/components/icons/LockIcon.vue'
import ProcessIcon from '@/components/icons/ProcessIcon.vue'
import DoneIcon from '@/components/icons/DoneIcon.vue'
import StopIcon from '@/components/icons/StopIcon.vue'

onMounted(() => {
    statusStore.actionGetStatus(gameId.value)
})

const route = useRoute()
const statusStore = useStatusStore()

const gameId = computed(() => route.params.id)
const status = computed(() => statusStore.getStatus)

const republish = async () => {
    await statusStore.republish(gameId.value)
    await statusStore.actionGetStatus(gameId.value)
}
</script>
<template>
    <div class="status-content">
        <h1>Status</h1>
        <div class="current-status">
            <p class="b-1-regular">Current status:</p>
            <p v-if="status.id === 1" class="sub-1 approval">
                <process-icon />
                {{ status.title }}
            </p>
            <p v-if="status.id === 2" class="sub-1 published">
                <done-icon />
                {{ status.title }}
            </p>
            <p v-if="status.id === 3" class="sub-1 rejected">
                <stop-icon />
                {{ status.title }}
            </p>
            <p v-if="status.id === 5 || status.id === 4" class="sub-1 block">
                <lock-icon />
                {{ status.title }}
            </p>
        </div>

        <div v-if="status.id === 2 || status.id === 1" class="message b-1-regular">
            {{ status.description }}
        </div>
        <div v-if="status.id === 3" class="message b-1-regular rejected">
            <!--            <span>Reason for refusal to publish:</span> No main cover of the game. Correct the-->
            <!--            problems and resubmit your request-->
            {{ status.description }}
        </div>
        <div v-if="status.id === 5 || status.id === 4" class="message b-1-regular block">
            <!--            To be posted on the Site, the application must be approved by the Site Administration-->
            <!--            and comply with the-->
            {{ status.description }}

            <!--            <router-link to="">Terms of posting.</router-link>-->
        </div>
        <div class="buttons">
            <main-button v-if="status.id === 3 || status.id === 4 || status.id === 5" @click="republish">
                Send for verification</main-button
            >
            <!--            <main-button v-if="status === 3"> Unpublish </main-button>-->
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-status.scss';
</style>
