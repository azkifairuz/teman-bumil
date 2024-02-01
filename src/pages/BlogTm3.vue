<template>
  <body class="p-6 h-screen">
    <TextTemplateVue
      header="Trimester Satu"
      content="Trimester pertama kehamilan adalah tiga bulan pertama kehamilan yang
        dihitung mulai dari pembuahan hingga 12 minggu. Selama trimester ini,
        sel telur yang telah dibuahi akan berubah dari sekelompok kecil sel
        menjadi janin yang mulai memiliki ciri-ciri manusia. Perubahan dan
        perkembangan yang paling dramatis terjadi selama delapan minggu pertama,
        di mana embrio berkembang dengan cepat."
    />

    <TextTemplateVue
      header="Kondisi Ibu Hamil"
      content="Selama trimester pertama kehamilan, ibu dapat mengalami berbagai gejala dan perubahan pada tubuhnya, contohnya:"
    >
      <template v-slot:list>
        <ul class="list-disc px-8 text-lg font-poppins">
          <li>
            Mual dan muntah: Sering disebut sebagai morning sickness dan yang
            umumnya dialami di pagi hari.
          </li>
          <li>
            Nyeri payudara: Perubahan hormon dapat menyebabkan payudara menjadi
            nyeri, sakit, atau bengkak.
          </li>
          <li>
            Kelelahan: Peningkatan kadar progesteron dapat menyebabkan rasa
            lelah.
          </li>
          <li>
            Sering buang air kecil: Rahim yang semakin membesar memberikan
            tekanan pada kandung kemih sehingga frekuensi buang air kecil
            meningkat.
          </li>
          <li>
            Mengidam makanan: Beberapa ibu mungkin mengalami perubahan dalam
            preferensi makanan mereka.
          </li>
          <li>
            Perubahan suasana hati: Perubahan hormon dapat memengaruhi emosi dan
            menyebabkan perubahan suasana hati.
          </li>
          <li>
            Kembung dan sembelit: Pencernaan yang lebih lambat akibat
            peningkatan kadar progesteron dapat menyebabkan kembung dan
            sembelit.
          </li>
          <li>
            Bercak ringan: Umum terjadi pada ibu dan dapat menjadi tanda
            implantasi.
          </li>
        </ul>
      </template>
    </TextTemplateVue>
    <TextTemplateVue
      header="Penanganan"
      content="jauhin hal2 yang sekiranya bisa memengaruhi mood, perbanyak minum air putih hangat, cari posisi yang nyaman, hirup aromatherapi yang disukain, ciptakan lingkungan yang mendukung, minum vitamin dan tablet tambah darah rutin tiap hari.
Pantangan: terlalu banyak makan makanan yang ber gas, terlalu pedas, terlalu asam, terlalu aktif bergerak, kurang tidur"
    >
    </TextTemplateVue>
  </body>
</template>
<script setup>
import TextTemplateVue from "../components/TextTemplate.vue";

TextTemplateVue;
</script>
