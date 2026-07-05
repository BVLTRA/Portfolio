import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';import SkillsMarquee from './components/SkillsMarquee';
import './App.css';

function App() {
  return (
    <div className="portfolio-wrapper">
      <Navbar />
      <Hero />
      <SkillsMarquee />
    </div>
  );
}

export default App;
