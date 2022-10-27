import React, { Component } from 'react';
import * as THREE from './node_modules/three/build/three.module.js';
import './main.css'

class ThreeJs extends Component {
    render() {
        return (
            <div id="torus"></div>
        );
    }
}

const scene = new THREE.Scene();
var torusDiv;

window.addEventListener('load', (event) => {
    torusDiv = document.getElementById('three');
    console.log("torusDiv: ", torusDiv)
    const camera = new THREE.PerspectiveCamera( 75, torusDiv.offsetWidth / torusDiv.offsetHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( torusDiv.offsetWidth, torusDiv.offsetHeight);
    torusDiv.appendChild( renderer.domElement );

    const geometry = new THREE.TorusGeometry( 2, 0.4, 12, 100 );
    const material = new THREE.MeshBasicMaterial( { color: 0x7E31F8 } );
    const torus = new THREE.Mesh( geometry, material );
    scene.add( torus );

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame( animate );
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        renderer.render( scene, camera );
    };
    animate();
});

export default ThreeJs;
