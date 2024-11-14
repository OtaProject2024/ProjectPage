<script setup>
import {ref} from 'vue';

import part from "../modules/globals/part.vue";
import fusion from "../modules/contents/fusion.vue";
import program from "../modules/contents/program.vue";
import guide from "../modules/contents/fishguide.vue";
import site from "../modules/contents/site.vue";
import vi from "../modules/contents/video.vue";

// Toggle function to switch pages
const scrollableDiv = ref(null);
const smoothScrollToTop = (element) => {
  let start = element.scrollTop;
  let change = 0 - start;

  let duration = 700;
  let startTime = performance.now();
  const animateScroll = (timestamp) => {
    let elapsed = timestamp - startTime;
    let progress = elapsed / duration;
    if (progress < 1) {
      element.scrollTop = start + change * progress;
      requestAnimationFrame(animateScroll);
    } else {
      element.scrollTop = 0;
    }
  };
  requestAnimationFrame(animateScroll);
};

const activePage = ref("Robot");
const togglePageLeft = () => {
  if (activePage.value === "Media") {
    activePage.value = "Robot";
    if (scrollableDiv) smoothScrollToTop(scrollableDiv.value);
  }
};
const togglePageRight = () => {
  if (activePage.value === "Robot") {
    activePage.value = "Media";
    if (scrollableDiv) smoothScrollToTop(scrollableDiv.value);
  }
};
</script>

<template>
  <div ref="scrollableDiv"
       class="animate-bg-in absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none bg-zinc-900 bg-opacity-50 backdrop-blur-sm">
    <div class="mt-32 flex flex-col items-center font-Default text-white">
      <div class="animate-session-in">
        <h1 class="font-bold text-center text-6xl md:text-7xl">Contents</h1>
      </div>
      <div class="flex flex-col items-center w-3/4 md:w-2/5 mt-10 mb-60">
        <div class="flex justify-between items-center text-xl w-full text-zinc-200">
          <div class="transition-opacity duration-500 ease-in-out cursor-pointer group"
               :class="{'opacity-20': activePage === 'Robot'}"
               @click="togglePageLeft">
            <p :class="{'duration-500 group-hover:text-white': activePage === 'Media'}">
              < <span :class="{'duration-500 group-hover:ml-1': activePage === 'Media'}">Robot</span>
            </p>
          </div>
          <div class="transition-opacity duration-500 ease-in-out cursor-pointer group"
               :class="{'opacity-20': activePage === 'Media'}"
               @click="togglePageRight">
            <p :class="{'duration-500 group-hover:text-white': activePage === 'Robot'}">
              <span :class="{'duration-500 group-hover:mr-1': activePage === 'Robot'}">Media</span> >
            </p>
          </div>
        </div>

        <div v-show="activePage === 'Robot'" class="flex flex-col items-center">
          <div class="animate-part-in mb-14">
            <h2 class="font-medium text-center text-4xl md:text-5xl mb-4">Robot</h2>
            <p>
              釣り体験用ロボットは、クラウドベースの3D設計ソフトウェア「Autodesk
              Fusion」を用いた3Dモデリングと、「Python」プログラムによるモーター制御により実現されています。
            </p>
          </div>
          <part title="3D model"/>
          <fusion/>
          <part title="source code"/>
          <program/>
        </div>
        <div v-show="activePage === 'Media'" class="flex flex-col items-center">
          <div class="animate-part-in mb-14">
            <h2 class="font-medium text-center text-4xl md:text-5xl mb-4">Media</h2>
            <p>
              私たちは、釣りをこれから始める方々向けのサイトをはじめ、プロジェクトの活動が広く伝わるようにWEB開発や動画制作にも力を入れてきました。
            </p>
          </div>
          <part title="Fishing Guide"/>
          <guide/>
          <part title="website"/>
          <site/>
          <part title="video"/>
          <vi/>
        </div>

        <div class="flex justify-between items-center text-xl w-full text-zinc-200">
          <div class="transition-opacity duration-500 ease-in-out cursor-pointer group"
               :class="{'opacity-20': activePage === 'Robot'}"
               @click="togglePageLeft">
            <p :class="{'duration-500 group-hover:text-white': activePage === 'Media'}">
              < <span :class="{'duration-500 group-hover:ml-1': activePage === 'Media'}">Robot</span>
            </p>
          </div>
          <div class="transition-opacity duration-500 ease-in-out cursor-pointer group"
               :class="{'opacity-20': activePage === 'Media'}"
               @click="togglePageRight">
            <p :class="{'duration-500 group-hover:text-white': activePage === 'Robot'}">
              <span :class="{'duration-500 group-hover:mr-1': activePage === 'Robot'}">Media</span> >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
