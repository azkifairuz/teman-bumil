<template>
  <main class="p-6">
    <div id="home" class="w-full flex flex-col md:flex-row justify-between items-center">
      <div class="md:w-1/2">
        <h1 class="text-3xl md:text-5xl text-start font-poppins font-bold">
          ketahui kondisi Kehamilan anda
        </h1>
      </div>
      <img class="w-[500px]" src="@/assets/hero_image.png" alt="" />
    </div>
    <span class="h-7"></span>
    <h1
      id="trimester"
      class="text-3xl md:text-center pb-5 pt-2 font-bold font-poppins text-start"
    >
      Pilih trimester anda saat ini
    </h1>
    <div
      class="w-full content-center justify-items-center gap-4 grid grid-cols-1 md:grid-cols-3"
    >
      <CardTrimester
        v-for="items in trimesterData"
        :key="items.trimester"
        :trimester="items.trimester"
        :weeks="items.weeks"
        :ilustrasi="items.ilustrasi"
        @blog-tm="goToBlog(items.url)"
      />
    </div>
    <h1
      id="perkembangan"
      class="text-3xl pt-10 md:text-center pb-5 font-bold font-poppins text-start"
    >
      Perkembangan Janin
    </h1>
    <div class="w-full flex justify-center">
      <img class="" src="../assets/perkembangan_janin.jpg" alt="" srcset="" />
    </div>
   <div class="overflow-scroll">
    <h1
      id="tahap"
      class="text-3xl pt-10 md:text-center pb-5 font-bold font-poppins text-start"
    >
      Tahap Persalinan
    </h1>
    <TextTemplateVue
      header="kala 1"
      content="Fase ini sering disebut sebagai fase pembukaan mulut rahim, yang sudah dimulai sejak adanya kontraksi dari rahim. Fase ini terbagi menjadi dua tahapan, yaitu Kala 1 laten dan Kala 1 aktif. Kala 1 laten merupakan tahapan lambat ketika pembukaan mulut rahim kurang dari 4 cm, dan butuh setidaknya 8 jam untuk mengalami kemajuan pembukaan bagi bunda yang pertama kali melahirkan. Bagi yang sudah pernah melahirkan, tahapan ini bisa berjalan lebih cepat. Pada Kala 1 aktif, terjadi pembukaan mulut rahim 4-10 cm, yang disertai dengan penurunan bagian bawah dari janin."
    />
    <TextTemplateVue
      header="kala 2"
      content="Setelah fase pembukaan sudah lengkap, masuklah Kala dua, yaitu tahapan pengeluaran janin. Apabila muncul rasa ingin mengejan yang semakin kuat, bunda harus mengikuti arahan dari bidan yang membantu jalannya persalinan."
    />
    <TextTemplateVue
      header="kala 3"
      content="Fase ketiga dimulai setelah bayi lahir. Tahapan ini merupakan proses pengeluaran plasenta. Proses ini berlangsung sekitar 6-15 menit setelah bayi lahir, dan tak boleh lebih dari 30 menit. Jika lebih, kemungkinan komplikasi seperti perdarahan dapat terjadi."
    />
    <TextTemplateVue
      header="kala 4"
      content="Setelah plasenta dikeluarkan, maka bunda perlu menjalani observasi selama 2 jam setelah kelahiran berlangsung. Pada tahapan ini, komplikasi masih berlanjut, sehingga perlu dilakukan monitoring ketat terhadap tanda-tanda vital (tekanan darah, nadi, dan laju napas), kontraksi uterus, maupu banyaknya perdarahan yang keluar."
    />
   </div>
   <div class="overflow-scroll">
    <h1
      id="tahap"
      class="text-3xl pt-10 md:text-center pb-5 font-bold font-poppins text-start"
    >
      Rekomendasi vitamin
    </h1>
    <TextTemplateVue
      header="kala 1"
      content="beberapa rekomendasi vitamin yang bisa bunda konsumsi:"
    >
    <template v-slot:list>
      <ul class="list-disc px-8 text-lg font-poppins">
        <li>Blackmores Pregnancy</li>
        <li>Breastfeeding gold improve formula</li>
        <li>promavit</li>
        <li>Folami Genio</li>
        <li>Nature's Plus Prenatal Complex</li>
        <li>Prolacta for mothe</li>
        <li>Folavit</li>
        <li>Blackmores Bio D3 1000 IU</li>
        <li>Blacmores Vitamin C 500mg</li>
      </ul>
    </template>
  </TextTemplateVue>
   </div>
  </main>
</template>

<script setup>
import tm1 from "@/assets/tm1.png";
import tm2 from "@/assets/tm2.png";
import tm3 from "@/assets/tm3.png";
import CardTrimester from "@/components/CardTrimester.vue";
import { router } from "@/router";
import TextTemplateVue from "@/components/TextTemplate.vue";

function goToBlog(url) {
  router.push({
    name: url,
  });
}
const trimesterData = [
  {
    trimester: "1",
    weeks: "0-12",
    ilustrasi: tm1,
    url: "tmsatu",
  },
  {
    trimester: "2",
    weeks: "13-28",
    ilustrasi: tm2,
    url: "tmdua",
  },
  {
    trimester: "3",
    weeks: "29-36",
    ilustrasi: tm3,
    url: "tmtiga",
  },
];
</script>
