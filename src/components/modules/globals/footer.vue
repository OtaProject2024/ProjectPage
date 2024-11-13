<script setup>
import {ref, computed, onMounted, onUnmounted} from "vue";
import {useRoute} from "vue-router";
import {event} from 'vue-gtag'

// Footer display control
const route = useRoute();
const showFooter = computed(() => route.meta.title !== "OtaProject2024 | 404 not found");

// Footer expansion control
const flg = ref(false);
const text = ref("share");

const toggle = () => {
  flg.value = !flg.value;
  text.value = text.value === "share" ? "return" : "share";
};

const footerRef = ref(null);
const closeToggle = (event) => {
  if (footerRef.value && !footerRef.value.contains(event.target)) {
    flg.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', closeToggle);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', closeToggle);
});

// Provide shared url
const flgCopy = ref(false);
const baseUrl = location.href;
const xUrl = ref(`https://x.com/share?text=OtaProject2024%0A&url=${baseUrl}`);
const facebookUrl = ref(`https://www.facebook.com/share.php?u=${baseUrl}`);

const copy = async () => {
  try {
    await navigator.clipboard.writeText(baseUrl);
    event("clicked share btn");
  } catch (error) {
    const noticeElement = document.getElementById("notice");
    if (noticeElement) {
      noticeElement.innerHTML = "Copy failed.<br/>Your device is not supported.";
    }
  } finally {
    flgCopy.value = true;
    setTimeout(() => {
      flgCopy.value = false;
    }, 5000);
  }
};

// Gtag's Custom Events
const sharePush = () => {
  event("clicked share btn")
}
</script>

<template>
  <transition
      enter-from-class="translate-x-full opacity-0"
      enter-active-class="transition duration-700"
      leave-to-class="translate-x-full opacity-0"
      leave-active-class="transition duration-700"
  >
    <footer v-show="showFooter" ref="footerRef"
            class="absolute right-0 z-20 bottom-24 sm:bottom-12 md:bottom-6 lg:bottom-3 xl:bottom-0">
      <div class="flex flex-col font-Default font-light text-white">
        <transition
            enter-from-class="translate-x-full opacity-0"
            enter-active-class="transition duration-700"
            leave-to-class="translate-x-full opacity-0"
            leave-active-class="transition duration-700"
        >
          <div v-show="flgCopy" class="self-end rounded-lg bg-zinc-900 bg-opacity-80 p-5 mb-3 mr-5 md:mb-5 md:mr-10">
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
                  <p class="text-lg md:text-xl pl-1">copy</p>
                </div>
              </li>
              <li class="cursor-pointer mr-7">
                <a :href="xUrl" target="_blank" rel="noreferrer" @click="sharePush">
                  <img class="h-7 w-7" src="/assets/general/logos/sns/X_logo.webp" alt="X"/>
                </a>
              </li>
              <li class="cursor-pointer">
                <a :href="facebookUrl" target="_blank" rel="noreferrer" @click="sharePush">
                  <img class="h-7 w-7" src="/assets/general/logos/sns/Facebook_logo.webp" alt="Facebook"/>
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
  </transition>
</template>
