<script setup>
import card from "../globals/card.vue";
</script>

<template>
  <div class="animate-part-in text-gray-300 w-11/12 flex flex-col items-center p-3 mt-2 mb-12">
    <p>
      釣りに興味があるけれど、どんな道具が必要なのか、服装はどうするのか、
      <span class="font-semibold text-gray-100">何から始めたらいいのか分からない方のため</span>
      のガイドサイトです。
      釣り初心者が安心して楽しめるよう、釣具や服装の選び方、基本的な釣りの手法を丁寧に紹介しています。
      また、釣りには自然を守るためのルールや他の人への配慮が不可欠です。
      初めての方でも安心して釣りに出かけられるよう、ルールやマナーについても分かりやすくまとめています。
    </p>
    <p>
      自然と一体となる時間を楽しみながら、
      <span class="font-semibold text-gray-100">初めての釣りの一歩を踏み出してみましょう。</span>
    </p>
    <card site="OtaProject2024 website" title="Fishing Guide - How to Start Fishing"
          text="For all beginning fishermen."
          path="https://project.ne.senshu-u.ac.jp/2024/05/FishingGuide#/"/>
    <p class="mt-5">
      このサイトは、Vue.jsとTailwind CSSで構築され、シンプルかつ直感的なデザインを追求しました。
      Vue.jsのスムーズな動作とTailwind CSSによる柔軟なデザインにより、見やすく使いやすいインターフェースを実現しています。
    </p>
    <card site="GitHub" title="OtaProject2024 / FishingGuide"
          text="GitHub is where OtaProject2024 builds software."
          path="https://github.com/OtaProject2024/FishingGuid"/>
  </div>
</template>
