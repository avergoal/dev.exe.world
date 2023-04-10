<script setup>
import GameMenu from '@/components/my-games/GameMenu.vue'
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
