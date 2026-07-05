import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import SectionIntro from './components/SectionIntro';
import './App.css';

function App() {
  return (
    <div className="portfolio-wrapper">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      
      <SectionIntro 
        number="02" 
        title="The Process" 
        heading="Dissecting the system." 
        paragraph="I build things by first tearing them down. Understanding the underlying mechanics of a framework allows me to assemble interfaces that are actually robust, rather than just aesthetically pleasing." 
      />

    </div>
  );
}

export default App;