import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SculptureSection from '@/components/SculptureSection';

gsap.registerPlugin(ScrollTrigger);

const sculptures = [
  { id: 1, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651070/giacomo/tFdPgitxQ6sfC6HnLSmnan5C4_1.jpg", alt: "Sculpture 1" },
  { id: 2, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651073/giacomo/3WZTlsJaYlPj3lWgScdi6gTiw_1.jpg", alt: "Sculpture 2" },
  { id: 3, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651070/giacomo/8IsKshDpc376UAyKxYIKY9m1E0_1.jpg", alt: "Sculpture 3" },
  { id: 4, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651070/giacomo/EtQsdQPjVZuiB9PBy1nBYAMnp8_1.jpg", alt: "Sculpture 4" },
  { id: 5, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651073/giacomo/7jWaJ7geij3fuRD3XSAmp6zsOcc_1.jpg", alt: "Sculpture 5" },
];

const Sculpture = () => {
  useEffect(() => {
    // Smooth scrolling configuration
    gsap.config({ 
      force3D: true,
      nullTargetWarn: false 
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {sculptures.map((sculpture, index) => (
        <SculptureSection 
          key={sculpture.id} 
          sculpture={sculpture} 
          index={index}
        />
      ))}
      
      <div className="fixed bottom-8 right-8 text-black/60 font-inter text-xs tracking-widest z-50 mix-blend-difference">
        KEEP SCROLLING
      </div>
    </div>
  );
};

export default Sculpture;
