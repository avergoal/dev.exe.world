<script setup>
import { computed, ref } from 'vue'

const textarea = ref('')

const count = computed(() => {
    return textarea.value.length
})

const vTextArea = ref(null)

function focus() {
    vTextArea.value.focus()
}
</script>

<template>
    <fieldset class="textarea"  @click="focus">
        <textarea v-model="textarea" ref="vTextArea" placeholder=" " maxlength="1000"></textarea>
        <legend>
            <slot></slot>
        </legend>
        <span class="counter c-2-regular">{{ count }}/1000</span>
    </fieldset>
</template>
<style scoped lang="scss">
@import 'scss/form-elements.scss';
</style>
