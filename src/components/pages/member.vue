<script setup>
import profile from "../modules/member/profile.vue";
</script>

<template>
  <div class="absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none">
    <div class="mt-32 mb-60 mx-3 flex flex-col font-Poppins text-white">
      <div class="animate-session-in">
        <h1 class="font-bold text-center text-6xl md:text-7xl">member</h1>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <profile name="はぎ" course="PC program" role="3D Modeling, Programming" path="./assets/icon/icon_def.png" />
        <profile name="かけ" course="PC program" role="3D Modeling" path="./assets/icon/icon_def.png" />
        <profile name="ピンキー" course="IB program" role="Project management, Design" path="./assets/icon/icon_def.png" />
        <profile name="ふく" course="DS program" role="3D Modeling" path="./assets/icon/icon_def.png" />
        <profile name="いけしん" course="PC program" role="Leader, 3D Modeling" path="./assets/icon/icon_def.png" />
        <profile name="りょ" course="NS program" role="Sub leader, Programming" path="./assets/icon/icon_def.png" />
        <profile name="まひ" course="PC program" role="3D Modeling" path="./assets/icon/icon_def.png" />
        <profile name="ぷぅさん" course="PC program" role="3D Modeling, Programming" path="./assets/icon/icon_def.png" />
        <profile name="시준" course="NS program" role="Public relations, Programming" path="./assets/icon/icon_def.png" />
        <profile name="太田 隆博" course="teacher" path="./assets/icon/icon_def.png" />
      </div>
    </div>
  </div>
</template>
