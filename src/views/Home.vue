<template>
  <div class="flex flex-col p-8 justify-center">
    <input type="text" 
        placeholder="Search for Meals" 
        class="rounded border-2 border-gray-200 w-full"
    >    
    <div class="flex gap-3 mt-3 justify-center ">
      <router-link :to="{ name: 'byLetter', params: { leftter } }" v-for="leftter of letters" :key="leftter">{{ leftter }}</router-link>
    </div>
</div>

</template>

<script setup>
import { computed, onMounted } from 'vue';
import axiosClient from '../axiosClient.js'
import store from '../store';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data);
})

</script>
