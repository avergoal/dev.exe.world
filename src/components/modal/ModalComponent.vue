<script setup>
import { useModalStore } from '@/stores/modal'
import ModalAddNews from '@/components/modal/ModalAddNews.vue'
import ModalAddAdministrators from '@/components/modal/ModalAddAdministrators.vue'

const modal = useModalStore()
</script>
<template>
    <div class="modal" :class="{ open: modal.modal.open }" @click.self="modal.toggleModal({})">
        <modal-add-news v-if="modal.modal.target === 'add-news'" />
        <modal-add-administrators v-if="modal.modal.target === 'add-administrators'" />
    </div>
</template>

<style scoped lang="scss">
@import './scss/modal.scss';
</style>
