
import React from 'react';
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
        <button className="flex items-center text-white text-sm font-light tracking-wider hover:opacity-80 transition-opacity">
          MENU
          <Menu className="ml-2 w-4 h-4" />
        </button>
      </div>
    </>
  );
};

export default ArtworkInfo;
