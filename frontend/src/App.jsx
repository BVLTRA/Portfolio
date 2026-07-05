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
        number="1.1" 
        title="The Process" 
        heading="How I work - Interactive Development" 
        paragraph="When I start working on a project, I try to get all the information and data from my client relevant to the project such as goals, demographics and preferred aesthetics. After this, I start doing the research about the industry, competition, trends and other factors that are necessary for the development of the project. After I have all the data that I need, my next step is to work on the wireframe and prototype using tools such as Adobe XD and Figma. After the prototype is finished and the wireframes are finalized and approved, I begin creating the visual designs using various tools such as Adobe Photoshop for processing images, Adobe Illustrator for creating vector graphics, and Adobe XD or Figma for building the actual visual design. After the visual designs are complete and accepted, I go on to translating the designs into actual code using a wide range of technologies such as HTML, CSS and JavaScript with best practices in mind." 
      />

      <SectionIntro 
        number="1.2" 
        title="The Process" 
        heading="How I work - Industrial Product Design" 
        paragraph="When it comes to industrial design, the process is mainly the same. The only differences would be the programs while planing (the classic pen and paper), designing (Solidworks and Visualize), and bringing the product to life through approprate fabrication technologies. During the planning process, I also take account of various design-best-practices such as efficient packaging, balancing user-centered ergonomics, manufacturing feasibility (DFM), aesthetic coherence, and many more." 
      />

    </div>
  );
}

export default App;