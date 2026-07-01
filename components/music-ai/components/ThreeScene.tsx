'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function Orb() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.x = t * 0.08;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.4, 128, 128]} scale={2.2}>
      <MeshDistortMaterial
        color="#f2f2f2"
        attach="material"
        distort={0.45}
        speed={1.6}
        roughness={0.15}
        metalness={0.7}
        wireframe
      />
    </Sphere>
  );
}

const ThreeScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[3, 2, 5]} intensity={1.2} />
        <directionalLight position={[-3, -2, -5]} intensity={0.35} />
        <Orb />
      </Canvas>
    </div>
  );
};

export default ThreeScene;