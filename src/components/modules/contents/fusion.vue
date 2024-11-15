<script setup>
import model from "../globals/model.vue";
</script>

<template>
  <div class="animate-part-in text-gray-200 w-11/12 flex flex-col items-center p-3 mt-2 mb-12">
    <h3 class="font-Default font-medium text-xl md:text-2xl mb-4">初代大型ロボット「マードック」</h3>
    <p>
      水中での自然な動きを目指して一から設計開発した初代大型ロボット「マードック」。中間発表会でも注目を集めた意欲作です。
    </p>
    <h4 class="text-lg md:text-xl mt-4 mb-1">特徴</h4>
    <ul class="list-disc list-inside leading-relaxed font-semibold text-white text-l mb-4">
      <li>Raspberry Pi Zeroを搭載した高性能制御システム</li>
      <li>サーボモータとDCモータによる水中での自然な泳ぎ</li>
      <li>オリジナルの磁石機構で安全な釣り体験を実現</li>
      <li>釣り針不要の革新的な設計</li>
    </ul>
    <p>
      最新のテクノロジーと独自の機構を組み合わせることで、安心・安全な水中釣り体験を提供します。
      従来の釣り針を使用せず、2つの磁石を活用した画期的な仕組みを1から設計を行い作成したため、安全にお楽しみいただけます。
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
    <h3 class="font-Default font-medium text-xl md:text-2xl mt-10 mb-4">小魚型ロボット「小魚くん」</h3>
    <p>
      お子様の楽しい釣り体験を第一に考えた、軽量コンパクトな釣りロボット！
    </p>
    <h4 class="text-lg md:text-xl mt-4 mb-1">特徴</h4>
    <ul class="list-disc list-inside leading-relaxed font-semibold text-white text-l mb-4">
      <li>子供でも扱いやすい軽量設計</li>
      <li>水流を考慮した流線型ボディ</li>
      <li>必要最小限の水中モータで動作する省エネ設計</li>
      <li>シンプルで扱いやすい非制御型システム</li>
      <li>磁力式エサによる安全な釣り機構</li>
    </ul>
    <p>
      小さなお子様でも安心して釣り体験を楽しめるよう、従来の釣り針を使用せず、磁力でロボットを釣り上げる新しい仕組みを新しく設計。
      安全性と使いやすさを追求した設計で、釣りの楽しさを身近に感じていただけます。
    </p>
    <model path="./assets/models/m2_draco.glb" :scale="24.55"></model>
    <div class="self-end group whitespace-nowrap font-light text-white text-sm mt-2 mb-5">
      <router-link to="/sandbox/2">
        <p class="inline-block w-min">SEE MORE</p>
        <p class="inline-block w-min duration-500 ml-2 group-hover:ml-3">&gt;</p>
        <p class="inline-block w-min duration-500 opacity-0 group-hover:opacity-100">&gt;</p>
      </router-link>
    </div>
    <h3 class="font-Default font-medium text-xl md:text-2xl mt-10 mb-4">２代目大型ロボット「ぎょぼっと」</h3>
    <p>
      「マードック」の血統を受け継ぎ、迫力の大きさを誇る新作ロボット「ぎょぼっと」。
      前作で課題となっていたエサの摂取機能や操作性を大幅に改善し、釣り体験の実現を目指し作成しました。
    </p>
    <h4 class="text-lg md:text-xl mt-4 mb-1">特徴</h4>
    <ul class="list-disc list-inside leading-relaxed font-semibold text-white text-l mb-4">
      <li>Raspberry Piを使った制御が可能</li>
      <li>サーボモータとDCモータによる水中での自然な泳ぎ</li>
      <li>頭部搭載の水中モータによる強力な吸引力</li>
      <li>エサの取り込みがスムーズな新設計</li>
      <li>小魚くんと同じエサが使用可能</li>
      <li>水中での実釣りを想定した設計</li>
    </ul>
    <p>
      大型魚を釣り上げる興奮と感動を！
    </p>
    <model path="./assets/models/m3_draco.glb" :scale="0.0175" :positionY="-1.25" :rotation="true"></model>
    <div class="self-end group whitespace-nowrap font-light text-white text-sm mt-2 mb-5">
      <router-link to="/sandbox/3">
        <p class="inline-block w-min">SEE MORE</p>
        <p class="inline-block w-min duration-500 ml-2 group-hover:ml-3">&gt;</p>
        <p class="inline-block w-min duration-500 opacity-0 group-hover:opacity-100">&gt;</p>
      </router-link>
    </div>
  </div>
</template>
