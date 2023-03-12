<template>
  <div class="p-8">
    <input type="text" 
        v-model="keyword"
        placeholder="Search for Meals" 
        class="rounded border-2 border-gray-200 w-full"
        @change="searchMeals()"
    >    
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
  if(keyword.value){
    store.dispatch('searchMeales', keyword.value)
  }
  else{
    store.commit('setSearchedMeals', [])
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
})

</script>
