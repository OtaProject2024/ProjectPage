<script setup>
import profile from "../modules/member/profile.vue";
</script>

<template>
  <div class="animate-bg-in absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none bg-zinc-900 bg-opacity-50 backdrop-blur-sm">
    <div class="mt-32 mb-60 mx-3 flex flex-col font-Poppins text-white">
      <div class="animate-session-in">
        <h1 class="font-bold text-center text-6xl md:text-7xl">member</h1>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <profile name="はぎ" course="PC program" role="3Dモデリング, プログラミング" path="assets/icon/hagi.jpg"/>
        <profile name="メロンパン星人" course="PC program" role="3Dモデリング" path="assets/icon/kake.jpg"/>
        <profile name="ピンキー" course="IB program" role="マネージメント, デザイン" path="assets/icon/pin.jpg"/>
        <profile name="虫" course="DS program" role="3Dモデリング" path="assets/icon/huku.jpg"/>
        <profile name="池マル" course="PC program" role="リーダー, 3Dモデリング" path="assets/icon/ike.jpg"/>
        <profile name="りょ" course="NS program" role="サブリーダー, プログラミング" path="assets/icon/ry.jpg"/>
        <profile name="まひ" course="PC program" role="3Dモデリング" path="assets/icon/mahi.jpg"/>
        <profile name="ぷぅさん" course="PC program" role="プログラミング" path="assets/icon/kuma.jpg"/>
        <profile name="시준" course="NS program" role="広報, 3Dモデリング" path="assets/icon/ki.jpg"/>
        <profile name="太田 隆博" course="担当教員" path="assets/icon/ota.jpg"/>
      </div>
    </div>
  </div>
</template>
