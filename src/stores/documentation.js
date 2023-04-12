import { defineStore } from 'pinia'

export const useDocumentationStore = defineStore('documentation', {
    state: () => ({
        menu: Array
    }),
    getters: {
        getMenu: (state) => state.menu
    },
    actions: {
        async setDocumentationsMenu(page_id = null) {
            const params = page_id ? { page_id } : {}
            const { data } = await this.$axios.post('dev.docs', params)
            this.menu = data.response
        }
    }
})
