import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="bvltra-nav">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#work">Work</a></li>
        
        {/* The central logo break */}
        <li className="nav-logo">
          <span>B</span>
        </li>
        
        <li><a href="#process">Process</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;