<script setup>
import {computed, ref} from "vue";
import {useRoute} from 'vue-router';
import {event} from "vue-gtag";

// Monitor current path
const route = useRoute();
const active = (path) => route.path === path;
const showHeaderH1 = computed(() => route.meta.title !== "OtaProject2024 | Home");

// Hamburger menu control
const menuOpen = ref(false);
const toggle = () => menuOpen.value = !menuOpen.value;

// Gtag's Custom Events
const movePush = () => event("move Fishing Guide");
</script>

<template>
  <header class="absolute w-screen z-20 p-3 bg-zinc-900 bg-opacity-80">
    <div class="flex justify-between font-Default text-white text-3xl md:text-4xl">
      <div class="flex flex-row">
        <h1 v-show="showHeaderH1" class="animate-nav-title-in font-bold pl-1">
          <router-link to="/">OtaProject2024</router-link>
        </h1>
        <h1 class="animate-nav-title-in select-none font-bold pl-1">&nbsp;</h1>
      </div>

      <nav class="hidden lg:flex justify-end ml-1 mr-1 pt-3 w-full">
        <ul class="flex flex-row font-light text-base">
          <li class="animate-nav-in1 w-min whitespace-nowrap pr-5" :class="{'active': active('/about')}">
            <router-link to="/about" class="group transition">
              About<span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in2 w-min whitespace-nowrap pr-5" :class="{'active': active('/members')}">
            <router-link to="/members" class="group transition">
              Members<span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in3 w-min whitespace-nowrap pr-5" :class="{'active': active('/activities')}">
            <router-link to="/activities" class="group transition">
              Activities<span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in4 w-min whitespace-nowrap pr-5" :class="{'active': active('/contents')}">
            <router-link to="/contents" class="group transition">
              Contents<span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in5 w-min whitespace-nowrap pr-5">
            <a href="https://project.ne.senshu-u.ac.jp/2024/05/FishingGuide" target="_blank" rel="noreferrer"
               class="group transition" @click="movePush">
              Fishing Guide<span class="mov-li"></span>
            </a>
          </li>
          <li class="animate-nav-in6 w-min whitespace-nowrap pr-5">
            <a href="https://sites.google.com/senshu-u.jp/24otaproject" target="_blank" rel="noreferrer"
               class="group transition">
              Journal<span class="mov-li"></span>
            </a>
          </li>
          <li class="animate-nav-in7 w-min whitespace-nowrap">
            <a href="https://github.com/OtaProject2024" target="_blank" rel="noreferrer"
               class="group transition">
              GitHub<span class="mov-li"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <div class="animate-nav-in1 fixed top-0 right-0 lg:hidden flex items-center mt-3 md:mt-3.5 mr-2 z-50">
    <div @click="toggle" class="flex flex-col justify-center items-center w-10 h-10 focus:outline-none">
      <div class="w-5 h-0.5 bg-white mb-1 transition duration-700"
           :class="{'transform rotate-45 translate-y-1.5': menuOpen}"></div>
      <div class="w-5 h-0.5 bg-white mb-1 transition duration-700"
           :class="{'transform opacity-0': menuOpen}"></div>
      <div class="w-5 h-0.5 bg-white mb-1 transition duration-700"
           :class="{'transform -rotate-45 -translate-y-1.5': menuOpen}"></div>
    </div>
  </div>

  <transition
      enter-from-class="opacity-0"
      enter-active-class="transition duration-700"
      leave-to-class="opacity-0"
      leave-active-class="transition duration-700"
  >
    <div v-show="menuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-30" @click="toggle"></div>
  </transition>
  <transition
      enter-from-class="translate-x-full opacity-0"
      enter-active-class="transition duration-700"
      leave-to-class="translate-x-full opacity-0"
      leave-active-class="transition duration-700"
  >
    <aside v-show="menuOpen" class="fixed top-0 right-0 h-full w-52 bg-zinc-900 z-40">
      <nav class="relative h-full font-Default text-white text-3xl md:text-4xl p-5 mt-14">
        <ul class="flex flex-col font-light text-base space-y-4">
          <li class="animate-nav-in1 w-min whitespace-nowrap" :class="{'active': active('/')}">
            <router-link to="/" class="group transition" @click="toggle">
              <div class="flex items-end pr-1">
                <span class="material-icons text-xl md:text-2xl pr-2">home</span>Home
              </div>
              <span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in1 w-min whitespace-nowrap" :class="{'active': active('/about')}">
            <router-link to="/about" class="group transition" @click="toggle">
              <div class="flex items-end pr-1">
                <span class="material-icons text-xl md:text-2xl pr-2">help</span>About
              </div>
              <span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in2 w-min whitespace-nowrap" :class="{'active': active('/members')}">
            <router-link to="/members" class="group transition" @click="toggle">
              <div class="flex items-end pr-1">
                <span class="material-icons text-xl md:text-2xl pr-2">group</span>Members
              </div>
              <span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in3 w-min whitespace-nowrap" :class="{'active': active('/activities')}">
            <router-link to="/activities" class="group transition" @click="toggle">
              <div class="flex items-end pr-1">
                <span class="material-icons text-xl md:text-2xl pr-2">directions_run</span>Activities
              </div>
              <span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in4 w-min whitespace-nowrap" :class="{'active': active('/contents')}">
            <router-link to="/contents" class="group transition" @click="toggle">
              <div class="flex items-end pr-1">
                <span class="material-icons text-xl md:text-2xl pr-2">library_books</span>Contents
              </div>
              <span class="mov-li"></span>
            </router-link>
          </li>
          <li class="animate-nav-in5 w-min whitespace-nowrap">
            <a href="https://project.ne.senshu-u.ac.jp/2024/05/FishingGuide" target="_blank" rel="noreferrer"
               class="group transition" @click="toggle">
              <div class="flex items-end pr-1" @click="movePush">
                <span class="material-icons text-xl md:text-2xl pr-2">school</span>Fishing Guide
              </div>
              <span class="mov-li"></span>
            </a>
          </li>
          <li class="animate-nav-in6 w-min whitespace-nowrap">
            <a href="https://sites.google.com/senshu-u.jp/24otaproject" target="_blank" rel="noreferrer"
               class="group transition" @click="toggle">
              <div class="flex items-end pr-1">
                <span class="material-icons text-xl md:text-2xl pr-2">edit_calendar</span>Journal
              </div>
              <span class="mov-li"></span>
            </a>
          </li>
          <li class="animate-nav-in7 w-min whitespace-nowrap">
            <a href="https://github.com/OtaProject2024" target="_blank" rel="noreferrer"
               class="group transition" @click="toggle">
              <div class="flex items-end pr-1">
                <span class="material-icons text-xl md:text-2xl pr-2">code</span>GitHub
              </div>
              <span class="mov-li"></span>
            </a>
          </li>
        </ul>
        <div class="absolute right-3 bottom-10">
          <img class="grayscale size-36" src="/assets/general/logos/logo_tr.webp" alt="logo">
        </div>
      </nav>
    </aside>
  </transition>
</template>
