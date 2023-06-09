<script setup>
import DocumentationMenu from '@/components/documentation/menu/DocumentationMenu.vue'
import { useDocumentationStore } from '@/stores/documentation'
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useRoute } from 'vue-router'

onMounted(() => {
    let lastPart = {}
    if (route.path === '/docs') {
        const currentPath = window.location.pathname
        if (!currentPath.includes('docs/index')) {
            history.pushState({}, 'index', 'docs/index')
        }
    } else {
        lastPart = getUrlWithParams().lastPart
        const currentPath = window.location.pathname
        if (!currentPath.includes(lastPart)) {
            history.pushState({}, lastPart, lastPart)
        }
    }
    documentation.setDocumentationsMenu(lastPart)
    window.addEventListener('popstate', handlePopstate)
})

onBeforeUnmount(() => {
    window.removeEventListener('popstate', handlePopstate)
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
        history.pushState({}, lastPart, url)
        e.preventDefault()
        selectMenu(lastPart)
    }
}

const handlePopstate = () => {
    let lastPart = getUrlWithParams().lastPart
    documentation.setDocumentationsMenu(lastPart)
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
