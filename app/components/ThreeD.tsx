"use client";

import * as THREE from "three";
import { useEffect, useRef, Texture } from "react";

const ThreeD = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);

      if (mountRef.current !== null) {
        mountRef.current.appendChild(renderer.domElement);
      }

      const centralCubeGeometry = new THREE.IcosahedronGeometry(5, 0);
      const normalTexture = new THREE.TextureLoader().load(
        '/public/next.svg'
    )
      const centralCubeMaterial = new THREE.MeshStandardMaterial({
        color: 0x6b669f,
        emissive: 0x6b669f,
        normalMap: normalTexture,
        wireframe: true,
      });
      const centralCube = new THREE.Mesh(centralCubeGeometry, centralCubeMaterial);

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x1b1c1e);
      scene.add(centralCube);

      // Create additional cubes and position them randomly around the central cube
      const numCubes = 8;
      const distanceFromCenter = 45;

      for (let i = 0; i < numCubes; i++) {
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: true,
        });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

        // Set random positions
        cube.position.x = Math.random() * 10 - 5; // Adjust the range based on your scene
        cube.position.y = Math.random() * 10 - 5;
        cube.position.z = Math.random() * 10 - 5;

        // Set random rotation angles
        cube.rotation.x = Math.random() * Math.PI * 2;
        cube.rotation.y = Math.random() * Math.PI * 2;
        cube.rotation.z = Math.random() * Math.PI * 2;

        scene.add(cube);
      }

      camera.position.z = 15;

      const animate = function () {
        requestAnimationFrame(animate);

        centralCube.rotation.x += 0.0;
        centralCube.rotation.y += 0.002;

        // Rotate all additional cubes
        scene.children.forEach((child) => {
          if (child !== centralCube) {
            child.rotation.x += 0.001;
            child.rotation.y += 0.001;
            child.position.z += 0.005; // Adjust the speed based on your preference
          }
        });

        renderer.render(scene, camera);
      };

      animate();
    }
  }, []);

  return <div ref={mountRef}></div>;
};

export default ThreeD;
