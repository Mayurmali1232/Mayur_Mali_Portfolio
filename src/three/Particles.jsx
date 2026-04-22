import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const meshRef = useRef();

  const particlesCount = 2000;

  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return positions;
  }, []);

  const colors = useMemo(() => {
    const colors = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      colors[i * 3] = Math.random() * 0.5 + 0.5; // R
      colors[i * 3 + 1] = Math.random() * 0.5 + 0.5; // G
      colors[i * 3 + 2] = Math.random() * 0.5 + 0.5; // B
    }
    return colors;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.075) * 0.1;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        transparent
        opacity={0.8}
        vertexColors
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;