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
        className={`fixed right-[18rem] bottom-1/4 z-50 transition-all duration-700 ease-out
          ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-8'}`}
      >
        <input
          type="range"
          min={-5}
          max={5}
          value={turn}
          onChange={handleSliderChange}
          className="w-[14rem] p-4 bg-gray-700 rounded-lg"
        />
      </div>

      <BGRender filePath="/Tmodel.glb" turn={turn}/>
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
          <p>This is a modular panel.</p>
          <img src="/test.jpg" alt="Example" className="mx-auto mt-4 rounded-lg w-[300px]" />
        </ContentPanel>
        <ContentPanel title="Welcome!" className="snap-start">
          <p>This is a modular panel.</p>
          <img src="/test.jpg" alt="Example" className="mx-auto mt-4 rounded-lg w-[300px]" />
        </ContentPanel>
        <ContentPanel title="Welcome!" className="snap-start">
          <p>This is a modular panel.</p>
          <img src="/test.jpg" alt="Example" className="mx-auto mt-4 rounded-lg w-[300px]" />
        </ContentPanel>
      
      </section>
    </main>
  );
}
