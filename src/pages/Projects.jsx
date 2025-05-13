// src\pages\Projects.jsx

// ProjectLink component usage:
// 
// > Required props:
// - title:        Main title of the project (bold text)
// - img:          Image shown on the right of the sliding panel (required)
// 
// Optional props:
// - subtitle:     Sub-title of the project (thinner text)
// - link:         Main project link (shown under the slider)
//                 Accepts:
//                   - actual URL string: clickable "Visit project"
//                   - "WIP":              shows "Under construction"
//                   - "CO":               shows "Community only"
//                   - "UNA":              shows "Unavailable"
//                   - null:               displays nothing
//
// - doc:          Internal link to documentation or details page
//                 If provided: shows a document icon that links to the page
//                 If null:     no icon is shown
//
// - repo:         External GitHub repo link
//                 If provided: shows a GitHub icon that links to repo
//                 If null:     no icon is shown
//
// - languages:    CSV string of primary languages (e.g., "JS, HTML, CSS")
//                 Displayed as bolded text before the pipe `|`
//
// - tags:         CSV string of additional tags or tools (e.g., "Tailwind, R3F")
//                 Displayed as thinner text after the pipe `|`


import NavBar from '../components/NavBar';
import LoadingScreen from '../components/LoadingScreen';
import ProjectLink from '../components/ProjectLink';
import BGRender from '../components/BGRender';

export default function Projects() {
  return (
    <main>
      <div className="fixed inset-0 -z-10 bg-back-light dark:bg-back-dark">
        <BGRender filePath={null} turn={null} />
      </div>
      <div className="relative z-10 min-h-screen overflow-x-hidden overflow-y-scroll no-scrollbar py-5 text-fore-light dark:text-fore-dark">
        <LoadingScreen />
        <section className="relative z-0 pointer-events-auto">
          <NavBar />
          <div className="relative h-[4.5rem] w-full"></div>

          {/*Individual projects below*/}
          <ProjectLink
            title="BridgingRoots"
            subtitle="Language revitalization and education"
            link="CO"
            doc="bridgingroots"
            repo={null}
            img="/BridgingRoots/banner.jpg"
            languages="JavaScript, HTML, CSS"
            tags="React, Three.js, Leaflet, Blender, Express, Google Auth, AWS, MongoDB, Docker"
          />

          <ProjectLink
            title="SSIM"
            subtitle="Salish Sea Initiative Map"
            link="CO"
            doc="salish-sea-interactive-map"
            repo={null}
            img="/SSIM/banner.jpg"
            languages="PHP, JS, HTML"
            tags="Mapbox, ArcGIS, MySQL, Bootstrap, QGIS, GeoJSON, AJAX, Git, Jira"
          />

          <ProjectLink
            title="Personal Portfolio"
            subtitle="Frontpage of what I do"
            link="tjing.dev"
            doc={null}
            repo="https://github.com/TomXHJing/tjing-portfolio"
            img="/stars-wallpaper.jpg"
            languages="JavaScript, HTML, CSS"
            tags="React, Three.js, Tailwind CSS, Framer Motion, Vite, React Router, Git"
          />

          <ProjectLink
            title="LED Matrix Display"
            subtitle="Multi-purpose smart display"
            link="UNA"
            doc="led-matrix-display"
            repo="https://github.com/hzeller/rpi-rgb-led-matrix"
            img="/Matrix/banner.jpg"
            languages="C++, Python, Bash"
            tags="Raspberry Pi, LED Matrix, PWM, SSH, NTP, Embedded Linux"
          />

          <ProjectLink
            title="RainShroom"
            subtitle="Physicalizing precipitation for mushroom foraging"
            link="UNA"
            doc="/docs/rainshroom.pdf"
            repo={null}
            img="/rainshroom-banner.JPG"
            languages="Arduino, C++"
            tags="Data Physicalization, 3D Printing, CAD, Sensor Mapping"
          />

          <div className="flex justify-center w-full">
            <div className="w-1/3 h-0 translate-y-[0.8rem] border-white/25 border-2"></div>
            <p className="px-5 font-bold text-xl">[Works In Progress]</p>
            <div className="w-1/3 h-0 translate-y-[0.8rem] border-white/25 border-2"></div>
          </div>

          <ProjectLink
            title="Sty-AI"
            subtitle="A smart mirror that sees your clothes and styles your day"
            link="WIP"
            doc={null}
            repo={null}
            img="/style-ai-banner.JPG"
            languages="Python, JS, React"
            tags="YOLOv8, Roboflow, Machine Vision, MagicMirror, Raspberry Pi, TailwindCSS, DALL·E"
          />

          <ProjectLink
            title="Map Stitch"
            subtitle="Draw paths with your memories"
            link="WIP"
            doc={null}
            repo={null}
            img="/mapstitch-banner.JPG"
            languages="Kotlin, Android SDK, XML"
            tags="OpenStreetMap, Tile Overlays, Touch Gestures, Media Picker, Image Masking, GPS"
          />

          <ProjectLink
            title="CorNote"
            subtitle="Spatially-linked notes with dynamic visual connections"
            link="WIP"
            doc={null}
            repo={null}
            img="/cornote-banner.JPG"
            languages="C#, Unity, ShaderLab"
            tags="OOP, Graph Systems, Mind Mapping, 3D UI"
          />

          {/*Hiddens
          
          <ProjectLink
            title="BOLY"
            subtitle="A polygon-blob game"
            link="WIP"
            doc={null}
            repo={null}
            img="/test.jpg"
            languages="placeholder"
            tags="placeholder"
          />
          
          */}

        </section>
      </div>
    </main>
  );
}
