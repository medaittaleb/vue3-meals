<template>
  <div class="flex flex-col p-8 justify-center">
    
  </div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient.js'
import store from '../store';

const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response.data);
})

</script>
