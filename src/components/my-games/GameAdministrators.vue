<script setup>
import GameAdministratorsUsers from '@/components/my-games/GameAdministratorsUsers.vue'
import InfoIcon from '@/components/icons/InfoIcon.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import { useModalStore } from '@/stores/modal'
import { useAdministratorsStore } from '@/stores/administrators'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

onMounted(() => {
    administratorsStore.actionGetAdministrators(gameId.value)
})

const modalStore = useModalStore()
const administratorsStore = useAdministratorsStore()
const route = useRoute()

const gameId = computed(() => route.params.id)
const getAdministrators = computed(() => administratorsStore.getAdministrators)

const addAdministrator = (type) => {
    modalStore.toggleModal({ open: true, target: 'add-administrators', type })
}
</script>
<template>
    <div class="administrators">
        <h1>Administrators</h1>
        <div class="users">
            <div class="user-item" :class="{ empty: !getAdministrators?.owner?.length }">
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
                    <main-button
                        v-if="getAdministrators?.owner?.length"
                        :icon="true"
                        :small="true"
                        @click="addAdministrator('owner')"
                    >
                        <plus-icon />
                        add Owner
                    </main-button>
                </div>
                <game-administrators-users
                    v-if="getAdministrators?.owner?.length"
                    :data="getAdministrators?.owner"
                />
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
                        <main-button :icon="true" @click="addAdministrator('owner')">
                            <plus-icon />
                            add Owner
                        </main-button>
                    </div>
                </div>
            </div>
            <div class="user-item" :class="{ empty: !getAdministrators?.administrator?.length }">
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
                        v-if="getAdministrators?.administrator?.length"
                        @click="addAdministrator('administrator')"
                    >
                        <plus-icon />
                        add Administrators
                    </main-button>
                </div>
                <game-administrators-users
                    v-if="getAdministrators?.administrator?.length"
                    :data="getAdministrators?.administrator"
                />
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
            <div class="user-item" :class="{ empty: !getAdministrators?.tester?.length }">
                <div class="header">
                    <h3>
                        Testers
                        <info-icon class="tooltip" />
                        <span class="tooltip-text c-2-regular">
                            Testers are appointed by the owner or administrator. Have the right to
                            test the application in a disabled state (when the application is not
                            available to all users). Can also access payment testing</span
                        >
                    </h3>
                    <main-button
                        v-if="getAdministrators?.tester?.length"
                        :icon="true"
                        :small="true"
                        @click="addAdministrator('tester')"
                    >
                        <plus-icon />
                        add Testers
                    </main-button>
                </div>
                <game-administrators-users
                    v-if="getAdministrators?.tester?.length"
                    :data="getAdministrators?.tester"
                />
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
                        <main-button :icon="true" @click="addAdministrator('tester')">
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
