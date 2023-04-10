<script setup>
defineProps({
    violet: {
        default: false
    }
})
</script>

<template>
    <label for="checkbox" class="checkbox b-2-regular">
        <input type="checkbox" id="checkbox" />
        <span class="checkmark"></span>
        <slot></slot>
        <span class="violet" v-if="violet">
            <slot name="violet"></slot>
        </span>
    </label>
</template>

<style scoped lang="scss">
@import './scss/form-elements.scss';
</style>
