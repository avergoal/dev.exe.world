<script setup>
import { RouterLink } from 'vue-router'
import { computed, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useUserStore } from '@/stores/user'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import DropdownIcon from '@/components/icons/DropdownIcon.vue'
import HeaderMenu from '@/components/header/menu/HeaderMenu.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import router from '@/router'
import { useDocumentationStore } from '@/stores/documentation'

const open = ref(false)
const userStore = useUserStore()
const authStore = useAuthStore()

const isLogged = computed(() => {
    return authStore.getIsLogged
})
const user = computed(() => {
    return userStore.getUser
})

const openMenu = () => {
    open.value = !open.value
    if (open.value) {
        document.addEventListener('click', closeMenu)
    } else {
        document.removeEventListener('click', closeMenu)
    }
}

const closeMenu = (e) => {
    if (!e.target.closest('.account-section') && open.value) {
        open.value = false
        document.removeEventListener('click', closeMenu)
    }
}
const documentation = useDocumentationStore()

const toDocs = () => {
    documentation.setDocumentationsMenu('index')
    const currentPath = window.location.pathname
    if (!currentPath.includes('index')) {
        history.pushState({}, 'index', 'index')
    }
}
</script>
<template>
    <header>
        <div class="header">
            <div class="logo">
                <router-link :to="{ name: 'Home' }">
                    <logo-icon />
                </router-link>
            </div>
            <nav>
                <router-link
                    :to="{ path: '/docs/index' }"
                    @click="toDocs"
                    class="button-1"
                    :class="{ 'router-link-active': $route.path.startsWith('/docs') }"
                    >documentation
                </router-link>
                <router-link
                    :to="{ name: 'MyGames' }"
                    :class="{ 'router-link-active': $route.path.startsWith('/my-games') }"
                    class="button-1"
                    >my games
                </router-link>
            </nav>
            <div class="account-section">
                <div v-if="isLogged" class="account" @click="openMenu" :class="{ open: open }">
                    <div class="image" :class="{ background: user.avatar_urls?.x100 }">
                        <!--                        <contact-logo v-if="noImage" />-->
                        <img :src="user.avatar_urls?.x100" alt="" />
                    </div>
                    <div class="name b-1-bold">{{ user.user_name }}</div>
                    <div class="drop-icon">
                        <dropdown-icon />
                    </div>
                </div>
                <main-button v-else @click="router.push('/auth')">sign in</main-button>
                <header-menu v-if="open" />
            </div>
        </div>
    </header>
</template>
<style scoped lang="scss">
@import './scss/header.scss';
</style>
