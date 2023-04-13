import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
    state: () => ({
        genre: Array,
        games: Array,
        gameInfo: Object,
        gameSettings: Object,
        gameStatistics: Object
    }),
    getters: {
        getGames: (state) => state.games,
        getGenre: (state) => state.genre,
        getGameInfo: (state) => state.gameInfo,
        getGameSettings: (state) => state.gameSettings,
        getGameStatistics: (state) => state.gameStatistics
    },
    actions: {
        setState(type, value) {
            this[type] = value
        },
        async actionGetGames() {
            const { data } = await this.$axios.post('dev.my_games')
            this.games = data.response.games.map((el) => {
                el.genre = this.genre.find((item) => item.cid === parseInt(el.type)).title
                return el
            })
        },
        async addGamed(params) {
            await this.$axios.post('dev.new_game.save', params)
        },
        async updateGameInfo(params) {
            const { data } = await this.$axios.post('dev.new_game.save', params)
            console.log(data)
        },
        async actionGetGameInfo(gid) {
            const { data } = await this.$axios.post('dev.game.info', { gid })
            this.gameInfo = data.response.result
        },
        async actionGetGameSettings(gid) {
            const { data } = await this.$axios.post('dev.game.settings', { gid })
            this.gameSettings = data.response.result
        },
        async saveSettings(params) {
            const { data } = await this.$axios.post('dev.game.settings.save', params)
            this.gameSettings = data.response.result
        },
        async actionGetGameStatistics(params) {
            const { data } = await this.$axios.post('dev.game.statistics', params)
            this.gameStatistics = data.response.statistics
        }
    }
})