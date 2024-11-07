<script setup>
const props = defineProps({
  site: String,
  title: String,
  text: String,
  path: String,
});
</script>

<template>
  <div class="w-full rounded-lg duration-500 bg-zinc-800 bg-opacity-80 group hover:bg-zinc-900 p-3 my-4">
    <a :href="path" target="_blank" rel="noreferrer">
      <div class="flex flex-col">
        <a class="font-light text-gray-400 text-sm">{{ site }}</a>
        <a class="font-bold text-white text-xl mb-2">{{ title }}</a>
        <p class="font-light text-gray-200 text-base">{{ text }}</p>
        <div class="self-end font-light text-white text-sm">
          <a>READ MORE</a>
          <a class="duration-500 ml-2 group-hover:ml-3">&gt;</a>
          <a class="duration-500 opacity-0 group-hover:opacity-100">&gt;</a>
        </div>
      </div>
    </a>
  </div>
</template>
