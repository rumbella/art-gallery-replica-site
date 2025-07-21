
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const ArtworkInfo = () => {
  return (
    <>
    
      
      {/* Copyright - Top Right */}
      <div className="fixed top-1/2 right-8 text-white text-sm opacity-60">
        ©2025
      </div>
      
      
      
      {/* Menu Button - Bottom Right */}
      <div className="fixed bottom-8 right-8">
           <Link to="/gallery" className="text-sm font-light tracking-wider hover:opacity-80 transition-opacity text-white">
            GALLERY
          </Link>
      </div>
    </>
  );
};

export default ArtworkInfo;
