import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import SectionIntro from './components/SectionIntro';
import ToolsGrid from './components/ToolsGrid';
import ContactInfo from './components/ContactInfo';
import ContactForm from './pages/Contact';
import QuoteBlock from './components/QuoteBlock';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="portfolio-wrapper">
      <Navbar />
      <Hero />
      <SkillsMarquee />
      
      <div id="process">
      <SectionIntro 
        number="1.1" 
        title="The Process" 
        heading="How I work - Interactive Development." 
        paragraph="When I start working on a project, I try to get all the information and data from my client relevant to the project such as goals, demographics and preferred aesthetics. After this, I start doing the research about the industry, competition, trends and other factors that are necessary for the development of the project. After I have all the data that I need, my next step is to work on the wireframe and prototype using tools such as Adobe XD and Figma. After the prototype is finished and the wireframes are finalized and approved, I begin creating the visual designs using various tools such as Adobe Photoshop for processing images, Adobe Illustrator for creating vector graphics, and Adobe XD or Figma for building the actual visual design. After the visual designs are complete and accepted, I go on to translating the designs into actual code using a wide range of technologies such as HTML, CSS and JavaScript with best practices in mind." 
      />
      
      <SectionIntro 
        number="1.2" 
        title="The Process" 
        heading="How I work - Industrial Product Design." 
        paragraph="When it comes to industrial design, the process is mainly the same. The only differences would be the programs while planing (the classic pen and paper), designing (Solidworks and Visualize), and bringing the product to life through approprate fabrication technologies. During the planning process, I also take account of various design-best-practices such as efficient packaging, balancing user-centered ergonomics, manufacturing feasibility (DFM), aesthetic coherence, and many more." 
      />
      </div>

       <div id="stack">
        {/* 02: The Stack (With the Tools Grid inside) */}
        <SectionIntro 
          number="2.0" 
          title="The Tools" 
          heading="What I use." 
          paragraph="I use a number of tools that make design and development much easier. I usually use Adobe XD or Figma interchangeably for doing all the process that includes wireframing, prototyping and visual design. For wireframing alone, any graphic design tool can make the job done either it is low fidelity or high fidelity wireframe. For development/coding, I use different tools specific to the development of the application or website. For product design, I mainly use Solidworks programs. Listed below are the tools and technologies that I use and I'm knowledgeable with." 
      >
        {/* Tool list component may be edited in actual component file */}
        <ToolsGrid />
      </SectionIntro>
      </div>

      <div id="connect">
      {/* 03: Contact Section */}
      <SectionIntro 
        number="03" 
        title="Contact" 
      >
        <ContactInfo />
      </SectionIntro>
      </div>

      {/* The Footer Quote */}
      <QuoteBlock 
        quote="The only reason anything matters is because it ends."
        author="Unknown"
      />

      {/* Target: #works (You can drop your portfolio grid in here later) */}
      <div id="works">
        {/* Placeholder for future works component */}
      </div>

      {/* Target: #contact */}
      <div id="contact">
        <ContactForm />
      </div>

      <Footer copyrightName="BVLTRA" />

    </div>
  );
}

export default App;