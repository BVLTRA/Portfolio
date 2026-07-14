import React, { useState, useEffect } from 'react';
import "./Hero.css"

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile(); // Run once on mount

    // Add event listener to handle screen resizing dynamically
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header className="hero">
      <div className="bg-circle"></div>

      <div className="content-grid">
        <div className="left-column">
          <h1 className="hero-title">
            full-stack developer <br/>
            &amp; industrial designer.
          </h1>
          
          <p className="hero-intro">
            Hi, I'm Tshedza Mosehane, a student developer and designer studying Creative Technologies at the Open Window Institute.
          </p>

          {/* Render different links based on screen size */}
          {isMobile ? (
            <div className="works-link mobile-warning">
              Sorry, Currently optimised only for desktop. Mobile view coming soon. (Try landscape for now.)
            </div>
          ) : (
            <a href="#process" className="works-link">
              SEE MY WORKS
              <svg className="arrow-icon" viewBox="0 0 50 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.7071 8.20711C50.0976 7.81658 50.0976 7.18342 49.7071 6.79289L43.3431 0.428932C42.9526 0.0384078 42.3195 0.0384078 41.9289 0.428932C41.5384 0.819456 41.5384 1.45262 41.9289 1.84315L47.5858 7.5L41.9289 13.1569C41.5384 13.5474 41.5384 14.1805 41.9289 14.5711C42.3195 14.9616 42.9526 14.9616 43.3431 14.5711L49.7071 8.20711ZM0 8.5H49V6.5H0V8.5Z" fill="currentColor"/>
              </svg>
            </a>
          )}

          {/* Hide Socials on Mobile */}
          {!isMobile && (
            <div className="social-links">
              <a href="https://github.com/bvltra" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/tshedza-mosehane-0302092a9" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          )}
        </div>

        {/* Keep the right column (your image) as you requested */}
        <div className="right-column">
          <div className="image-wrapper">
            <svg id="header__cross" viewBox="0 0 123.49 127.88">
              <defs>
                <style>{`.cross-line1,
.cross-line2 {
stroke: #000;
stroke-miterlimit: 10;
stroke-width: 15px;
stroke-dasharray: 200;
stroke-dashoffset: 200;
}`}</style>
              </defs>
              <line
                className="cross-line1"
                x1="118.08"
                y1="5.19"
                x2="5.41"
                y2="122.69"
                style={{ strokeDashoffset: "0px" }}
              ></line>
              <line
                className="cross-line2"
                x1="5.41"
                y1="5.19"
                x2="118.08"
                y2="122.69"
                style={{ strokeDashoffset: "0px" }}
              ></line>
            </svg>

          </div>
        </div>
      </div>
    </header>
  );
}