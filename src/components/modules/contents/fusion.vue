<script setup>
import model from "../globals/model.vue";
</script>

<template>
  <div class="animate-part-in text-gray-200 w-11/12 flex flex-col items-center p-3 mt-2 mb-12">
    <p>
      準備中
    </p>
    <model path="/assets/model/m1.glb" :scale="1.75"></model>
    <p class="mt-7">
      準備中
    </p>
    <model path="/assets/model/m2.glb" :scale="24.55"></model>
    <p class="mt-7">
      準備中
    </p>
    <model path="/assets/model/m3.glb" :scale="0.0175" :positionY="-1.25" :rotation="true"></model>
  </div>
</template>
