<script setup>
import { computed, defineEmits, onMounted, ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    inputValue: {
        default: '',
        type: String
    },
    limit: {
        default: '1000',
        type: String
    },
    error: {
        default: '',
        type: String
    }
})

onMounted(() => {
    if (props.inputValue) {
        value.value = props.inputValue
    }
})

const vTextArea = ref(null)
const value = ref('')

const count = computed(() => value.value.length)

const focus = () => {
    vTextArea.value.focus()
}

const onInput = (event) => {
    emit('update:modelValue', event.target.value)
}

watch(
    () => props.inputValue,
    (newValue) => {
        if (newValue) {
            emit('update:modelValue', newValue)
            value.value = newValue
        }
    }
)
</script>

<template>
    <fieldset class="textarea" @click="focus" :class="{ error }">
        <textarea
            @input="onInput"
            v-model="value"
            ref="vTextArea"
            placeholder=" "
            class="b-1-regular"
            :maxlength="props.limit"
        ></textarea>
        <legend>
            <slot></slot>
        </legend>
        <span class="counter c-2-regular">{{ count }}/{{ props.limit }}</span>
        <span class="c-2-regular error-text" v-if="error">{{ error }}</span>
    </fieldset>
</template>
<style scoped lang="scss">
@import 'scss/form-elements.scss';
</style>
