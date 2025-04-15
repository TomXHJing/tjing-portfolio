//  react\src\BGRender.jsx

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import StarsBackground from './StarsBackground';

function TModel({ filePath, scrollY }) {
  const modelRef = useRef();
  useGLTF.preload(filePath);
  const { scene } = useGLTF(filePath);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const scrollProgress = Math.min(scrollY / window.innerHeight, 1); // 0 to 1

    if (modelRef.current) {
      // Zoom from far to near
      const targetZ = 12 - scrollProgress * 10; // Z: 12 → 2
      const targetY = -2 + scrollProgress * 2;  // Y: -2 → 0
      const scale = 0.01 + scrollProgress * 0.1; // scale: 0.1 → 1.0

      modelRef.current.position.set(
        Math.sin(t) * 0.1,
        targetY + Math.sin(t) * 0.1,
        targetZ
      );

      modelRef.current.scale.set(scale, scale, scale);

      // Optional: fade in materials
      modelRef.current.traverse((child) => {
        if (child.material && 'opacity' in child.material) {
          child.material.transparent = true;
          child.material.opacity = scrollProgress;
        }
      });
    }
  });

  return <primitive object={scene} ref={modelRef} />;
}

export default function BGRender({ filePath }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100vw',
        height: '100vh',
        background: '#102030',
        zIndex: 0,
      }}
      camera={{ position: [0, 0, 12], fov: 45 }}
    >
      <StarsBackground />
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
      <TModel filePath={filePath} scrollY={scrollY} />
    </Canvas>
  );
}
