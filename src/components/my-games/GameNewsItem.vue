<script setup>
import EditIcon from '@/components/icons/EditIcon.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'

const props = defineProps({
    title: String,
    description: String
})
</script>

<template>
    <div class="news-item">
        <div class="image">
            <img src="../../../src/assets/images/game.png" alt="" />
        </div>
        <div class="news">
            <div class="header">
                <div class="title b-1-bold">
                    {{ props.title }}
                </div>
                <div class="buttons">
                    <span class="b-2-bold"> Publish Now </span>
                    <edit-icon />
                    <delete-icon />
                </div>
            </div>
            <div class="description b-1-regular">
                {{ props.description }}
            </div>
            <div class="buttons">
                <main-button disabled :small="true"> Pick up the reward </main-button>
                <main-button disabled :secondary="true" :small="true"> maybe later </main-button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-news-item.scss';
</style>
