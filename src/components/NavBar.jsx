// src\components\NavBar.jsx

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import ModelRender from '../components/ModelRender';
import AnimatedThemeToggle from '../components/AnimatedThemeToggle';

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [triggerRotation, setTriggerRotation] = useState(false);

  const x = useMotionValue(0);
  const widthTrail = useTransform(x, [0, 150], ['0ch', '10ch'], { clamp: false });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x > 100) {
      setTriggerRotation(true);
      // Automatically stop rotation after 5s
      setTimeout(() => setTriggerRotation(false), 5000);
    }

    // Spring back
    animate(x, 0, { type: 'spring', stiffness: 300, damping: 20 });
  };

  return (
    <div
      className="fixed z-50 px-[2%] pt-8 top-0 left-0 w-full transition-transform duration-700 ease-in-out">
      <nav className="grid grid-cols-12 gap-0 -translate-x-10">
        <Link to="/" className="col-span-1 right-0 top-0 w-full h-[4rem] translate-x-4 -translate-y-2">
          <ModelRender filePath="/T-nav.glb" rotate={triggerRotation} />
        </Link>
        <div className="col-span-11 relative backdrop-blur-md bg-white/5 ring-1 ring-white/15 shadow-lg px-4 max-h-[3rem] rounded-[3rem] flex justify-between items-center">
          
          {/* spin the model */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 150 }}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="absolute left-[10rem] top-2 select-none cursor-ew-resize font-mono text-lg text-foreground bg-foreground/10 px-2 py-1 rounded-md flex items-center z-10"
          >
            <span>{'⇒'}</span>
            <motion.span
              style={{ width: widthTrail }}
              className="inline-block whitespace-nowrap overflow-hidden"
            >
              {'⇒'.repeat(20)}
            </motion.span>
          </motion.div>
          <div className="text-xl font-bold text-foreground">Tom's MySpace</div>
          <ul className="flex gap-6 text-light-fore font-medium">
            <li><a href="projects" className="hover:underline">Projects</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>

          <AnimatedThemeToggle toggle={() => setDarkMode(!darkMode)} darkMode={darkMode} />

        </div>
      </nav>
    </div>
  );
}
