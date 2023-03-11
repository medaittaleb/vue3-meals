<template>
    <article 
          class="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
          
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

        <router-link :to="{ name: 'mealDetails', params: {id: meal.idMeal} }" >
          <h3 class="mt-0.5 text-lg text-gray-900">
            {{ meal.strMeal }} 
          </h3>
        </router-link>

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
</template>

<script setup>

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
})
</script>

<style lang="scss" scoped>

</style>