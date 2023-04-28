<script setup>
import GameMenu from '@/components/my-games/GameMenu.vue'
import { computed, onMounted } from 'vue'
import { useGameStore } from '@/stores/game'
import { useRoute } from 'vue-router'

const route = useRoute()
const gameStore = useGameStore()

const gameId = computed(() => route.params.id)

onMounted(async () => {
    await gameStore.actionGetGameInfo(gameId.value)
})
</script>
<template>
    <div class="content">
        <game-menu />
        <router-view />
    </div>
</template>

<style scoped lang="scss">
@import '../scss/game.scss';
</style>
