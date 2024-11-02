<script setup>
const type = defineProps({
  title: String,
  text: String,
  path: String,
  img: String,
});
</script>

<template>
  <div class="self-center my-5 w-min xl:w-full">
    <div class="rounded-lg border border-white transition hover:duration-500 hover:bg-zinc-950 hover:bg-opacity-80">
      <a :href="path" target="_blank" rel="noreferrer" class="flex items-center flex-col xl:flex-row">
        <img class="object-contain rounded-t-lg xl:rounded-b-lg xl:h-48" :src="img" alt="logo"/>
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h4 class="font-bold text-2xl md:text-3xl">{{ title }}</h4>
          <p class="mt-3 text-base">{{ text }}</p>
        </div>
      </a>
    </div>
  </div>
</template>
