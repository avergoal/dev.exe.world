import { defineStore } from 'pinia'

export const usePaymentsStore = defineStore('payments', {
    state: () => ({
        payments: Object,
        paymentsLog: Object,
        paymentsStats: Object,
        paymentsHistory: Object
    }),
    getters: {
        getPayments: (state) => state.payments,
        getPaymentsLog: (state) => state.paymentsLog,
        getPaymentsStats: (state) => state.paymentsStats,
        getPaymentsHistory: (state) => state.paymentsHistory
    },
    actions: {
        async actionGetPayments(gid) {
            const { data } = await this.$axios.post('dev.game.payments', { gid })
            this.payments = data.response.payments
            this.paymentsStats = data.response.payments.stats
            this.paymentsHistory = data.response.payments.payments_history
        },
        async actionGetPaymentsLog(gid) {
            const { data } = await this.$axios.post('dev.game.payments.log', { gid })
            this.paymentsLog = data.response.log
        },
        async actionGetPaymentsStats(params) {
            const { data } = await this.$axios.post('dev.game.payments.stats', params)
            this.paymentsStats = data.response.stats
        },
        async actionGetPaymentsHistory(params, reset) {
            const { data } = await this.$axios.post('dev.game.payments.history', params)
            if (!reset) {
                this.paymentsHistory.data.push(...data.response.history.data)
                this.paymentsHistory.offset = data.response.history.offset
            } else {
                this.paymentsHistory = data.response.history
            }
        }
    }
})
