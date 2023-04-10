<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
        <div class="nav-group">
            <div class="primary-route">
                <router-link class="sub-1" :to="{ name: 'Documentation' }"
                    >Working with the application</router-link
                >
            </div>
            <div class="secondary-route">
                <router-link class="b-2-medium" :to="{ name: 'Placing' }"
                    >Placing the game</router-link
                >
                <router-link class="b-2-medium" to="/">Game placement guidelines</router-link>
                <router-link class="b-2-medium" to="/">Accommodation conditions</router-link>
            </div>
        </div>
        <div class="nav-group">
            <div class="primary-route">
                <router-link class="sub-1" :to="{ name: 'Documentation' }">Integration</router-link>
            </div>
            <div class="secondary-route">
                <router-link class="b-2-medium" to="">Short description</router-link>
                <router-link class="b-2-medium" to="">Application methods</router-link>
                <router-link class="b-2-medium" to="">Interface methods</router-link>
                <router-link class="b-2-medium" to="">Server methods</router-link>
                <router-link class="b-2-medium" to="">Application server requirements</router-link>
            </div>
        </div>
    </nav>
</template>
<style scoped lang="scss">
@import '../scss/menu';
</style>
