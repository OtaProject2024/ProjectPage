<script setup>
import {ref} from 'vue';

const isMenuOpen = ref(false);
const toggle = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="absolute w-screen z-20 p-3 bg-zinc-900 bg-opacity-80">
    <div class="flex justify-between font-Poppins text-white text-3xl md:text-4xl">
      <div>
        <h1 class="animate-nav-title-in font-bold pl-1">
          <router-link to="/">OtaProject2024</router-link>
        </h1>
      </div>

      <div class="lg:hidden flex items-center z-50">
        <button @click="toggle" class="focus:outline-none text-2xl md:text-3xl">☰</button>
      </div>

      <div class="hidden lg:flex justify-end ml-1 pt-3 w-full">
        <ul class="flex flex-row font-light text-base">
          <li class="animate-nav-in1 w-min whitespace-nowrap pr-5">
            <router-link to="/about" class="group transition">
              about <span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in2 w-min whitespace-nowrap pr-5">
            <router-link to="/member" class="group transition">
              member<span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in3 w-min whitespace-nowrap pr-5">
            <router-link to="/active" class="group transition">
              active<span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in4 w-min whitespace-nowrap pr-5">
            <router-link to="/content" class="group transition">
              content<span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in5 w-min whitespace-nowrap pr-5">
            <a href="https://project.ne.senshu-u.ac.jp/2024/05/FishingGuide" target="_blank" rel="noreferrer"
               class="group transition">
              fishing guide<span class="mov-li"></span>
            </a>
          </li>
          <li class="animate-nav-in6 w-min whitespace-nowrap pr-5">
            <a href="https://sites.google.com/senshu-u.jp/24otaproject" target="_blank" rel="noreferrer"
               class="group transition">
              journal<span class="mov-li"></span>
            </a>
          </li>
          <li class="animate-nav-in7 w-min whitespace-nowrap">
            <a href="https://github.com/OtaProject2024" target="_blank" rel="noreferrer"
               class="group transition">
              GitHub<span class="mov-li"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <transition
      enter-from-class="opacity-0"
      enter-active-class="transition duration-700"
      leave-to-class="opacity-0"
      leave-active-class="transition duration-700"
  >
    <div v-show="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-30" @click="toggle"></div>
  </transition>
  <transition
      enter-from-class="translate-x-full opacity-0"
      enter-active-class="transition duration-700"
      leave-to-class="translate-x-full opacity-0"
      leave-active-class="transition duration-700"
  >
    <aside v-show="isMenuOpen" class="fixed top-0 right-0 h-full w-40 bg-zinc-800 z-40">
      <div class="font-Poppins text-white text-3xl md:text-4xl">
        <div class="flex items-center justify-end pt-5 pr-5 mb-1">
          <button @click="toggle" class="focus:outline-none text-lg md:text-2xl">✕</button>
        </div>

        <div class="p-5">
          <ul class="flex flex-col font-light text-base space-y-4">
            <li class="animate-nav-in1 w-min whitespace-nowrap">
              <router-link to="/about" class="group transition" @click="toggle">
                about<span class="mov-li"></span>
              </router-link>
            </li>
            <li class="animate-nav-in2 w-min whitespace-nowrap">
              <router-link to="/member" class="group transition" @click="toggle">
                member<span class="mov-li"></span>
              </router-link>
            </li>
            <li class="animate-nav-in3 w-min whitespace-nowrap">
              <router-link to="/active" class="group transition" @click="toggle">
                active<span class="mov-li"></span>
              </router-link>
            </li>
            <li class="animate-nav-in4 w-min whitespace-nowrap">
              <router-link to="/content" class="group transition" @click="toggle">
                content<span class="mov-li"></span>
              </router-link>
            </li>
            <li class="animate-nav-in5 w-min whitespace-nowrap">
              <a href="https://project.ne.senshu-u.ac.jp/2024/05/FishingGuide" target="_blank" rel="noreferrer"
                 class="group transition" @click="toggle">
                fishing guide<span class="mov-li"></span>
              </a>
            </li>
            <li class="animate-nav-in6 w-min whitespace-nowrap">
              <a href="https://sites.google.com/senshu-u.jp/24otaproject" target="_blank" rel="noreferrer"
                 class="group transition" @click="toggle">
                journal<span class="mov-li"></span>
              </a>
            </li>
            <li class="animate-nav-in7 w-min whitespace-nowrap">
              <a href="https://github.com/OtaProject2024" target="_blank" rel="noreferrer"
                 class="group transition" @click="toggle">
                GitHub<span class="mov-li"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </transition>
</template>
