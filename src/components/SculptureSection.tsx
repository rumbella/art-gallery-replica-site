import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useImageColor } from '@/hooks/useImageColor';

gsap.registerPlugin(ScrollTrigger);

interface SculptureSectionProps {
  sculpture: {
    id: number;
    src: string;
    alt: string;
  };
  index: number;
}

const SculptureSection: React.FC<SculptureSectionProps> = ({ sculpture, index }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { color, loading } = useImageColor(sculpture.src);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current) return;

    const section = sectionRef.current;
    const image = imageRef.current;

    // Parallax effect for the image
    gsap.fromTo(image, 
      { y: -50, scale: 1.1 },
      {
        y: 50,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    // Fade in animation when section comes into view
    gsap.fromTo(section,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen snap-center flex items-center justify-center relative overflow-hidden transition-colors duration-1000"
      style={{
        backgroundColor: loading ? '#ccc' : color,
      }}
    >
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <img
          ref={imageRef}
          src={sculpture.src}
          alt={sculpture.alt}
          className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain drop-shadow-2xl"
          loading="lazy"
        />
      </div>
      
      {/* Subtle overlay for better contrast */}
      <div className="absolute inset-0 bg-black/5 z-0" />
      
      {/* Sculpture number indicator */}
      <div className="absolute bottom-8 left-8 text-black/60 font-inter text-sm tracking-widest z-20">
        {String(index + 1).padStart(2, '0')} / {String(5).padStart(2, '0')}
      </div>
    </section>
  );
};

export default SculptureSection;