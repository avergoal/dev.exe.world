<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useAppStore } from '@/stores/app'
import Header from '@/components/header/HeaderComponent.vue'
import Footer from '@/components/footer/FooterComponent.vue'
import ModalComponent from '@/components/modal/ModalComponent.vue'

const auth = useAuthStore()
const app = useAppStore()

onMounted(() => {
    auth.checkLogged()
    app.init()
})
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
