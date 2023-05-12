import { defineStore } from 'pinia'

export const useDocumentationStore = defineStore('documentation', {
    state: () => ({
        documentation: Array,
        selected: Array,
    }),
    getters: {
        getDocumentation: (state) => state.documentation,
        getSelected: (state) => state.selected,
    },
    actions: {
        async setDocumentationsMenu(page_id = null) {
            const params = page_id ? { page_id } : {}
            const { data } = await this.$axios.post('dev.docs', params)
            this.documentation = data.response
            this.selected = page_id
        }
    }
})
