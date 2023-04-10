<script setup>
import ModalCloseButton from '@/components/modal/ModalCloseButton.vue'
import VInput from '@/components/ui/form-elements/VInput.vue'
import VDateInput from '@/components/ui/form-elements/VDateInput.vue'
import VTextArea from '@/components/ui/form-elements/VTextArea.vue'
import MainButton from '@/components/ui/buttons/MainButton.vue'
import VInputFile from "@/components/ui/form-elements/VInputFile.vue";
</script>
<template>
    <div class="modal-content">
        <modal-close-button />
        <h3>Add News</h3>
        <div class="form">
            <v-input>Title</v-input>
            <v-text-area>Description</v-text-area>
            <v-input>Additional url parameters:</v-input>
            <div class="from-buttons">
                <v-input :toggle="true">Primary button text</v-input>
                <v-input :toggle="true">Secondary button text</v-input>
            </div>
            <div class="form-date">
                <v-date-input>Primary button text</v-date-input>
                <v-date-input date-type="time">Primary button text</v-date-input>
                <p class="c-1-regular">
                    Leave the date and time fields blank to publish the news immediately
                </p>
            </div>
            <div class="buttons">
                <div class="file">
                    <v-input-file/>
                </div>
                <div class="action">
                    <main-button :secondary="true">preview</main-button>
                    <main-button>publish</main-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/add-news.scss';
</style>
