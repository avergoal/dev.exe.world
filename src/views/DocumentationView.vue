<script setup>
import DocumentationMenu from '@/components/documentation/menu/DocumentationMenu.vue'

</script>
<template>
    <div class="content">
        <documentation-menu />
        <div class="context">
            <router-view />
        </div>
    </div>
</template>
<style scoped lang="scss">
@import './scss/documentation.scss';
</style>
