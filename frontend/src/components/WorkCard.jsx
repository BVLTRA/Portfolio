import React from 'react';
import './WorkCard.css';

export default function WorkCard({ title, tech, link }) {
  return (
    <a href={link} className="work-row">
      <h2 className="work-title">{title}</h2>
      <p className="work-tech">{tech}</p>
    </a>
  );
}