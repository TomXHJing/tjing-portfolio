import BGRender from './BGRender';
import IntroPanel from './IntroPanel';

export default function App() {
  return (
    <main className="relative min-h-screen bg-gray-800 text-white overflow-x-hidden p-8 space-y-6">
      <BGRender filePath="/Tmodel.glb" />
      <section className="relative z-10 pointer-events-auto">
        <IntroPanel />

        {/* Test blocks */}
        <div className="mt-8">
          <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md my-4">
            🔔 Tailwind is working!
          </div>

          <div className="flex gap-4 my-4">
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow">
              Success
            </button>
            <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow">
              Danger
            </button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-lg shadow">
              Neutral
            </button>
          </div>

          

          <div className="bg-white text-black rounded-xl shadow-lg p-6 max-w-sm my-4">
            <h2 className="text-xl font-bold mb-2">Tailwind Card</h2>
            <p className="text-sm text-gray-600">This is a basic card component styled with Tailwind.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-purple-500 text-white p-6 rounded-xl text-center">1</div>
            <div className="bg-yellow-400 text-black p-6 rounded-xl text-center">2</div>
            <div className="bg-pink-500 text-white p-6 rounded-xl text-center">3</div>
            <div className="bg-teal-400 text-white p-6 rounded-xl text-center">4</div>
          </div>
        </div>
      </section>
    </main>
  );
}
