<script setup>
const type = defineProps({
  name: String,
  course: String,
  role: String,
  path: String,
});
</script>

<template>
  <div class="hov-hl rounded-lg py-2 mt-10 grid justify-items-center">
    <img :src="path" alt="icon" class="animate-icon-in size-52" />
    <div class="animate-profile-in text-center">
      <p class="font-light text-base">{{ course }}</p>
      <h2 class="font-bold text-3xl">{{ name }}</h2>
      <p class="font-light text-lg">{{ role }}</p>
    </div>
  </div>
</template>
