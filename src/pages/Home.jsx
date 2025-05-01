import { useState, useEffect, useCallback } from 'react';
import BGRender from '../components/BGRender';
import IntroPanel from '../components/IntroPanel';
import NavBar from '../components/NavBar';
import LoadingScreen from '../components/LoadingScreen';
import ContentPanel from '../components/ContentPanel';

export default function Home() {
  const [turn, setTurn] = useState(0);
  const [visible, setVisible] = useState(false);
  const [model, setModel] = useState('/T-model.glb');

  const ModelButton = ({ label, path, currentModel, setModel }) => (
    <button
      onClick={() => {
        if (currentModel !== path) setModel(path);
      }}
      className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
    >
      {label}
    </button>
  );

  const handleSliderChange = useCallback((e) => {
    setTurn(Number(e.target.value));
  }, []);

  const models = {
    camera: '/zenit.glb',
    chromebook: '/chromebook.glb',
    drone: '/mavic.glb',
    printer: '/prusa.glb',
  };

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 2500);
    };

    window.addEventListener('scroll', updateVisibility);
    updateVisibility();

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-scroll no-scrollbar scroll-snap-y snap-proximity p-8 bg-back-light text-fore-light dark:bg-back-dark dark:text-fore-dark">
      <LoadingScreen />
      
      {/* Rotation slider */}
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
          className="w-[14rem] p-4 bg-back-dark/0 dark:bg-back-light/0 rounded-lg"
        />
      </div>

      <BGRender filePath={model} turn={turn} />

      <section className="relative z-10 w-2/3 pointer-events-auto">
        <IntroPanel />
        <NavBar />

        {/* Spacer blocks */}
        <div className="h-screen snap-start"></div>
        <div className="h-screen snap-start"></div>
        <div className="h-screen snap-start"></div>

        {/* Panels */}
        <ContentPanel title="Camera">
          <p>film photography, microrepair, watches</p>
          <img src="/test.jpg" alt="Placeholder image" className="mx-auto mt-4 rounded-lg w-[300px]" />
          <ModelButton label="Load camera" path={models.camera} currentModel={model} setModel={setModel} />
        </ContentPanel>

        <ContentPanel title="Art and chroots">
          <p>breaking beyond intended uses, chroot debian, posters</p>
          <img src="/test.jpg" alt="Placeholder image" className="mx-auto mt-4 rounded-lg w-[300px]" />
          <ModelButton label="Load Chromebook" path={models.chromebook} currentModel={model} setModel={setModel} />
        </ContentPanel>

        <ContentPanel title="Drone pics">
          <p>repair and refurbrush, high tech, bringing new perspectives</p>
          <img src="/test.jpg" alt="Placeholder image" className="mx-auto mt-4 rounded-lg w-[300px]" />
          <ModelButton label="Load drone" path={models.drone} currentModel={model} setModel={setModel} />
        </ContentPanel>

        <ContentPanel title="3D Prints">
          <p>creation, robotics, practical uses, shop</p>
          <img src="/test.jpg" alt="Placeholder image" className="mx-auto mt-4 rounded-lg w-[300px]" />
          <ModelButton label="Load prusa" path={models.printer} currentModel={model} setModel={setModel} />
        </ContentPanel>
      </section>
    </main>
  );
}
