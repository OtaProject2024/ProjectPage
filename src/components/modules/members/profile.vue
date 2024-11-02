<script setup>
const type = defineProps({
  name: String,
  course: String,
  roles: Array,
  path: String,
});
</script>

<template>
  <div class="grid justify-items-center pt-5 pb-3 mt-10">
    <img :src="path" alt="icon" class="animate-icon-in size-52 rounded-full px-1"/>
    <div class="animate-profile-in text-center mt-1">
      <p class="font-light text-base">{{ course }}</p>
      <h2 class="font-bold text-3xl">{{ name }}</h2>
      <div class="mt-3">
        <p v-for="role in roles" class="font-light text-lg">{{ role }}</p>
      </div>
    </div>
  </div>
</template>
