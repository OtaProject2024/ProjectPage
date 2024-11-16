<script setup>
import model from "../globals/model.vue";
</script>

<template>
  <div class="animate-part-in font-Default text-gray-300 w-11/12 flex flex-col items-center p-3 mt-2 mb-12">
    <h3 class="font-bold text-gray-100 text-xl md:text-2xl text-center mb-4">
      初代大型ロボット
      <span class="whitespace-nowrap">「マードック」</span>
    </h3>
    <p>
      <span class="font-semibold text-gray-100">水中での自然な動き</span>
      を目指して一から設計開発した初代大型ロボット。中間発表会でも注目を集めた意欲作です。
    </p>
    <h4 class="text-lg md:text-xl mt-4 mb-1">特徴</h4>
    <ul class="list-disc leading-relaxed font-semibold text-gray-200 text-start mb-4">
      <li>Raspberry Pi Zeroを用いた制御システム</li>
      <li>サーボモータとDCモータによる自然な泳ぎ</li>
      <li>独自の磁石機構で安全な釣り体験を実現</li>
      <li>釣り針不要の革新的な設計</li>
    </ul>
    <p class="text-start">
      最新のテクノロジーと独自の機構を組み合わせることで、
      <span class="font-semibold text-gray-100">安心・安全な水中釣り体験</span>
      を提供します。
      従来の釣り針を使用せず、2つの磁石を活用した画期的な仕組みを一から設計を行い作成したため、安全にお楽しみいただけます。
      9軸センサーモジュールを使用して、釣られたことを認識できるような設計にもチャレンジしました。
    </p>
    <model path="./assets/models/m1_draco.glb" :scale="1.75"></model>
    <div class="self-end group whitespace-nowrap font-light text-white text-sm mt-2 mb-5">
      <router-link to="/sandbox/1">
        <p class="inline-block w-min">SEE MORE</p>
        <p class="inline-block w-min duration-500 ml-2 group-hover:ml-3">&gt;</p>
        <p class="inline-block w-min duration-500 opacity-0 group-hover:opacity-100">&gt;</p>
      </router-link>
    </div>

    <h3 class="font-bold text-gray-100 text-xl md:text-2xl text-center mt-10 mb-4">
      小魚型ロボット
      <span class="whitespace-nowrap">「小魚くん」</span>
    </h3>
    <p class="text-start">
      お子様の楽しい釣り体験を第一に考えた、
      <span class="font-semibold text-gray-100">軽量コンパクト</span>
      な釣りロボット！
    </p>
    <h4 class="text-lg md:text-xl mt-4 mb-1">特徴</h4>
    <ul class="list-disc leading-relaxed font-semibold text-gray-200 text-start mb-4">
      <li>子供でも扱いやすい軽量設計</li>
      <li>水流を考慮した流線型ボディ</li>
      <li>最小限の水中モータで動作する省エネ設計</li>
      <li>シンプルで扱いやすい非制御型システム</li>
      <li>磁力式エサによる安全な釣り機構</li>
    </ul>
    <p class="text-start">
      小さなお子様でも安心して釣り体験を楽しめるよう、従来の釣り針を使用せず、
      <span class="font-semibold text-gray-100">磁力でロボットを釣り上げる新しい仕組み</span>
      を新しく設計。
      安全性と使いやすさを追求した設計で、釣りの楽しさを身近に感じていただけます。
      鳳祭でも多くのお子様に体験していただきました。
    </p>
    <model path="./assets/models/m2_draco.glb" :scale="25.55"></model>
    <div class="self-end group whitespace-nowrap font-light text-white text-sm mt-2 mb-5">
      <router-link to="/sandbox/2">
        <p class="inline-block w-min">SEE MORE</p>
        <p class="inline-block w-min duration-500 ml-2 group-hover:ml-3">&gt;</p>
        <p class="inline-block w-min duration-500 opacity-0 group-hover:opacity-100">&gt;</p>
      </router-link>
    </div>

    <h3 class="font-bold text-gray-100 text-xl md:text-2xl text-center mt-10 mb-4">
      2代目大型ロボット
      <span class="whitespace-nowrap">「ぎょぼっと」</span>
    </h3>
    <p class="text-start">
      初代「マードック」の血統を受け継ぎ、迫力の大きさを誇る新作ロボット。
      前作で課題となっていた
      <span class="font-semibold text-gray-100">エサの摂取機能や操作性を大幅に改善</span>
      し、釣り体験の実現を目指し作成しました。
    </p>
    <h4 class="text-lg md:text-xl mt-4 mb-1">特徴</h4>
    <ul class="list-disc leading-relaxed font-semibold text-gray-200 text-start mb-4">
      <li>Raspberry Piを使った制御が可能</li>
      <li>サーボモータとDCモータによる自然な泳ぎ</li>
      <li>頭部搭載の水中モータによる強力な吸引力</li>
      <li>エサの取り込みがスムーズな新設計</li>
      <li>小魚くんと同じエサが使用可能</li>
      <li>水中での実釣を想定した設計</li>
    </ul>
    <p class="font-semibold text-gray-100 text-lg text-center my-2">
      大型魚を釣り上げる
      <span class="whitespace-nowrap">興奮と感動を！</span>
    </p>
    <model path="./assets/models/m3_draco.glb" :scale="0.155" :rotation="true"></model>
    <div class="self-end group whitespace-nowrap font-light text-white text-sm mt-2 mb-5">
      <router-link to="/sandbox/3">
        <p class="inline-block w-min">SEE MORE</p>
        <p class="inline-block w-min duration-500 ml-2 group-hover:ml-3">&gt;</p>
        <p class="inline-block w-min duration-500 opacity-0 group-hover:opacity-100">&gt;</p>
      </router-link>
    </div>
  </div>
</template>
