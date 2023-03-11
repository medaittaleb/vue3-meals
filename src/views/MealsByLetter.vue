<template>

  <div class="flex gap-3 mt-3 justify-center ">
    <router-link :to="{ name: 'byLetter', params: { leftter } }" v-for="leftter of letters" :key="leftter">{{ leftter }}</router-link>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
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
