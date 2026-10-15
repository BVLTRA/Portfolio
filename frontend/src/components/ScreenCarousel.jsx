import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScreenCarousel.css';

export default function ScreenCarousel({ screens }) {
  const [expandedImage, setExpandedImage] = useState(null);
  const [scrollData, setScrollData] = useState({ left: 0, maxScroll: 1 });
  const carouselRef = useRef(null);

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
    handleScroll();
    
    return () => {
      if (ref) ref.removeEventListener('scroll', handleScroll);
    };
  }, [screens]);

  if (!screens || screens.length === 0) return null;

  const leftOpacity = scrollData.left > 10 ? 1 : 0;
  const rightOpacity = scrollData.left < scrollData.maxScroll - 10 ? 1 : 0;

  return (
    <>
      <div className="carousel-wrapper">
        
        {/* The Halftone Speckle Masks */}
        <div className="speckle-mask mask-left" style={{ opacity: leftOpacity }}></div>
        <div className="speckle-mask mask-right" style={{ opacity: rightOpacity }}></div>

        <div className="screens-carousel" ref={carouselRef}>
          {screens.map((screen, index) => (
            <div 
              className="screen-card" 
              key={index} 
              onClick={() => setExpandedImage(screen)}
            >
              {/* motion.img allows Framer to map this specific image to the big one in the modal */}
              <motion.img 
                layoutId={`image-${screen.url}`}
                src={screen.url} 
                alt={screen.name} 
                className="screen-image" 
              />
              <div className="screen-pill"><p>{screen.name}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* --- THE EXPANSION MODAL --- */}
      <AnimatePresence>
        {expandedImage && (
          <div className="expansion-modal">
            
            {/* The Background (Clicking this closes the modal) */}
            <motion.div 
              className="expansion-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setExpandedImage(null)}
            ></motion.div>
            
            <div className="expanded-content">
              {/* This is the same image, Framer Motion handles the 'zoom' connecting them */}
              <motion.img 
                layoutId={`image-${expandedImage.url}`}
                src={expandedImage.url} 
                alt={expandedImage.name} 
                className="expanded-image" 
              />
              
              <motion.div 
                className="expanded-controls"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
              >
                <div className="screen-pill">{expandedImage.name}</div>
                <button 
                  className="close-button" 
                  onClick={() => setExpandedImage(null)}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}