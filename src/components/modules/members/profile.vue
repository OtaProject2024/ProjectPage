<script setup>
const props = defineProps({
  name: String,
  course: String,
  roles: Array,
  path: String,
});
</script>

<template>
  <div class="grid justify-items-center pt-5 pb-3 mt-10">
    <img :src="path" alt="icon" class="animate-icon-in size-44 md:size-52 rounded-full px-1"/>
    <div class="animate-profile-in text-center mt-3">
      <div class="text-center">
        <p class="font-light text-gray-300 text-lg mb-1">{{ course }}</p>
        <h2 class="text-white text-2xl mb-2">{{ name }}</h2>
        <p v-for="role in roles" class="font-light text-gray-200 text-md">{{ role }}</p>
      </div>
    </div>
  </div>
</template>
