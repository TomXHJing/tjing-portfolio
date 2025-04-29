// src\components\StarsBackground.jsx

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function StarsBackground({ count = 5000 }) {
  const meshRef = useRef();

  // Generate random star positions and per-star flicker speed/offsets
  const { positions, offsets } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const off = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
      off[i] = Math.random() * 10.0; 
    }

    return { positions: pos, offsets: off };
  }, [count]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
  }), []);

  useFrame(({ clock }) => {
    if (uniforms.uTime) {
      uniforms.uTime.value = clock.getElapsedTime();
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0001;
    }
  });

  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      attribute float aOffset;
      varying float vOffset;

      void main() {
        vOffset = aOffset;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = 1.5;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying float vOffset;

      void main() {
        float flicker = (sin(uTime * 2.0 + vOffset) + 1.0) / 2.0;
        gl_FragColor = vec4(vec3(flicker), 1);
      }
    `,
    transparent: true,
  }), [uniforms]);

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aOffset"
          array={offsets}
          count={offsets.length}
          itemSize={1}
        />
      </bufferGeometry>
      <primitive object={material} attach="material" />
    </points>
  );
}