<script setup>
import GameNewsItem from '@/components/my-games/GameNewsItem.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import VSearchInput from '@/components/ui/form-elements/VSearchInput.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import { useModalStore } from '@/stores/modal'

const news = true
const modal = useModalStore()
</script>
<template>
    <div class="news-content">
        <div class="header">
            <h1>News</h1>
            <main-button
                :icon="true"
                v-if="news"
                @click="modal.toggleModal({ open: true, target: 'add-news' })"
            >
                <plus-icon />
                add news
            </main-button>
        </div>

        <div class="empty-news" v-if="!news">
            <div class="image">
                <img src="../../assets/images/news.svg" alt="" />
            </div>
            <h2>You haven't added any news yet</h2>
            <p class="b-1-regular">Add your first news and share with your players</p>
            <main-button :icon="true">
                <plus-icon />
                add news
            </main-button>
        </div>
        <div class="news" v-else>
            <div class="search">
                <v-search-input :placeholder="'Search news'" />
            </div>
            <div class="news-items">
                <h3>Awaiting publication</h3>
                <game-news-item
                    title="Imperial Hero II"
                    description="A new Sword of Power is already waiting for you"
                />
                <game-news-item
                    title="Imperial Hero II"
                    description="A new Sword of Power is already waiting for you"
                />
            </div>
            <div class="news-items">
                <h3>Awaiting publication</h3>
                <game-news-item
                    title="Imperial Hero II"
                    description="A new Sword of Power is already waiting for you"
                />
                <game-news-item
                    title="Imperial Hero II"
                    description="A new Sword of Power is already waiting for you"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-news.scss';
</style>
