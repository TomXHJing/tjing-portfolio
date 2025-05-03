import NavBar from '../components/NavBar';
import LoadingScreen from '../components/LoadingScreen';

export default function BridgingRootsDoc() {
  return (
    <main className="relative min-h-screen overflow-x-hidden overflow-y-scroll no-scrollbar py-5 bg-back-light text-fore-light dark:bg-back-dark dark:text-fore-dark">
      <LoadingScreen />
      <NavBar />
      <div className="relative h-[4.5rem] w-full"></div>
      <section className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        <h1 className="text-4xl font-bold">BridgingRoots</h1>
        <h2 className="text-xl text-gray-500 dark:text-gray-400">Language revitalization and education</h2>

        <p>
          <strong>BridgingRoots</strong> is a full-stack web application co-designed with the community of Tuktoyaktuk, NT to support language revitalization,
          cultural education, and community-driven content creation. It features a variety of educational tools, games, and interactive visualizations.
        </p>

        <h3 className="text-2xl font-semibold">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Interactive Community Dictionary</strong> — Allows members to submit words with translations, images, and audio. Verified by teacher
            moderators selected from users who log in via Google.
          </li>
          <li>
            <strong>Animated Story Viewer</strong> — Displays Indigenous stories with animation, voiceovers, and interactive quizzes that save user progress.
          </li>
          <li>
            <strong>Game Section</strong> — Auto-generates crosswords and picture-matching games using dictionary content. Cover images are AI-generated using Gemini.
          </li>
          <li>
            <strong>Interactive Map</strong> — Built with Leaflet.js, features community landmarks that link to 3D models of terrain and structures. Scans were done via
            DJI Mavic Pro drone, processed with Polycam (LiDAR), and cleaned in Blender.
          </li>
          <li>
            <strong>Teacher System</strong> — Teachers can approve words, assign students, and moderate content. Account access is granted automatically via Google Sign-In.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold">Technology Stack</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Frontend:</strong> React, Tailwind CSS, Three.js</li>
          <li><strong>Backend:</strong> Express.js, Node.js</li>
          <li><strong>Database:</strong> MongoDB (presumed)</li>
          <li><strong>Authentication:</strong> Google OAuth2</li>
          <li><strong>Other Tools:</strong> Leaflet, Gemini (AI image generation), Blender, Polycam (LiDAR), Docker, AWS (initially)</li>
        </ul>

        <h3 className="text-2xl font-semibold">Hosting</h3>
        <p>
          Originally hosted partially on AWS; now served via UVic infrastructure. Account history and moderation roles persist across the app.
        </p>

        <h3 className="text-2xl font-semibold">Contributors</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Tom Jing (@TomXHJing)</li>
          <li>Valery Savchenko (@valwuzhere)</li>
          <li>Jon (@JonsPersonal)</li>
        </ul>
      </section>
    </main>
  );
}
