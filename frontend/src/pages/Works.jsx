import React from "react";
import WorksHero from "../components/WorksHero";
import WorkCard from "../components/WorkCard";
import "../components/styles/Works.css";

export default function Works() {
  const projects = [
  
    { id: "plethora", title: "Plethora", tech: "React / PHP / Custom Architecture" },
    { id: "relay", title: "Relay", tech: "MERN Stack / Tailwind CSS / UX Architecture" },
    { id: "bioshift", title: "BioShift", tech: "Figma / Interactive Prototyping / UX Research" },
    { id: "reasons", title: "Reasons", tech: "React.js / Custom CSS / Interaction Design" },
    { id: "metrics", title: "BVLTRA Metrics", tech: "Full-Stack Development / Data Visualization / Node.js" }
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
              link={`/works/${project.id}`} // Changes from "#" to "/works/relay"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
