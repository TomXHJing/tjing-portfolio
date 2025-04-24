// src\components\ModelRender.jsx

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

function ItemModel({ filePath }) {
  const modelRef = useRef();
  const { scene } = useGLTF(filePath);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const targetY = 0;
    const targetZ = 2;
    const scale = 1;

    if (modelRef.current) {
      modelRef.current.position.set(
        Math.sin(t) * 0.1,
        targetY + Math.sin(t) * 0.1,
        targetZ
      );

      modelRef.current.scale.set(scale, scale, scale);
    }
  });

  return <primitive object={scene} ref={modelRef} />;
}

export default function ModelRender({ filePath }) {
  return (
    <Canvas
      style={{
        width: '100%',
        height: '100%',
        pointerEvents: 'auto',
        background: '#102030',
      }}
      camera={{ position: [0, 5, 25], fov: 90 }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={4.5} castShadow />
      <ItemModel filePath={filePath} />
      <OrbitControls enableZoom enablePan enableRotate />
    </Canvas>
  );
}
