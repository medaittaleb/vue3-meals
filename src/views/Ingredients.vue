<template>

<div class="p-8">
  <h1 class="text-3xl font-bold tracking-tight text-center text-gray-900 mb-8">Ingredients List :</h1>
  <input type="text" 
        v-model="keyword"
        placeholder="Search for ingredient" 
        class="rounded border-2 border-gray-200 w-full mb-3"
    >  

  <div class="flex gap-3 mt-3 flex-wrap justify-center "> 
    <div v-for="ingredient of computedIngredients" :key="ingredient.idIngredient">
        <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
          class="inline-block bg-gray-100 hover:bg-gray-900 text-gray-900 hover:text-white text-x font-semibold px-3 py-2 rounded border border-gray-900"
          > {{ ingredient.strIngredient }}
        </router-link>
    </div>
  </div>
</div>

</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from 'vue';
import { useRoute } from "vue-router";
import MealCard from "../components/MealCard.vue";
import store from '../store'

import axiosClient from '../axiosClient.js'


const route = useRoute();

const keyword = ref('');
const ingredients = ref( [] );

const computedIngredients = computed( () => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter( ing => 
    ing.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  )
})


onMounted(() => {
  axiosClient.get(`list.php?i=list`)
  .then( ( { data } ) => {
    ingredients.value = data.meals
  })
})

</script>
