
import React from 'react';
import { Menu } from 'lucide-react';

const ArtworkInfo = () => {
  return (
    <>
      {/* Year and Number - Top Left */}
      <div className="fixed top-1/2 left-8 text-white">
        <div className="text-2xl font-light">2021</div>
        <div className="text-4xl font-light">01</div>
      </div>
      
      {/* Copyright - Top Right */}
      <div className="fixed top-1/2 right-8 text-white text-sm opacity-60">
        ©2024
      </div>
      
      {/* Artwork Title - Bottom Left */}
      <div className="fixed bottom-8 left-8 text-white">
        <div className="text-xs opacity-60 mb-1">PAINTING</div>
        <div className="text-lg font-light tracking-wider">"YOUNG"</div>
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
