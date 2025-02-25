<script setup>
import {ref, computed, onMounted, onUnmounted, watch} from "vue";
import {useRoute} from "vue-router";
import {event} from "vue-gtag";

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
    text.value = "share";
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
    event("click share");
  } catch (error) {
    const iconElement = document.getElementById("icon");
    const noticeElement = document.getElementById("notice");
    if (noticeElement && iconElement) {
      iconElement.innerHTML = "error";
      noticeElement.innerHTML = "Copy failed.<br/>Your device is not supported.";
    }
  } finally {
    flgCopy.value = true;
    setTimeout(() => {
      flgCopy.value = false;
    }, 5000);
  }
};

// Sandbox display control
const flgInfo = ref(false);
const showSandbox = computed(() => route.meta.title === "OtaProject2024 | Sandbox");

function showInfo() {
  setTimeout(() => {
    flgInfo.value = true;
    setTimeout(() => {
      flgInfo.value = false;
    }, 5000);
  }, 1000);
}

onMounted(() => {
  if (route.matched.some(record => record.path === "/sandbox/:id")) showInfo();
});

watch(
    () => route.path,
    (newPath) => {
      if (route.matched.some(record => record.path === "/sandbox/:id")) showInfo();
    }
);

// Gtag's Custom Events
const sharePush = () => event("click share");
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
            <p class="flex flex-row items-center text-lg md:text-xl">
              <span id="icon" class="material-icons text-2xl md:text-3xl">notifications_active</span>
              <span id="notice" class="pl-4">Copy completed.</span>
            </p>
          </div>
        </transition>

        <div v-show="!showSandbox" class="self-end rounded-lg bg-zinc-900 bg-opacity-80 mb-7 p-5 mr-5 md:mr-10">
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

      <div v-show="showSandbox" class="flex flex-col justify-end">
        <transition
            enter-from-class="translate-x-full opacity-0"
            enter-active-class="transition duration-700"
            leave-to-class="translate-x-full opacity-0"
            leave-active-class="transition duration-700"
        >
          <div v-show="flgInfo" class="self-end rounded-lg bg-zinc-900 bg-opacity-80 p-5 mb-3 mr-5 md:mb-5 md:mr-10">
            <p class="flex items-center font-Default font-light text-white text-base md:text-lg">
              <span class="material-icons text-2xl md:text-3xl pr-2">campaign</span>
              視点操作ができます
            </p>
          </div>
        </transition>

        <div class="self-end rounded-lg bg-zinc-900 bg-opacity-80 w-min mb-7 p-5 mr-5 md:mr-10">
          <div class="flex flex-row justify-start">
            <div class="group whitespace-nowrap font-Default font-light text-white text-lg md:text-xl">
              <router-link to="/Contents">
                <p class="inline-block w-min">RETURN </p>
                <p class="inline-block w-min duration-500 ml-2 group-hover:ml-3">&gt;</p>
                <p class="inline-block w-min duration-500 opacity-0 group-hover:opacity-100">&gt;</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </transition>
</template>
