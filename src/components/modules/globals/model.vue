<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader';

const props = defineProps({
  path: String,
  scale: Number,
  positionY: {
    type: Number,
    default: 0
  },
  rotation: {
    type: Boolean,
    default: false
  },
});

const canvasRef = ref(null);
const frameRef = ref(null);

// scene
const scene = new THREE.Scene();

// GLB models load
const glbLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("./scripts/libraries/draco/");
glbLoader.setDRACOLoader(dracoLoader);

glbLoader.load(props.path, (m) => {
  const model = m.scene;
  model.position.set(0, props.positionY, 0);
  model.scale.set(props.scale, props.scale, props.scale);
  model.rotation.y = props.rotation ? Math.PI / 2 : -Math.PI / 2;
  scene.add(model);

  // Animate
  function animate() {
    requestAnimationFrame(animate);
    model.rotation.y += 0.0025;
    renderer.render(scene, camera);
  }

  animate();
});

// Light
const ambientLight = new THREE.AmbientLight(0x404040);
const hemisphereLight = new THREE.HemisphereLight(0x404040);
const directLight = new THREE.DirectionalLight(0xffffff, 5);
directLight.position.set(5, 5, 5);
[ambientLight, hemisphereLight, directLight,].forEach(light => scene.add(light));

let renderer, camera
onMounted(() => {
  // Renderer
  const canvas = canvasRef.value;
  const frame = frameRef.value;

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
  });
  renderer.setSize(frame.clientWidth, frame.clientHeight);

  // Camera
  camera = new THREE.PerspectiveCamera(75, frame.clientWidth / frame.clientHeight, 0.1, 1000);
  camera.position.z = 5;

  // Resize
  function onResize() {
    const width = frame.clientWidth;
    const height = frame.clientHeight;

    // Fix renderer
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // Fix camera
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  onResize();
  window.addEventListener("resize", onResize);

  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
    if (renderer) {
      renderer.dispose();
      renderer.forceContextLoss();
    }
    if (scene) {
      scene.traverse((object) => {
        if (object.texture) object.texture.dispose();
        if (object.geometry) object.geometry.dispose();
        if (object.material) object.material.dispose();
      });
    }
    if (dracoLoader) dracoLoader.dispose();
  });
});
</script>

<template>
  <div ref="frameRef"
       class="flex justify-center w-full h-[150px] sm:h-[200px] md:h-[250px] rounded-lg bg-zinc-800 bg-opacity-80 mt-5"
       id="frame">
    <canvas ref="canvasRef"
            class="w-[300px] sm:w-[400px] md:w-[500px] h-full"
            id="model">
    </canvas>
  </div>
</template>
