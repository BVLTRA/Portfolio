import React from 'react';
import "./Navbar.css"
import logo from "../assets/images/logo.png"

export default function Navbar() {
  return (
    <>
      {/* The Logo: Floats on the top left, completely normal */}
      <div className="navbar-logo-fixed">
        <div className="logo">
          <img src={logo} style={{ height: '40px', width: 'auto' }} />
        </div>
      </div>

      {/* The Links: Floats on the top right, runs the inversion math */}
      <nav className="navbar-links-fixed">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </>
  );
}