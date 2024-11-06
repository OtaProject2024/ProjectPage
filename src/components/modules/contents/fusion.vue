<script setup>
import model from "../globals/model.vue";
</script>

<template>
  <div class="animate-part-in text-gray-200 w-11/12 flex flex-col items-center p-3 mt-2 mb-12">
    <p>
      準備中
    </p>
    <model path="/assets/model/m1.stl" :scale="0.0015"></model>
    <p class="mt-7">
      準備中
    </p>
    <model path="/assets/model/m2.stl" :scale="0.025"></model>
    <p class="mt-7">
      準備中
    </p>
    <model path="/assets/model/m1.stl" :scale="0.0015"></model>
  </div>
</template>
