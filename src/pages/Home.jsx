// src\pages\Home.jsx
import { useState, useEffect, useCallback } from 'react';
import BGRender from '../components/BGRender';
import IntroPanel from '../components/IntroPanel';
import NavBar from '../components/NavBar';
import LoadingScreen from '../components/LoadingScreen';
import ContentPanel from '../components/ContentPanel';
import IAmA from '../components/IAmA';

export default function Home() {
  const [turn, setTurn] = useState(0);
  const [visible, setVisible] = useState(false);
  const [showNav, setShowNav] = useState(false);
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
    laptop: '/laptop.glb',
    drone: '/mavic.glb',
    printer: '/prusa.glb',
    miata: '/miata.glb',
  };

  const roles = [
    { title: 'frontend developer', prefaces: ['I build UI as a', 'I am a'] },
    { title: 'web app designer', prefaces: ['I design interfaces as a'] },
    { title: 'music video editor', prefaces: ['I sync beats as a', 'Also a'] },
    { title: 'garage mechanic', prefaces: ['I wrench after hours as a'] },
    { title: 'watch repair hobbyist', prefaces: ['I tick in sync as a', 'Occasionally a'] },
    { title: 'film photographer', prefaces: ['I shoot in grain as a', 'Sometimes a'] },
    { title: 'drone photographer', prefaces: ['I fly and frame as a'] },
    { title: 'baker', prefaces: ['I rise early as a'] },
    { title: '3D printer', prefaces: ['I print in layers as a'] },
    { title: '3D modeller', prefaces: ['I sculpt digitally as a'] },
    { title: 'NeoVim enjoyer', prefaces: ['I live in the terminal as a', 'Also a'] },
    { title: 'backcountry hiker', prefaces: ['I carry light and far as a'] },
    { title: 'mediocre surfer', prefaces: ['I wipe out often as a'] },
    { title: 'weekend paddleboarder', prefaces: ['I float Sundays away as a'] },
    { title: 'cafe critic', prefaces: ['I sip and judge as a'] },
    { title: 'espresso barista', prefaces: ['I tame the portafilter as a'] },
    { title: 'cocktail shaker', prefaces: ['I shake things up as a'] },
    { title: 'Raspberry Pi user', prefaces: ['I prototype in miniature as a'] },
    { title: 'mead brewer', prefaces: ['I ferment tradition as a'] },
    { title: 'hard cider brewer', prefaces: ['I bottle autumn as a'] },
    { title: 'PC builder', prefaces: ['I build machines as a'] },
    { title: 'print farm maintainer', prefaces: ['I run the hive as a'] },
    { title: 'GIS analyst', prefaces: ['I map patterns as a'] },
    { title: 'help desk support', prefaces: ['I troubleshoot with empathy as a'] },
    { title: 'website maintainer', prefaces: ['I keep the lights on as a'] },
    { title: 'music record collector', prefaces: ['I dig wax as a'] },
    { title: 'ultralight camper', prefaces: ['I carry grams not pounds as a'] },
    { title: 'dinner party host', prefaces: ['I curate conversation as a'] },
    { title: 'Arduino prototyper', prefaces: ['I wire ideas as a'] },
    { title: 'IoT maker', prefaces: ['I connect the real and virtual as a'] },
    { title: 'tinkerer', prefaces: ['I disassemble with purpose as a'] },
    { title: 'succulent propagator', prefaces: ['I multiply leaves as a'] },
    { title: 'mediocre gardener', prefaces: ['I grow things slowly as a'] },
    { title: "friend group's photographer", prefaces: ['I document memories as a'] },
    { title: 'almost trilingual', prefaces: ['I speak in threes as someone'] },
    { title: 'computer vision enthusiast', prefaces: ['I teach machines to see as a'] },
    { title: 'map data analyst', prefaces: ['I layer and filter as a'] }
  ];
  

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 2500);
      setShowNav(window.scrollY > 200);
    };

    window.addEventListener('scroll', updateVisibility);
    updateVisibility();

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-scroll no-scrollbar p-8 bg-back-light text-fore-light dark:bg-back-dark dark:text-fore-dark">
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

      {/* Empty scroll space to allow animation to play out */}
      <div className="h-[100vh] w-full"></div>
      <IAmA className="h-[300vh] w-full" roles={roles} />
      <div className="h-[300vh] w-full"></div>

      <section className="relative z-10 w-2/3 pointer-events-auto">
        <IntroPanel />
        <div className={`fixed z-20 transition-all duration-3000 ease-in ease-out
          ${showNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <NavBar />
            </div>
        {/* Panels with IDs for offset scroll targeting */}
        <ContentPanel title="Root Access: Who I Am" id="panel-camera">
          <p>
            I'm from Shanghai, grew up in Vancouver, and found myself lost in a world of blinking cursors and CRT glow. What started on a dusty Windows XP machine became a journey of patching, compiling, and building my own systems from scratch. I like to break things—on purpose—and figure out how they tick.

            That same curiosity is why I enrolled in Computer Science at UVic: to understand the logic that underpins everything from social networks to microcontrollers. This site is a repo, a changelog, and an API into the things I build, break, and refine.
          </p>
          <img src="/test.jpg" alt="test" className="col-span-1 mx-auto mt-4 rounded-lg w-[300px]" />
          <ModelButton label="Load camera" path={models.camera} currentModel={model} setModel={setModel} />
        </ContentPanel>

        <ContentPanel title="Legacy Systems: Restoring the Past" id="panel-camera">
          <p>
            I found this old Zenit 3 film camera in a thrift store, barely holding together—screws loose, mirror stuck, body gunked up. It reminded me of legacy code: intimidating, elegant, misunderstood. I rebuilt it like a refactor—small, reversible steps—and took it with me on real-world ‘debugging’ journeys.

            Restoring this camera taught me that reverse engineering isn’t just a tool, it’s a mindset—vital when working with systems where documentation is long gone.
          </p>
          <img src="/camera.jpg" alt="Zenit 3 film camera" className="col-span-1 mx-auto mt-4 rounded-lg w-[300px]" />
          <ModelButton label="Load camera" path={models.camera} currentModel={model} setModel={setModel} />
        </ContentPanel>

        <ContentPanel title="Manual Mode: Driving by Wire, Learning by Tactile" id="panel-art">
          <p>
            My dream car wasn’t a Ferrari. It was a Miata with 314k on the clock, no power anything, and a five-speed I couldn’t drive. Like learning a low-level language, I dove into its internals: wiring harnesses, fluids, grounding issues, timing, torque specs.

            What started as a repair job turned into embedded learning—wrenching gave me a real-world model of systems thinking, fail states, and upgrades. It taught me that clean design isn’t about complexity—it’s about access, modularity, and trust in the community.
          </p>
          <img src="/test.jpg" alt="Placeholder image" className="mx-auto mt-4 rounded-lg w-[300px]" />
          <ModelButton label="Load Chromebook" path={models.miata} currentModel={model} setModel={setModel} />
        </ContentPanel>

        <ContentPanel title="Posters as UI: Designing Visual Interfaces" id="panel-art">
          <p>
            I design posters the same way I design interfaces—clear hierarchy, elegant layout, and just enough novelty to spark interest. Whether it’s for a house party or a campus event, the goal is the same: deliver useful information, fast.

            These projects helped me bridge the gap between aesthetics and clarity, a core tenet in UI/UX. Good design is invisible—it works before it’s noticed.
          </p>
          <img src="/test.jpg" alt="Placeholder image" className="mx-auto mt-4 rounded-lg w-[300px]" />
          <ModelButton label="Load Chromebook" path={models.chromebook} currentModel={model} setModel={setModel} />
        </ContentPanel>

        <ContentPanel title="Remote Runtime: My Developer Environment" id="panel-art">
          <p>
            This is my remote workstation, where overpriced flat whites meet a VS Code setup with way too many extensions. It's where most of my commits are born—some thoughtful, some chaotic, all part of the process.

            Every project on this site started here, iterated on the go, versioned, forked, and sometimes force pushed. Explore the tabs to see what’s been built.
          </p>
          <img src="/test.jpg" alt="Placeholder image" className="mx-auto mt-4 rounded-lg w-[300px]" />
          <ModelButton label="Load Chromebook" path={models.laptop} currentModel={model} setModel={setModel} />
        </ContentPanel>

        <ContentPanel title="Aerial Debugging: From Flying to Object Tracking" id="panel-drone">
          <p>
            What started as a broken drone I found on Marketplace turned into a full-stack inspiration. Fixing the gimbal led me into computer vision—object tracking, 3D rendering, and eventually integrating YOLO models and Three.js.

            This project reminded me that exploration at altitude often leads to deeper understanding at ground level. It’s a node that connects many branches in my repo.
          </p>
          <img src="/test.jpg" alt="Placeholder image" className="mx-auto mt-4 rounded-lg w-[300px]" />
          <ModelButton label="Load drone" path={models.drone} currentModel={model} setModel={setModel} />
        </ContentPanel>

        <ContentPanel title="Hardware Abstraction: Printing Interfaces" id="panel-prints">
          <p>
            My 3D printer is my compiler for the physical world. Built from a kit, broken and rebuilt a dozen times, it’s taught me hardware constraints, iteration, and debugging physical tolerances—not just syntax.

            It’s how my Raspberry Pi and Arduino projects leave the terminal and enter reality—frames, enclosures, mounts. Through this, I learned to think dimensionally: from CAD to Blender to the real world.
          </p>
          <img src="/test.jpg" alt="Placeholder image" className="mx-auto mt-4 rounded-lg w-[300px]" />
          <ModelButton label="Load prusa" path={models.printer} currentModel={model} setModel={setModel} />
        </ContentPanel>
      </section>
    </main>
  );
}
