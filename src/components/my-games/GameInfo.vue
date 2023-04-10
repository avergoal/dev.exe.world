<script setup>
import VInput from '@/components/ui/form-elements/VInput.vue'
import VSelect from '@/components/ui/form-elements/VSelect.vue'
import VTextArea from '@/components/ui/form-elements/VTextArea.vue'
import VCoverInput from '@/components/ui/form-elements/VCoverInput.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'

const data = ['asd', 'qwew', 'asdqwe', 'asd', 'qwew', 'asdqwe', 'asdqwe']
</script>
<template>
    <div class="info-content">
        <h1>Info</h1>
        <div class="info">
            <v-input> Title</v-input>
            <v-text-area> Description</v-text-area>
            <v-select :data="data">Choose genre</v-select>
        </div>
        <h3>Covers</h3>
        <div class="covers">
            <v-cover-input :size="'big'" />
            <v-cover-input :size="'mid'" />
            <v-cover-input :size="'small'" />
        </div>
        <div class="buttons">
            <main-button>save changes</main-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-info.scss';
</style>
