<script setup>
import EditIcon from '@/components/icons/EditIcon.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import {computed} from 'vue'
import {useGameStore} from '@/stores/game'
import {useModalStore} from "@/stores/modal";
import {useRoute} from "vue-router";


const props = defineProps({
    news: Object
})


const gameStore = useGameStore()
const modalStore = useModalStore()
const route = useRoute()


const getGameIcon = computed(() => gameStore.getGameIcon)

const gameId = computed(() => route.params.id)


const editNews = () => {
    modalStore.toggleModal({open: true, target: 'add-news', data: {nid: props.news.id}})
}

const deleteNews = async () => {
    let params = {
        id: props.news.id,
        delete_code: props.news.delete_code
    }
    await gameStore.deleteNews(params)
    await gameStore.actionGetGameNews(gameId.value)
}
</script>

<template>
    <div class="news-item">
        <div class="image">
            <img :src="getGameIcon" alt=""/>
        </div>
        <div class="news">
            <div class="header">
                <div class="title b-1-bold">
                    {{ news.title }}
                </div>
                <div class="buttons">
                    <!--                    <span class="b-2-bold"> Publish Now </span>-->
                    <edit-icon @click="editNews"/>
                    <delete-icon @click="deleteNews"/>
                </div>
            </div>
            <div class="description b-1-regular">
                {{ news.description }}
            </div>
            <div class="buttons">
                <main-button disabled :small="true" v-if="news.button">
                    {{ news.button }}
                </main-button>
                <!--                <main-button disabled :secondary="true" :small="true"> maybe later </main-button>-->
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-news-item.scss';
</style>
