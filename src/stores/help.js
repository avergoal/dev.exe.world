import { defineStore } from 'pinia'

export const useHelpStore = defineStore('help', {
    actions: {
        async actionSendTicket(params) {
            const { data } = await this.$axios.post('dev.tickets.save', params)
            return data.response.result
        }
    }
})
