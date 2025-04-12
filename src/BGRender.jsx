//  react\src\BGRender.jsx

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import StarsBackground from './StarsBackground';
import { DirectionalLight } from 'three';

function TModel({ filePath, scrollY }) {
    const modelRef = useRef();
    useGLTF.preload(filePath);
    const { scene } = useGLTF(filePath);
  
    useFrame((state) => {
      const t = state.clock.getElapsedTime();
      
      if (modelRef.current) {
        modelRef.current.position.x = Math.sin(t) * 0.1 
        modelRef.current.position.y = Math.sin(t) * 0.1 - scrollY / 300;
        modelRef.current.position.z = scrollY / 150;
      }
    });
  
    return <primitive object={scene} ref={modelRef} scale={0.2} />;
  }

export default function BGRender ({ filePath }) { 
    const [scrollY, setScrollY] = useState(0);    

      // Listen to scroll
      useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      return (
        <Canvas 
          style={{
            width: '100vw',
            height: '100vh',
            background: "#102030",
            zIndex: '0',
            }} 
          camera={{ position: [0, 0, 10] }}>
            <StarsBackground />
            <ambientLight intensity={2} />
            <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
            <TModel filePath={filePath} scrollY={scrollY} />
        </Canvas>
      );
    }