<script setup>
import AddIcon from '@/components/icons/AddIcon.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import router from '@/router'

const toRoute = (name) => {
    router.push({ name })
}
</script>
<template>
    <div class="content">
        <div class="illustration">
            <img src="../assets/images/relax.svg" alt="" />
        </div>
        <div class="context">
            <h1>Hosting browser games</h1>
            <p class="b-1-regular">
                Exe.world is a modern gaming portal with a constantly growing audience. We provide developers with the most favourable conditions for hosting applications. Clear and simple tools will allow you to quickly and easily place your application in our catalogue, attract an audience and become a successful developer! Get started now!
            </p>
            <div class="block">
                <div class="block-item">
                    <router-link :to="{ name: 'Documentation' }" class="sub-1"
                        >Documentation
                    </router-link>
                    <p class="b-2-regular">
                        A detailed description of the process and conditions for placing games on the Exe.world platform.
                    </p>
                </div>
                <div class="block-item">
                    <router-link :to="{ path: 'docs/terms_of_placement' }" class="sub-1">Terms of Placement</router-link>
                    <p class="b-2-regular">
                        Requirements for games and developers by the site administration.
                    </p>
                </div>
                <div class="block-item">
                    <router-link :to="{ path: 'docs/app_methods' }" class="sub-1">Game API Method List</router-link>
                    <p class="b-2-regular">
                        All methods for working with the data of the Exe.world platform: server, client, payment.
                    </p>
                </div>
                <div class="block-item">
                    <h5 class="sub-1">Feedback</h5>
                    <p class="b-2-regular">
                        Questions related to game hosting, API requests, website problems.
                    </p>
                </div>
            </div>
            <div class="buttons">
                <main-button :icon="true" @click="toRoute('MyGamesAdd')">
                    <add-icon />
                    add game
                </main-button>
                <main-button :secondary="true" @click="toRoute('MyGames')"> my games</main-button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './scss/home.scss';
</style>
