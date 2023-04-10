<script setup>
import GameDateFilter from '@/components/my-games/GameDateFilter.vue'
import GameChart from '@/components/my-games/GameChart.vue'
import GameTable from '@/components/my-games/GameTable.vue'
import VSearchInput from '@/components/ui/form-elements/VSearchInput.vue'

const charts = [
    { height: '144', time: '03:30 pm' },
    { height: '78', time: '03:30 pm' },
    { height: '230', time: '03:30 pm' },
    { height: '182', time: '03:30 pm' },
    { height: '318', time: '03:30 pm' },
    { height: '81', time: '03:30 pm' },
    { height: '278', time: '03:30 pm' },
    { height: '144', time: '03:30 pm' },
    { height: '78', time: '03:30 pm' },
    { height: '230', time: '03:30 pm' },
    { height: '182', time: '03:30 pm' },
    { height: '318', time: '03:30 pm' },
    { height: '81', time: '03:30 pm' },
    { height: '278', time: '03:30 pm' }
]

const amount = [
    { id: 'ID39401', amount: '$250.00', transfer: '$220.00' },
    { id: 'ID39401', amount: '$250.00', transfer: '$220.00' },
    { id: 'ID39401', amount: '$250.00', transfer: '$220.00' },
    { id: 'ID39401', amount: '$250.00', transfer: '$220.00' },
    { id: 'ID39401', amount: '$250.00', transfer: '$220.00' }
]
const payment = [
    { id: 'ID39401', amount: '$250.00', date: '12.03.2021 / 12:34 am' },
    { id: 'ID39401', amount: '$250.00', date: '12.03.2021 / 12:34 am' },
    { id: 'ID39401', amount: '$250.00', date: '12.03.2021 / 12:34 am' },
    { id: 'ID39401', amount: '$250.00', date: '12.03.2021 / 12:34 am' }
]
</script>
<template>
    <div class="payments">
        <h1>Payments</h1>
        <div class="balance">
            <p class="b-1-regular">Balance</p>
            <h4>$293,00</h4>
            <p class="b-1-medium">Payment notification log</p>
        </div>
        <div class="charts">
            <div class="item">
                <div class="header">
                    <h4>Install history</h4>
                    <p class="b-1-medium">04.12.2021</p>
                </div>
                <game-date-filter />
                <game-chart :charts="charts" />
            </div>
        </div>
        <div class="payments-tables">
            <div class="table-item">
                <h4>Amount of payments</h4>
                <v-search-input placeholder="ID or Username" />
                <game-table
                    :data="amount"
                    :titles="['User', 'Amount of payments', 'To transfer']"
                />
            </div>
            <div class="table-item">
                <h4>Payment History</h4>
                <v-search-input placeholder="ID or Username" />
                <game-table
                    :data="payment"
                    :titles="['User', 'Amount of payments', 'Date & time']"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import './scss/game-payment.scss';
</style>
