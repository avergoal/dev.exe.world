<script setup>
import { RouterLink } from 'vue-router'
import BackPageIcon from '@/components/icons/BackPageIcon.vue'
import VInput from '@/components/ui/form-elements/VInput.vue'
import VTextArea from '@/components/ui/form-elements/VTextArea.vue'
import VCheckbox from '@/components/ui/form-elements/VCheckbox.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import VSelect from '@/components/ui/form-elements/VSelect.vue'
</script>
<template>
    <div class="content">
        <router-link :to="{ name: 'MyGames' }" class="back-page">
            <back-page-icon />
        </router-link>
        <div class="context">
            <h1>Add Game</h1>
            <form action="">
                <div class="inputs">
                    <v-input> Title </v-input>
                    <v-text-area> Description </v-text-area>
                    <v-select>Choose genre</v-select>
                </div>
                <div class="rules">
                    <v-checkbox :violet="true"
                        >I agree with the
                        <template #violet
                            ><router-link to="/"
                                >Rules for posting applications</router-link
                            ></template
                        >
                    </v-checkbox>
                </div>
                <div class="buttons">
                    <main-button> continue </main-button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../scss/my-games-add.scss';
</style>
