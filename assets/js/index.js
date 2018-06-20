// TODO
// - [ ] import model
// - [ ] figure out tranpareny (optional)
// - [ ] intergrate mailchimp API

var THREE = require( 'three' );
// import * as Sketch from 'sketch-js';
//

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 0.1, 1000 );

// var loader = new THREE.GLTFLoader();

// loader.load(
//   'obj/cube.gltf',
//   function ( gltf ) {
//     scene.add( gltf.scene )
//   })

var renderer = new THREE.WebGLRenderer(
  {
    canvas: background,
    antialias:true,
    alpha: true
  });
renderer.setSize( window.innerWidth, window.innerHeight );

var geometry = new THREE.BoxGeometry( 3, 3, 3 );
var material = new THREE.MeshBasicMaterial( { color: 0xdf6a66, opacity: 0.63 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.set(-2, 1, 3.3);

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.005;
	cube.rotation.y += 0.0025;

	renderer.render( scene, camera );
};

animate();
