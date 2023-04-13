import { defineStore } from 'pinia'

export const useDocumentationStore = defineStore('documentation', {
    state: () => ({
        documentation: Array
    }),
    getters: {
        getDocumentation: (state) => state.documentation
    },
    actions: {
        async setDocumentationsMenu(page_id = null) {
            const params = page_id ? { page_id } : {}
            const { data } = await this.$axios.post('dev.docs', params)
            this.documentation = data.response
        }
    }
})
