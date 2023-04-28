import { defineStore } from 'pinia'

export const useStatusStore = defineStore('status', {
    state: () => ({
        status: Object
    }),
    getters: {
        getStatus: (state) => state.status
    },
    actions: {
        async actionGetStatus(gid) {
            const { data } = await this.$axios.post('dev.game.status', { gid })
            this.status = data.response.result
        },
        async republish(gid) {
            await this.$axios.post('dev.game.approve', { gid })
        }
    }
})
