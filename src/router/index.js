import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/documentation',
            component: () => import('@/views/DocumentationView.vue'),
            children: [
                {
                    path: '',
                    name: 'Documentation',
                    component: () => import('@/components/documentation/DocumentationComponent.vue')
                },
                {
                    path: 'placing',
                    name: 'Placing',
                    component: () =>
                        import('@/components/documentation/PlacingTheGameComponent.vue')
                }
            ]
        },
        {
            path: '/my-games',
            name: 'MyGames',
            component: () => import('@/views/my-games/MyGames.vue')
        },
        {
            path: '/my-games/add',
            name: 'MyGamesAdd',
            component: () => import('@/views/my-games/MyGamesAdd.vue')
        },
        {
            path: '/my-games/game/:id',
            name: 'Game',
            component: () => import('@/views/my-games/Game.vue'),
            children: [
                {
                    path: 'info',
                    name: 'GameInfo',
                    component: () => import('@/components/my-games/GameInfo.vue')
                },
                {
                    path: 'settings',
                    name: 'GameSettings',
                    component: () => import('@/components/my-games/GameSettings.vue')
                },
                {
                    path: 'statistics',
                    name: 'GameStatistics',
                    component: () => import('@/components/my-games/GameStatistics.vue')
                },
                {
                    path: 'news',
                    name: 'GameNews',
                    component: () => import('@/components/my-games/GameNews.vue')
                },
                {
                    path: 'payments',
                    name: 'GamePayments',
                    component: () => import('@/components/my-games/GamePayments.vue')
                },
                {
                    path: 'administrators',
                    name: 'GameAdministrators',
                    component: () => import('@/components/my-games/GameAdministrators.vue')
                },
                {
                    path: 'status',
                    name: 'GameStatus',
                    component: () => import('@/components/my-games/GameStatus.vue')
                },
                {
                    path: 'help',
                    name: 'GameHelp',
                    component: () => import('@/components/my-games/GameHelp.vue')
                }
            ]
        }
    ]
})

export default router
