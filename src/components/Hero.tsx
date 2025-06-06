
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
      <div className="absolute bottom-32 right-8 max-w-xs text-white text-xs leading-relaxed opacity-60 text-right">
        I THINK THAT LIFE IS ABOUT FIGURING<br />
        OUT WHAT WE CAN AND CANNOT DO.<br />
        OTHERWISE, HOW DO WE KNOW<br />
        WHEN WE HAVE DONE WELL?
      </div>
      
   
    </div>
  );
};

export default Hero;
