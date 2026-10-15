import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "../components/styles/WorkDetail.css";

import EditorialSplit from "../components/EditorialSplit";
import ScreenCarousel from "../components/ScreenCarousel";
import GraphicStrip from "../components/GraphicStrip";
import ProjectHighlights from "../components/ProjectHighlights";

// Plethora Assets
import PlethoraLogo from "../assets/images/works/prjPlethora/Logo.gif";
import PlethoraLogin from "../assets/images/works/prjPlethora/Login.png";
import PlethoraHero from "../assets/images/works/prjPlethora/Hero.png";
import PlethoraExplore from "../assets/images/works/prjPlethora/Explore.png";
import PlethoraShare from "../assets/images/works/prjPlethora/Share.png";
import PlethoraViewPost from "../assets/images/works/prjPlethora/ViewPost.png";
import PlethoraAccount from "../assets/images/works/prjPlethora/Account.png";

export default function WorkDetail() {
  const { id } = useParams(); // Grabs name from the URL

  // The Master Database for your projects
  const projectData = {
    relay: {
      title: "Relay",
      categoryTags: ["Development", "UX Architecture"],
      description:
        "A fault-logging and task assignment system designed for team management. Focused on minimizing friction between reporting a hardware failure and technical intervention.",
      role: "Lead Developer • Interface Design",
      year: "2026",
      context: "Independent Build, BVLTRA Ecosystem",
      stack: "React • Express • Node.js • Tailwind CSS • MongoDB",
      logo: "/relay-logo.png", // Placeholder
    },
    bioshift: {
      title: "BioShift",
      categoryTags: ["Prototyping", "UX Research"],
      description:
        "An experimental interactive codebase exploring modular interfaces and shared-source licensing environments.",
      role: "UX Researcher • Prototyper",
      year: "2026",
      context: "Academic Research, Open Window",
      stack: "Figma • React • Custom Hooks • Lenis",
      logo: "/bioshift-logo.png", // Placeholder
    },
    reasons: {
      title: "Reasons",
      categoryTags: ["Development", "Interaction"],
      description:
        "A digital tool built for interpersonal communication, prioritizing emotional resonance over standard messaging mechanics.",
      role: "Front-end Developer • Concept Design",
      year: "2026",
      context: "BVLTRA Platform",
      stack: "React • Raw CSS • Framer Motion",
      logo: "/reasons-logo.png", // Placeholder
      },
    
    
    plethora: {
      title: "Plethora",
      categoryTags: ["Development", "Web Platform"],
      description:
        "A comprehensive web platform featuring custom license agreements and a decoupled architecture, integrating a modern frontend with a robust server-side backend.",
      role: "Full-Stack Developer",
      year: "2026",
      context: "BVLTRA Platform",
      stack: "React • PHP • Vite • Custom Database Schemas",
      logo: PlethoraLogo,

      repoUrl: "https://github.com/bvltra/plethora",
      liveUrl: "https://plethora.bvltra.com",

      challengeHeading: "Scalability constraints.",
      challenge:
        "Building a highly scalable architecture that handles custom licensing schemas without sacrificing frontend rendering speeds.",
      approachHeading: "Decoupled Architecture.",
      approach:
        "Decoupling the frontend and backend using React and PHP. We established strict database schemas...",
      highlights: [
        "Device mockups rendered from real client sites",
        "Scroll-scrubbed 3D phone and laptop elements",
        "Guided project brief with automated estimations",
        "GSAP + Lenis motion on React and TypeScript",
      ],
      techPills: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "GSAP",
        "Lenis",
      ],
      credits:
        "UI Design & Frontend Development: Tshedza Mosehane. Backend Architecture: BVLTRA Systems.",

      screens: [
        { url: PlethoraLogin, name: "Home Dashboard" },
        { url: PlethoraHero, name: "Hero Section" },
        { url: PlethoraExplore, name: "Explore Page" },
        { url: PlethoraShare, name: "Share Feature" },
        { url: PlethoraViewPost, name: "View Post" },
        { url: PlethoraAccount, name: "Account Settings" },
      ],
      },
    
    
    metrics: {
      title: "BVLTRA Metrics",
      categoryTags: ["Full-Stack", "Data"],
      description:
        "A data visualization platform engineered to deconstruct and display complex nutritional tracking metrics through a brutalist lens.",
      role: "Full-Stack Developer",
      year: "2026",
      context: "BVLTRA Platform",
      stack: "React • Node.js • Express • Chart.js • MongoDB",
      logo: "/metrics-logo.png", // Placeholder
    },
  };

  const project = projectData[id];

  // Fallback if someone types a broken URL
  if (!project) return <div className="error-state">Project not found.</div>;

  return (
      <>
          {/* --- RED CURTAIN ENTRANCE ANIMATION --- */}
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: "0vh" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'fixed',
          top: 0, /* Anchors to top so it empties upward */
          left: 0,
          width: '100vw',
          backgroundColor: '#ff0000',
          zIndex: 99999,
          overflow: 'hidden'
        }}
      >
        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
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
          {project.title}
        </motion.h1>
          </motion.div>
          

      <div className="work-detail-wrapper">
        {/* Breadcrumb Navigation */}
        <div className="work-top-bar">
          
          <div className="breadcrumb">
            <Link to="/works" className="back-link">Work</Link> <span className="slash">/</span> 
            {project.categoryTags.map((tag, index) => (
              <span key={index} className="tag-pill">{tag}</span>
            ))}
          </div>

          <div className="action-buttons">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-live">
                Live site 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-code">
                Code 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </a>
            )}
          </div>

        </div>

        {/* The Header Area */}
        <div className="work-header">
          <div className="work-logo-box">
            <img src={project.logo} alt={`${project.title} Logo`} />
          </div>
          <h1 className="work-title-massive">{project.title}</h1>
          <p className="work-description">{project.description}</p>
        </div>

        {/* The Tabular Data Grid */}
        <div className="work-data-grid">
          <div className="grid-row top-row">
            <div className="grid-cell role-cell">
              <span className="cell-label">Role</span>
              <span className="cell-data">{project.role}</span>
            </div>
            <div className="grid-cell year-cell">
              <span className="cell-label">Year</span>
              <span className="cell-data">{project.year}</span>
            </div>
            <div className="grid-cell context-cell">
              <span className="cell-label">Context</span>
              <span className="cell-data">{project.context}</span>
            </div>
          </div>
          <div className="grid-row bottom-row">
            <div className="grid-cell stack-cell">
              <span className="cell-label">Stack</span>
              <span className="cell-data">{project.stack}</span>
            </div>
          </div>
        </div>

        {/* --- MORE ABOUT THIS PROJECT --- */}

        <GraphicStrip />

        <div className="work-editorial-content">
          {/* The Text Blocks */}
          <EditorialSplit
            number="01"
            title="The Challenge"
            heading={project.challengeHeading}
            text={project.challenge}
          />

          <EditorialSplit
            number="02"
            title="The Approach"
            heading={project.approachHeading}
            text={project.approach}
          />

          {/* Image Carousel */}
          <EditorialSplit number="04" title="The Screens">
            <ScreenCarousel screens={project.screens} />
          </EditorialSplit>

          {/* Image Carousel (Injected as children, no heading/text) */}
          <EditorialSplit number="03" title="Highlights">
            <ProjectHighlights
              highlights={project.highlights}
              techPills={project.techPills}
            />
          </EditorialSplit>

          {/* CREDITS BLOCK */}
          <EditorialSplit number="05" title="Credits" text={project.credits} />
        </div>
      </div>
    </>
  );
}
