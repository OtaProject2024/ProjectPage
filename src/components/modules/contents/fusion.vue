<script setup>
import model from "../globals/model.vue";
</script>

<template>
  <div class="animate-part-in text-gray-200 w-11/12 flex flex-col items-center p-3 mt-2 mb-12">
    <p>
      coming soon...
    </p>
    <model path="./assets/model/m1_draco.glb" :scale="1.75"></model>
    <p class="mt-7">
      coming soon...
    </p>
    <model path="./assets/model/m2_draco.glb" :scale="24.55"></model>
    <p class="mt-7">
      coming soon...
    </p>
    <model path="./assets/model/m3_draco.glb" :scale="0.0175" :positionY="-1.25" :rotation="true"></model>
  </div>
</template>
