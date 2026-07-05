import React from 'react';
import './SkillsMarquee.css';

// Break the data down into arrays so they can be mapped as individual components
const row1 = ["FULL-STACK DEVELOPMENT", "MERN STACK", "REACT.JS", "NODE.JS", "API INTEGRATION", "DATABASE ARCHITECTURE"];
const row2 = ["INDUSTRIAL DESIGN", "3D MODELING", "CAD", "RAPID PROTOTYPING", "HARDWARE AESTHETICS", "UI/UX DESIGN"];
const row3 = ["CREATIVE TECHNOLOGIES", "OBJECTIVE FEEDBACK", "SYSTEM DISSECTION", "PATTERN SPOTTING", "INTENTIONAL GROWTH"];

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