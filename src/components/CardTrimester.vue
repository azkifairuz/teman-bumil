<template>
    <div @click="goToBlog" class="w-52 flex text-center flex-col p-2 rounded-lg border cursor-pointer hover:shadow-2xl shadow-xl hover:shadow-black ">
      <img :src="props.ilustrasi" alt="">
      <h1 class="text-2xl pt-4 font-semibold font-poppins">{{props.trimester}}</h1>
      <p class="font-poppins"> {{ props.weeks }}</p>
    </div>
</template>

<script setup>
const props = defineProps(
    ['trimester','weeks','ilustrasi']
)   
const emit = defineEmits(['blogTm'])
function goToBlog() {
    emit('blogTm')
}
</script>