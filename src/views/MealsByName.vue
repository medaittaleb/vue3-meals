<template>
  <div class="p-8">
    <input type="text" 
        placeholder="Search for Meals" 
        class="rounded border-2 border-gray-200 w-full"
        @change="searchMeals()"
    >    

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <article 
          class="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          v-for="meal of meals" :key="meal.idMeal"
        >
      <img
        :src="meal.strMealThumb" 
        :alt="meal.strMeal"
        class="h-56 w-full object-cover"
      />

      <div class="bg-white p-4 sm:p-6">
        <time datetime="2022-10-10" class="block text-xs text-gray-500">
          <b>Pays : </b>{{ meal.strArea }} - <b>Category : </b>{{ meal.strCategory }}
        </time>

        <a href="#">
          <h3 class="mt-0.5 text-lg text-gray-900">
            {{ meal.strMeal }}
          </h3>
        </a>

        <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
          sed nulla.
        </p>
        <a
        :href="meal.strYoutube"
          class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-red-600"
        >
          Youtube
          <span
            aria-hidden="true"
            class="block transition group-hover:translate-x-0.5"
          >
            &rarr;
          </span>
        </a>
      </div>
    </article>

    </div>

    

  </div>

  
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from 'vue';
import { useRoute } from "vue-router";
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
