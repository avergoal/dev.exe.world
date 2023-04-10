<script setup>
import GamesIcon from '@/components/icons/GamesIcon.vue'
import StopIcon from '@/components/icons/StopIcon.vue'
</script>

<template>
    <div class="menu">
        <div class="menu-item">
            <div class="icon">
                <games-icon />
            </div>
            <div class="sub-2">Go to Exe Profile</div>
        </div>
        <div class="menu-item">
            <div class="icon">
                <stop-icon />
            </div>
            <div class="sub-2">Sign Out</div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import '../scss/menu..scss';
</style>
