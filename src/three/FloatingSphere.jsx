import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.2, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        attach="material"
        color="#8b5cf6"   // purple (matches gradient)
        emissive="#3b82f6" // blue glow effect
        emissiveIntensity={0.6}
        distort={0.35}
        speed={2}
        roughness={0.1}
        metalness={0.9}
      />
    </Sphere>
  );
};

export default FloatingSphere;