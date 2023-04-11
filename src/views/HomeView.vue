<script setup>
import AddIcon from '@/components/icons/AddIcon.vue'
import MainButton from "@/components/ui/buttons/MainButton.vue";
</script>
<template>
    <div class="content">
        <div class="illustration">
            <img src="../assets/images/relax.svg" alt="" />
        </div>
        <div class="context">
            <h1>Hosting browser games</h1>
            <p class="b-1-regular">
                EXE.WORLD is a modern gaming portal with a constantly growing audience. We provide
                developers with the most favorable conditions for hosting applications. Clear and
                simple tools will allow you to quickly and easily place your application in our
                catalog, attract an audience and become a successful developer! Get started now!
            </p>
            <div class="block">
                <div class="block-item">
                    <router-link :to="{ name: 'Documentation' }" class="sub-1"
                        >Documentation</router-link
                    >
                    <p class="b-2-regular">
                        A detailed description of the process and conditions for placing games on
                        the EXE.ru platform.
                    </p>
                </div>
                <div class="block-item">
                    <h5 class="sub-1">Accommodation conditions</h5>
                    <p class="b-2-regular">
                        Requirements for games and developers by the site administration.
                    </p>
                </div>
                <div class="block-item">
                    <h5 class="sub-1">Game API Method List</h5>
                    <p class="b-2-regular">
                        All methods for working with the data of the EXE.ru platform: server,
                        client, payment.
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
                <main-button :icon="true"> <add-icon />add game </main-button>
                <main-button :secondary="true"> my games </main-button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './scss/home.scss';
</style>
