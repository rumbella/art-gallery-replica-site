import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const paintings = [
  { id: 1, src: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?w=400&h=400&fit=crop", alt: "Painting 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?w=400&h=400&fit=crop", alt: "Painting 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?w=600&h=600&fit=crop", alt: "Painting 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?w=400&h=400&fit=crop", alt: "Painting 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?w=400&h=400&fit=crop", alt: "Painting 5" },
];

const Painting = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="flex items-center gap-3 text-white backdrop-blur-sm bg-black/20 px-6 py-3 rounded-full hover:bg-black/30 transition-all duration-300"
        >
          <span className="text-xl font-light">⟵</span>
          <span className="text-sm font-light tracking-wider">BACK</span>
        </Link>
      </div>

      <div className="mx-auto">
        <article className="overflow-hidden">
          <div className="masonry-grid">
            {paintings.map((painting) => (
              <div key={painting.id} className="masonry-grid-item">
                <Dialog>
                  <DialogTrigger asChild>
                    <img src={painting.src} alt={painting.alt} className="w-full h-auto block cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="p-0 border-0 max-w-none w-auto h-auto">
                    <img src={painting.src.replace('w=400', 'w=1200').replace('h=400', 'h=1200')} alt={painting.alt} className="max-h-[90vh] max-w-[90vw] object-contain" />
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default Painting;
