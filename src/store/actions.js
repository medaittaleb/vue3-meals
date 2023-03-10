import axiosClient from '../axiosClient.js'

export function searchMeales({commit}, keyword ) {
  axiosClient.get(`search.php?s=${keyword}`)
  .then( ( { data } ) => {
    commit('setSearchedMeals', data.meals)
  })
}
