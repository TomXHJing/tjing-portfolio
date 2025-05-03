// src\components\BGRender.jsx

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import StarsBackground from './StarsBackground';

function TModel({ filePath, scrollY, turn }) {
  const modelRef = useRef();

  if (!filePath || turn === undefined || turn === null) return null;

  useGLTF.preload(filePath);
  const { scene } = useGLTF(filePath);

  useEffect(() => {
    if (modelRef.current) {
      const box = new THREE.Box3().setFromObject(modelRef.current);
      const center = box.getCenter(new THREE.Vector3());
      modelRef.current.position.sub(center);
      console.log("Centered model at:", center);
    }
  }, [scene]);

  const targetPosition = useRef(new THREE.Vector3(0, 0, 0));
  const accumulatedTurn = useRef(0);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    const scrollProgress = Math.min(scrollY / window.innerHeight, 1);

    if (!modelRef.current) return;

    const targetZ = 12 - scrollProgress * 10;
    const targetY = -2 + scrollProgress * 2;
    const scale = 0.01 + scrollProgress * 0.07;

    const shiftStart = window.innerHeight;
    const shiftEnd = window.innerHeight * 2.5;

    let targetX = 0;
    let scrollRotationY = 0;

    if (scrollY > shiftStart) {
      const shiftProgress = Math.min((scrollY - shiftStart) / (shiftEnd - shiftStart), 1);
      targetX = 5 * shiftProgress;
      scrollRotationY = -0.4 * shiftProgress;
    }

    targetPosition.current.set(
      Math.sin(t) * 0.1 + targetX,
      targetY + Math.sin(t) * 0.1,
      targetZ
    );

    const lerpSpeed = 2.5;
    modelRef.current.position.lerp(targetPosition.current, delta * lerpSpeed);

    accumulatedTurn.current += turn * delta * 0.15;
    modelRef.current.rotation.y = scrollRotationY + accumulatedTurn.current;

    modelRef.current.scale.set(scale, scale, scale);

    modelRef.current.traverse((child) => {
      if (child.material && 'opacity' in child.material) {
        child.material.transparent = true;
        child.material.opacity = scrollProgress;
      }
    });
  });

  return <primitive object={scene} ref={modelRef} />;
}

export default function BGRender({ filePath, turn }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    setScrollY(window.scrollY);
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
      <directionalLight position={[5, 5, 5]} intensity={3.5} castShadow />
      {/* Conditionally render model only if filePath & turn are provided */}
      {filePath && turn !== undefined && <TModel filePath={filePath} scrollY={scrollY} turn={turn} />}
    </Canvas>
  );
}
