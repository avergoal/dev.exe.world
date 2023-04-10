<script setup>
import { onMounted, ref } from 'vue'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

const props = defineProps({
    dateType: {
        default: 'date',
        type: String
    }
})

const flatpickrRef = ref(null)

onMounted(() => {
    const params = {
        enableTime: false,
        time_24hr: false,
        dateFormat: 'd.m.y',
        closeOnSelect: true
    }

    if (props.dateType !== 'date') {
        params.noCalendar = true
        params.time_24hr = false
        params.enableTime = true
        params.closeOnSelect = false
        params.dateFormat = 'h:i K'
    }

    flatpickr(flatpickrRef.value, params)
})
</script>
<template>
    <fieldset @click="flatpickrRef.focus()">
        <input ref="flatpickrRef" type="text" class="b-1-regular date" placeholder=" " />
        <legend>
            <slot></slot>
        </legend>
    </fieldset>
</template>

<style scoped lang="scss">
@import 'scss/form-elements.scss';
</style>
