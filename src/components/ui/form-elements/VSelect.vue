<script setup>
import { defineEmits, onMounted, ref, watch } from 'vue'
import DropdownIcon from '@/components/icons/DropdownIcon.vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    data: null,
    showSelect: String,
    idType: String,
    selectedValue: Number,
    findValue: String
})

onMounted(() => {
    if (props.selectedValue) {
        selected.value = props.data.find((item) => item[props.findValue] === props.selectedValue)[
            props.showSelect
        ]
        emit('update:modelValue', props.selectedValue)
    }
})

const open = ref(false)
const selected = ref('')

const openSelect = () => {
    open.value = !open.value
    if (open.value) {
        document.addEventListener('click', closeSelect)
    } else {
        document.removeEventListener('click', closeSelect)
    }
}

const selectItem = (value) => {
    selected.value = value[props.showSelect]
    open.value = false
    emit('update:modelValue', value[props.idType])
}

const closeSelect = (e) => {
    if (!e.target.closest('.select') && open.value) {
        open.value = false
        document.removeEventListener('click', closeSelect)
    }
}

watch(
    () => props.selectedValue,
    (newValue) => {
        if (newValue) {
            selected.value = props.data.find((item) => item[props.findValue] === newValue)[
                props.showSelect
            ]
            emit('update:modelValue', newValue)
        }
    }
)
</script>

<template>
    <fieldset class="select">
        <input type="text" list="data" disabled placeholder=" " v-model="selected" />
        <legend>
            <slot />
        </legend>
        <div class="input-absolute" @click="openSelect">
            <div class="drop-icon" :class="{ open }">
                <dropdown-icon />
            </div>
        </div>
        <div class="select-overflow">
            <div class="select-items" v-if="open">
                <div
                    @click="selectItem(datum)"
                    :key="datum[idType]"
                    class="item sub-2"
                    v-for="datum in props.data"
                >
                    {{ datum[showSelect] }}
                </div>
            </div>
        </div>
    </fieldset>
</template>

<style scoped lang="scss">
@import './scss/form-elements.scss';
</style>
