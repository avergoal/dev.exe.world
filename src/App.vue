<script setup>
import { RouterView } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import Header from '@/components/header/HeaderComponent.vue'
import Footer from '@/components/footer/FooterComponent.vue'
import ModalComponent from '@/components/modal/ModalComponent.vue'
import { useAppStore } from '@/stores/app'

const auth = useAuthStore()
const app = useAppStore()
const isLogged = computed(() => {
    return auth.getIsLogged
})
onMounted(() => {
    auth.checkLogged()
    app.init()
})
</script>
<template>
    <template v-if="isLogged">
        <main>
            <Header />
            <router-view />
            <Footer />
        </main>
        <ModalComponent />
    </template>
    <router-view v-else />
</template>

<style scoped></style>
