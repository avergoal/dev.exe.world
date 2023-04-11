import {defineStore} from 'pinia'
import {useUserStore} from "@/stores/user";
import {useGameStore} from "@/stores/game";

export const useAppStore = defineStore('app', {
    actions: {
        async init() {
            if (localStorage.token) {
                const user = useUserStore()
                const game = useGameStore()
                const {data} = await this.$axios.post('dev.init')
                user.setUser(data.response.user)
                game.setState('genre',data.response.categories)
                game.setState('mediaTypes',data.response.media_types)
            }
        }
    }
})
