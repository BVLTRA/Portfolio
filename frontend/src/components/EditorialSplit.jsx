import React from 'react';
import './EditorialSplit.css';

export default function EditorialSplit({ number, title, heading, text, children }) {
  // If there's no text and no children (like images), don't render the section
  if (!text && !children) return null;

  return (
    <section className="editorial-split-wrapper">
      <div className="editorial-split-grid">
        
        {/* Left Column: Number and Small Title */}
        <div className="editorial-sidebar">
          {number && <span className="editorial-number">/ {number}</span>}
          <span className="editorial-title">{title}</span>
        </div>

        {/* Center Column: Big Heading, Paragraph, or Injected Children (Images) */}
        <div className="editorial-content">
          {heading && <h2 className="editorial-heading">{heading}</h2>}
          {text && <p className="editorial-text">{text}</p>}
          
          {/* Renders the carousel if we pass it inside */}
          {children}
        </div>

        {/* Right Column: The Invisible Counter-Weight */}
        <div className="editorial-spacer"></div>

      </div>
    </section>
  );
}