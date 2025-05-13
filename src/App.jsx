// src\App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import BridgingRoots from './pages/project docs/BridgingRoots';
import SSIM from './pages/project docs/SSIM';
import LEDMatrix from './pages/project docs/LEDMatrix';

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />

          {/*Project page directory section:*/}
          <Route path="/bridgingroots" element={<BridgingRoots/>} />
          <Route path="/salish-sea-interactive-map" element={<SSIM/>} />
          <Route path="/led-matrix-display" element={<LEDMatrix/>} />
        </Routes>
      </Router>
  );
}
