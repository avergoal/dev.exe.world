import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { computed } from 'vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/auth',
            name: 'Auth',
            component: () => import('@/views/AuthView.vue')
        },
        {
            path: '/docs/:path(.*)?',
            name: 'Documentation',
            component: () => import('@/views/DocumentationView.vue')
            // children: [
            //     {
            //         path: '',
            //         name: 'Documentation',
            //         component: () => import('@/components/documentation/DocumentationComponent.vue')
            //     },
            //     {
            //         path: 'placing',
            //         name: 'Placing',
            //         component: () =>
            //             import('@/components/documentation/PlacingTheGameComponent.vue')
            //     }
            // ]
        },
        {
            path: '/my-games',
            name: 'MyGames',
            component: () => import('@/views/my-games/MyGames.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/my-games/add',
            name: 'MyGamesAdd',
            component: () => import('@/views/my-games/MyGamesAdd.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/my-games/game/:id',
            name: 'Game',
            component: () => import('@/views/my-games/GameView.vue'),
            meta: { requiresAuth: true },
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
                    path: 'dynamics',
                    name: 'GameDynamics',
                    component: () => import('@/components/my-games/GameDynamics.vue')
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
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    const isLogged = computed(() => {
        return authStore.getIsLogged
    })
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (isLogged.value) {
            next()
        } else {
            next('/auth')
        }
    } else {
        if (to.name === 'Auth' && isLogged.value) {
            next('/')
        } else {
            next()
        }
    }
})

export default router
