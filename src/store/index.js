import { createStore } from 'vuex'

export default createStore({
  state: {
    favourites : [],
    generalIsNightMode : false
  },
  getters: {
  },
  mutations: {
    addToFavs(state , payload){
      console.log('from mutations' , payload , state.favourites)
      state.favourites.push(payload)
    },
    changeNightMode(state , payload){
      state.generalIsNightMode = payload
    }
  },
  actions: {
    addToFavs({commit} , movie){
      console.log(movie)
      commit('addToFavs' , movie)
    },
    changeNightMode({commit} , isNightMode){
      commit('changeNightMode' , isNightMode)
    }
  },
  modules: {
  }
})
