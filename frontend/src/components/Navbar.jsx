import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css"
import logo from "../assets/images/logo.png"

export default function Navbar() {
  // This hook grabs the current URL path
  const location = useLocation();

  return (
    <>
      {/* The Logo: Floats on the top left, completely normal */}
      <div className="navbar-logo-fixed">
        <div className="logo">
          <img src={logo} style={{ height: '40px', width: 'auto' }} alt="BVLTRA" />
        </div>
      </div>

      {/* The Links: Floats on the top right, runs the inversion math */}
      <nav className="navbar-links-fixed">
        <div className="nav-links">
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active-link' : ''}
          >
            About
          </Link>
          
          <Link 
            to="/works" 
            className={location.pathname === '/works' ? 'active-link' : ''}
          >
            Works
          </Link>

          <Link 
            to="/qualification" 
            className={location.pathname === '/qualification' ? 'active-link' : ''}
          >
            Qualification
          </Link>
          
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active-link' : ''}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}