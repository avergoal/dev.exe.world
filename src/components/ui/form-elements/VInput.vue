<script setup>
import {onMounted, ref, defineEmits} from 'vue'
import VToggle from '@/components/ui/form-elements/VToggle.vue'
import EyeIcon from "@/components/icons/EyeIcon.vue";
import EyeClosedIcon from "@/components/icons/EyeClosedIcon.vue";

const emit = defineEmits([
    'update:modelValue'
])

const vInput = ref(null)
const type = ref('text')

function focus() {
    vInput.value.focus()
}

function changeType(){
    type.value==='text'?type.value='password':type.value='text'
}

onMounted(()=>{
    if(props.password){
        type.value='password'
    }
})

const onInput = (event) => {
    emit('update:modelValue', event.target.value)
}

const props = defineProps({
    toggle: {
        default: false
    },
    password: {
        default: false
    }
})
</script>
<template>
    <fieldset @click="focus">
        <input :type="type" @input="onInput" ref="vInput" class="b-1-regular" placeholder=" "/>
        <legend>
            <slot></slot>
        </legend>
        <v-toggle v-if="toggle"/>
        <div class="eye-icons" v-if="password" @click.stop="changeType">
            <eye-icon v-if="type==='password'"/>
            <eye-closed-icon v-if="type==='text'"/>
        </div>
    </fieldset>
</template>

<style scoped lang="scss">
@import 'scss/form-elements.scss';
</style>
