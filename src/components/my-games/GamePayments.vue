<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { usePaymentsStore } from '@/stores/payments'
import { useModalStore } from '@/stores/modal'
import GameDateFilter from '@/components/my-games/GameDateFilter.vue'
import GameChart from '@/components/my-games/GameChart.vue'
import GameTable from '@/components/my-games/GameTable.vue'
import VSearchInput from '@/components/ui/form-elements/VSearchInput.vue'

onMounted(() => {
    paymentsStore.actionGetPayments(gameId.value)
    paymentsStore.actionGetPaymentsLog(gameId.value)
})

const route = useRoute()
const paymentsStore = usePaymentsStore()
const modal = useModalStore()
const period = ref('day')
const search = ref('')

const gameId = computed(() => route.params.id)
const getPayments = computed(() => paymentsStore.getPayments)
const getPaymentsStats = computed(() => paymentsStore.getPaymentsStats)
const getPaymentsHistory = computed(() => paymentsStore.getPaymentsHistory)

const updateChart = ($event) => {
    if (period.value !== $event) {
        period.value = $event
        let params = {
            gid: gameId.value,
            period: period.value
        }
        paymentsStore.actionGetPaymentsStats(params)
    }
}

const searchHistory = (param = {}, reset = false) => {
    let params = {
        gid: gameId.value,
        uid: search.value,
        ...param
    }
    paymentsStore.actionGetPaymentsHistory(params, reset)
}

const updateSearchValue = (e) => {
    search.value = e
    searchHistory({}, true)
}

const loadMore = () => {
    searchHistory({ offset: getPaymentsHistory.value.offset })
}

const openLog = (type) => {
    modal.toggleModal({ open: true, target: 'payments-log', type })
}
</script>
<template>
    <div class="payments">
        <h1>Payments</h1>
        <div class="balance">
            <p class="b-1-regular">Balance</p>
            <h4>${{ getPayments.balance }}</h4>
            <p class="b-1-medium" @click="openLog">Payment notification log</p>
        </div>
        <div class="charts">
            <div class="item">
                <div class="header">
                    <h4>Install history</h4>
                </div>
                <game-date-filter @update:periodValue="updateChart($event)" />
                <game-chart :charts="getPaymentsStats" />
            </div>
        </div>
        <div class="payments-tables">
            <div class="table-item">
                <h4>Payment History</h4>
                <v-search-input @update:modelValue="updateSearchValue" placeholder="ID" />
                <game-table
                    :data="getPaymentsHistory"
                    :titles="['User', 'Amount of payments', 'Date & time']"
                    @update:data="loadMore"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-payment.scss';
</style>
