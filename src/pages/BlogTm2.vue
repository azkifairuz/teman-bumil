<template>
  <body class="p-6">
    <TextTemplateVue
      header="Trimester kedua"
      content="Trimester kedua kehamilan berlangsung dari minggu ke-13 hingga ke-28. Selama trimester ini, janin tumbuh dengan cepat, dan ibu mungkin mulai merasa lebih baik karena beberapa gejala awal kehamilan, seperti mual dan kelelahan, mulai mereda."
    />

    <TextTemplateVue
      header="Kondisi Ibu Hamil"
      content="Selama trimester kedua kehamilan, ibu dapat mengalami berbagai gejala dan perubahan pada tubuhnya, contohnya:"
    >
      <template v-slot:list>
        <ul class="list-disc px-8 text-lg font-poppins">
          <li>
            Mual muntah berkurang
          </li>
          <li>
            Kenaikkan BB 1,5-2kg/bulan
          </li>
          <li>
            Perut dan payudara mulai membesar
          </li>
          <li>
            Puting menghitam
          </li>
          <li>
            Muncul garis dari pusar ke kemaluan
          </li>
          <li>
            Muncul strechmark di perut, bokong, payudara, paha (kemungkinan strechmark ini bakal bikin bumil merasa gatal)
          </li>
          <li>
            Minggu ke 20 mulai berasa pergerakan janin
          </li>
          <li>
            Peningkatan hormon pertumbuhan rambut
          </li>
          <li>
            Sakit kepala, sakit pinggang, kaki kram
          </li>
          <li>
            Keputihan
          </li>
          <li>
            Infeksi saluran kemih ditandai dgn kesulitan menahan BAK, urin berbau menyengat, nyeri saat berkemih
          </li>
          <li>
            Kontraksi palsu
          </li>
        </ul>
      </template>
    </TextTemplateVue>
    <TextTemplateVue
      header="Penanganan"
      content="Beberapa Penanganan yang bisa dilakukan oleh ibu hamil"
    >
    <template v-slot:list>
      <ul class="list-disc px-8 text-lg font-poppins">
          <li>
            konsul dokter tentang diet yang cocok
          </li>
          <li>
            Kalau strechmark gatal, usahakan jangan digaruk. Rutin pakai minyak zaitun/lotion untuk mengurangi gatal dan memudarkan strechmark 
          </li>
          <li>
            Puting menghitam itu normal, jangan panik
          </li>
          <li>
            kalau sakit kepala, sakit pinggang, kaki kram bisa dikurangi dengan duduk tegak, tidur miring ke satu sisi, tidak mengangkat beban berat, kurangi penggunaan high heels, peregangan otot betis sebelum tidur, kompres menggunakan air hangat di bagian yang nyeri atau mandi air hangat
          </li>
          <li>
            saat pusing bergerak dengan perlahan, perbanyak minum air putih, kurangi aktivitas yang berdiri terlalu lama
          </li>
          <li>
            keputihan itu normal, tapi kalau berbau menyengat, berwarna kehijauan atau nyeri, segera periksa ke dokter
          </li>
          <li>
            Infeksi saluran kemih harus segera diperiksakan ke dokter
          </li>
        </ul>
    </template>
    </TextTemplateVue>
    <TextTemplateVue
      header="Sedikit Saran"
      content="seulalu rutin cek hb, gula darah, BB dan tekanan darah"
    />
  </body>
</template>
<script setup>
import TextTemplateVue from "../components/TextTemplate.vue";

TextTemplateVue;
</script>
