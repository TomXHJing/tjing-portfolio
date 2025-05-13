//  src\pages\project docs\BridgingRoots.jsx

import NavBar from '../../components/NavBar';
import LoadingScreen from '../../components/LoadingScreen';
import BGRender from '../../components/BGRender';

export default function BridgingRoots() {
  return (
    <main>
      <div className="fixed inset-0 -z-10">
        <BGRender filePath={null} turn={null} />
      </div>
      <div className="relative min-h-screen overflow-x-hidden overflow-y-scroll no-scrollbar py-5 text-fore-light dark:text-fore-dark">
        <LoadingScreen />
        <NavBar />
        <div className="relative z-10 h-[5.5rem] w-full"></div>

        <section className="relative z-10 max-w-4xl mx-auto px-6 py-8 space-y-6 bg-black/10 dark:bg-white/10 rounded-xl backdrop-blur-md">
          <h1 className="text-4xl font-bold">Bridging Roots</h1>
          <h2 className="text-xl text-gray-500 dark:text-gray-400">Language revitalization and interactive community tools</h2>

          <img className="w-full h-full" id="SSIM page image" src="/BridgingRoots/bridgingroots-home.JPG"/>

          <p>
            Bridging Roots is an app co-designed with the community of Tuktoyaktuk to preserve Inuvialuktun language and culture. It includes a living community dictionary, AI-powered visual tools, interactive story-based quizzes, a map of key landmarks, and a WebGL 3D landscape explorer. Community members contribute entries while teachers, designated as moderators, verify and approve submissions.
          </p>

          <h3 className="text-2xl font-semibold">Role & Contributions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Built core UI/UX architecture using React, Tailwind, and Three.js</li>
            <li>Implemented animated story quiz components with local save support</li>
            <li>Integrated Leaflet for map display and linked it to 3D renders of scanned landscapes</li>
            <li>Created image-matching and crossword games from dictionary input data</li>
            <li>Linked AI (Gemini) to generate visual assets from text prompts</li>
            <li>Set up teacher moderation tools and Google-based login system</li>
            <li>Contributed to backend design and hosting on UVic servers (with AWS used in early dev stages)</li>
          </ul>

          <h3 className="text-2xl font-semibold">Features & Modules</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Story-based animated quiz section with local save</li>
            <li>Community dictionary with image, pronunciation, and translation</li>
            <li>Leaflet map viewer with clickable landmarks and 3D building models</li>
            <li>Crossword + image match games auto-generated from dictionary entries</li>
            <li>Teacher panel for verifying and assigning users to classes</li>
            <li>AI-generated visuals for dictionary entry cover photos</li>
          </ul>

          <h3 className="text-2xl font-semibold">Technology Stack</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Frontend:</strong> React, Tailwind CSS, Framer Motion, Three.js</li>
            <li><strong>Mapping:</strong> Leaflet, custom Three.js terrain viewer</li>
            <li><strong>Backend & Infra:</strong> Firebase (auth + store), Google login, UVic-hosted DB, partial AWS use</li>
          </ul>

          <h3 className="text-2xl font-semibold">Team</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Tom Jing (Design + Dev)</li>
            <li>Valery Savchenko</li>
            <li>Jon Tan</li>
            <li>Tuktoyaktuk Elders + Community Moderators</li>
          </ul>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-2">Project Media</h3>
            <div className="flex gap-4 overflow-x-scroll no-scrollbar">
              {['bridgingroots-home.JPG', 'team.jpg', 'map.JPG', 'tuk.jpg'].map((file, idx) => (
                <a key={idx} href={`/BridgingRoots/${file}`} target="_blank" rel="noopener noreferrer">
                  <img src={`/BridgingRoots/${file}`} alt={`Bridging Roots ${idx + 1}`} className="w-64 h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
