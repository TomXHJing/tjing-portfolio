//  react\src\App.jsx

import BGRender from './BGRender';
import IntroPanel from './IntroPanel';


export default function App() {
  return (
  <section
    id="projects"
    className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center"
  >
    <div className="w-full h-screen">
      <BGRender filePath="/Tmodel.glb" />
      <div className="absolute inset-0 z-10">
        <IntroPanel />
        </div>
    </div>
  </section>
  );
}
