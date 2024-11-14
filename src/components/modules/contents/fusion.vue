<script setup>
import model from "../globals/model.vue";
</script>

<template>
  <div class="animate-part-in text-gray-200 w-11/12 flex flex-col items-center p-3 mt-2 mb-12">
    <p>
      coming soon...
    </p>
    <model path="./assets/models/m1_draco.glb" :scale="1.75"></model>
    <div class="self-end group whitespace-nowrap font-light text-white text-sm mt-2 mb-5">
      <router-link to="/sandbox/1">
        <p class="inline-block w-min">SEE MORE</p>
        <p class="inline-block w-min duration-500 ml-2 group-hover:ml-3">&gt;</p>
        <p class="inline-block w-min duration-500 opacity-0 group-hover:opacity-100">&gt;</p>
      </router-link>
    </div>
    <p class="mt-7">
      coming soon...
    </p>
    <model path="./assets/models/m2_draco.glb" :scale="24.55"></model>
    <div class="self-end group whitespace-nowrap font-light text-white text-sm mt-2 mb-5">
      <router-link to="/sandbox/2">
        <p class="inline-block w-min">SEE MORE</p>
        <p class="inline-block w-min duration-500 ml-2 group-hover:ml-3">&gt;</p>
        <p class="inline-block w-min duration-500 opacity-0 group-hover:opacity-100">&gt;</p>
      </router-link>
    </div>
    <p class="mt-7">
      coming soon...
    </p>
    <model path="./assets/models/m3_draco.glb" :scale="0.0175" :positionY="-1.25" :rotation="true"></model>
    <div class="self-end group whitespace-nowrap font-light text-white text-sm mt-2 mb-5">
      <router-link to="/sandbox/3">
        <p class="inline-block w-min">SEE MORE</p>
        <p class="inline-block w-min duration-500 ml-2 group-hover:ml-3">&gt;</p>
        <p class="inline-block w-min duration-500 opacity-0 group-hover:opacity-100">&gt;</p>
      </router-link>
    </div>
  </div>
</template>
