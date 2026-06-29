import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['home', 'work', 'process', 'contact'];

  // Handle nav background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when the mobile menu overlay is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (item) => {
    setActiveSection(item);
    setIsMenuOpen(false); // Snap the menu closed when they click a link
  };

  return (
    <nav className={`bvltra-nav ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        
        {/* BRAND */}
        <div className="nav-brand">
          <span className="brand-sans uppercase">BVLTRA</span>
          <span className="brand-serif lowercase italic">portfolio</span>
        </div>

        {/* THE HAMBURGER (Visible only on mobile) */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* LINKS OVERLAY / DESKTOP ROW */}
        <div className={`nav-links-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={activeSection === item ? 'active' : ''}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SIGNATURE (Hidden on mobile) */}
        <div className="nav-signature">
          <span>Tshedza Mosehane</span>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;