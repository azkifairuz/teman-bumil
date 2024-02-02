<template>
  <body class="p-6 ">
    <TextTemplateVue
      header="Trimester ketiga"
      content="Trimester ketiga kehamilan adalah fase terakhir kehamilan, biasanya berlangsung dari minggu ke 29 hingga 40 atau bulan ke 7, 8, dan 9. Trimester ketiga sering dianggap sebagai trimester yang paling menantang karena pertumbuhan bayi yang cepat serta ketidaknyamanan karena perubahan ukuran perut ini."
    />

    <TextTemplateVue
      header="Kondisi Ibu Hamil"
      content="Selama trimester ketiga kehamilan, ibu dapat mengalami berbagai gejala dan perubahan pada tubuhnya, contohnya:"
    >
      <template v-slot:list>
        <ul class="list-disc px-8 text-lg font-poppins">
          <li>sering sakit punggung</li>
          <li>agak sulit bernafas</li>
          <li>mudah merasa lelah</li>
          <li>sering buang air kecil</li>
          <li>rentang gerak terbatas</li>
          <li>bengkak di kaki, tangan, dan jari2</li>
          <li>janin lebih aktif bergerak, sudah bisa mendengar dan merespon</li>
          <li>kontraksi di akhir minggu kehamilan</li>
        </ul>
      </template>
    </TextTemplateVue>
    <TextTemplateVue
      header="Penanganan"
      content="Beberapa Penanganan yang bisa dilakukan oleh ibu hamil"
    >
      <template v-slot:list>
        <ul class="list-disc px-8 text-lg font-poppins">
          <li>konsul dokter tentang diet yang cocok</li>
          <li>
            cari posisi yang nyaman untuk duduk dan tiduran, kompres dgn air
            bangat kalau perlu
          </li>
          <li>
            taruh bantal dibawah kaki dan tangan dan tinggikan bantal di kepala
          </li>
          <li>lebih baik pakai kloset duduk/ditemani saat BAB/BAK</li>
          <li>lebih baik memakai baju dress yang longgar</li>
        </ul>
      </template>
    </TextTemplateVue>
    <TextTemplateVue
      header="Penanganan"
      content="Beberapa Penanganan yang bisa dilakukan oleh ibu hamil"
    >
      <template v-slot:list>
        <ul class="list-disc px-8 text-lg font-poppins">
          <li>konsul dokter tentang diet yang cocok</li>
          <li>
            cari posisi yang nyaman untuk duduk dan tiduran, kompres dgn air
            bangat kalau perlu
          </li>
          <li>
            taruh bantal dibawah kaki dan tangan dan tinggikan bantal di kepala
          </li>
          <li>lebih baik pakai kloset duduk/ditemani saat BAB/BAK</li>
          <li>lebih baik memakai baju terusan</li>
        </ul>
      </template>
    </TextTemplateVue>
    <TextTemplateVue header="Saran" content="Beberapa Saran:">
      <template v-slot:list>
        <ul class="list-disc px-8 text-lg font-poppins">
          <li>lebih sering ajak janin mengobrol, bernyanyi, bersenandung</li>
          <li>rutin minum tablet tambah darah dan kalsium</li>
          <li>rutin periksakan hb, gula darah, BB, tekanan darah</li>
          <li>lakukan USG</li>
          <li>kurangi pekerjaan yang mengangkat beban berat</li>
          <li>ikuti senam hamil</li>
          <li>
            jika sudah memasuki minggu kelahiran, akan lebih baik jika ayah
            lebih sering "menjenguk" calon anak
          </li>
        </ul>
      </template>
    </TextTemplateVue>
  </body>
</template>
<script setup>
import TextTemplateVue from "../components/TextTemplate.vue";

TextTemplateVue;
</script>
