<script setup>
import { ref } from 'vue'
import AddIcon from '@/components/icons/AddIcon.vue'
import GameCard from '@/components/my-games/GameCard.vue'
import router from '@/router'

const empty = ref(false)

function toAdd() {
    router.push({ name: 'MyGamesAdd' })
}
function toGame(id) {
    router.push({ name: 'GameInfo', params: { id } })
}
</script>
<template>
    <div class="content" :class="{ empty: empty }">
        <h1>My Games</h1>
        <main-button v-if="!empty" :icon="true" @click="toAdd"> <add-icon />add game </main-button>
        <div v-if="empty" class="empty-block">
            <img src="../../assets/images/sleep.svg" alt="" />
            <h2>You haven't added any games yet</h2>
            <p class="b-1-regular">Add your first game and track stats</p>
            <main-button :icon="true" @click="toAdd"> <add-icon />add game </main-button>
        </div>
        <div v-else class="game-content">
            <game-card @click="toGame(1)" />
            <game-card />
            <game-card />
            <game-card />
            <game-card />
            <game-card />
            <game-card />
            <game-card />
            <game-card />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../scss/my-games.scss';
</style>
