<script setup>
import { computed } from 'vue'

const getYear = computed(() => new Date().getFullYear())
</script>
<template>
    <footer>
        <div class="footer">
            <div class="b-2-regular">© {{ getYear }} EXE. WORLD | All rights reserved</div>
            <nav>
                <a href="https://exe.world" target="_blank">Exe.world</a>
            </nav>
        </div>
    </footer>
</template>
<style scoped lang="scss">
@import './scss/footer.scss';
</style>
