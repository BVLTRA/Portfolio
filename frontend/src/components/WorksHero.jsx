import React from 'react';
import './QualificationHero.css';
import circle from "../assets/images/circle.png"

export default function WorksHero() {
  return (
    <header className="qual-hero-wrapper">
      
      <div className="qual-bg-circle">
        <img src={circle} alt="Selected Works" />
      </div>

      <div className="qual-content">
        <h1 className="qual-title">Selected Works.</h1>
        <p className="qual-subtitle">
          A collection of digital platforms, interactive systems, and UX architecture. <br/>
          <span className="qual-institute">(2025 — Present)</span>
        </p>
      </div>

    </header>
  );
}