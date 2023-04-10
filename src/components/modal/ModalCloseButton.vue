<script setup>
import ModalCloseIcon from '@/components/icons/ModalCloseIcon.vue'
import { useModalStore } from '@/stores/modal'

const modal = useModalStore()
</script>
<template>
    <button @click="modal.toggleModal({})">
        <modal-close-icon />
    </button>
</template>
<style scoped lang="scss">
@import './scss/close-button.scss';
</style>
