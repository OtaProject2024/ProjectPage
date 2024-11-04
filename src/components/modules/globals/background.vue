<script setup>
import {onMounted} from "vue";
import * as THREE from "three";
import {STLLoader} from "three/examples/jsm/loaders/STLLoader";

// scene
const scene = new THREE.Scene();

// STL model load
const stlLoader = new STLLoader();
const randomColor = `#${Array.from({length: 6}, () => (16 * Math.random() | 0).toString(16)).join('')}`;

stlLoader.load("./assets/model/murdock.stl", (geometry) => {
  const material = new THREE.MeshStandardMaterial({color: randomColor, roughness: 0});
  const mesh = new THREE.Mesh(geometry, material);
  mesh.geometry.center();
  mesh.scale.set(0.0015, 0.0015, 0.0015);
  mesh.rotation.x = -Math.PI / 2;
  mesh.rotation.z = -Math.PI / 2;
  scene.add(mesh);
});

// Random particles
const particulars = Array.from({length: 3000}, () => {
  const particular = new THREE.Mesh(
      new THREE.CircleGeometry(0.05, 3),
      new THREE.MeshNormalMaterial()
  );
  particular.position.set(
      (Math.random() - 0.5) * 128,
      (Math.random() - 0.5) * 128,
      (Math.random() - 0.5) * 128
  );
  particular.rotation.set(
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 14
  );
  scene.add(particular);
  return particular;
});

// Light
const ambientLight = new THREE.AmbientLight(0x404040);
const hemisphereLight = new THREE.HemisphereLight(0x404040);
const directLight = new THREE.DirectionalLight(0xffffff, 5);
directLight.position.set(5, 0, 2);
[ambientLight, hemisphereLight, directLight,].forEach(light => scene.add(light));

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
onMounted(() => {
  document.getElementById("three").appendChild(renderer.domElement);
});

// Animate
// update camera
let flgP, flgR = true;

function updateCamera() {
  camera.rotation.x += 0.00001;
  camera.rotation.z -= 0.001;
  if (flgR) {
    camera.rotation.x += 0.0001;
    if (camera.rotation.x > 0.5) {
      flgR = false;
    }
  } else {
    camera.rotation.x -= 0.0001;
    if (camera.rotation.x < -0.5) {
      flgR = true;
    }
  }
  if (flgP) {
    camera.position.z += 0.001;
    if (camera.position.z > 7) {
      flgP = false;
    }
  } else {
    camera.position.z -= 0.001;
    if (camera.position.z < 2) {
      flgP = true;
    }
  }
}

// particles animate
function particlesAnimate() {
  particulars.forEach((particular) => {
    particular.position.x += 0.01;
    particular.position.y += 0.01;

    if (particular.position.x > 64) {
      particular.position.x = (Math.random() - 0.5) * 128
    }
    if (particular.position.y > 64) {
      particular.position.y = (Math.random() - 0.5) * 128
    }
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

window.addEventListener("resize", onResize);
onResize();
</script>

<template>
  <div class="absolute font-Default" id="three"></div>
</template>
