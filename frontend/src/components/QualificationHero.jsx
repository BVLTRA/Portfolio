import React from 'react';
import './QualificationHero.css';
import circle from "../assets/images/circle.png"

export default function QualificationHero() {
  return (
    <header className="qual-hero-wrapper">
      
      {/* The Centered Circular Image */}
      <div className="qual-bg-circle">
        <img src={circle} alt="Circle" />
      </div>

      {/* The Typography */}
      <div className="qual-content">
        <h1 className="qual-title">Bachelor of Creative Technologies.</h1>
        <p className="qual-subtitle">
          Double major in Interactive Development and Industrial Design. <br/>
          <span className="qual-institute">Open Window Institute</span>
        </p>
      </div>

    </header>
  );
}