<template>
  <div class="flex flex-col gap-2 pb-5">
    <h1 class="text-2xl md:text-3xl font-semibold font-poppins">
      {{ props.header }}
    </h1>
    <p class="conten text-lg font-poppins ">
      {{ props.content }}
    </p>
    <slot name="list"></slot>
  </div>
</template>
<script setup>
const props = defineProps(["header", "content"]);
</script>
