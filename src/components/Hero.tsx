
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/thinkdigital/image/upload/v1749206072/Couple-in-harbor-50x40-2018-oil-on-canvas_oedrid.jpg')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-4">
          GIACOMO<br />PIUSSI
        </h1>
      </div>
      
   
      
      {/* Quote Text - Bottom */}
      <div className="absolute bottom-32 left-8 max-w-xs text-white text-xs leading-relaxed opacity-60 text-right">
        The environment and the characters that live within it are the quintessence of ease, <br />
        peace and self-containment. The figures are gods in their daily Olympus.<br />
        It is an ideal world that recalls common gestures, <br />
        a step away from the flow of time and in the same moment, part of contemporary life.<br />
        The drama, or the lack thereof, is played out in simplified, <br />
        almost abstract spaces, geometric backgrounds in which self-aware characters inhabit<br />
        bourgeois interiors or a minimalist wilderness.”.
       
      </div>
      
   
    </div>
  );
};

export default Hero;
