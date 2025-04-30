// src\components\NavBar.jsx

import { useEffect, useState } from 'react';

export default function NavBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 150);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`
        fixed z-50 px-12 pt-8 top-0 left-0 w-full transition-transform duration-700 ease-in-out
        ${visible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <nav className="backdrop-blur-md bg-white/40 shadow-md p-4 rounded-2xl flex justify-between items-center">
        <div className="text-lg font-bold text-white">Tjing Portfolio</div>
        <ul className="flex gap-6 text-white font-medium">
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
