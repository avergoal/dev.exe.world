<script setup>
import DocumentationMenu from '@/components/documentation/menu/DocumentationMenu.vue'
import { useDocumentationStore } from '@/stores/documentation'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

onMounted(() => {
    let lastPart = {}
    if (route.path === '/docs') {
        history.pushState({}, '', 'docs/index')
    } else {
        lastPart = getUrlWithParams().lastPart
        history.pushState({}, '', lastPart)
    }
    documentation.setDocumentationsMenu(lastPart)
})

const documentation = useDocumentationStore()

const getDocumentation = computed(() => documentation.getDocumentation)
const getSelected = computed(() => documentation.getSelected)
const selected = computed(
    () => getDocumentation?.value?.contents?.filter((item) => item.selected)[0]
)
const checkPage = computed(
    () => getSelected.value === 'index' || getSelected.value === 'integration'
)
const route = useRoute()

const handleClick = (e) => {
    if (e.target.tagName === 'A') {
        let { url, lastPart } = getUrlWithParams(e)
        history.pushState({}, '', url)
        e.preventDefault()
        selectMenu(lastPart)
    }
}

const getUrlWithParams = (e = null) => {
    const url = e?.target?.href || window.location.href
    const parts = url.split('/')
    const lastPart = parts[parts.length - 1]
    return { url, lastPart }
}

const selectMenu = (selected) => {
    documentation.setDocumentationsMenu(selected)
}
</script>
<template>
    <div class="documentation-content content">
        <documentation-menu />
        <div class="documentation-context">
            <div class="submenu" v-if="!checkPage">{{ selected?.title }}</div>
            <h1 v-html="getDocumentation?.text?.title"></h1>
            <span v-html="getDocumentation?.text?.text" @click.prevent="handleClick"></span>
        </div>
    </div>
</template>
<style lang="scss">
@import './scss/documentation.scss';
</style>
