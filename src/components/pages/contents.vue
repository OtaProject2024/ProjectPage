<script setup>
import part from "../modules/globals/part.vue";
import fusion from "../modules/contents/fusion.vue";
import program from "../modules/contents/program.vue";
</script>

<template>
  <div class="animate-bg-in absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none bg-zinc-900 bg-opacity-50 backdrop-blur-sm">
    <div class="mt-32 flex flex-col items-center font-Default text-white">
      <div class="animate-session-in">
        <h1 class="font-bold text-center text-6xl md:text-7xl">Contents</h1>
      </div>
      <div class="mt-10 mb-60 flex flex-col items-center w-3/4 md:w-2/5">
        <part title="3D model"/>
        <fusion/>
        <part title="source code"/>
        <program/>
      </div>
    </div>
  </div>
</template>
