// src/pages/project docs/LEDMatrix.jsx

import NavBar from '../../components/NavBar';
import LoadingScreen from '../../components/LoadingScreen';
import BGRender from '../../components/BGRender';

export default function Matrix() {
  return (
    <main>
      <div className="fixed inset-0 -z-10">
        <BGRender filePath={null} turn={null} />
      </div>
      <div className="relative min-h-screen overflow-x-hidden overflow-y-scroll no-scrollbar py-5 text-fore-light dark:text-fore-dark">
        <LoadingScreen />
        <NavBar />
        <div className="relative h-[5.5rem] w-full"></div>

        <section className="max-w-4xl mx-auto px-6 py-8 space-y-6 bg-white/10 backdrop-blur-sm rounded-xl">
          <h1 className="text-4xl font-bold">LED Matrix Display</h1>
          <h2 className="text-xl text-gray-500 dark:text-gray-400">Multi-purpose smart display using low-voltage embedded Linux</h2>

          <img className="w-full h-full" id="Matrix page image" src="/Matrix/clock.jpg" />

          <p>
            This 64×32 LED Matrix Display is a custom-built Raspberry Pi-based visual output platform designed for daily function and creative flair. It runs entirely on 5V 4A, making it power-efficient and safe for long-term indoor use. At its core, it is capable of showing clocks, weather, messages, ambient art, and GIF animations.
          </p>
          <p>
            It is enclosed in a <strong>custom 3D printed chassis</strong> designed to integrate naturally into home décor or creative installations. Download the chassis design files from <a href="https://www.thingiverse.com/thing:7036729" className="underline text-blue-400" target="_blank" rel="noopener noreferrer">Thingiverse: LED Matrix Frame</a>.
          </p>

          <h3 className="text-2xl font-semibold">Role & Contributions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Explored embedded Linux devices via Raspberry Pi GPIO interfacing</li>
            <li>Implemented low-level PWM LED matrix control using the hzeller/rpi-rgb-led-matrix library</li>
            <li>Created Python/Bash scripts for time/weather data rendering and display transitions</li>
            <li>Set up SSH-based code syncing and systemd services for remote operation</li>
            <li>Fabricated a 3D-printed housing to ensure safe mounting and clean cable routing</li>
          </ul>

          <h3 className="text-2xl font-semibold">Features & Use Cases</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>NTP-synced live clock display (see <code>clock.jpg</code>)</li>
            <li>GIF and bitmap animation (see <code>gif.jpg</code>)</li>
            <li>Ambient background light, scrolling banner text for events or alerts</li>
            <li>Live weather feed using terminal-based fetch + text overlay</li>
            <li>Ideal as a front-facing panel for maker stations, offices, or parties</li>
          </ul>

          <h3 className="text-2xl font-semibold">Technology Stack</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Hardware:</strong> Raspberry Pi 3B+, 64×32 RGB LED Matrix, 5V 4A PSU</li>
            <li><strong>Code:</strong> C++ (matrix driver), Python (weather + time), Bash (init scripts)</li>
            <li><strong>Frameworks:</strong> hzeller/rpi-rgb-led-matrix, systemd, cron</li>
            <li><strong>Connectivity:</strong> SSH, Wi-Fi, NTP sync</li>
          </ul>

          <h3 className="text-2xl font-semibold">Sample Code Snippets</h3>

          <div className="bg-gray-900 text-white font-mono text-sm p-4 rounded-lg overflow-auto whitespace-pre-wrap">
{`# Show weather on display (Bash)
#!/bin/bash
weather=$(curl -s 'wttr.in/Victoria?format=3')
sudo ./scroll-text -f 10 -C 0,255,100 "$weather"`
}
          </div>

          <div className="bg-gray-900 text-white font-mono text-sm p-4 rounded-lg overflow-auto whitespace-pre-wrap">
{`# Display digital clock (Python)
import time
from rgbmatrix import RGBMatrix, RGBMatrixOptions

options = RGBMatrixOptions()
options.rows = 32
options.cols = 64
matrix = RGBMatrix(options=options)

while True:
    now = time.strftime("%H:%M")
    matrix.Clear()
    matrix.DrawText(font, 2, 26, color, now)
    time.sleep(30)`
}
          </div>

          <h3 className="text-2xl font-semibold mb-2">Project Media</h3>
          <div className="flex gap-4 overflow-x-scroll no-scrollbar">
            {['clock.jpg', 'gif.jpg', 'back-right.jpg'].map((file, idx) => (
              <a key={idx} href={`/Matrix/${file}`} target="_blank" rel="noopener noreferrer">
                <img src={`/Matrix/${file}`} alt={`Matrix ${idx + 1}`} className="w-64 h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
