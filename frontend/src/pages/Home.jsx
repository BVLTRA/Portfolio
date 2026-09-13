import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SkillsMarquee from '../components/SkillsMarquee';
import SectionIntro from '../components/SectionIntro';
import ToolsGrid from '../components/ToolsGrid';
import ContactInfo from '../components/ContactInfo';
import QuoteBlock from '../components/QuoteBlock';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="portfolio-wrapper">
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
        heading="How I work - UX/UI Design." 
        paragraph="When it comes to UX/UI design, the core process is mainly the same. The differences lie in the tools while planning (user journeys, information architecture, and the classic pen and paper), designing (Figma, scalable design systems, and high-fidelity prototypes), and bringing the interface to life through usability testing and technical frontend feasibility. During the planning process, I take into account design-best-practices such as reducing cognitive load, accessibility standards (WCAG), responsive ergonomics, usability heuristics, and aesthetic coherence." 
      />
      </div>

       <div id="stack">
        {/* 02: The Stack (With the Tools Grid inside) */}
        <SectionIntro 
          number="2.0" 
          title="The Tools" 
          heading="What I use." 
          paragraph="I use a number of tools that make design and development much easier. I usually use Adobe XD or Figma interchangeably for doing all the process that includes wireframing, prototyping and visual design. For wireframing and concept layout, whether low-fidelity sketches or high-fidelity interactive prototypes, I prioritize clarity and structural hierarchy before touching code. For development and implementation, I use different tools specific to the development of the application or website." 
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

    </div>
  );
}

export default App;