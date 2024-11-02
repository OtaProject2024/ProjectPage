<script setup>
import profile from "../modules/members/profile.vue";
</script>

<template>
  <div class="animate-bg-in absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none bg-zinc-900 bg-opacity-50 backdrop-blur-sm">
    <div class="mt-32 mb-60 mx-3 flex flex-col font-Poppins text-white">
      <div class="animate-session-in">
        <h1 class="font-bold text-center text-6xl md:text-7xl">Members</h1>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <profile name="はぎ" course="PC program" :roles='["プログラミング", "3Dモデリング"]' path="assets/icon/hagi.jpg"/>
        <profile name="メロンパン星人" course="PC program" :roles='["3Dモデリング", "電子回路設計"]' path="assets/icon/kake.jpg"/>
        <profile name="ピンキー" course="IB program" :roles='["マネージャー", "デザイン"]' path="assets/icon/pin.jpg"/>
        <profile name="虫" course="DS program" :roles='["3Dモデリング", "動画制作"]' path="assets/icon/huku.jpg"/>
        <profile name="池マル" course="PC program" :roles='["リーダー", "3Dモデリング"]' path="assets/icon/ike.jpg"/>
        <profile name="りょ" course="NS program" :roles='["サブリーダー", "プログラミング"]' path="assets/icon/ry.jpg"/>
        <profile name="まひ" course="PC program" :roles='["3Dモデリング", "デザイン"]' path="assets/icon/mahi.jpg"/>
        <profile name="ぷぅさん" course="PC program" :roles='["プログラミング", "3Dモデリング"]' path="assets/icon/kuma.jpg"/>
        <profile name="시준" course="NS program" :roles='["広報・連絡", "プログラミング"]' path="assets/icon/ki.jpg"/>
        <profile name="太田 隆博" course="担当教員" path="assets/icon/ota.jpg"/>
      </div>
    </div>
  </div>
</template>
