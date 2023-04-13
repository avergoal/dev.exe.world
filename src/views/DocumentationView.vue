<script setup>
import DocumentationMenu from '@/components/documentation/menu/DocumentationMenu.vue'
import {useDocumentationStore} from "@/stores/documentation";
import {computed} from "vue";

const documentation = useDocumentationStore()


const getDocumentation = computed(() => documentation.getDocumentation)


const handleClick = (e)=>{
    if(e.target.tagName === 'A'){
        const url =e.target.href
        const parts = url.split('/')
        const lastPart = parts[parts.length - 1]
        e.preventDefault()
        selectMenu(lastPart)
    }
}

const selectMenu = (selected) => {
    documentation.setDocumentationsMenu(selected)
}
</script>
<template>
    <div class="documentation-content content">
        <documentation-menu/>
        <div class="documentation-context">
            <h1 v-html="getDocumentation?.text?.title"></h1>
            <span v-html="getDocumentation?.text?.text" @click.prevent="handleClick"></span>
        </div>
    </div>
</template>
<style lang="scss">
@import './scss/documentation.scss';
</style>
