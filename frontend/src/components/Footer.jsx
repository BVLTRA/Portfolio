import React from 'react';
import './Footer.css';
import logobg from "../assets/images/logobg.png"

export default function Footer({ copyrightName }) {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        
        {/* The Dual Logo Header */}
        <div className="footer-header">
          <div className="dual-logo">
              <img src={logobg} alt="Logo" />
            
            <svg className="cross-divider" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            
            <h2>BVLTRA.</h2>
          </div>
        </div>

        <div className="footer-grid">
          {/* Column 1: Context (Replaces Home) */}
          <div className="footer-column context-column">
            <h4>Context</h4>
            <p className="context-text">
              BVLTRA is an overarching ecosystem and digital studio. This portfolio serves as an index of individual output, highlighting my works of industrial design and full-stack development.
            </p>
          </div>

          {/* Column 2: About (The Anchor Links) */}
          <div className="footer-column">
            <h4>About</h4>
            <ul className="footer-links">
              <li><a href="#process">/01 The Process</a></li>
              <li><a href="#stack">/02 Tools & Stack</a></li>
              <li><a href="#connect">/03 Connect</a></li>
            </ul>
          </div>

          {/* Column 3: Works */}
          <div className="footer-column">
            <h4>Works</h4>
            <ul className="footer-links">
              <li><p className='pending-text'>Archiving in progress...</p></li>
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div className="footer-column">
            <h4>Contacts</h4>
            <ul className="footer-links">
              <li><a href="mailto:hello@bvltra.com">hello@bvltra.com</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="copyright">© {new Date().getFullYear()} {copyrightName}. All rights reserved.</p>
      </div>
    </footer>
  );
}