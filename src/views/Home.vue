<template>
  <div class="flex flex-col p-8 justify-center">
    
    <div class="flex gap-3 mt-3 justify-center ">
      <router-link :to="{ name: 'byLetter', params: { leftter } }" v-for="leftter of letters" :key="leftter">{{ leftter }}</router-link>
    </div>
</div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient.js'
import store from '../store';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data);
})

</script>
