<script setup>
import { onMounted, ref, defineEmits, watch } from 'vue'
import VToggle from '@/components/ui/form-elements/VToggle.vue'
import EyeIcon from '@/components/icons/EyeIcon.vue'
import EyeClosedIcon from '@/components/icons/EyeClosedIcon.vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    toggle: {
        default: false
    },
    password: {
        default: false
    },
    inputValue: {
        default: '',
        type: String
    },
    disabled: {
        default: false,
        type: Boolean
    },
    limit: {
        default: '',
        type: String
    },
    error: {
        default: '',
        type: String
    }
})

onMounted(() => {
    if (props.password) {
        type.value = 'password'
    }
    if (props.inputValue) {
        value.value = props.inputValue
        emit('update:modelValue', props.inputValue)
    }
})

const vInput = ref(null)
const type = ref('text')
const value = ref('')

const focus = () => {
    vInput.value.focus()
}

const changeType = () => {
    type.value === 'text' ? (type.value = 'password') : (type.value = 'text')
}

const onInput = (event) => {
    emit('update:modelValue', event.target.value)
}

watch(
    () => props.inputValue,
    (newValue) => {
        emit('update:modelValue', newValue)
        value.value = newValue
    }
)
</script>
<template>
    <fieldset @click="focus" :class="{ error }">
        <input
            :type="type"
            :disabled="disabled"
            v-model="value"
            @input="onInput"
            ref="vInput"
            class="b-1-regular"
            placeholder=" "
            :maxlength="props.limit"
        />
        <legend>
            <slot></slot>
        </legend>
        <v-toggle v-if="toggle" />
        <div class="eye-icons" v-if="password" @click.stop="changeType">
            <eye-icon v-if="type === 'password'" />
            <eye-closed-icon v-if="type === 'text'" />
        </div>
        <span class="c-2-regular error-text" v-if="error">{{ error }}</span>
    </fieldset>
</template>

<style scoped lang="scss">
@import 'scss/form-elements.scss';
</style>
