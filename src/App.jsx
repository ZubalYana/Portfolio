import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Header from './components/Header/Header';

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
