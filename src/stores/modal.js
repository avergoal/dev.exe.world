import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
    state: () => ({
        modal: {}
    }),

    actions: {
        toggleModal(params) {
            this.modal = params
        }
    }
})
