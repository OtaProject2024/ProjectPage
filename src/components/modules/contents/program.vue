<script setup>
import card from "../globals/card.vue";
</script>

<template>
  <div class="animate-part-in text-gray-300 w-11/12 flex flex-col items-center p-3 mt-2 mb-12">
    <p class="mb-2">
      開発プロセスを効率化するためにGitHubを活用し、ソースコードの開発を行いました。
      GitHubを使用することで、
      <span class="font-semibold text-gray-100">バージョン管理や問題追跡などが容易</span>
      に行えます。
      進行状況やコードの変更履歴を透明にし、より効果的な開発プロセスを実現しています。
    </p>
    <p class="mt-5">
      PyDochリポジトリは、ロボットを制御するためのPythonスクリプト群です。 PyYAMLを使用した柔軟な設定管理、RPi.GPIOによるRaspberry
      PiのGPIOピン制御、adafruit_bno055を活用したセンサーデータの取得、そしてPyGameによる音声制御を実現しています。
      さらに、
      <span class="font-semibold text-gray-100">マルチスレッディングを駆使</span>
      してリアルタイムの応答性を損なわずに効率的な処理を可能にしている点が特徴です。
    </p>
    <card site="GitHub" title="OtaProject2024 / PyDoch"
          text="GitHub is where OtaProject2024 builds software."
          path="https://github.com/OtaProject2024/PyDoch"/>
    <p class="mt-5">
      Rod_arリポジトリは、釣り竿を制御するためのC++プログラムです。
      Arduinoライブラリを活用して、振動モータの制御や音声制御を行っています。
    </p>
    <card site="GitHub" title="OtaProject2024 / Rod_ar"
          text="GitHub is where OtaProject2024 builds software."
          path="https://github.com/OtaProject2024/Rod_ar"/>
  </div>
</template>
