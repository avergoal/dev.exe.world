<script setup>
import VToggle from '@/components/ui/form-elements/VToggle.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
import { useAdministratorsStore } from '@/stores/administrators'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
    data: Object
})

const administratorsStore = useAdministratorsStore()
const route = useRoute()

const gameId = computed(() => route.params.id)

const changeTesterType = async (e, uid) => {
    let params = {
        gid: gameId.value,
        group: e ? 4 : 3,
        uid
    }
    await administratorsStore.addAdministrator(params)
    await administratorsStore.actionGetAdministrators(gameId.value)
}

const deleteAdministrator = async (group, uid) => {
    let params = {
        gid: gameId.value,
        group,
        uid
    }
    await administratorsStore.deleteAdministrator(params)
    await administratorsStore.actionGetAdministrators(gameId.value)
}
</script>

<template>
    <div class="administrators-users">
        <div class="user-list">
            <div class="list-item" :key="user.uid" v-for="user in props.data">
                <div class="user">
                    <div class="image">
                        <img :src="user.user?.avatar_urls?.x100" alt="" />
                    </div>
                    <p class="b-1-bold">{{ user.user?.user_name }}</p>
                </div>
                <div class="actions">
                    <div class="allow" v-if="user.role > 2">
                        <p class="b-2-medium">Allow test payments</p>
                        <v-toggle
                            @update:value="changeTesterType($event, user.user.uid)"
                            :checked="parseInt(user.role) === 4"
                        />
                    </div>
                    <div class="delete" @click="deleteAdministrator(user.role, user.user.uid)">
                        <delete-icon />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './scss/game-administrators-users.scss';
</style>
