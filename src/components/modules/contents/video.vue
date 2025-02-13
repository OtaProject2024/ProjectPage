<script setup>
import card from "../globals/card.vue";

import {event} from "vue-gtag";

// Gtag's Custom Events
const videoPush = () => event("play Video");
</script>

<template>
  <div class="animate-part-in text-gray-300 w-11/12 flex flex-col items-center p-3 mt-2 mb-12">
    <card site="Google Drive" title="OtaProject2024 / Movie"
          text="プロジェクトの活動を紹介する動画です。"
          path="https://drive.google.com/file/d/1L2jrBmyBfqnQKxq04EiRTC-JIql8ME9B/view?usp=sharing"
          :content="true"
    />
  </div>
</template>
