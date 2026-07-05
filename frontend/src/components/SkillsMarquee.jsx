import React from 'react';
import './SkillsMarquee.css';

// Break the data down into arrays so they can be mapped as individual components
const row1 = ["Full-Stack Development", "MERN Stack", "React.js", "Node.js", "API Integration", "Database Architecture"];
const row2 = ["Industrial Design", "3D Modeling", "CAD", "Rapid Prototyping", "Hardware Aesthetics", "UI/UX Design"];
const row3 = ["Creative Technologies", "User Research", "System Dissection", "Branding", "Interaction Design"];

// A reusable sub-component for the rows
const MarqueeRow = ({ items }) => (
  <div className="marquee-content">
    {/* We render the sequence twice to create the seamless mathematical loop */}
    {[...Array(2)].map((_, sequenceIndex) => (
      <div key={sequenceIndex} className="marquee-sequence">
        {items.map((skill, index) => (
          <div key={index} className="skill-block">
            <span className="skill-text">{skill}</span>
            <span className="skill-separator"> </span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default function SkillsMarquee() {
  return (
    <section className="marquee-wrapper">
      <div className="marquee-container right">
        <MarqueeRow items={row1} />
      </div>

      <div className="marquee-container left">
        <MarqueeRow items={row2} />
      </div>

      <div className="marquee-container right">
        <MarqueeRow items={row3} />
      </div>
    </section>
  );
}