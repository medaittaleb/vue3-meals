<template>
  <div class="flex flex-col p-8 justify-center">
    <section>
      <div class="relative mx-auto max-w-screen-xl px-4 py-8">
        <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              :src="meal.strMealThumb" 
              :alt="meal.strMeal"
              class="aspect-square w-full rounded-xl object-cover"
            />
          </div>

          <div class="sticky pt-6 top-0">
            <a
              :href="meal.strYoutube"
              target="_blank"
              class="rounded-full border border-red-500 bg-red-500 px-3 py-0.5 mx-1 text-xs font-medium tracking-wide text-white hover:bg-red-700"
            >
              Youtube
            </a>
            <a
              v-if="meal.strSource"
              :href="meal.strSource"
              target="_blank"
              class="rounded-full border border-yellow-600 bg-yellow-600 px-3 py-0.5 mx-1 text-xs font-medium tracking-wide text-white hover:bg-yellow-700"
            >
              Source
            </a>

            <div class="mt-8 flex justify-between">
              <div class="max-w-[35ch] space-y-2">
                <h1 class="text-xl font-bold sm:text-2xl">
                  {{ meal.strMeal }}
                </h1>   
                <p class="text-m">Meal ID : #{{ meal.idMeal }}</p>            
              </div>
            </div>

            <form class="mt-8">
              <fieldset>
                <legend class="mb-1 text-m font-medium">Tags</legend>

                <div class="flex flex-wrap gap-1">
                  <label for="color_tt" class="cursor-pointer">
                    <span
                      class="group bg-blue-200 inline-block rounded-full border px-3 py-1 text-sm font-medium peer-checked:bg-black peer-checked:text-white"
                    >
                      {{ meal.strTags }}
                    </span>
                  </label>
                </div>
              </fieldset>

              <fieldset class="mt-4">
                <legend class="mb-1 text-sm font-medium">Country : </legend>

                <div class="flex flex-wrap gap-1">
                  <label for="size_xs" class="cursor-pointer">
                    <span
                      class="group bg-purple-200 inline-block rounded-full border px-3 py-1 text-sm font-medium peer-checked:bg-black peer-checked:text-white"
                    >
                    {{ meal.strArea }}
                    </span>
                  </label>

                </div>
              </fieldset>

              <fieldset class="mt-4">
                <legend class="mb-1 text-sm font-medium">Category : </legend>

                <div class="flex flex-wrap gap-1">
                  <label for="size_xs" class="cursor-pointer">
                    <span
                      class="group bg-orange-200 inline-block rounded-full border px-3 py-1 text-sm font-medium peer-checked:bg-black peer-checked:text-white"
                    >
                    {{ meal.strCategory }}
                    </span>
                  </label>

                </div>
              </fieldset>

             
            </form>
          </div>
        </div>

        <div class="relative overflow-x-auto">
            <h2 class="text-x font-bold sm:text-xl mt-5 mb-2">Ingredients : </h2>
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-100 uppercase bg-gray-900 ">
                    <tr>
                        <th class="px-6 py-3">
                          Ingredient
                        </th>
                        <th class="px-6 py-3">
                          Measure
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-200 text-gray-900 font-medium" v-for="(nmb, inx) in 20" :key="nmb" >
                        <th class="px-6 py-4 whitespace-nowrap" v-if="meal[`strIngredient${inx + 1}`]">
                          {{ inx + 1 }} - {{ meal[`strIngredient${inx + 1}`] }}
                        </th>
                        <td class="px-6 py-4" v-if="meal[`strIngredient${inx + 1}`]">
                          {{ meal[`strMeasure${inx + 1}`] }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-4">
          <div class="prose max-w-none">
            <h2 class="text-x font-bold sm:text-xl mb-2">Instructions : </h2>
            <p>
              {{ meal.strInstructions }}
            </p>
          </div>
        </div>
      </div>
    </section>
</div>

</template>

<script setup>

import { onMounted, ref } from 'vue';
import { useRoute } from "vue-router";
import axiosClient from '../axiosClient.js'



const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then( ( { data } ) => {
      meal.value = data.meals[0] || {};
    })
})

</script>
