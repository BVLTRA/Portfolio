import React, { useState, useRef, useEffect } from 'react';
import './ScreenCarousel.css';

export default function ScreenCarousel({ screens }) {
  const [expandedImage, setExpandedImage] = useState(null);
  const [scrollData, setScrollData] = useState({ left: 0, maxScroll: 1 });
  const carouselRef = useRef(null);

  // We have to listen to the scroll event to calculate if we are at the start or end of the track
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setScrollData({
          left: scrollLeft,
          maxScroll: scrollWidth - clientWidth
        });
      }
    };
    
    const ref = carouselRef.current;
    if (ref) ref.addEventListener('scroll', handleScroll);
    
    // Trigger once on mount to establish base state
    handleScroll();
    
    return () => {
      if (ref) ref.removeEventListener('scroll', handleScroll);
    };
  }, [screens]);

  if (!screens || screens.length === 0) return null;

  // Calculate opacity for the left and right fade masks
  const leftOpacity = scrollData.left > 10 ? 1 : 0;
  const rightOpacity = scrollData.left < scrollData.maxScroll - 10 ? 1 : 0;

  return (
    <>
      <div className="carousel-wrapper">
        
        {/* The Fade Masks (Speckles) */}
        <div className="fade-mask mask-left" style={{ opacity: leftOpacity }}></div>
        <div className="fade-mask mask-right" style={{ opacity: rightOpacity }}></div>

        {/* The Scroll Track */}
        <div className="screens-carousel" ref={carouselRef}>
          {screens.map((screen, index) => (
            <div 
              className="screen-card" 
              key={index} 
              onClick={() => setExpandedImage(screen)}
            >
              <img src={screen.url} alt={screen.name} className="screen-image" />
              <div className="screen-pill">{screen.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- THE EXPANSION MODAL --- */}
      {expandedImage && (
        <div className="expansion-modal">
          {/* The Gray/Red Stripe Background */}
          <div className="expansion-bg"></div>
          
          <div className="expanded-content">
            <img src={expandedImage.url} alt={expandedImage.name} className="expanded-image" />
            
            {/* The Floating UI */}
            <div className="expanded-controls">
              <div className="screen-pill">{expandedImage.name}</div>
              <button 
                className="close-button" 
                onClick={() => setExpandedImage(null)}
              >
                {/* SVG for a crisp X */}
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}