<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/header/HeaderComponent.vue'
import Footer from '@/components/footer/FooterComponent.vue'
import ModalComponent from '@/components/modal/ModalComponent.vue'
</script>
<template>
    <main>
        <Header />
        <router-view />
        <Footer />
    </main>
    <ModalComponent />
</template>

<style scoped></style>
