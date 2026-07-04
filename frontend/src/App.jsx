import React from 'react';
import './App.css';
import logo from './assets/images/logo.png';

function App() {
  return (
    <div className="portfolio-wrapper">
      <nav className="navbar">
        <div className="logo"><img src={logo} alt="Portfolio logo: stylized monogram and wordmark presenting B V L T R A in geometric modern lettering, black on light background; located in the site header navigation bar conveying a professional, minimalist tone" /></div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <div className="bg-circle"></div>

        {/* The wrapper that pulls everything to the center */}
        <div className="content-grid">
          
          <div className="left-column">
            <h1 className="hero-title">
              full-stack developer <br/>
              &amp; industrial designer.
            </h1>
            
            <p className="hero-intro">
              Hi, I'm Tshedza Mosehane, a student developer and designer based in Pretoria.
            </p>

            <a href="#works" className="works-link">
              SEE MY WORKS
              <svg className="arrow-icon" viewBox="0 0 50 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.7071 8.20711C50.0976 7.81658 50.0976 7.18342 49.7071 6.79289L43.3431 0.428932C42.9526 0.0384078 42.3195 0.0384078 41.9289 0.428932C41.5384 0.819456 41.5384 1.45262 41.9289 1.84315L47.5858 7.5L41.9289 13.1569C41.5384 13.5474 41.5384 14.1805 41.9289 14.5711C42.3195 14.9616 42.9526 14.9616 43.3431 14.5711L49.7071 8.20711ZM0 8.5H49V6.5H0V8.5Z" fill="currentColor"/>
              </svg>
            </a>

            <div className="social-links">
              <a href="https://github.com/BVLTRA" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://instagram.com/bvltra" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>

          <div className="right-column">
            {/* Drop your image in the src below */}
            <div className="image-wrapper">
              <svg id="header__cross" viewBox="0 0 123.49 127.88"><defs><style>{`.cross-line1,
.cross-line2 {
stroke: #000;
stroke-miterlimit: 10;
stroke-width: 15px;
stroke-dasharray: 200;
stroke-dashoffset: 200;
}`}</style></defs><line className="cross-line1" x1="118.08" y1="5.19" x2="5.41" y2="122.69" style={{strokeDashoffset: '0px'}}></line><line className="cross-line2" x1="5.41" y1="5.19" x2="118.08" y2="122.69" style={{strokeDashoffset: '0px'}}></line></svg>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
