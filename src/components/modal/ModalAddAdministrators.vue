<script setup>
import ModalCloseButton from '@/components/modal/ModalCloseButton.vue'
import { useModalStore } from '@/stores/modal'
import VSearchInput from '@/components/ui/form-elements/VSearchInput.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import VToggle from '@/components/ui/form-elements/VToggle.vue'
import VCheckbox from '@/components/ui/form-elements/VCheckbox.vue'

const modal = useModalStore()

const users = ['asd']
</script>
<template>
    <div class="modal-content">
        <modal-close-button />
        <h3>Add {{ modal.modal.type }}</h3>
        <div class="administrators-modal">
            <v-search-input placeholder="Username or ID (To search for multiple, use a “,”)" />
            <div class="administrator-users" v-if="users.length">
                <div class="user-item">
                    <div class="user">
                        <div class="image">
                            <img src="../../../src/assets/images/game.png" alt="" />
                        </div>
                        <p class="b-1-bold">Liam Benjamin</p>
                    </div>
                    <div class="actions">
                        <div class="allow" v-if="modal.modal.type === 'testers'">
                            <p class="b-2-medium">Allow test payments</p>
                            <v-toggle />
                        </div>
                        <div class="check">
                            <v-checkbox />
                        </div>
                    </div>
                </div>
                <div class="user-item">
                    <div class="user">
                        <div class="image">
                            <img src="../../../src/assets/images/game.png" alt="" />
                        </div>
                        <p class="b-1-bold">Liam Benjamin</p>
                    </div>
                    <div class="actions">
                        <div class="allow" v-if="modal.modal.type === 'testers'">
                            <p class="b-2-medium">Allow test payments</p>
                            <v-toggle />
                        </div>
                        <div class="check">
                            <v-checkbox />
                        </div>
                    </div>
                </div>
            </div>
            <div class="administrator-users-empty" v-else>
                <div class="image">
                    <img src="../../../src/assets/images/sleep.svg" alt="" />
                </div>
                <div class="text">
                    <h3>No results were found for your search</h3>
                    <p class="b-1-regular">Check the spelling of the username or ID</p>
                </div>
            </div>
        </div>
        <div class="buttons">
            <main-button :secondary="true">cancel</main-button>
            <main-button :disabled="!users.length">add</main-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/add-administrators.scss';
</style>
