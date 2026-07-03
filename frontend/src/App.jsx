import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">BVLTRA.</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        {/* Background Graphic */}
        <div className="bg-circle"></div>

        {/* Lower Half Content */}
        <div className="content-grid">
          
          <div className="left-column">
            <h1 className="hero-title">
              full-stack developer <br/>
              &amp; industrial designer.
            </h1>
            
            <p className="hero-intro">
              Hi, I'm Tshedza Mosehane, a passionate developer and designer based in Pretoria. I'm currently a second-year student studying Creative Technologies at the Open Window Institute.
            </p>

            <a href="#works" className="works-link">
              SEE MY WORKS
              <svg className="arrow-icon" viewBox="0 0 50 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.7071 8.20711C50.0976 7.81658 50.0976 7.18342 49.7071 6.79289L43.3431 0.428932C42.9526 0.0384078 42.3195 0.0384078 41.9289 0.428932C41.5384 0.819456 41.5384 1.45262 41.9289 1.84315L47.5858 7.5L41.9289 13.1569C41.5384 13.5474 41.5384 14.1805 41.9289 14.5711C42.3195 14.9616 42.9526 14.9616 43.3431 14.5711L49.7071 8.20711ZM0 8.5H49V6.5H0V8.5Z" fill="currentColor"/>
              </svg>
            </a>

            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>

          <div className="right-column">
            <svg className="huge-x" viewBox="0 0 124 128" xmlns="http://www.w3.org/2000/svg">
              <line x1="118" y1="5" x2="5" y2="123" />
              <line x1="5" y1="5" x2="118" y2="123" />
            </svg>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;