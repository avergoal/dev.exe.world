<script setup>
defineProps({
    game: Object
})
</script>
<template>
    <div class="block">
        <div class="card">
            <div class="image">
                <img :src="game?.poster?.default" alt="" />
            </div>
            <p class="sub-1">{{ game?.title }}</p>
            <p class="b-2-medium">{{ game?.genre }}</p>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './scss/game-card.scss';
</style>
