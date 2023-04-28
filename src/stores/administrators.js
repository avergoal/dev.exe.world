import { defineStore } from 'pinia'

const roles = {
    1: 'owner',
    2: 'administrator',
    3: 'tester',
    4: 'tester'
}

export const useAdministratorsStore = defineStore('administrators', {
    state: () => ({
        administrators: Array,
        searchAdministrators: []
    }),
    getters: {
        getAdministrators: (state) => state.administrators,
        getSearchAdministrators: (state) => state.searchAdministrators
    },
    actions: {
        async actionGetAdministrators(gid) {
            const { data } = await this.$axios.post('dev.roles', { gid })
            this.administrators = data.response.roles.reduce((acc, user) => {
                if (!acc[roles[user.role]]) {
                    acc[roles[user.role]] = []
                }
                acc[roles[user.role]].push(user) // Adding the employee object to the array for this role
                return acc
            }, {})
        },
        async addAdministrator(params) {
            await this.$axios.post('dev.roles.add', params)
        },
        async deleteAdministrator(params) {
            await this.$axios.post('dev.roles.del', params)
        },
        async searchAdministratorsUsers(params) {
            if (params.query) {
                const { data } = await this.$axios.post('dev.roles.search', params)
                this.searchAdministrators = data.response.result
            } else {
                this.searchAdministrators = []
            }
        }
    }
})
