<script setup>
import left from "../modules/active/left.vue";
import right from "../modules/active/right.vue";

const mar = ["顔合わせ", "釣りの体験会"];
const mar_imgs = ["assets/img/mar2024_001.jpg", "assets/img/mar2024_002.jpg"];
const apr = ["ルール決定", "テーマ決定", "役割分担", "制作物の概要決定"];
const apr_imgs = ["assets/img/apr2024_001.jpg", "assets/img/apr2024_002.jpg"];
const may = ["設計開始", "CADデータ作成", "アンケート実施", "3Dプリント"];
const may_imgs = ["assets/img/may2024_001.jpg", "assets/img/may2024_002.jpg"];
const jun = ["データ修正", "ロボット組み立て", "テスト実施"];
const jun_imgs = ["assets/img/jun2024_001.jpg", "assets/img/jun2024_002.jpg"];
const jul = ["プロトタイプ完成", "中間発表", "プロトタイプ改良"];
const jul_imgs = ["assets/img/jul2024_001.jpg", "assets/img/jul2024_002.jpg"];
const aug = ["修正版プロトタイプ制作", "WEBページ制作", "リーフレット制作"];
const aug_imgs = ["assets/img/aug2024_001.jpg", "assets/img/aug2024_002.jpg"];
const sep = ["修正版プロトタイプ完成", "WEBページ完成", "リーフレット完成", "鳳祭出店準備"];
const sep_imgs = ["assets/img/sep2024_001.jpg", "assets/img/sep2024_002.jpg"];
const oct = ["空間デザイン", "映像制作", "鳳祭出店準備"];
const oct_imgs = ["assets/img/oct2024_001.jpg", "assets/img/oct2024_002.jpg"];
const nov = ["鳳祭出店", "反省会", "最終発表準備"];
const nov_imgs = ["assets/img/nov2024_001.jpg", "assets/img/nov2024_002.jpg"];
const dec = ["最終発表会", "成果報告書作成"];
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
          <right month="April 2024" :contents="apr" :imgs="apr_imgs"  />
          <left month="May 2024" :contents="may" :imgs="may_imgs" />
          <right month="June 2024" :contents="jun" :imgs="jun_imgs" />
          <left month="July 2024" :contents="jul" :imgs="jul_imgs" />
          <right month="August 2024" :contents="aug" :imgs="aug_imgs" />
          <left month="September 2024" :contents="sep" :imgs="sep_imgs" />
          <right month="October 2024" :contents="oct" :imgs="oct_imgs" />
          <left month="November 2024" :contents="nov" :imgs="nov_imgs" />
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
