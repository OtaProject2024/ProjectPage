<script setup>
import {event} from "vue-gtag";

// Gtag's Custom Events
const videoPush = () => event("play Video");
</script>

<template>
  <div class="animate-part-in text-gray-300 w-11/12 flex flex-col items-center p-3 mt-2 mb-12">
    <p>
      coming soon...
    </p>
    <video class="w-full rounded-lg my-5"
           controls controlsList="nodownload" src="#" @click="videoPush"></video>
  </div>
</template>
