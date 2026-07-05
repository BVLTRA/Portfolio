import React from 'react';
import './SectionIntro.css';

export default function SectionIntro({ number, title, heading, paragraph, children }) {
  return (
    <section className="section-intro-wrapper">
      <div className="section-intro-grid">
        
        <div className="intro-sidebar">
          <span className="sidebar-number">/ {number}</span>
          <span className="sidebar-title">{title}</span>
        </div>

        <div className="intro-content">
          {heading && <h2>{heading}</h2>}
          {paragraph && <p>{paragraph}</p>}
          
          {/* This renders whatever you nest inside the component */}
          {children}
        </div>

        <div className="intro-spacer"></div>

      </div>
    </section>
  );
}