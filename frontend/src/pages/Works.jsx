import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WorksHero from "../components/WorksHero";
import WorkCard from "../components/WorkCard";
import "../components/styles/Works.css";

export default function Works() {
  const navigate = useNavigate();
  const [transitioningProject, setTransitioningProject] = useState(null);

  const projects = [
  
    { id: "plethora", title: "Plethora", tech: "React / PHP / Custom Architecture" },
    { id: "relay", title: "Relay", tech: "MERN Stack / Tailwind CSS / UX Architecture" },
    { id: "bioshift", title: "BioShift", tech: "Figma / Interactive Prototyping / UX Research" },
    { id: "reasons", title: "Reasons", tech: "React.js / Custom CSS / Interaction Design" },
    { id: "metrics", title: "BVLTRA Metrics", tech: "Full-Stack Development / Data Visualization / Node.js" }
  ];

  const handleProjectClick = (project) => {
    setTransitioningProject(project);
    // Wait for red screen to fill (300ms), then change the page
    setTimeout(() => {
      navigate(`/works/${project.id}`);
    }, 1200); 
  };

  return (
    <div className="works-page-wrapper">
      {/* White Hero Section */}
      <WorksHero />

      {/* Black Project Index */}
      <div className="works-index-container">
        <div className="works-index-list">
          {projects.map((project) => (
            <WorkCard
              key={project.id}
              title={project.title}
              tech={project.tech}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      {/* ---  RED CURTAIN EXIT ANIMATION --- */}
      <AnimatePresence>
        {transitioningProject && (
          <motion.div
            initial={{ height: "0vh" }}
            animate={{ height: "100vh" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }} /* easing curve */
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              width: '100vw',
              backgroundColor: '#ff0000',
              zIndex: 99999,
              overflow: 'hidden'
            }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                position: 'absolute',
                bottom: '3rem',
                left: '4rem',
                color: '#ffffff',
                fontSize: '6vw',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '-2px',
                margin: 0
              }}
            >
              {transitioningProject.title}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
