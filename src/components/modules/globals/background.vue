<script setup>
import {onMounted} from "vue";
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader.js";

// scene
const scene = new THREE.Scene();

// GLB models load
const glbLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("./scripts/libraries/draco/");
glbLoader.setDRACOLoader(dracoLoader);

const randomColor = `#${Array.from({length: 6}, () => (16 * Math.random() | 0).toString(16)).join('')}`;
glbLoader.load("./assets/models/m1_draco.glb", (m) => {
  const model = m.scene;
  model.position.set(0, 0, 0);
  model.scale.set(1.85, 1.85, 1.85);
  model.rotation.y = -Math.PI / 2;
  model.traverse(function (child) {
    child.material = new THREE.MeshStandardMaterial({color: randomColor, roughness: 0});
  });
  scene.add(model);
});

// Random particles
const createParticles = (count) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const particle = new THREE.Mesh(
        new THREE.CircleGeometry(0.05, 3),
        new THREE.MeshNormalMaterial()
    );
    particle.position.set(
        (Math.random() - 0.5) * 64,
        (Math.random() - 0.5) * 64,
        (Math.random() - 0.5) * 64
    );
    particle.rotation.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 14
    );
    scene.add(particle);
    particles.push(particle);
  }
  return particles;
};
const particulars = createParticles(3000);

// Light
const ambientLight = new THREE.AmbientLight(0x404040);
const hemisphereLight = new THREE.HemisphereLight(0x404040);
const directLight = new THREE.DirectionalLight(0xffffff, 5);
directLight.position.set(5, 0, 2);
[ambientLight, hemisphereLight, directLight,].forEach(light => scene.add(light));

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
onMounted(() => {
  document.getElementById("three").appendChild(renderer.domElement);
});

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Animate
// update camera
let flgP = true, flgR = true;

function updateCamera() {
  camera.rotation.x += 0.00001;
  camera.rotation.z -= 0.001;
  if (flgR) {
    camera.rotation.x += 0.0001;
    if (camera.rotation.x > 0.5) flgR = false;
  } else {
    camera.rotation.x -= 0.0001;
    if (camera.rotation.x < -0.5) flgR = true;
  }
  if (flgP) {
    camera.position.z += 0.001;
    if (camera.position.z > 7) flgP = false;
  } else {
    camera.position.z -= 0.001;
    if (camera.position.z < 2) flgP = true;
  }
}

// particles animate
function particlesAnimate() {
  particulars.forEach((particular) => {
    particular.position.x += 0.01;
    particular.position.y += 0.01;

    if (particular.position.x > 32) particular.position.x = (Math.random() - 0.5) * 128
    if (particular.position.y > 32) particular.position.y = (Math.random() - 0.5) * 128
  });
}

function animate() {
  requestAnimationFrame(animate);
  updateCamera();
  particlesAnimate();
  renderer.render(scene, camera);
}

animate();

// Resize
function onResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Fix renderer
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // Fix camera
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

onResize();
window.addEventListener("resize", onResize);
</script>

<template>
  <div class="absolute font-Default" id="three"></div>
</template>
