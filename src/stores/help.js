import { defineStore } from 'pinia'

export const useHelpStore = defineStore('help', {
    actions: {
        async actionSendTicket(params) {
            await this.$axios.post('dev.tickets.save', params)
        }
    }
})
