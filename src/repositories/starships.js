import { defineStore } from 'pinia'
import { api } from '../boot/axios'

export const useStarships = defineStore('starship', {
    state: () => ({
        starhipsList: [],   
        detailStarship: {}, 
        starshipData: [],
    }),
    actions: {
        fetchStarships (currentPage) {
            return api.get('/starships/?page=' + currentPage)
        },
        fetchDetailStarships (id) {
            return api.get('/starships/' + id)
        },
        searchStarships (query) {
            return api.get('/starships/?search=' + query)
        },
    }
})