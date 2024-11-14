<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import {useRoute} from "vue-router";
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

const route = useRoute();
const models = [
  {
    id: 1,
    path: "./assets/models/m1_draco.glb",
    scale: 1.75,
    positionY: 0,
  },
  {
    id: 2,
    path: "./assets/models/m2_draco.glb",
    scale: 24.55,
    positionY: 0,
  },
  {
    id: 3,
    path: "./assets/models/m3_draco.glb",
    scale: 0.0175,
    positionY: -1.25,
  }
]

let id = Number(route.params.id);
const validIds = [1, 2, 3];
if (!validIds.includes(id)) id = 1;
const selectModel = models.find(model => model.id === id);

const canvasRef = ref(null);
const frameRef = ref(null);

// scene
const scene = new THREE.Scene();

// GLB models load
const glbLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("./scripts/libraries/draco/");
glbLoader.setDRACOLoader(dracoLoader);

glbLoader.load(selectModel.path, (m) => {
  const model = m.scene;
  model.position.set(0, selectModel.positionY, 0);
  model.scale.set(selectModel.scale, selectModel.scale, selectModel.scale);
  model.rotation.y = selectModel.id === 3 ? Math.PI / 2 : -Math.PI / 2;
  scene.add(model);

  // Animate
  function animate() {
    requestAnimationFrame(animate);
    controls.target.copy(new THREE.Vector3(0, 0, 0));
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
});

// Light
const createDirectionalLight = (x, y, z, intensity) => {
  const light = new THREE.DirectionalLight(0xffffff, intensity);
  light.position.set(x, y, z);
  return light;
};
const lights = [
  new THREE.AmbientLight(0xffffff, 0.5),
  createDirectionalLight(10, 10, 10, 2),
  createDirectionalLight(-10, 10, -10, 2),
  createDirectionalLight(10, -10, -10, 2),
  createDirectionalLight(10, -10, 10, 2),
  createDirectionalLight(10, 0, 0, 1),
  createDirectionalLight(-10, 0, 0, 1),
];
lights.forEach(light => scene.add(light));

let renderer, camera, controls;
onMounted(() => {
  // Renderer
  const canvas = canvasRef.value;
  const frame = frameRef.value;

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: false
  });
  renderer.setSize(frame.clientWidth, frame.clientHeight);

  // Camera
  camera = new THREE.PerspectiveCamera(75, frame.clientWidth / frame.clientHeight, 0.1, 1000);
  camera.position.z = 5;

  // OrbitControls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableRotate = true;
  controls.enableZoom = true;
  controls.minDistance = 1;
  controls.maxDistance = 25;
  controls.enablePan = false;

  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.update();

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
    if (controls) controls.dispose();
  });
});
</script>

<template>
  <div
      class="animate-bg-in absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none bg-zinc-900 bg-opacity-50 backdrop-blur-sm">
    <div ref="frameRef" class="flex justify-center w-full h-full" id="frame">
      <canvas ref="canvasRef" class="w-full h-full" id="model"></canvas>
    </div>
  </div>
</template>
