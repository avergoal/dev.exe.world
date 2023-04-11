import {defineStore} from "pinia";

export const useGameStore = defineStore('game', {
    state: () => ({
        genre: Array,
        mediaTypes: Array,
        games:Array
    }),
    getters:{
        getGames:(state)=>state.games,
        getGenre:(state)=>state.genre,
        getMediaTypes:(state)=>state.mediaTypes
    },
    actions: {
        setState(type, value) {
            this[type] = value
        },
        async getMyGames(){
            const {data} = await this.$axios.post('dev.my_games')
            this.games = data.response.games.map(el => {
                el.genre = this.genre.find(item => item.cid === parseInt(el.type)).title
                return el
            })
        },
        async addGamed(params){
            const {data} = await this.$axios.post('dev.new_game.save',params)
            console.log(data)
        }
    }
})