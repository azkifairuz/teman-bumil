<script setup>
import TextTemplateVue from '@/components/TextTemplate.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const idTahapan = route.params.idTahapan
const tahapanData= [
  {
    tahapan: 1,
    content:"Fase ini sering disebut sebagai fase pembukaan mulut rahim, yang sudah dimulai sejak adanya kontraksi dari rahim. Fase ini terbagi menjadi dua tahapan, yaitu Kala 1 laten dan Kala 1 aktif. Kala 1 laten merupakan tahapan lambat ketika pembukaan mulut rahim kurang dari 4 cm, dan butuh setidaknya 8 jam untuk mengalami kemajuan pembukaan bagi bunda yang pertama kali melahirkan. Bagi yang sudah pernah melahirkan, tahapan ini bisa berjalan lebih cepat. Pada Kala 1 aktif, terjadi pembukaan mulut rahim 4-10 cm, yang disertai dengan penurunan bagian bawah dari janin."
  },
  {
    tahapan: 2,
    content: "Setelah fase pembukaan sudah lengkap, masuklah Kala dua, yaitu tahapan pengeluaran janin. Apabila muncul rasa ingin mengejan yang semakin kuat, bunda harus mengikuti arahan dari bidan yang membantu jalannya persalinan.",
  },
  {
    tahapan: 3,
    content: "Fase ketiga dimulai setelah bayi lahir. Tahapan ini merupakan proses pengeluaran plasenta. Proses ini berlangsung sekitar 6-15 menit setelah bayi lahir, dan tak boleh lebih dari 30 menit. Jika lebih, kemungkinan komplikasi seperti perdarahan dapat terjadi.",
  },
  {
    tahapan: 4,
    content: "Setelah plasenta dikeluarkan, maka bunda perlu menjalani observasi selama 2 jam setelah kelahiran berlangsung. Pada tahapan ini, komplikasi masih berlanjut, sehingga perlu dilakukan monitoring ketat terhadap tanda-tanda vital (tekanan darah, nadi, dan laju napas), kontraksi uterus, maupu banyaknya perdarahan yang keluar.",
  }
]

const contentData = tahapanData.filter((item)=> item.tahapan == idTahapan)[0]
console.log(contentData);
</script>

<template>
  <main class="p-6 h-screen">
    <div class="overflow-scroll">
    <h1
      id="tahap"
      class="text-3xl pt-10 md:text-center pb-5 font-bold font-poppins text-start"
    >
      Tahap Persalinan
    </h1>
    <TextTemplateVue
      :header="`Kala ${contentData.tahapan}`"
      :content="contentData.content"
    />
   </div>
  </main>
</template>