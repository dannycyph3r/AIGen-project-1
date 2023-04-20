// Create a Three.js scene
var scene = new THREE.Scene();

// Create a camera and position it
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer and add it to the DOM
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a Rubik's Cube geometry and apply a silver material
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0xC0C0C0 }); // Use a silver color
var cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Create a rotation animation for the cube
var animate = function () {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

// Start the animation
animate();