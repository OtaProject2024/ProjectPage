<script setup></script>

<template>
  <div
      class="animate-bg-in absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none bg-zinc-900 bg-opacity-50 backdrop-blur-sm">
    <div class="text-white text-center mt-72">
      <div class="animate-session-in">
        <h1 class="font-medium text-3xl md:text-4xl">404 not found.</h1>
      </div>
      <div class="animate-session-in mt-10">
        <router-link to="/" class="inline-block group">
          <div class="font-light text-1xl md:text-2xl pr-0.5">
            <a class="pr-3">&gt;</a>
            <a>Home</a>
          </div>
          <span class="mov-li"></span>
        </router-link>
      </div>
    </div>
  </div>
</template>
