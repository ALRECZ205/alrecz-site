import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Environment, Torus, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleRing = ({ count = 1000, radius = 2 }) => {
  const points = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = radius + (Math.random() - 0.5) * 0.5;
      pos[i * 3] = Math.cos(theta) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      pos[i * 3 + 2] = Math.sin(theta) * r;
    }
    return pos;
  }, [count, radius]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.2;
      points.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial transparent color="#7A0F0F" size={0.02} sizeAttenuation={true} depthWrite={false} />
    </Points>
  );
};

const Artifact = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.2;
      coreRef.current.rotation.y = t * 0.3;
      const scale = 1 + Math.sin(t * 3) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }
    
    if (wireRef.current) {
      wireRef.current.rotation.x = -t * 0.1;
      wireRef.current.rotation.y = -t * 0.15;
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.5) * 0.2;
      ringRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <group 
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        {/* Inner Core */}
        <Sphere ref={coreRef} args={[0.8, 64, 64]}>
          <MeshDistortMaterial
            color={hovered ? "#7A0F0F" : "#1A1A1A"}
            envMapIntensity={hovered ? 2 : 1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.9}
            roughness={0.1}
            distort={hovered ? 0.8 : 0.4}
            speed={hovered ? 5 : 2}
          />
        </Sphere>
        
        {/* Outer Wireframe */}
        <Sphere ref={wireRef} args={[1.2, 32, 32]}>
          <meshStandardMaterial 
            color={hovered ? "#ff0000" : "#ffffff"} 
            wireframe 
            transparent 
            opacity={hovered ? 0.3 : 0.1} 
          />
        </Sphere>
        
        {/* Orbiting Ring */}
        <Torus ref={ringRef} args={[1.6, 0.02, 16, 100]}>
          <meshStandardMaterial 
            color="#7A0F0F" 
            emissive="#7A0F0F"
            emissiveIntensity={hovered ? 2 : 0.5}
            transparent 
            opacity={0.8} 
          />
        </Torus>
        
        {/* Particle Cloud */}
        <ParticleRing count={hovered ? 2000 : 500} radius={1.8} />
      </Float>
    </group>
  );
};

const Artifact3D: React.FC = () => {
  return (
    <div className="w-full h-full relative" data-cursor="hover">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#7A0F0F" />
        <Artifact />
        <Environment preset="studio" />
      </Canvas>
      
      {/* Overlay grid lines to keep the terminal aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none rounded-full"></div>
    </div>
  );
};

export default Artifact3D;
