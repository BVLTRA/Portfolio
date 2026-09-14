import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Works from './pages/Works';
import Qualification from './pages/Qualification';
import ContactPage from './pages/ContactPage';
import CustomCursor from './components/CustomCursor';

import './App.css';

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07, // Weight of momentum
      smoothWheel: true,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <Router>
      <div className="portfolio-wrapper">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <CustomCursor/>

        <Footer copyrightName="BVLTRA" />
      </div>
    </Router>
  );
}

export default App;