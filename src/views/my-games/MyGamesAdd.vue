<script setup>
import { RouterLink } from 'vue-router'
import BackPageIcon from '@/components/icons/BackPageIcon.vue'
import VInput from '@/components/ui/form-elements/VInput.vue'
import VTextArea from '@/components/ui/form-elements/VTextArea.vue'
import VCheckbox from '@/components/ui/form-elements/VCheckbox.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import VSelect from '@/components/ui/form-elements/VSelect.vue'
import { useGameStore } from '@/stores/game'
import { computed, ref } from 'vue'
import router from '@/router'

const title = ref('')
const description = ref('')
const type = ref('')
const agree = ref(false)

const gameStore = useGameStore()

const genres = computed(() => {
    return gameStore.getGenre
})

const addGame = async () => {
    const params = {
        title: title.value,
        description: description.value,
        type: type.value,
        agree: agree.value
    }
    await gameStore.addGamed(params)
    await router.push({ name: 'MyGames' })
}
</script>
<template>
    <div class="content">
        <router-link :to="{ name: 'MyGames' }" class="back-page">
            <back-page-icon />
        </router-link>
        <div class="context">
            <h1>Add Game</h1>
            <form action="" @submit.prevent="addGame">
                <div class="inputs">
                    <v-input @update:modelValue="title = $event"> Title</v-input>
                    <v-text-area @update:modelValue="description = $event">
                        Description</v-text-area
                    >
                    <v-select
                        @update:modelValue="type = $event"
                        :data="genres"
                        showSelect="title"
                        id-type="cid"
                        >Choose genre
                    </v-select>
                </div>
                <div class="rules">
                    <v-checkbox @update:modelValue="agree = $event"
                        >I agree with the
                        <template #violet>
                            <router-link to="/docs/terms_of_placement"
                                >Rules for posting applications
                            </router-link>
                        </template>
                    </v-checkbox>
                </div>
                <div class="buttons">
                    <main-button> continue</main-button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../scss/my-games-add.scss';
</style>
