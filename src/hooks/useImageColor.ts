import { useState, useEffect } from 'react';

interface RGB {
  r: number;
  g: number;
  b: number;
}

const extractDominantColor = (img: HTMLImageElement): Promise<string> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      resolve('#ccc');
      return;
    }

    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const colorCounts: { [key: string]: number } = {};
    
    // Sample every 10th pixel for performance
    for (let i = 0; i < data.length; i += 40) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const alpha = data[i + 3];
      
      if (alpha > 128) { // Skip transparent pixels
        const color = `${Math.floor(r/10)*10},${Math.floor(g/10)*10},${Math.floor(b/10)*10}`;
        colorCounts[color] = (colorCounts[color] || 0) + 1;
      }
    }

    // Find most common color
    let maxCount = 0;
    let dominantColor = '185,187,204'; // fallback to custom-bg equivalent
    
    for (const color in colorCounts) {
      if (colorCounts[color] > maxCount) {
        maxCount = colorCounts[color];
        dominantColor = color;
      }
    }

    resolve(`rgb(${dominantColor})`);
  });
};

export const useImageColor = (src: string) => {
  const [color, setColor] = useState<string>('#ccc');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = async () => {
      try {
        const dominantColor = await extractDominantColor(img);
        setColor(dominantColor);
      } catch (error) {
        console.warn('Could not extract color from image:', error);
        setColor('#ccc');
      } finally {
        setLoading(false);
      }
    };

    img.onerror = () => {
      setColor('#ccc');
      setLoading(false);
    };

    img.src = src;
  }, [src]);

  return { color, loading };
};