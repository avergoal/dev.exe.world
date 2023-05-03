import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
    state: () => ({
        modal: {}
    }),
    getters: {
        getModal: (state) => state.modal
    },
    actions: {
        toggleModal(params) {
            this.modal = params
        }
    }
})
