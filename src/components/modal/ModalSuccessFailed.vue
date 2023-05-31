<script setup>
import { useModalStore } from '@/stores/modal'
import ModalCloseButton from '@/components/modal/ModalCloseButton.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import {computed} from "vue";

const modalStore = useModalStore()

const getModal = computed(() => modalStore.getModal)
</script>

<template>
    <div class="modal-content">
        <modal-close-button />
        <h3>{{ getModal.data.success?"Updated":"Canceled" }}</h3>
        <p class="b-1-regular" v-if="getModal.data.success">Success. The data has been updated.</p>
        <p class="b-1-regular" v-else>Error. {{ getModal.data.errors[0] }}</p>
        <main-button @click="modalStore.toggleModal({})">continue</main-button>
    </div>
</template>

<style scoped lang="scss">
@import './scss/modal-success.scss';
</style>
