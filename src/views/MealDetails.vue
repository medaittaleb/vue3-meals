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

          <div class="sticky top-0">
            <a
              :href="meal.strYoutube"
              target="_blank"
              class="rounded-full border border-red-500 bg-red-500 px-3 py-0.5 text-xs font-medium tracking-wide text-white hover:bg-red-700"
            >
              Youtube
            </a>

            <div class="mt-8 flex justify-between">
              <div class="max-w-[35ch] space-y-2">
                <h1 class="text-xl font-bold sm:text-2xl">
                  {{ meal.strMeal }}
                </h1>

                <p class="text-sm">Highest Rated Product</p>

               
              </div>

              <p class="text-lg font-bold">$119.99</p>
            </div>

            <div class="mt-4">
              <div class="prose max-w-none">
                <p>
                  {{ meal.strInstructions }}
                </p>
              </div>
            </div>

            <form class="mt-8">
              <fieldset>
                <legend class="mb-1 text-m font-medium">Tags</legend>

                <div class="flex flex-wrap gap-1">
                  <label for="color_tt" class="cursor-pointer">
                    <span
                      class="group inline-block rounded-full border px-3 py-1 text-sm font-medium peer-checked:bg-black peer-checked:text-white"
                    >
                      {{ meal.strTags }}
                    </span>
                  </label>
                </div>
              </fieldset>

              <fieldset class="mt-4">
                <legend class="mb-1 text-sm font-medium">Size</legend>

                <div class="flex flex-wrap gap-1">
                  <label for="size_xs" class="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_xs"
                      class="peer sr-only"
                    />

                    <span
                      class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                    >
                      XS
                    </span>
                  </label>

                  <label for="size_s" class="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_s"
                      class="peer sr-only"
                    />

                    <span
                      class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                    >
                      S
                    </span>
                  </label>

                  <label for="size_m" class="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_m"
                      class="peer sr-only"
                    />

                    <span
                      class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                    >
                      M
                    </span>
                  </label>

                  <label for="size_l" class="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_l"
                      class="peer sr-only"
                    />

                    <span
                      class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                    >
                      L
                    </span>
                  </label>

                  <label for="size_xl" class="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_xl"
                      class="peer sr-only"
                    />

                    <span
                      class="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                    >
                      XL
                    </span>
                  </label>
                </div>
              </fieldset>

              <div class="mt-8 flex gap-4">
                <div>
                  <label for="quantity" class="sr-only">Qty</label>

                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value="1"
                    class="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <button
                  type="submit"
                  class="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                >
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <pre>{{ meal }}</pre>
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
