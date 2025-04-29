// src\pages\Home.jsx

import BGRender from '../components/BGRender';
import ModelRender from '../components/ModelRender';
import IntroPanel from '../components/IntroPanel';
import NavBar from '../components/NavBar';
import LoadingScreen from '../components/LoadingScreen';
import ContentPanel from '../components/ContentPanel';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-800 text-white overflow-x-hidden p-8 space-y-6 overflow-y-scroll no-scrollbar">
      <LoadingScreen />
      {/*<div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: "url('/stars-wallpaper.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />*/}
      <BGRender filePath="/Tmodel.glb" />
      <section className="relative z-10 pointer-events-auto">
        <IntroPanel />
        <NavBar />

        {/* Spacer for intro panel */}
        <section className="h-screen"></section>
        <section className="h-screen"></section>
        <section className="h-screen"></section>
        {/* Test blocks */}
          
        {/* Section 1 */}
        <ContentPanel title="Welcome!">
          <p>This is a modular panel.</p>
          <ModelRender filePath="/Mavic.glb" />
          <img src="/test.jpg" alt="Example" className="mx-auto mt-4 rounded-lg w-[300px]" />
        </ContentPanel>
        <ContentPanel title="Welcome!">
          <p>This is a modular panel.</p>
          <ModelRender filePath="/Mavic.glb" />
          <img src="/test.jpg" alt="Example" className="mx-auto mt-4 rounded-lg w-[300px]" />
        </ContentPanel>
        <ContentPanel title="Welcome!">
          <p>This is a modular panel.</p>
          <ModelRender filePath="/Mavic.glb" />
          <img src="/test.jpg" alt="Example" className="mx-auto mt-4 rounded-lg w-[300px]" />
        </ContentPanel>
      
      </section>
    </main>
  );
}
