import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';
import SettingsPopup from './components/SettingsPopup/SettingsPopup';

export default function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  return (
    <Router>
      <Header openSettings={openSettings} />
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <SettingsPopup isOpen={isSettingsOpen} onClose={closeSettings} />
    </Router>
  );
}
