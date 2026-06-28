import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useImageColor } from '@/hooks/useImageColor';
import { useOverlay } from '@/context/OverlayContext';
import { X } from 'lucide-react';

const sculptures = [
  { id: 1, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652757/DSC_4027_cf3fkz.jpg", alt: "Sculpture 1" },
  { id: 2, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652757/bd2401a8-1b63-4d32-96f1-d47690361977_zhuq2q.jpg", alt: "Sculpture 2" },
  { id: 3, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652756/DSC_8500_qzhhv1.jpg", alt: "Sculpture 3" },
  { id: 4, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652756/DSC_8594_scieud.jpg", alt: "Sculpture 4" },
  { id: 5, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652756/spaghetti_dwfrku.jpg", alt: "Sculpture 5" },
  { id: 6, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652756/IMG_1123_s50ysv.jpg", alt: "Sculpture 6" },
  { id: 7, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652756/underwood_wj1ld8.jpg", alt: "Sculpture 7" },
  { id: 8, src: "https://res.cloudinary.com/dg9st86xi/image/upload/v1782652756/DSC_0001_pgdyoi.jpg", alt: "Sculpture 8" },
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

export default Sculpture;
