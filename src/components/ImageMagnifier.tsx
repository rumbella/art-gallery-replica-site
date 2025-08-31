import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ImageMagnifierProps {
  src: string;
  highResSrc: string;
  alt: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

const LENS_SIZE = 200;
const ZOOM_LEVEL = 2.5;

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
  src,
  highResSrc,
  alt,
  className,
  onClick,
}) => {
  const isMobile = useIsMobile();
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    setCursorPosition({ x, y });

    const bgX = -((x / width) * 100 * ZOOM_LEVEL - (LENS_SIZE / 2 / width) * 100) + '%';
    const bgY = -((y / height) * 100 * ZOOM_LEVEL - (LENS_SIZE / 2 / height) * 100) + '%';

    setPosition({ x: bgX, y: bgY });
  };

  if (isMobile) {
    return <img src={src} alt={alt} className={className} />;
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        className={className}
        onMouseMove={handleMouseMove}
        onClick={onClick}
      />

      {showMagnifier && (
        <div
          style={{
            position: 'absolute',
            left: `${cursorPosition.x - LENS_SIZE / 2}px`,
            top: `${cursorPosition.y - LENS_SIZE / 2}px`,
            width: `${LENS_SIZE}px`,
            height: `${LENS_SIZE}px`,
            pointerEvents: 'none',
            border: '2px solid white',
            borderRadius: '50%',
            backgroundImage: `url(${highResSrc})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${100 * ZOOM_LEVEL}%`,
            backgroundPosition: `${position.x} ${position.y}`,
            zIndex: 100,
          }}
        />
      )}
    </div>
  );
};

export default ImageMagnifier;
