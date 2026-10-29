import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometría compartida para los cubos
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 1. Cubo Verde (Izquierda)
const materialGreen = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cubeGreen = new THREE.Mesh(geometry, materialGreen);
cubeGreen.position.x = -2.2;
scene.add(cubeGreen);

// 2. Cubo Azul (Centro)
const materialBlue = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const cubeBlue = new THREE.Mesh(geometry, materialBlue);
cubeBlue.position.x = 0;
scene.add(cubeBlue);

// 3. Cubo Rojo (Derecha)
const materialRed = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cubeRed = new THREE.Mesh(geometry, materialRed);
cubeRed.position.x = 2.2;
scene.add(cubeRed);

// Iluminación
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

// Posición de la cámara
camera.position.z = 4.5;

// Función de animación principal
function animate() {
    // 1. Cubo Verde (Izquierda): Lento (incrementos pequeños de 0.005)
    cubeGreen.rotation.x += 0.005;
    cubeGreen.rotation.y += 0.005;

    // 2. Cubo Azul (Centro): Velocidad Media (incrementos moderados de 0.015)
    cubeBlue.rotation.x += 0.015;
    cubeBlue.rotation.y += 0.015;

    // 3. Cubo Rojo (Derecha): Velocidad Alta / Rápida (incrementos de 0.03)
    cubeRed.rotation.x += 0.03;
    cubeRed.rotation.y += 0.03;

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);


// Ajuste dinámico de ventana al redimensionar
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});