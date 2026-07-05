import React from 'react';
import './ToolsGrid.css';

export default function ToolsGrid() {
  return (
    <div className="tools-wrapper">
      
      {/* Left Side: Creative Design (1 Column) */}
      <div className="tools-group">
        <h3 className="tools-heading">Creative Design</h3>
        <ul className="tools-list">
          <li>Figma</li>
          <li>Adobe XD</li>
          <li>Adobe Illustrator</li>
          <li>VS Code</li>
          <li>SolidWorks</li>
          <li>Visualize</li>
        </ul>
      </div>

      {/* Right Side: Web Design/Dev (3 Columns) */}
      <div className="tools-group web-group">
        <h3 className="tools-heading">Web Development</h3>
        
        <div className="web-columns">
          <ul className="tools-list">
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>JavaScript</li>
            <li>Vite</li>
            <li>React JS</li>
            <li>Node JS</li>
          </ul>
          
          <ul className="tools-list">
            <li>Express JS</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>RESTful APIs</li>
            <li>Firebase</li>
            <li>GraphQL</li>
          </ul>

          <ul className="tools-list">
            <li>Git & GitHub</li>
            <li>Vercel Deployment</li>
            <li>Postman</li>
            <li>Webpack</li>
            <li>NPM</li>
            <li>Yarn</li>
          </ul>
        </div>
      </div>

    </div>
  );
}