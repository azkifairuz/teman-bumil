<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <nav class="w-full flex justify-center items-center bg-primary p-5">
    <div class="flex gap-4 items-center">
     
      <h1 class="font-poppins text-white font-semibold text-xl">halobunda</h1>
    </div>
  </nav>
  <RouterView></RouterView>
  <footer class="w-full flex text-white justify-center mt-10 py-5 gap-4 items-center bg-red-700">
    <img class="h-16" src="./assets/logo_mu.png" alt="">
    <p>Copyright 2024</p>
  </footer>
</template>


