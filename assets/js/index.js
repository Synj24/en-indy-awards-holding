// Set up global variables
var THREE = require( 'three' );
scene = new THREE.Scene();
var  renderer, camera, cube;
var winWidth = window.innerWidth,
    winHeight = window.innerHeight;
// var loader = new THREE.GLTFLoader();

// Define the existing canvas as the renderer
renderer = new THREE.WebGLRenderer(
  {
    canvas: background,
    antialias:true,
    alpha: true
  });
renderer.setSize( winWidth, winHeight );

// Define the camera and set its position
camera = new THREE.PerspectiveCamera(
  90,
  winWidth/winHeight,
  0.1,
  1000
);
camera.position.set(-2, 1, 3.3);

// Define our cube. So advanced wow
var geometry = new THREE.BoxGeometry( 3, 3, 3 );
var material = new THREE.MeshBasicMaterial(
  {
    color: 0xdf6a66,
    opacity: 0.63
  }
);

cube = new THREE.Mesh( geometry, material );

// Add the cube to the scene and make animation happen
scene.add( cube );

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.005;
	cube.rotation.y += 0.0025;

	renderer.render( scene, camera );
};

animate();
