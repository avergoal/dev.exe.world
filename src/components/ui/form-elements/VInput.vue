<script setup>
import { ref } from 'vue'
import VToggle from '@/components/ui/form-elements/VToggle.vue'

const vInput = ref(null)

function focus() {
    vInput.value.focus()
}
defineProps({
    toggle: {
        default: false
    }
})
</script>
<template>
    <fieldset @click="focus">
        <input type="text" ref="vInput" class="b-1-regular" placeholder=" " />
        <legend>
            <slot></slot>
        </legend>
        <v-toggle v-if="toggle" />
    </fieldset>
</template>

<style scoped lang="scss">
@import 'scss/form-elements.scss';
</style>
