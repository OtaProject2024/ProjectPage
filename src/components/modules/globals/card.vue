<script setup>
const props = defineProps({
  site: String,
  title: String,
  text: String,
  path: String,
  content: Boolean,
});
</script>

<template>
  <div class="w-full rounded-lg duration-500 bg-zinc-800 bg-opacity-80 group hover:bg-zinc-900 p-3 my-4">
    <a :href="path" target="_blank" rel="noreferrer">
      <div class="flex flex-col">
        <h4 class="font-light text-gray-400 text-sm">{{ site }}</h4>
        <h3 class="font-bold text-white text-xl mb-2">{{ title }}</h3>
        <p class="font-light text-gray-200 text-base">{{ text }}</p>
        <div class="self-end whitespace-nowrap font-light text-white text-sm">
          <p v-show="content" class="inline-block w-min">WATCH</p>
          <p v-show="!content" class="inline-block w-min">READ MORE</p>
          <p class="inline-block w-min duration-500 ml-2 group-hover:ml-3">&gt;</p>
          <p class="inline-block w-min duration-500 opacity-0 group-hover:opacity-100">&gt;</p>
        </div>
      </div>
    </a>
  </div>
</template>
