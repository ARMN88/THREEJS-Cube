eruda.init();

let scene, camera, renderer, controls;
let ambientLight, directionalLight;

function init() {
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000);
  camera.position.z = 5;
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(200, 500, 300);
  scene.add(directionalLight);

  let geo = new THREE.BoxGeometry(1, 1, 1);
  let mat = new THREE.MeshStandardMaterial({ color: "dodgerblue" });
  let box = new THREE.Mesh(geo, mat);
  scene.add(box);
}

function update() {
  renderer.render(scene, camera);
}

window.onload = function() {
  init();
  setInterval(update, 1);
};
