<script setup>
import MainButton from '@/components/ui/buttons/MainButton.vue'
import { ref } from 'vue'
import LockIcon from '@/components/icons/LockIcon.vue'
import ProcessIcon from '@/components/icons/ProcessIcon.vue'
import DoneIcon from '@/components/icons/DoneIcon.vue'
import StopIcon from '@/components/icons/StopIcon.vue'

const status = ref(1)

function changeStatus() {
    if (status.value < 4) {
        status.value++
    } else {
        status.value = 1
    }
}
</script>
<template>
    <div class="status-content">
        <h1 @click="changeStatus">Status</h1>
        <div class="current-status">
            <p class="b-1-regular">Current status:</p>
            <p v-if="status === 1" class="sub-1 block">
                <lock-icon />
                Blocked by the site administration
            </p>
            <p v-if="status === 2" class="sub-1 approval">
                <process-icon />
                On approval
            </p>
            <p v-if="status === 3" class="sub-1 published">
                <done-icon />
                Published
            </p>
            <p v-if="status === 4" class="sub-1 rejected">
                <stop-icon />
                Rejected
            </p>
        </div>
        <div v-if="status === 1" class="message b-1-regular block">
            To be posted on the Site, the application must be approved by the Site Administration
            and comply with the
            <router-link to="">Terms of posting.</router-link>
        </div>
        <div v-if="status === 2" class="message b-1-regular">
            The application is being checked by the Site Administration
        </div>
        <div v-if="status === 3" class="message b-1-regular">
            The application is published and available to users of the site
        </div>
        <div v-if="status === 4" class="message b-1-regular rejected">
            <span>Reason for refusal to publish:</span> No main cover of the game. Correct the
            problems and resubmit your request
        </div>
        <div class="buttons">
            <main-button v-if="status === 1 || status === 4"> Send for verification </main-button>
            <main-button v-if="status === 3"> Unpublish </main-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-status.scss';
</style>
