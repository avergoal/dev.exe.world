import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
    state: () => ({
        news: Object,
        newsById: Object
    }),
    getters: {
        getNews: (state) => state.news,
        getNewsById: (state) => state.newsById
    },
    actions: {
        async actionGetNews(gid) {
            const { data } = await this.$axios.post('dev.game.news', { gid })
            this.news = data.response.news
        },
        async actionGetNewsById(id) {
            const { data } = await this.$axios.post('dev.game.news.info', { id })
            this.newsById = data.response.result
        },
        async addNews(params) {
            await this.$axios.post('dev.game.news.save', params)
        },
        async deleteNews(params) {
            await this.$axios.post('dev.game.news.delete', params)
        },
        resetNewsById() {
            this.newsById = {}
        }
    }
})
