// src/Routes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import WindowCleaning from './pages/WindowCleaning';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Thanks from './pages/Thanks';

export default function SiteRoutes() {
  return (
    <>
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/window-cleaning" element={<WindowCleaning />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Navigate to="/contact" replace />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
