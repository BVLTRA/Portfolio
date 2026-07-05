import React from 'react';
import './ContactInfo.css';

export default function ContactInfo() {
  return (
    <div className="contact-info-wrapper">
      
      <div className="contact-block">
        <h2>Socials.</h2>
        <p className="contact-links">
          <a href="https://github.com/bvltra" target="_blank" rel="noreferrer">GitHub</a>
          <span className="separator">/</span>
          <a href="https://instagram.com/bvltra" target="_blank" rel="noreferrer">Instagram</a>
          <span className="separator">/</span>
          <a href="https://www.linkedin.com/in/tshedza-mosehane-0302092a9" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>

      <div className="contact-block">
        <h2>Let's build something.</h2>
        <p className="contact-links">
          <a href="mailto:hello@bvltra.com">hello@bvltra.com</a>
        </p>
      </div>

    </div>
  );
}