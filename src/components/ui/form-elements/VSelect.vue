<script setup>
import { ref } from 'vue'
import DropdownIcon from '@/components/icons/DropdownIcon.vue'

const props = defineProps({
    data: Array
})
const open = ref(false)
const genre = ref('')
function openSelect() {
    open.value = !open.value
    if (open.value) {
        document.addEventListener('click', closeSelect)
    } else {
        document.removeEventListener('click', closeSelect)
    }
}

function selectItem(value) {
    genre.value = value
    open.value = false
}

function closeSelect(e) {
    if (!e.target.closest('.select') && open.value) {
        open.value = false
        document.removeEventListener('click', closeSelect)
    }
}
</script>

<template>
    <fieldset class="select">
        <input type="text" list="data" disabled placeholder=" " v-model="genre" />
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
                    :key="datum"
                    class="item sub-2"
                    v-for="datum in props.data"
                >
                    {{ datum }}
                </div>
            </div>
        </div>
    </fieldset>
</template>

<style scoped lang="scss">
@import './scss/form-elements.scss';
</style>
