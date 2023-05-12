<script setup>
import { useDocumentationStore } from '@/stores/documentation'
import { computed } from 'vue'

const documentation = useDocumentationStore()

const getDocumentation = computed(() => documentation.getDocumentation)

const selectMenu = async (selected) => {
    await documentation.setDocumentationsMenu(selected)
    const currentPath = window.location.pathname
    if (!currentPath.includes(selected)) {
        history.pushState({}, selected, selected)
    }
}
</script>

<template>
    <nav>
        <div class="nav-group" :key="menu.id" v-for="menu in getDocumentation.contents">
            <div class="primary-route">
                <div
                    class="sub-1"
                    @click="selectMenu(menu.page_id)"
                    :class="{ active: menu.selected }"
                >
                    {{ menu.title }}
                </div>
            </div>
            <div class="secondary-route">
                <div
                    class="b-2-medium"
                    @click="selectMenu(sub.page_id)"
                    :class="{ active: sub.selected }"
                    :key="sub.id"
                    v-for="sub in menu.subs"
                >
                    {{ sub.title }}
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped lang="scss">
@import '../scss/menu';
</style>
