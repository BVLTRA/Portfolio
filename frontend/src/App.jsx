import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import your pages
import Home from './pages/Home';
import Qualification from './pages/Qualification';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="portfolio-wrapper">
        {/* The Navbar stays outside the Routes so it never disappears */}
        <Navbar />
        
        {/* The Switchboard: Only one of these will show at a time based on the URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* The Footer stays outside the Routes so it sits at the bottom of every page */}
        <Footer copyrightName="BVLTRA" />
      </div>
    </Router>
  );
}

export default App;