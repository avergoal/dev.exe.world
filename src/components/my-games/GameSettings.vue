<script setup>
import VInput from '@/components/ui/form-elements/VInput.vue'
import VSelect from '@/components/ui/form-elements/VSelect.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'

const data = ['asd', 'asd', 'asd', 'asd', 'asd']
</script>

<template>
    <div class="setting-content">
        <h1>Settings</h1>
        <div class="main-settings">
            <v-input>App ID</v-input>
            <v-input>Secret Key</v-input>
            <v-select :data="data">Choose genre</v-select>
        </div>
        <h3>Iframe container settings</h3>
        <div class="iframe-settings">
            <v-input>Iframe width</v-input>
            <v-input>Iframe height</v-input>
            <v-input>Http address</v-input>
            <v-input>Https address</v-input>
            <v-input>Callback address</v-input>
        </div>
        <div class="buttons">
            <main-button>save changes</main-button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-settings.scss';
</style>
