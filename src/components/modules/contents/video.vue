<script setup>
import {event} from "vue-gtag";

// Gtag's Custom Events
const videoPush = () => event("play Video");
</script>

<template>
  <div class="animate-part-in text-gray-300 w-11/12 flex flex-col items-center p-3 mt-2 mb-12">
    <p>
      プロジェクトの活動を紹介する動画です。
    </p>
    <p>
      <span class="font-semibold text-gray-100">音声が出ますので、音量にご注意ください。</span>
    </p>
    <video class="w-full rounded-lg my-5"
           controls controlsList="nodownload" src="/assets/video/final.webm" @click="videoPush"></video>
  </div>
</template>
