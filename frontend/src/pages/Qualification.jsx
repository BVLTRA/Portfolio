import React from 'react';
import QualificationHero from '../components/QualificationHero';
import SectionIntro from '../components/SectionIntro';

export default function Qualification() {
  return (
    <div className="page-container">
      
      <QualificationHero />

      <div id="degree-details">
        <SectionIntro 
          number="01" 
          title="The Degree" 
          heading="About" 
          paragraph="The Bachelor of Creative Technologies degree at Open Window is the first of its kind locally, offering innovative study in the diverse and rapidly evolving fields focusing on user-centred design principles with a specialisation in User Experience Design, Interactive Development or Industrial Design. This degree provides the graduate with a sustainable career in these dynamic and emerging fields, by providing specialisation in a discipline of choice, while still allowing for significant exposure in a range of related skills across the design and development industries. Graduates are equipped with strong problem-solving and research skills in order to craft meaningful experiences through digital and physical products and services." 
        />
      </div>

      <div id="degree-details">
        <SectionIntro 
          number="2.1" 
          title="Major" 
          heading="Interactive Development" 
          paragraph="Interactive Development teaches students how to use different programming languages and frameworks to code and develop digital products and systems. This specialisation introduces students to a vast range of web and mobile languages that allows them to programme and develop functional digital solutions that include websites and mobile applications. The course covers both front-end and back-end technologies. The ultimate aim is to provide students with a professional and multi-faceted development skillset that allows them to solve real-world problems and create intuitive, human-centred systems in any product team." 
        />
      </div>

      <div id="degree-details">
        <SectionIntro 
          number="2.2" 
          title="Major" 
          heading="Industrial Design" 
          paragraph="Industrial Product Design teaches students how to design user-centred physical products. The physical objects that surround us directly influence how we navigate and perceive the world. This specialisation guides students through the process of researching, imagining, modelling and creating the physical objects that people truly love. Students are given hands-on experience in using different materials and manufacturing methods to create a broad range of products from once-off items to mass-produced goods. Ultimately, the main focus is understanding how people use products and how to give them the best possible experience." 
        />
      </div>

      <div id="degree-details">
        <SectionIntro 
          number="03" 
          title="Details" 
          heading="Registration data" 
          paragraph="NQF Level 7 | SAQA ID: 118189"
        />
      </div>

    </div>
  );
}