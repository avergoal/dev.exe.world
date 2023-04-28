<script setup>
import ModalCloseButton from '@/components/modal/ModalCloseButton.vue'
import { computed } from 'vue'
import { usePaymentsStore } from '@/stores/payments'
import timestampToDate from '@/mixins/timestampToDate'

const paymentsStore = usePaymentsStore()

const getPaymentsLog = computed(() => paymentsStore.getPaymentsLog)
</script>
<template>
    <div class="modal-content">
        <modal-close-button />
        <h3>Payments log</h3>
        <div class="payments-log-modal" v-if="getPaymentsLog.length">
            <div class="table">
                <div class="table-item" :key="log.uid" v-for="log in getPaymentsLog">
                    <div class="id">{{ log.uid }}</div>
                    <div class="time">{{ timestampToDate(log.time) }}</div>
                    <div class="mode">{{ log.test ? 'test' : 'ordinary' }}</div>
                    <div class="type">{{ log.type }}</div>
                    <div class="text-content">{{ log.content }}</div>
                </div>
            </div>
        </div>
        <div class="empty b-1-medium" v-else>their is no payments log yet</div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/payments-log.scss';
</style>
