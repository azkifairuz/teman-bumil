<script setup>
import { ref, computed } from "vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
const showMobileMenu = ref(false);

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
const showBackButton = computed(() => {
  return route.path !== "/";
});
</script>

<template>
  <nav
    class="w-full fixed top-0 left-0 right-0 flex items-center bg-primary p-5"
    :class="showBackButton ? 'justify-center' : 'justify-between'"
  >
    <router-link v-show="showBackButton" to="/" class="w-full">
      <div class="flex items-center w-full justify-start cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#ffffff"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
        <h1 class="font-poppins text-white font-semibold text-xl">back</h1>
      </div>
    </router-link>
    <div
      :class="{
        'flex flex-col md:flex-row w-full justify-between': !showBackButton,
      }"
    >
      <div class="flex justify-between">
        <router-link to="/">
          <h1 class="font-poppins text-white font-semibold text-xl">
            halobunda
          </h1>
        </router-link>
        <div v-show="!showBackButton" @click="toggleMobileMenu" class="cursor-pointer md:hidden">
          <svg
            v-if="!showMobileMenu"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <ul
      v-show="!showBackButton"
        class="font-poppins hidden md:flex justify-evenly gap-4 text-white flex-row"
      >
        <a href="#home" class="cursor-pointer p-2 rounded-sm hover:bg-red-700"
          >Home</a
        >
        <a
          href="#trimester"
          class="cursor-pointer p-2 rounded-sm hover:bg-red-700"
          >Trimester</a
        >
        <a
          href="#perkembangan"
          class="cursor-pointer p-2 rounded-sm hover:bg-red-700"
          >Perkembangan Janin</a
        >
        <a href="#tahap" class="cursor-pointer p-2 rounded-sm hover:bg-red-700"
          >Tahap persalinan</a
        >
      </ul>
      <ul
        v-show="!showBackButton && showMobileMenu"
        class="font-poppins justify-evenly gap-4 text-white flex flex-col md:flex-row"
      >
        <a href="#home" class="cursor-pointer p-2 rounded-sm hover:bg-red-700"
          >Home</a
        >
        <a
          href="#trimester"
          class="cursor-pointer p-2 rounded-sm hover:bg-red-700"
          >Trimester</a
        >
        <a
          href="#perkembangan"
          class="cursor-pointer p-2 rounded-sm hover:bg-red-700"
          >Perkembangan Janin</a
        >
        <a href="#tahap" class="cursor-pointer p-2 rounded-sm hover:bg-red-700"
          >Tahap persalinan</a
        >
      </ul>
    </div>
  </nav>
  <main class="mt-16">
    <RouterView></RouterView>
  </main>
  <footer
    class="w-screen flex justify-start p-5 mt-auto bg-black text-xl font-semibold text-white gap-4 items-center"
  >
    <img class="w-10" src="./assets/logo_mu.png" alt="" />
    <p>Copyright 2024</p>
  </footer>
</template>
