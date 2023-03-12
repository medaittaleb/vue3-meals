import axiosClient from '../axiosClient.js'

export function searchMeales({commit}, keyword ) {
  axiosClient.get(`search.php?s=${keyword}`)
  .then( ( { data } ) => {
    commit('setSearchedMeals', data.meals)
  })
}
export function searchMealesByLetter({commit}, leftter ) {
  axiosClient.get(`search.php?f=${leftter}`)
  .then( ( { data } ) => {
    commit('setMealsByLetter', data.meals)
  })
}
export function searchMealesByingredient({commit}, ingredient ) {
  axiosClient.get(`filter.php?i=${ingredient}`)
  .then( ( { data } ) => {
    commit('setMealsByIngredient', data.meals)
  })
}
