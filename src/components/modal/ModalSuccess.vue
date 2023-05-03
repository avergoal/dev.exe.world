<script setup>
import {useModalStore} from "@/stores/modal";
import ModalCloseButton from "@/components/modal/ModalCloseButton.vue";
import MainButton from "@/components/ui/buttons/MainButton.vue";

const modalStore = useModalStore()
</script>

<template>
    <div class="modal-content">
        <modal-close-button/>
        <h3>Updated</h3>
        <p class="b-1-regular">Success. The data has been updated.</p>
        <main-button @click="modalStore.toggleModal({})">continue</main-button>
    </div>
</template>

<style scoped lang="scss">
@import "./scss/modal-success.scss";
</style>