<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold tracking-tight text-center text-gray-900 mb-4">Random Meals :</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axiosClient from '../axiosClient.js'
import MealCard from "../components/MealCard.vue";
const meals = ref([]);
onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }) => meals.value.push(data.meals[0]));
  }
});
</script>
