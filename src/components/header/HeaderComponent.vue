<script setup>
import {RouterLink} from 'vue-router'
import {computed, ref} from 'vue'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import DropdownIcon from '@/components/icons/DropdownIcon.vue'
import ContactLogo from '@/components/icons/ContactLogo.vue'
import HeaderMenu from '@/components/header/menu/HeaderMenu.vue'
import {useUserStore} from "@/stores/user";

const noImage = ref(true)
const open = ref(false)
const userStore = useUserStore()

const user = computed(()=>{
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
</script>
<template>
    <header>
        <div class="header">
            <div class="logo">
                <router-link :to="{ name: 'Home' }">
                    <logo-icon/>
                </router-link>
            </div>
            <nav>
                <router-link :to="{ name: 'Documentation' }" class="button-1"
                >documentation
                </router-link
                >
                <router-link
                    :to="{ name: 'MyGames' }"
                    :class="{ 'router-link-active': $route.path.startsWith('/my-games') }"
                    class="button-1"
                >my games
                </router-link
                >
                <router-link to="/" class="button-1">support</router-link>
            </nav>
            <div class="account-section">
                <div class="account" @click="openMenu" :class="{ open: open }">
                    <div class="image" :class="{ background: noImage }">
                        <contact-logo v-if="noImage"/>
                        <img v-else src="../../assets/images/relax.svg" alt=""/>
                    </div>
                    <div class="name b-1-bold">{{ user.user_name }}</div>
                    <div class="drop-icon">
                        <dropdown-icon/>
                    </div>
                </div>
                <header-menu v-if="open"/>
            </div>
        </div>
    </header>
</template>
<style scoped lang="scss">
@import './scss/header.scss';
</style>
