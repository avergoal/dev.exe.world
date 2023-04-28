<script setup>
import ModalCloseButton from '@/components/modal/ModalCloseButton.vue'
import { useModalStore } from '@/stores/modal'
import VSearchInput from '@/components/ui/form-elements/VSearchInput.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import VToggle from '@/components/ui/form-elements/VToggle.vue'
// import VCheckbox from '@/components/ui/form-elements/VCheckbox.vue'
import { useAdministratorsStore } from '@/stores/administrators'
import { useRoute } from 'vue-router'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

onMounted(() => {
    role.value = roles[getModal.value.type]
})

const roles = {
    owner: 1,
    administrator: 2,
    tester: 3,
    testerWithPayments: 4
}
const role = ref()
const modalStore = useModalStore()
const administratorsStore = useAdministratorsStore()
const route = useRoute()
const testerRoles = ref({})

const gameId = computed(() => route.params.id)
const getSearchAdministrators = computed(() => administratorsStore.getSearchAdministrators)
const getModal = computed(() => modalStore.getModal)

const addAdministrator = async (uid) => {
    let params = {
        gid: gameId.value,
        group: role.value,
        uid
    }
    if (getModal.value.type === 'tester') {
        params.group = testerRoles.value[uid] ?? role.value
    }
    await administratorsStore.addAdministrator(params)
    await administratorsStore.actionGetAdministrators(gameId.value)
    modalStore.toggleModal({})
}

const searchAdministratorsUsers = (e) => {
    let params = {
        gid: gameId.value,
        query: e
    }
    administratorsStore.searchAdministratorsUsers(params)
}

const changeRole = (e, id) => {
    testerRoles.value[id] = e ? 4 : 3
}

onBeforeUnmount(() => {
    searchAdministratorsUsers('')
})
</script>
<template>
    <div class="modal-content">
        <modal-close-button />
        <h3>Add {{ getModal.type }}</h3>
        <div class="administrators-modal">
            <v-search-input
                @update:model-value="searchAdministratorsUsers"
                placeholder="Username or ID"
            />
            <div class="administrator-users" v-if="getSearchAdministrators.length">
                <div class="user-item" :key="user.uid" v-for="user in getSearchAdministrators">
                    <div class="user">
                        <div class="image">
                            <img :src="user.avatar_urls?.x100" alt="" />
                        </div>
                        <p class="b-1-bold">{{ user.user_name }}</p>
                    </div>
                    <div class="actions">
                        <div class="allow" v-if="getModal.type === 'tester'">
                            <p class="b-2-medium">Allow test payments</p>
                            <v-toggle @update:value="changeRole($event, user.uid)" />
                        </div>
                        <!--                        <div class="check">-->
                        <!--                            <v-checkbox />-->
                        <!--                        </div>-->
                        <main-button @click="addAdministrator(user.uid)">add</main-button>
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
        <!--        <div class="buttons">-->
        <!--            <main-button :secondary="true">cancel</main-button>-->
        <!--            <main-button :disabled="!users.length" @click="addAdministrator">add</main-button>-->
        <!--        </div>-->
    </div>
</template>

<style scoped lang="scss">
@import './scss/add-administrators.scss';
</style>
