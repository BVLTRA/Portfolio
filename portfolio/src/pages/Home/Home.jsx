import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className="bvltra-main">
      
      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        
        {/* Intro Badge */}
        <div className="hero-badge">
          <span>Tshedza Mosehane</span>
        </div>

        {/* Massive Typography Group */}
        <h1 className="hero-title">
          <span className="title-sans">Web Designer</span>
          <span className="title-serif">& Developer</span>
        </h1>
        
        {/* Subtext */}
        <p className="hero-subtitle">
          Building underlying structures and precise interfaces for brands that demand clarity.
        </p>

      </section>

    </main>
  );
};

export default Home;