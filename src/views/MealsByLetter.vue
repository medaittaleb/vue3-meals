<template>

  <div class="flex gap-3 mt-3 justify-center ">
    <router-link :to="{ name: 'byLetter', params: { leftter } }" v-for="leftter of letters" :key="leftter">{{ leftter }}</router-link>
  </div>

  <div v-if="meals">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
  <div v-else>
    <div class="text-center p-8">
      <h2 class="bg-orange-100 p-2 text-x font-medium">No Meals found for the letter {{ route.params.leftter }}</h2>
    </div>
  </div>

</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, watch } from 'vue';
import { useRoute } from "vue-router";
import MealCard from "../components/MealCard.vue";
import store from '../store'

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

const meals = computed( () => store.state.mealsByLetter );

watch(route, () => {
 store.dispatch('searchMealesByLetter', route.params.leftter)
})

onMounted(() => {
 store.dispatch('searchMealesByLetter', route.params.leftter)
})

</script>
