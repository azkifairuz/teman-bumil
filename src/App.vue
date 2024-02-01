<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <nav class="w-full flex justify-center items-center bg-primary p-5">
    <div class="flex gap-4 items-center">
      <router-link to="/">
        <h1 class="font-poppins text-white font-semibold text-xl">halobunda</h1>
      </router-link> 
    </div>
  </nav>
  <RouterView></RouterView>
  <footer
    class="w-full flex justify-start p-5 mt-auto bg-black text-xl font-semibold text-white gap-4 items-center"
  >
  <img class="w-10" src="./assets/logo_mu.png" alt="">
    <p>Copyright 2024</p>
  </footer>
</template>
