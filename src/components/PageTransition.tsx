import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [previousPage, setPreviousPage] = useState<React.ReactNode>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const previousLocation = useRef(location.pathname);
  const previousChildren = useRef(children);

  useEffect(() => {
    if (location.pathname !== previousLocation.current) {
      // Store the previous page before transition
      setPreviousPage(previousChildren.current);
      setIsTransitioning(true);
      
      // Small delay to ensure DOM updates
      requestAnimationFrame(() => {
        const container = containerRef.current;
        if (container) {
          const currentPage = container.querySelector('.current-page') as HTMLElement;
          const prevPage = container.querySelector('.previous-page') as HTMLElement;
          
          if (currentPage) {
            // Set initial position for current page (slide in from left)
            gsap.set(currentPage, {
              x: '-100%',
              zIndex: 2
            });
            
            if (prevPage) {
              gsap.set(prevPage, {
                x: 0,
                zIndex: 1
              });
            }
            
            // Animate current page sliding in from left
            gsap.to(currentPage, {
              x: '0%',
              duration: 0.6,
              ease: 'power2.out',
              onComplete: () => {
                setIsTransitioning(false);
                setPreviousPage(null);
                gsap.set(currentPage, { zIndex: 'auto', x: 0 });
              }
            });
          }
        }
      });
      
      previousLocation.current = location.pathname;
    }
    
    // Update previous children reference
    previousChildren.current = children;
  }, [location.pathname, children]);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden">
      {/* Previous page - visible during transition */}
      {isTransitioning && previousPage && (
        <div className="previous-page absolute inset-0 w-full h-full">
          {previousPage}
        </div>
      )}
      
      {/* Current page */}
      <div className="current-page relative w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default PageTransition;