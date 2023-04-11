<script setup>
import {computed, defineEmits, ref} from 'vue'

const textarea = ref('')

const count = computed(() => {
    return textarea.value.length
})

const vTextArea = ref(null)

function focus() {
    vTextArea.value.focus()
}

const emit = defineEmits([
    'update:modelValue'
])


const onInput = (event) => {
    emit('update:modelValue', event.target.value)
}

</script>

<template>
    <fieldset class="textarea" @click="focus">
        <textarea @input="onInput" v-model="textarea" ref="vTextArea" placeholder=" " class="b-1-regular" maxlength="1000"></textarea>
        <legend>
            <slot></slot>
        </legend>
        <span class="counter c-2-regular">{{ count }}/1000</span>
    </fieldset>
</template>
<style scoped lang="scss">
@import 'scss/form-elements.scss';
</style>
