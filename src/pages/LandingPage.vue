<template>
  <main class="p-6">
    <div
      id="home"
      class="w-full flex flex-col md:flex-row justify-between items-center"
    >
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
        :trimester="`Trimester ${items.trimester}`"
        :weeks="`minggu ke ${items.weeks}`"
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
    <h1
      id="trimester"
      class="text-3xl md:text-center pb-5 pt-2 font-bold font-poppins text-start"
    >
      Tahapan Persalinan
    </h1>
    <div
      class="w-full content-center justify-items-center gap-4 grid grid-cols-1 md:grid-cols-3"
    >
      <CardTrimester
        v-for="items in tahapanData"
        :key="items.tahapan"
        :trimester="`Tahapan ${items.tahapan}`"
        :ilustrasi="items.ilustrasi"
        @blog-tm="goToTahapan(items.tahapan)"
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
import tahap1 from "@/assets/tahap1.png";
import tahap2 from "@/assets/tahap2.png";
import tahap3 from "@/assets/tahap3.png";
import tahap4 from "@/assets/tahap3.png";
import CardTrimester from "@/components/CardTrimester.vue";
import { router } from "@/router";
import TextTemplateVue from "@/components/TextTemplate.vue";

function goToBlog(url) {
  router.push({
    name: url,
  });
}
function goToTahapan(params) {
  router.push({
    name: 'tahapan',
    params: {idTahapan:params}
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
const tahapanData = [
  {
    tahapan: 1,
    ilustrasi: tahap1,
  },
  {
    tahapan: 2,
    ilustrasi: tahap2,
  },
  {
    tahapan: 3,
    ilustrasi: tahap3,
  },
  {
    tahapan: 4,
    ilustrasi: tahap4,
  },
];
</script>
