<template>

  <div v-if="meals">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
  <div v-else>
    <div class="text-center p-8">
      <h2 class="bg-orange-100 p-2 text-x font-medium">No Meals found for this ingredient </h2>
    </div>
  </div>

</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted } from 'vue';
import { useRoute } from "vue-router";
import MealCard from "../components/MealCard.vue";
import store from '../store'

const route = useRoute();
const meals = computed( () => store.state.mealsByIngredient );

onMounted(() => {
 store.dispatch('searchMealesByingredient', route.params.ingredient)
})

</script>
