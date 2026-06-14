import React from 'react';
import './Home.css';
import bgImage from '../../assets/images/bg-image.jpg'; 

const Home = () => {
  return (
    <main className="bvltra-main">
      
      {/* The New Image Background System */}
      <div className="image-background">
        <img src={bgImage} alt="Background" className="bg-image-layer" />
        {/* We keep a subtle noise/dark overlay so the white text stays readable */}
        <div className="dark-overlay"></div>
        <div className="noise-overlay"></div>
      </div>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        
        <h1 className="hero-title">
          {/* We force this specific row to stay together */}
          <span className="title-row">
            <span className="title-sans uppercase">High-End</span>
            <span className="title-serif lowercase">websites</span>
          </span>
          <span className="title-sans uppercase block">For Startups</span>
        </h1>
        
        <p className="hero-subtitle">
          Building underlying structures and precise interfaces for brands that demand clarity. I go always above and beyond. No BS.
        </p>

      </section>

      {/* Industrial Footer Data */}
      <div className="hero-footer-data">
        <span>[ ***** ] 5/5 (12)</span>
        <div className="middle-stats">
          <span>50+ [ PROJECTS ]</span>
          <span>8Y [ EXPERIENCE ]</span>
          <span>0% [ FAILED PROJECTS ]</span>
        </div>
        <span>SEE WORK</span>
      </div>

    </main>
  );
};

export default Home;