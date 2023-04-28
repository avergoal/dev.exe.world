<script setup>
import SearchIcon from '@/components/icons/SearchIcon.vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
    placeholder: String
})

const onInput = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>
<template>
    <label>
        <search-icon />
        <input type="text" @input="onInput" class="b-1-regular" :placeholder="props.placeholder" />
    </label>
</template>

<style scoped lang="scss">
@import './scss/search-input.scss';
</style>
