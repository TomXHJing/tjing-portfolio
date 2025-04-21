import BGRender from './BGRender';
import ModelRender from './ModelRender';
import IntroPanel from './IntroPanel';

export default function App() {
  return (
    <main className="relative min-h-screen bg-gray-800 text-white overflow-x-hidden p-8 space-y-6">
      <BGRender filePath="/Tmodel.glb" />
      <section className="relative z-10 pointer-events-auto">
        <IntroPanel />
        {/* Spacer for intro panel */}
        <section className="h-screen"></section>
        {/* Test blocks */}
          
        {/* Section 1 */}
        <section className="h-screen bg-gradient-to-br from-blue-800/10 to-indigo-900 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
            <p className="text-xl text-white/80">Scroll down to explore more</p>
          </div>
        </section>

        {/* Sample panel */}
        <section className="h-screen bg-gradient-to-br from-blue-800/10 to-indigo-900 flex items-center justify-center">
          <div className="text-center p-8 space-y-4 flex items-center justify-center">
            
            {/* Left panel - model */}
            <div className="w-[400px] h-[400px] rounded-lg overflow-hidden shadow-lg bg-white">
              <ModelRender filePath="/Mavic.glb" />
            </div>
            
            {/* Right panel - Text */}
            <div className="p-8 space-y-4 items-center justify-center columns-xs relative">
              <div className="text-5xl font-bold">Welcome to My Portfolio</div>
              <div className="text-xl text-white/80">Scroll down to explore more, test more, test more, test more, test more, test more, test more, test </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="h-screen bg-gradient-to-br from-slate-800/10 to-gray-900 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-semibold">Project Highlights</h2>
            <p className="text-lg text-white/70">Built with React, Three.js, and Tailwind</p>
          </div>
        </section>
        {/* Section 1 */}
        <section className="h-screen bg-gradient-to-br from-blue-800/10 to-indigo-900 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
            <p className="text-xl text-white/80">Scroll down to explore more</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="h-screen bg-gradient-to-br from-slate-800/10 to-gray-900 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-semibold">Project Highlights</h2>
            <p className="text-lg text-white/70">Built with React, Three.js, and Tailwind</p>
          </div>
        </section>
        {/* Section 1 */}
        <section className="h-screen bg-gradient-to-br from-blue-800/10 to-indigo-900 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
            <p className="text-xl text-white/80">Scroll down to explore more</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="h-screen bg-gradient-to-br from-slate-800/10 to-gray-900 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-semibold">Project Highlights</h2>
            <p className="text-lg text-white/70">Built with React, Three.js, and Tailwind</p>
          </div>
        </section>
      
      </section>
    </main>
  );
}
