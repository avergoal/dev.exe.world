<script setup>
import GameAdministratorsUsers from '@/components/my-games/GameAdministratorsUsers.vue'
import InfoIcon from '@/components/icons/InfoIcon.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import { useModalStore } from '@/stores/modal'

const data = [{ name: 'Liam Benjamin' }]
const dataUser = []
const modal = useModalStore()

function addAdministrator(type) {
    modal.toggleModal({ open: true, target: 'add-administrators', type })
}
</script>
<template>
    <div class="administrators">
        <h1>Administrators</h1>
        <div class="users">
            <div class="user-item">
                <div class="header">
                    <h3>
                        Owner
                        <info-icon class="tooltip" />
                        <span class="tooltip-text c-2-regular"
                            >Administrators are appointed by the owner. Have all the rights to edit
                            the application settings, except for changing the secret key, game state
                            and application ID. Has the right to appoint testers</span
                        >
                    </h3>
                    <main-button :icon="true" :small="true" @click="addAdministrator('owner')">
                        <plus-icon />
                        add Owner
                    </main-button>
                </div>
                <game-administrators-users v-if="data.length" :data="data" />
            </div>
            <div class="user-item" :class="{ empty: !dataUser.length }">
                <div class="header">
                    <h3>
                        Administrators
                        <info-icon class="tooltip" />
                        <span class="tooltip-text c-2-regular"
                            >Administrators are appointed by the owner. Have all the rights to edit
                            the application settings, except for changing the secret key, game state
                            and application ID. Has the right to appoint testers</span
                        >
                    </h3>
                    <main-button
                        :icon="true"
                        :small="true"
                        v-if="dataUser.length"
                        @click="addAdministrator('administrator')"
                    >
                        <plus-icon />
                        add Administrators
                    </main-button>
                </div>
                <game-administrators-users v-if="dataUser.length" :data="dataUser" />
                <div class="empty-users" v-else>
                    <div class="image">
                        <img
                            src="../../../src/assets/images/administrators.svg"
                            alt="administrators"
                        />
                    </div>
                    <div class="text">
                        <p class="b-1-regular">
                            Administrators are appointed by the owner. Have all the rights to edit
                            the application settings, except for changing the secret key, game state
                            and application ID. Has the right to appoint testers
                        </p>
                        <main-button :icon="true" @click="addAdministrator('administrator')">
                            <plus-icon />
                            add Administrators
                        </main-button>
                    </div>
                </div>
            </div>
            <div class="user-item">
                <div class="header">
                    <h3>
                        Testers
                        <info-icon class="tooltip" />
                        <span class="tooltip-text c-2-regular"
                            >Administrators are appointed by the owner. Have all the rights to edit
                            the application settings, except for changing the secret key, game state
                            and application ID. Has the right to appoint testers</span
                        >
                    </h3>
                    <main-button
                        v-if="data.length"
                        :icon="true"
                        :small="true"
                        @click="addAdministrator('testers')"
                    >
                        <plus-icon />
                        add Testers
                    </main-button>
                </div>
                <game-administrators-users v-if="data.length" :data="data" />
                <div class="empty-users" v-else>
                    <div class="image">
                        <img
                            src="../../../src/assets/images/administrators.svg"
                            alt="administrators"
                        />
                    </div>
                    <div class="text">
                        <p class="b-1-regular">
                            Testers are appointed by the owner or administrator. Have the right to
                            test the application in a disabled state (when the application is not
                            available to all users). Can also access payment testing
                        </p>
                        <main-button :icon="true" @click="addAdministrator('testers')">
                            <plus-icon />
                            add Testers
                        </main-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './scss/game-administrators.scss';
</style>
