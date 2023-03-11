<template>
  <div class="p-8">
    <input type="text" 
        v-model="keyword"
        placeholder="Search for Meals" 
        class="rounded border-2 border-gray-200 w-full"
        @change="searchMeals()"
    >    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealCard v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from 'vue';
import { useRoute } from "vue-router";
import MealCard from "../components/MealCard.vue";
import store from '../store'

const route = useRoute();
const keyword = ref('');
const meals = computed( () => store.state.searchedMeals );

function searchMeals() {
  store.dispatch('searchMeales', keyword.value)
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
})

</script>
