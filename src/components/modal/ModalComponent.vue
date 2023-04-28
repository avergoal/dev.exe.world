<script setup>
import { useModalStore } from '@/stores/modal'
import ModalAddNews from '@/components/modal/ModalAddNews.vue'
import ModalAddAdministrators from '@/components/modal/ModalAddAdministrators.vue'
import { computed } from 'vue'
import ModalPaymentsLog from '@/components/modal/ModalPaymentsLog.vue'

const modalStore = useModalStore()

const getModal = computed(() => modalStore.getModal)
</script>
<template>
    <div class="modal" :class="{ open: getModal.open }" @click.self="modalStore.toggleModal({})">
        <modal-add-news v-if="getModal.target === 'add-news'" />
        <modal-add-administrators v-if="getModal.target === 'add-administrators'" />
        <modal-payments-log v-if="getModal.target === 'payments-log'" />
    </div>
</template>

<style scoped lang="scss">
@import './scss/modal.scss';
</style>
