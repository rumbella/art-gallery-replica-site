import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useOverlay } from '@/context/OverlayContext';

const BackButton = () => {
  const location = useLocation();
  const { isOverlayVisible } = useOverlay();

  if (location.pathname === '/' || isOverlayVisible) {
    return null;
  }

  return (
    <div className="fixed top-6 left-6 z-50">
      <Link
        to="/"
        className="flex items-center gap-2 text-white hover:opacity-80 transition-all duration-300"
      >
        {/* Arrow container - completely round */}
        <div className="backdrop-blur-sm bg-black/20 hover:bg-black/30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
          <span className="text-sm font-light">⟵</span>
        </div>
        
        {/* Text container - completely round */}
        <div className="backdrop-blur-sm bg-black/20 hover:bg-black/30 px-4 py-2 rounded-full transition-all duration-300">
          <span className="text-sm font-light tracking-wider">BACK</span>
        </div>
      </Link>
    </div>
  );
};

export default BackButton;
