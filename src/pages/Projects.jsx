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

export default function Projects() {
  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-scroll no-scrollbar py-5 bg-back-light text-fore-light dark:bg-back-dark dark:text-fore-dark">
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
          img="/test.jpg"
          languages="JavaScript, HTML, CSS"
          tags="React, Three.js, Leaflet, Polycam, Blender, Express, Google Auth, AWS, MongoDB, Docker"
        />
        <ProjectLink title="title1" link="www.google.ca" img='/test.jpg' tags="python, javascript, linux"/>
      </section>
    </main>
  );
}
