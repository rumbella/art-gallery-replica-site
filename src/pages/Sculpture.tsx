import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useImageColor } from '@/hooks/useImageColor';
import { useOverlay } from '@/context/OverlayContext';
import { X } from 'lucide-react';

const sculptures = [
  { id: 1, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651070/giacomo/tFdPgitxQ6sfC6HnLSmnan5C4_1.jpg", alt: "Sculpture 1" },
  { id: 2, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651073/giacomo/3WZTlsJaYlPj3lWgScdi6gTiw_1.jpg", alt: "Sculpture 2" },
  { id: 3, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651070/giacomo/8IsKshDpc376UAyKxYIKY9m1E0_1.jpg", alt: "Sculpture 3" },
  { id: 4, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651070/giacomo/EtQsdQPjVZuiB9PBy1nBYAMnp8_1.jpg", alt: "Sculpture 4" },
  { id: 5, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651073/giacomo/7jWaJ7geij3fuRD3XSAmp6zsOcc_1.jpg", alt: "Sculpture 5" },
];

const Sculpture = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const { color: bgColor } = useImageColor(selectedImage?.src || '');
  const { setIsOverlayVisible: setGlobalOverlayVisible } = useOverlay();

  useEffect(() => {
    if (selectedImage) {
      setGlobalOverlayVisible(true);
      const timer = setTimeout(() => setIsOverlayVisible(true), 10);
      return () => clearTimeout(timer);
    }
  }, [selectedImage, setGlobalOverlayVisible]);

  const openFullScreen = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    window.scrollTo(0, 0);
  };

  const closeFullScreen = () => {
    setIsOverlayVisible(false);
    setGlobalOverlayVisible(false);
    setTimeout(() => {
      setSelectedImage(null);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-custom-bg text-foreground">
      <div className="mx-auto">
        <article className="overflow-hidden">
          <div className="masonry-grid">
            {sculptures.map((sculpture) => (
              <div key={sculpture.id} onClick={() => openFullScreen(sculpture)} className="p-1">
                <img src={sculpture.src} alt={sculpture.alt} className="w-full h-auto block cursor-pointer rounded-[22px]" />
              </div>
            ))}
          </div>
        </article>
      </div>

      {selectedImage && createPortal(
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
            className="fixed top-6 right-6 z-50 backdrop-blur-sm bg-black/20 hover:bg-black/30 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <img
            onClick={(e) => e.stopPropagation()}
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-full max-w-full object-contain"
          />
        </div>,
        document.body
      )}
    </div>
  );
};

export default Sculpture;
