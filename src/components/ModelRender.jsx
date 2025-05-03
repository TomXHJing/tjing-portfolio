// src\components\ModelRender.jsx

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';

function ItemModel({ filePath, rotate }) {
  const modelRef = useRef();
  const { scene } = useGLTF(filePath);
  const spinVelocity = useRef(0);

  useFrame((_, delta) => {
    if (!modelRef.current) return;

    // If triggered, set initial fast spin
    if (rotate) {
      spinVelocity.current = 10;
    }

    // Apply rotation
    if (spinVelocity.current > 0.001) {
      modelRef.current.rotation.y += delta * spinVelocity.current;

      // Apply reversed log decay: exponential ease-out
      spinVelocity.current *= 0.99;
    } else {
      spinVelocity.current = 0;
    }
  });

  return <primitive object={scene} ref={modelRef} />;
}


export default function ModelRender({ filePath, rotate }) {
  return (
    <Canvas
      style={{
        width: '100%',
        height: '100%',
        pointerEvents: 'auto',
        background: 'transparent',
      }}
      camera={{ position: [0, 0, 50], fov: 40 }}
    >
      <directionalLight position={[15, 12, 10]} intensity={2} castShadow />
      <ambientLight intensity={1} />
      <ItemModel filePath={filePath} rotate={rotate} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /> {/*disabled for home page link*/}
    </Canvas>
  );
}
