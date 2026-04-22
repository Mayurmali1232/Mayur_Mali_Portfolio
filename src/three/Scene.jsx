import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { Suspense } from 'react';
// import FloatingSphere from './FloatingSphere';
import Particles from './Particles';

const Scene = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor('#000000', 0);
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <directionalLight position={[-10, -10, -5]} intensity={0.4} />
          <spotLight position={[0, 10, 0]} angle={0.15} penumbra={1} intensity={0.5} />

          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          <Environment preset="night" />

          {/* <FloatingSphere /> */}
          <Particles />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;