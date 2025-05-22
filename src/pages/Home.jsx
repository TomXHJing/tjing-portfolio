// src\pages\Home.jsx
import { useState, useEffect, useCallback } from 'react';
import { TbMail, TbBrandLinkedin, TbBrandGithub, TbBrandPrintables } from "react-icons/tb";

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
    <main className="bg-back-light text-fore-light dark:bg-back-dark dark:text-fore-dark">
      <section id="body" className="relative min-h-screen overflow-x-hidden overflow-y-scroll no-scrollbar p-8">
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
        <div className="fixed inset-0 z-0 pointer-events-none">    
          <BGRender filePath={model} turn={turn} />
        </div>  
        {/* Empty scroll space to allow animation to play out */}
        <div className="h-[100vh] w-full"></div>
        <IAmA className="h-[300vh] w-full" roles={roles} />
        <div className="h-[300vh] w-full"></div>

        <section id="about" className="relative z-10 w-2/3 pointer-events-auto">
          <IntroPanel />
          <div className={`fixed z-20 transition-all duration-3000 ease-in ease-out
            ${showNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
              <NavBar />
              </div>
          {/* Panels with IDs for offset scroll targeting */}
          <ContentPanel title="Root Access: Who I Am" id="panel-camera">
            <p>
            Born in Shanghai and raised in Burnaby. My interest in technology began with a hand-me-down Windows XP machine. It wasn’t cutting-edge, but it offered freedom. I spent hours installing, breaking, and fixing software, slowly learning how everything worked. That hands-on curiosity led me to pursue a degree in Computer Science at the University of Victoria. This portfolio represents that journey. It captures what I’ve built, repaired, or explored, driven by a need to understand things by doing.
            </p>
            <img src="/Tom.JPG" alt="Tom the Creator" className="col-span-1 mx-auto mt-4 rounded-lg w-[300px]" />
            <button onClick={() => window.location.href='/projects'} className="mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg transition-colors duration-300">
              Explore Projects
            </button>
          </ContentPanel>

          <ContentPanel title="Legacy Systems: Restoring the Past" id="panel-camera">
            <p>
            I found an old Zenit film camera in a thrift store, broken and neglected. Restoring it became an exercise in mechanical reasoning. There was no guidebook, just a set of problems to solve. Working through that camera gave me a better understanding of how to approach legacy systems in code. It taught me to listen closely, to investigate with care, and to respect the thinking of those who came before me.
            It gave me the confidence that as long as a person made it, I can fix it.
            </p>
            <img src="/camera.jpg" alt="Zenit 3 film camera" className="col-span-1 mx-auto mt-4 rounded-lg w-[300px]" />
            <ModelButton label="See the Zenit 3 (1961)" path={models.camera} currentModel={model} setModel={setModel} />
          </ContentPanel>

          <ContentPanel title="Manual Mode: Driving by Wire, Learning by Tactile" id="panel-art">
            <p>
            I bought a Miata with over 300,000 kilometers on it, knowing I didn’t yet know how to drive manual. What started as a challenge became a classroom. I traced grounding faults, rewired systems, and rebuilt parts I had only read about. The experience showed me how interconnected everything is. Every failure pointed to a lesson, and every fix improved my intuition for how systems communicate, whether mechanical or digital.
            </p>
            <img src="/Miata.jpg" alt="Placeholder image" className="mx-auto mt-4 rounded-lg w-[300px]" />
            <ModelButton label="The keys to the money pit" path={models.miata} currentModel={model} setModel={setModel} />
          </ContentPanel>

          <ContentPanel title="Posters as UI: Designing Visual Interfaces" id="panel-art">
            <p>
            Poster design became a quiet training ground for my sense of layout and communication. Each project forced me to focus on space, rhythm, and clarity. These lessons carried over into how I design user interfaces. I learned that good design doesn't speak louder, it speaks clearer. If someone has to stop and decode what they see, the interface has already failed.
            It's on this now depreciated Chromebook turned Linux machine where I did some of my finest work, covered in inspiration and a 9 hour battery life, there's no better platform.
            </p>
            <img src="/posters.jpg" alt="Placeholder image" className="mx-auto mt-4 rounded-lg w-[300px]" />
            <ModelButton label="A sticker-bombed perfection" path={models.chromebook} currentModel={model} setModel={setModel} />
          </ContentPanel>

          <ContentPanel title="Remote Runtime: My Developer Environment" id="panel-art">
            <p>
            Most of my work begins in a minimal setup: a laptop, a clean code editor, and a plan to break things and rebuild. This is where I test ideas, organize architecture, and refine workflows. Over time, I’ve come to value tools that get out of the way and systems that are simple to reason about. These preferences shape how I approach every new project.
            The laptop itself is anything but, bought refurbrished in 2018, it has died many times, SSD, case, battery, and speakers. If it can make it through a project, so can I.
            </p>
            <img src="/team.jpg" alt="Placeholder image" className="mx-auto mt-4 rounded-lg w-[300px]" />
            <ModelButton label="The Laptop of Theseus" path={models.laptop} currentModel={model} setModel={setModel} />
          </ContentPanel>

          <ContentPanel title="Aerial Debugging: From Flying to Object Tracking" id="panel-drone">
            <p>
            When my drone broke, I didn’t send it in. I opened it up. That decision led me into a world of sensor calibration and real-world feedback loops. Fixing it was my first step into computer vision. I began exploring object tracking and sensor fusion, learning how machines interpret movement and space. It’s a space I still return to, combining code, hardware, and human intuition.
            </p>
            <img src="/drone.JPG" alt="Bird's eye view of a rocky coast" className="mx-auto mt-4 rounded-lg w-[300px]" />
            <ModelButton label="A fine $150 FB Marketplace purchuse" path={models.drone} currentModel={model} setModel={setModel} />
          </ContentPanel>

          <ContentPanel title="Hardware Abstraction: Printing Interfaces" id="panel-prints">
            <p>
            I assembled my 3D printer from a kit, not just to print, but to learn. Every misstep taught me something about calibration, tolerances, and what it means to bring a design to life. Now, I use it to prototype enclosures, create functional parts, and solve problems in the physical world. It taught me that ideas only matter when they can be built and used.
            </p>
            <img src="/prints.jpg" alt="Placeholder image" className="mx-auto mt-4 rounded-lg w-[300px]" />
            <ModelButton label="The backbone of Projects" path={models.printer} currentModel={model} setModel={setModel} />
          </ContentPanel>
        </section>
      </section>  
      <section id="contact" className="relative z-50">
        <div className="relative z-50 w-full flex justify-center gap-8 py-4 bg-back-dark/20 dark:bg-back-light/20 text-fore-light dark:text-fore-dark">
          <TbMail
            title="Email link"
            className="w-9 h-9 cursor-pointer hover:text-white"
            role="button"
            tabIndex={0}
            onClick={() => window.open("mailto:tomxhjing@gmail.com", '_blank')}
          />
          <TbBrandLinkedin
            title="LinkedIn profile"
            className="w-9 h-9 cursor-pointer hover:text-white"
            role="button"
            tabIndex={0}
            onClick={() => window.open("https://www.linkedin.com/in/tomxhjing/", '_blank')}
          />
          <TbBrandGithub
            title="GitHub profile"
            className="w-9 h-9 cursor-pointer hover:text-white"
            role="button"
            tabIndex={0}
            onClick={() => window.open("https://github.com/TomXHJing", '_blank')}
          />
          <TbBrandPrintables
            title="Printables profile"
            className="w-9 h-9 cursor-pointer hover:text-white"
            role="button"
            tabIndex={0}
            onClick={() => window.open("https://www.printables.com/@TomJing_102542", '_blank')}
          />
        </div>
      </section>
    </main>
  );
}
