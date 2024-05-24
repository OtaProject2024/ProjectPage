<script setup>
import left from "../modules/active/left.vue";
import right from "../modules/active/right.vue";

const mar = ["顔合わせ", "釣りの体験会"];
const mar_imgs = ["./assets/img/mar2024_001.jpg", "./assets/img/mar2024_002.jpg"];
const apr = ["ルール決定", "テーマ決定", "役割分担", "制作物の概要決定"];
const may = ["設計開始", "CADデータ作成", "アンケート実施", "3Dプリント"];
const jun = ["データ修正", "ロボット組み立て", "テスト実施"];
const jul = ["プロトタイプ完成", "中間発表", "プロトタイプ改良"];
const aug = ["coming soon..."];
const sep = ["coming soon..."];
const oct = ["coming soon..."];
const nov = ["coming soon..."];
const dec = ["coming soon..."];
</script>

<template>
  <div class="absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none">
    <div class="mt-32 flex flex-col font-Poppins text-white">
      <div class="animate-session-in">
        <h1 class="font-bold text-center text-6xl md:text-7xl">active</h1>
      </div>
      <div class="place-self-center mt-10">
        <div class="p-2 mx-auto flex flex-col md:grid grid-cols-9">
          <left month="March 2024" :contents="mar" :imgs="mar_imgs" />
          <right month="April 2024" :contents="apr" />
          <left month="May 2024" :contents="may" />
          <right month="June 2024" :contents="jun" />
          <left month="July 2024" :contents="jul" />
          <right month="August 2024" :contents="aug" />
          <left month="September 2024" :contents="sep" />
          <right month="October 2024" :contents="oct" />
          <left month="November" :contents="nov" />
          <right month="December 2024" :contents="dec" />
          <div class="flex md:contents">
            <div class="animate-line-in relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div class="h-60 w-6 flex items-center justify-center">
                <div class="h-full w-0.5 pointer-events-none bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
