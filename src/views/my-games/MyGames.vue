<script setup>
import { computed, onMounted } from 'vue'
import AddIcon from '@/components/icons/AddIcon.vue'
import GameCard from '@/components/my-games/GameCard.vue'
import router from '@/router'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()

const games = computed(() => {
    return gameStore.getGames
})

const toAdd = () => {
    router.push({ name: 'MyGamesAdd' })
}
const toGame = (id) => {
    router.push({ name: 'GameInfo', params: { id } })
}

onMounted(() => {
    gameStore.actionGetGames()
})
</script>
<template>
    <div class="content" :class="{ empty: !games.length }">
        <h1>My Games</h1>
        <main-button v-if="games.length" :icon="true" @click="toAdd">
            <add-icon />
            add game
        </main-button>
        <div v-if="!games.length" class="empty-block">
            <img src="../../assets/images/sleep.svg" alt="" />
            <h2>You haven't added any games yet</h2>
            <p class="b-1-regular">Add your first game and track stats</p>
            <main-button :icon="true" @click="toAdd">
                <add-icon />
                add game
            </main-button>
        </div>
        <div v-else class="game-content">
            <game-card
                @click="toGame(game.gid)"
                :key="game.gid"
                :game="game"
                v-for="game in games"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../scss/my-games.scss';
</style>
