<script setup>
import {ref} from "vue";
import {event} from 'vue-gtag'

let flg = ref(false);
let text = ref("share");
const toggle = () => {
  flg.value = !flg.value;
  switch (text.value) {
    case "share":
      text.value = "return"
      break;
    case "return":
      text.value = "share"
      break;
  }
};

let flg_copy = ref(false);
const base_url = location.href;
const x_url = ref("https://x.com/intent/post?text=OtaProject2024%0A&url=" + base_url);
const facebook_url = ref("https://www.facebook.com/share.php?u=" + base_url);
const copy = () => {
  try {
    navigator.clipboard.writeText(base_url);
    event("clicked share btn")
  } catch (e) {
    document.getElementById("notice").innerHTML = "Copy failed.<br/>your device not supported.";
  } finally {
    flg_copy.value = true;
    setTimeout(() => {
      flg_copy.value = false;
    }, 5000);
  }
};

const sharePush = () => {
  event("clicked share btn")
}
</script>

<template>
  <footer class="absolute right-0 z-20 bottom-24 sm:bottom-12 md:bottom-6 lg:bottom-3 xl:bottom-0">
    <div class="flex flex-col font-Default font-light text-white">
      <transition
          enter-from-class="translate-x-full opacity-0"
          enter-active-class="transition duration-700"
          leave-to-class="translate-x-full opacity-0"
          leave-active-class="transition duration-700"
      >
        <div class="self-end rounded-lg bg-zinc-900 bg-opacity-80 p-5 mb-3 mr-5 md:mb-5 md:mr-10" v-show="flg_copy">
          <p id="notice" class="text-lg md:text-xl">Copy completed.</p>
        </div>
      </transition>

      <div class="self-end rounded-lg bg-zinc-900 bg-opacity-80 mb-7 p-5 mr-5 md:mr-10">
        <div class="flex flex-row justify-start">
          <p class="cursor-pointer text-lg md:text-xl" @click="toggle">
              <span class="inline-block duration-500"
                    :class="{'rotate-180 duration-500': flg}">
                &gt;</span> {{ text }}
          </p>

          <ul v-show="flg" class="animate-footer-in flex justify-end ml-16">
            <li class="cursor-pointer mr-7" @click="copy">
              <div class="flex items-end">
                <span class="material-icons text-lg md:text-xl">content_copy</span>
                <a class="text-lg md:text-xl pl-1">copy</a>
              </div>
            </li>
            <li class="cursor-pointer mr-7">
              <a :href="x_url" target="_blank" rel="noreferrer" @click="sharePush">
                <img class="h-7 w-7" src="/assets/sns/X_logo.png" alt="X"/>
              </a>
            </li>
            <li class="cursor-pointer">
              <a :href="facebook_url" target="_blank" rel="noreferrer" @click="sharePush">
                <img class="h-7 w-7" src="/assets/sns/Facebook_logo.png" alt="Facebook"/>
              </a>
            </li>
          </ul>
        </div>
        <p v-show="flg" class="animate-footer-in mt-4">
          © 2024
          <a href="https://github.com/OtaProject2024/OtaProject2024_projectpage" target="_blank" rel="noreferrer">OtaProject2024.&nbsp;</a>
          All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
