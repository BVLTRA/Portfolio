import React from 'react';
import './SectionIntro.css';

export default function SectionIntro({ number, title, heading, paragraph }) {
  return (
    <section className="section-intro-wrapper">
      <div className="section-intro-grid">
        
        {/* Left Segment: The Labels */}
        <div className="intro-sidebar">
          <span className="sidebar-number">/{number}</span>
          <span className="sidebar-title">{title}</span>
        </div>

        {/* Center Segment: The Content */}
        <div className="intro-content">
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>

        {/* Right Segment: The Invisible Counter-weight */}
        <div className="intro-spacer"></div>

      </div>
    </section>
  );
}