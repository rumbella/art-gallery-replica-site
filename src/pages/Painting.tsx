import React, { useState, useEffect } from 'react';
import { useImageColor } from '@/hooks/useImageColor';

const paintings = [
  { id: 1, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651068/giacomo/9go4ianxzSirNb6c4wzcMKU5no_1.jpg", alt: "Painting 1" },
  { id: 2, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651067/giacomo/8NcnyIRKFg0KJoKl96yQu40WyQ_1.jpg", alt: "Painting 2" },
  { id: 3, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651067/giacomo/7a33sCvanjbV33Fq5u4YSFCWEM_1.jpg", alt: "Painting 3" },
  { id: 4, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651067/giacomo/vNGFLgUO1K7RX3hfwowNigVUss8_1.jpg", alt: "Painting 4" },
  { id: 5, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651065/giacomo/AZGZCwAmOIoHjQEFs0edh9JkHKM_1.jpg", alt: "Painting 5" },
  { id: 6, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651065/giacomo/42QhPe4M4cX6FlbdIZ8BVTQU58_1.jpg", alt: "Painting 6" },
  { id: 7, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651064/giacomo/uLNXhS37mUS7LplNQCO8kgHM0_1.jpg", alt: "Painting 7" },
  { id: 8, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651064/giacomo/cl7K95ROqhfpkgMVCJZ73fQ_1.jpg", alt: "Painting 8" },
  { id: 9, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651063/giacomo/QvZYknNqFkUUWIgD4QrCAyUWmlE_1.jpg", alt: "Painting 9" },
  { id: 10, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651063/giacomo/HF0aOIsNDXyW4P9GFycy9CHPLw_1.jpg", alt: "Painting 10" },
  { id: 11, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651063/giacomo/bQfQ1wMES0d2sVHFsTmIe4jtEs_1.jpg", alt: "Painting 11" },
  { id: 12, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651062/giacomo/0D13508jgPYoNhh7KZbGSd87QIo_1.jpg", alt: "Painting 12" },
  { id: 13, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651062/giacomo/UtDTQUN26D6PdWFJ2dL9WowQURI_1.jpg", alt: "Painting 13" },
  { id: 14, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651046/giacomo/0Obh0hy6R0I4j3flRGqLAqZk_1.jpg", alt: "Painting 14" },
];

const Painting = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const { color: bgColor } = useImageColor(selectedImage?.src || '');

  useEffect(() => {
    if (selectedImage) {
      // Delay to allow the component to mount before transitioning
      const timer = setTimeout(() => setIsOverlayVisible(true), 10);
      return () => clearTimeout(timer);
    }
  }, [selectedImage]);

  const openFullScreen = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closeFullScreen = () => {
    setIsOverlayVisible(false);
    // Delay to allow the transition to finish before unmounting
    setTimeout(() => {
      setSelectedImage(null);
    }, 500); // This duration should match the transition duration
  };

  return (
    <div className="min-h-screen bg-custom-bg text-foreground">
      <div className="mx-auto">
        <article className="overflow-hidden">
          <div className="masonry-grid">
            {paintings.map((painting) => (
              <div key={painting.id} onClick={() => openFullScreen(painting)}>
                <img src={painting.src} alt={painting.alt} className="w-full h-auto block cursor-pointer" />
              </div>
            ))}
          </div>
        </article>
      </div>

      {selectedImage && (
        <div
          onClick={closeFullScreen}
          className={`fixed inset-0 z-50 flex items-center justify-center transition-transform duration-500 ease-in-out ${
            isOverlayVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ backgroundColor: bgColor }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeFullScreen();
            }}
            className="absolute top-4 right-4 text-white text-2xl z-10"
          >
            &times;
          </button>
          <img
            onClick={(e) => e.stopPropagation()}
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Painting;
