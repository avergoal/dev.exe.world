<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useNewsStore } from '@/stores/news'
import { useModalStore } from '@/stores/modal'
import GameNewsItem from '@/components/my-games/GameNewsItem.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import VSearchInput from '@/components/ui/form-elements/VSearchInput.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'

onMounted(async () => {
    await newsStore.actionGetNews(gameId.value)
})

const modal = useModalStore()
const route = useRoute()
const newsStore = useNewsStore()

const gameId = computed(() => route.params.id)
const getNews = computed(() => newsStore.getNews)
</script>
<template>
    <div class="news-content">
        <div class="header">
            <h1>News</h1>
            <main-button
                :icon="true"
                v-if="getNews.length"
                @click="modal.toggleModal({ open: true, target: 'add-news' })"
            >
                <plus-icon />
                add news
            </main-button>
        </div>

        <div class="empty-news" v-if="!getNews.length">
            <div class="image">
                <img src="../../assets/images/news.svg" alt="" />
            </div>
            <h2>You haven't added any news yet</h2>
            <p class="b-1-regular">Add your first news and share with your players</p>
            <main-button
                :icon="true"
                @click="modal.toggleModal({ open: true, target: 'add-news' })"
            >
                <plus-icon />
                add news
            </main-button>
        </div>
        <div class="news" v-else>
            <div class="search">
                <v-search-input :placeholder="'Search news'" />
            </div>
            <div class="news-items">
                <h3>Publications</h3>
                <game-news-item v-for="news in getNews" :key="news.id" :news="news" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-news.scss';
</style>
