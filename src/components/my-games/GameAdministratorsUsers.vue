<script setup>
import VToggle from "@/components/ui/form-elements/VToggle.vue"
import DeleteIcon from "@/components/icons/DeleteIcon.vue";

defineProps({
    title: String
})
</script>

<template>
    <div class="administrators-users">
        <div class="user-list">
            <div class="list-item">
                <div class="user">
                    <div class="image">
                        <img src="../../../src/assets/images/game.png" alt="">
                    </div>
                    <p class="b-1-bold">Liam Benjamin</p>
                </div>
                <div class="actions">
                    <div class="allow">
                        <p class="b-2-medium">Allow test payments</p>
                        <v-toggle/>
                    </div>
                    <div class="delete">
                        <delete-icon/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import "./scss/game-administrators-users.scss";
</style>