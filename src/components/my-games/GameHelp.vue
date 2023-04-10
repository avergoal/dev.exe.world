<script setup>
import VInput from '@/components/ui/form-elements/VInput.vue'
import VSelect from '@/components/ui/form-elements/VSelect.vue'
import VTextArea from '@/components/ui/form-elements/VTextArea.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'

const data = ['asd', 'qwew', 'asdqwe', 'asd', 'qwew', 'asdqwe', 'asdqwe']
</script>
<template>
    <div class="help-content">
        <h1>Help</h1>
        <div class="help">
            <v-select :data="data">Select the subject of your appeal</v-select>
            <v-input>Email</v-input>
            <v-input>Name</v-input>
            <v-text-area>Describe the problem</v-text-area>
        </div>
        <div class="buttons">
            <main-button>send</main-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-help.scss';
</style>
