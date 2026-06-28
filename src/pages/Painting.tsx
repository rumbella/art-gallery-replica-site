import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useImageColor } from '@/hooks/useImageColor';
import { useOverlay } from '@/context/OverlayContext';
import { X } from 'lucide-react';

const paintings = [
  { id: 1, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652783/IMG_5607_iansk0.jpg", alt: "Painting 1" },
  { id: 2, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652782/IMG_6800_nlovla.jpg", alt: "Painting 2" },
  { id: 3, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652781/IMG_7839_wyzh9z.jpg", alt: "Painting 3" },
  { id: 4, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652782/IMG_6806_yrnoju.jpg", alt: "Painting 4" },
  { id: 5, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652781/IMG_8010_csrf0s.jpg", alt: "Painting 5" },
  { id: 6, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652780/IMG_8554_kfqpap.jpg", alt: "Painting 6" },
  { id: 7, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652780/IMG_8792_gcgrwz.jpg", alt: "Painting 7" },
  { id: 8, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652780/IMG_8778_a8nvwt.jpg", alt: "Painting 8" },
  { id: 9, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652780/IMG_8946_toxuml.jpg", alt: "Painting 9" },
];

const Painting = () => {
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
            {paintings.map((painting) => (
              <div key={painting.id} onClick={() => openFullScreen(painting)} className="p-1">
                <img src={painting.src} alt={painting.alt} className="w-full h-auto block cursor-pointer rounded-[22px]" />
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
            className="fixed top-6 right-6 z-50 flex items-center gap-2 text-white hover:opacity-80 transition-all duration-300"
          >
            {/* Icon container - completely round */}
            <div className="backdrop-blur-sm bg-black/20 hover:bg-black/30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300">
              <X className="w-4 h-4 text-white" />
            </div>
            
            {/* Text container - completely round */}
            <div className="backdrop-blur-sm bg-black/20 hover:bg-black/30 px-4 py-2 rounded-full transition-all duration-300">
              <span className="text-sm font-light tracking-wider">CLOSE</span>
            </div>
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

export default Painting;
