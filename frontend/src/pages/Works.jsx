import React from 'react';
import WorksHero from '../components/WorksHero';
import WorkCard from '../components/WorkCard';
import '../components/styles/Works.css';

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "Relay",
      tech: "An operational fault-logging and communication handoff system for teams.",
      link: "https://relay.bvltra.com"
    },
    {
      id: 2,
      title: "BVLTRA Metrics",
      tech: "A React-based project designed to deconstruct consumables into high-fidelity data points.",
      link: "https://metrics.bvltra.com"
    },
    {
      id: 3,
      title: "Plethora",
      tech: "A minimalist, anonymous release valve for publicly offloading personal weight into an unsearchable diary.",
      link: "https://github.com/BVLTRA/Plethora"
    },
    {
      id: 4,
      title: "Gridlock",
      tech: "A gamified authentication interface that replaces traditional alphanumeric passwords with spatial memory.",
      link: "https://github.com/BVLTRA/Gridlock"
    },
    {
      id: 5,
      title: "BioShift",
      tech: "A dynamic interval timer that recalibrates work-to-rest ratios in real-time based on your physiological output and structural goals.",
      link: "https://github.com/BVLTRA/BioShift"
    }
  ];

  return (
    <div className="works-page-wrapper">
      
      {/* The new White Hero Section */}
      <WorksHero />

      {/* The Black Project Index */}
      <div className="works-index-container">
        <div className="works-index-list">
          {projects.map((project) => (
            <WorkCard 
              key={project.id}
              title={project.title}
              tech={project.tech}
              link={project.link}
            />
          ))}
        </div>
      </div>

    </div>
  );
}