<script>
export default {
    name: 'MainButton',
    props: {
        icon: {
            default: false
        },
        small: {
            default: false
        },
        secondary: {
            default: false
        },
        file: {
            default: false
        }
    },
    created() {
        import('./scss/main-button.scss')
    }
}
</script>
<template>
    <button class="primary" :class="{ icon, small, secondary, file }">
        <slot />
    </button>
</template>

<style scoped lang="scss"></style>
