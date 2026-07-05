import React from 'react';
import './QuoteBlock.css';

export default function QuoteBlock({ quote, author }) {
  return (
    <section className="quote-section">
      <div className="quote-wrapper">
        <h3 className="quote-text">“{quote}”</h3>
        <span className="quote-author">— {author}</span>
      </div>
    </section>
  );
}