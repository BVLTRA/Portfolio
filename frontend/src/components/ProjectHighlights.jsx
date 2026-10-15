import React from 'react';
import './ProjectHighlights.css';

export default function ProjectHighlights({ highlights, techPills }) {
  return (
    <div className="project-highlights-container">
      
      {/* The Numbered List */}
      {highlights && highlights.length > 0 && (
        <ul className="highlights-list">
          {highlights.map((item, index) => (
            <li key={index} className="highlight-row">
              {/* String(index + 1).padStart(2, '0') forces numbers to read as 01, 02, 03... */}
              <span className="highlight-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="highlight-text">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* The Tech Stack Pills */}
      {techPills && techPills.length > 0 && (
        <div className="built-with-section">
          <h4 className="built-with-label">Built with</h4>
          <div className="tech-pills-container">
            {techPills.map((pill, index) => (
              <div key={index} className="tech-pill">
                {/* Optional: You can drop SVG icons in here later. Using a dot for now to match the UI weight. */}
                <span className="pill-dot"></span>
                <p>{pill}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}