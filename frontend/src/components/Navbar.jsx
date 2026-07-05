import React from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src={logo}
          alt="Portfolio logo"
        />
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
