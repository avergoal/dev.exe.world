<script setup>
import { computed } from 'vue'
import GamesIcon from '@/components/icons/GamesIcon.vue'
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()

const getGameIcon = computed(() => gameStore.getGameIcon)
const getGameInfo = computed(() => gameStore.getGameInfo)
</script>
<template>
    <aside>
        <div class="game-header">
            <div class="game-image" :class="{ background: !getGameIcon }">
                <games-icon v-if="!getGameIcon" />
                <img v-else :src="getGameIcon" alt="" />
            </div>
            <div class="game-name sub-1">{{ getGameInfo.title }}</div>
        </div>
        <div class="menu-list">
            <router-link :to="{ name: 'GameInfo' }" class="list-item sub-1">Info</router-link>
            <router-link :to="{ name: 'GameSettings' }" class="list-item sub-1"
                >Settings</router-link
            >
            <router-link :to="{ name: 'GameStatistics' }" class="list-item sub-1"
                >Statistics</router-link
            >
            <router-link to="/" class="list-item sub-1">Dynamics</router-link>
            <router-link to="/" class="list-item sub-1">Notifications</router-link>
            <router-link :to="{ name: 'GameNews' }" class="list-item sub-1">News</router-link>
            <router-link :to="{ name: 'GamePayments' }" class="list-item sub-1"
                >Payments</router-link
            >
            <router-link :to="{ name: 'GameAdministrators' }" class="list-item sub-1"
                >Administrators</router-link
            >
            <router-link :to="{ name: 'GameStatus' }" class="list-item sub-1">Status</router-link>
            <router-link :to="{ name: 'GameHelp' }" class="list-item sub-1">Help</router-link>
        </div>
    </aside>
</template>

<style scoped lang="scss">
@import './scss/game-menu.scss';
</style>
