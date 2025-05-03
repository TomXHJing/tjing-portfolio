// src\App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import BridgingRoots from './pages/BridgingRoots';

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/bridgingroots" element={<BridgingRoots/>} />
        </Routes>
      </Router>
  );
}
