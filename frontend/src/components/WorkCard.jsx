import React from 'react';
import './WorkCard.css';

export default function WorkCard({ title, tech, onClick }) {
  return (
    <div className="work-row" onClick={onClick} style={{ cursor: 'pointer' }}>
      <h2 className="work-title">{title}</h2>
      <p className="work-tech">{tech}</p>
    </div>
  );
}