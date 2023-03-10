<template>
  <div class="bg-gray-100 min-h-full">
    <Navbar></Navbar>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup >
import Navbar from './Navbar.vue';

</script>

<style lang="scss" scoped>

</style>