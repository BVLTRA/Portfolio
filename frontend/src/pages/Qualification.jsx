import React from 'react';
import QualificationHero from '../components/QualificationHero';
import SectionIntro from '../components/SectionIntro';

export default function Qualification() {
  return (
    <div className="page-container">
      
      <QualificationHero />

      {/* The explanation area you asked for */}
      <div id="degree-details">
        <SectionIntro 
          number="01" 
          title="The Degree" 
          heading="...." 
          paragraph="The Bachelor of Creative Technologies program at Open Window..." 
        />
      </div>

    </div>
  );
}