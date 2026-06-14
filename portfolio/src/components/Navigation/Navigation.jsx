import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ['home', 'work', 'process', 'contact'];

  // Track scroll position
  useEffect(() => {
    // Check scroll on mount to prevent "stuck" state on reload
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Attach the listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    // The cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this only sets up once on load

  return (
    <nav className={`bvltra-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        
        {/* Left Column (Brand) */}
        <div className="nav-brand">
          <span className="brand-sans uppercase">BVLTRA</span>
          <span className="brand-serif lowercase italic">portfolio</span>
        </div>

        {/* Center Column (Links) */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={activeSection === item ? 'active' : ''}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Column (Personal Signature) */}
        <div className="nav-signature">
          <span>Tshedza Mosehane</span>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;