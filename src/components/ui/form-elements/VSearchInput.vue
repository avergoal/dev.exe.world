<script setup>
import SearchIcon from '@/components/icons/SearchIcon.vue'

const props = defineProps({
    placeholder: String
})
</script>
<template>
    <label>
        <search-icon />
        <input type="text" class="b-1-regular" :placeholder="props.placeholder" />
    </label>
</template>

<style scoped lang="scss">
@import './scss/search-input.scss';
</style>
