<script setup>
import { RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="w-full flex justify-center items-center bg-[#dd2d4a] p-5">
    <div class="flex gap-4 items-center">
      <!-- <img class="h-16" src="./assets/logo_mu.png" alt=""> -->
      <h1 class="font-poppins text-white font-semibold text-xl">halobunda</h1>
    </div>
  </nav>
  <RouterView></RouterView>  
</template>


