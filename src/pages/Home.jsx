// src\pages\Home.jsx

import BGRender from '../components/BGRender';
import ModelRender from '../components/ModelRender';
import IntroPanel from '../components/IntroPanel';
import NavBar from '../components/NavBar';
import LoadingScreen from '../components/LoadingScreen';
import ContentPanel from '../components/ContentPanel';
import { useState, useEffect } from 'react';

export default function Home() {
  const [turn, setTurn] = useState(0);
  const [visible, setVisible] = useState(false);
  const [model, setModel] = useState('/Tmodel.glb');

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 2500);
    };
  
    window.addEventListener('scroll', updateVisibility);
    updateVisibility(); // run once on mount
  
    return () => {
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);
  
  function handleSliderChange(e) {
    setTurn(Number(e.target.value)); // update turn as number
  }

  return (
    <main className="relative min-h-screen bg-gray-800 text-white overflow-x-hidden p-8 space-y-6 overflow-y-scroll no-scrollbar scroll-snap-y snap-proximity">
      <LoadingScreen />
      <div
        className={`fixed right-[18rem] bottom-1/4 z-20 transition-all duration-700 ease-out
          ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-8'}`}
      >
        <input
          type="range"
          min={-4}
          max={4}
          value={turn}
          onChange={handleSliderChange}
          className="w-[14rem] p-4 bg-gray-700 rounded-lg"
        />
      </div>

      <BGRender key={model} filePath={model} turn={turn} />
      <section className="relative z-10 w-2/3 pointer-events-auto">
        <IntroPanel />
        <NavBar />

        {/* Spacer for intro panel */}
        <section className="h-screen snap-start"></section>
        <section className="h-screen snap-start"></section>
        <section className="h-screen snap-start"></section>
        {/* Test blocks */}
          
        {/* Section 1 */}
        <ContentPanel title="Welcome!" className="snap-start">
          <p>film photography, microrepair, watches</p>
          <img src="/test.jpg" alt="Example" className="mx-auto mt-4 rounded-lg w-[300px]" />
          <button
            onClick={() => {
              if (model !== '/zenit.glb') setModel('/zenit.glb');
            }}            
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
          >
            Load Camera
          </button>
          {/* loads zenit.glb through setModel*/}
        </ContentPanel>
        <ContentPanel title="Welcome!" className="snap-start">
          <p>breaking beyond intended uses, chroot debian, posters</p>
          <img src="/test.jpg" alt="Example" className="mx-auto mt-4 rounded-lg w-[300px]" />
          <button
            onClick={() => {
              if (model !== '/chromebook.glb') setModel('/chromebook.glb');
            }}
            
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
          >
            Load Chromebook
          </button>
        </ContentPanel>
        <ContentPanel title="Welcome!" className="snap-start">
          <p>talking points: repair and refurbrush, high tech, bringing new perspectives</p>
          <img src="/test.jpg" alt="Example" className="mx-auto mt-4 rounded-lg w-[300px]" />
          <button
            onClick={() => {
              if (model !== '/mavic.glb') setModel('/mavic.glb');
            }}
            
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
          >
            Load Drone
          </button>
        </ContentPanel>
        <ContentPanel title="Welcome!" className="snap-start">
          <p>talking points: creation, robotics, practical uses, shop</p>
          <img src="/test.jpg" alt="Example" className="mx-auto mt-4 rounded-lg w-[300px]" />
          <button
            onClick={() => {
              if (model !== '/prusa.glb') setModel('/prusa.glb');
            }}
            
            className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
          >
            Load 3D Printer
          </button>
        </ContentPanel>
      
      </section>
    </main>
  );
}
