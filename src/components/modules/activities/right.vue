<script setup>
import {ref} from "vue";

const props = defineProps({
  month: String,
  contents: Array,
  images: Array,
});

// expansion control
const flg = ref(false);
const click = () => flg.value = !flg.value;
</script>

<template>
  <div class="flex md:contents" @click="click">
    <div class="animate-vertical-in relative col-start-5 col-end-6 mr-10 md:mx-auto">
      <div class="h-full w-4 flex items-center justify-center">
        <div class="h-full w-0.5 bg-white pointer-events-none"></div>
      </div>
      <div class="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-white"></div>
    </div>

    <div class="animate-month-right-in col-start-6 col-end-10 mb-1 mr-auto">
      <div class="flex flex-col items-start">
        <h2 class="cursor-pointer text-4xl md:text-5xl">
          <span class="inline-block duration-500" :class="{'rotate-90 duration-500': flg}">&gt;</span> {{ month }}
        </h2>
      </div>
    </div>
  </div>

  <div class="flex md:contents" @click="click">
    <div class="animate-vertical-in relative col-start-5 col-end-6 mr-10 md:mx-auto">
      <div class="h-full w-4 flex items-center justify-center">
        <div class="h-full w-0.5 bg-white pointer-events-none"></div>
      </div>
    </div>

    <div class="animate-month-right-in col-start-6 col-end-10 mb-24 mr-auto">
      <div class="flex flex-col items-start">
        <ul class="list-disc list-inside font-light text-gray-300 text-l md:text-lg pl-1 md:pl-2 mt-3">
          <li v-for="content in contents">{{ content }}</li>
        </ul>
        <transition
            enter-from-class="opacity-0"
            enter-active-class="duration-700"
            leave-to-class="opacity-0"
            leave-active-class="duration-700">
          <ul v-show="flg" class="list-none list-inside grid justify-items-center mt-7">
            <li v-for="img in images"><img class="rounded-lg w-52 md:w-72 mb-2" :src="img" alt="img"/></li>
          </ul>
        </transition>
      </div>
    </div>
  </div>
</template>
