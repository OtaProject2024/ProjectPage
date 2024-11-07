<script setup>
import card from "../globals/card.vue";
</script>

<template>
  <div class="animate-part-in text-gray-200 w-11/12 flex flex-col items-center p-3 mt-2 mb-12">
    <p>
      このウェブサイトはシングルページアプリケーション(SPA)の形式で構築されており、プロジェクトメンバーが制作した3Dモデルが背景に配置されています。
      Three.jsを活用してモデルの描画を行い、デザインにはTailwind CSS を用いて美しいスタイルを実現しています。
      また、vue-gtagを使用することで、ユーザーのアクセス解析も可能です。
    </p>
    <card site="GitHub" title="OtaProject2024 / ProjectPage"
          text="GitHub is where OtaProject2024 builds software."
          path="https://github.com/OtaProject2024/ProjectPage"/>
    <p>
      SPAのメリットとして、最初の読み込み後はサーバーとの通信が非同期で行われるため、ページ全体を再読み込みすることなく動的なコンテンツの更新が可能です。
      これにより、ページ遷移に伴う待ち時間が大幅に短縮され、ユーザーエクスペリエンスが向上します。
    </p>
  </div>
</template>
