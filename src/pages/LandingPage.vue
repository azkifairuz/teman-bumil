<template>
  <main class="p-6">
    <div class="w-full flex justify-between items-center">
      <div class="w-1/2">
        <h1 class="text-5xl font-poppins font-bold">ketahui kondisi Kehamilan  anda</h1>
      </div>
      <img 
        class="w-[500px]"
        src="@/assets/hero_image.png" 
        alt=""
      >
    </div>
    <h1 class="text-3xl text-center py-5 font-bold font-poppins">Pilih trimester anda saat ini</h1>
    <div class="w-full content-center justify-items-center grid grid-cols-3">
        <CardTrimester
          v-for="items in trimesterData"
          :key="items.trimester"
          :trimester="items.trimester"
          :weeks="items.weeks"
          :ilustrasi="items.ilustrasi"
        />
    </div>
  </main>

</template>

<script setup>
import tm1 from '@/assets/tm1.png'
import tm2 from '@/assets/tm2.png'
import tm3 from '@/assets/tm3.png'
import CardTrimester from '../components/CardTrimester.vue';

const trimesterData = [
  {
    trimester:"1",
    weeks:"0-12",
    ilustrasi:tm1
  },
  {
    trimester:"2",
    weeks:"13-26",
    ilustrasi:tm2
  },
  {
    trimester:"3",
    weeks:"27-36",
    ilustrasi:tm3
  },
]
</script>