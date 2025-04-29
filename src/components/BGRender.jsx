// src\components\BGRender.jsx

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import StarsBackground from './StarsBackground';

function TModel({ filePath, scrollY }) {
  const modelRef = useRef();
  useGLTF.preload(filePath);
  const { scene } = useGLTF(filePath);

  // Store target position separately
  const targetPosition = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
  
    if (modelRef.current) {
      const targetZ = 12 - scrollProgress * 10;
      const targetY = -2 + scrollProgress * 2;
      const scale = 0.01 + scrollProgress * 0.07;
  
      const totalScreenHeight = window.innerHeight;
      const shiftStart = totalScreenHeight * 1;
      const shiftEnd = totalScreenHeight * 2.5;
  
      let targetX = 0; 
      let rotationY = 0; 
  
      if (scrollY > shiftStart) {
        const shiftProgress = Math.min((scrollY - shiftStart) / (shiftEnd - shiftStart), 1);
  
        targetX = -4.5 * shiftProgress;
        rotationY = 0.4 * shiftProgress; // rotation scales with scroll
      }
  
      // Update target position
      targetPosition.current.set(
        Math.sin(t) * 0.1 + targetX,
        targetY + Math.sin(t) * 0.1,
        targetZ
      );
  
      // Smooth move toward target
      const lerpSpeed = 2.5;
      modelRef.current.position.lerp(targetPosition.current, delta * lerpSpeed);
  
      // Smoothly rotate
      modelRef.current.rotation.y = rotationY;
  
      // Scale model
      modelRef.current.scale.set(scale, scale, scale);
  
      // Opacity fade
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
  const [controlsEnabled, setControlsEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      // ========== OrbitControls unlock ==========
      // Enable OrbitControls once you scroll past 2 full screens (window.innerHeight * 2)
      // Lower this number → enable controls earlier
      // Raise this number → enable controls later
      if (currentY > window.innerHeight * 2) {
        setControlsEnabled(true);
      } else {
        setControlsEnabled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'auto',
        width: '100vw',
        height: '100vh',
        background: 'transparent',
        zIndex: 1,
      }}
      camera={{ position: [0, 0, 12], fov: 45 }}
      gl={{ alpha: true }}
    >
      <StarsBackground />
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
      <TModel filePath={filePath} scrollY={scrollY} />
      {/* OrbitControls dynamically enabled based on scroll position */}
      <OrbitControls
        enableZoom={controlsEnabled}
        enablePan={controlsEnabled}
        enableRotate={controlsEnabled}
      />
    </Canvas>
  );
}
