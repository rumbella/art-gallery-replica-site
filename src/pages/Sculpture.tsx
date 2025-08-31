import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const sculptures = [
  { id: 1, src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop", alt: "Sculpture 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop", alt: "Sculpture 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=600&fit=crop", alt: "Sculpture 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop", alt: "Sculpture 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop", alt: "Sculpture 5" },
];

const Sculpture = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto">
        <article className="overflow-hidden">
          <div className="masonry-grid">
            {sculptures.map((sculpture) => (
              <div key={sculpture.id} className="masonry-grid-item">
                <Dialog>
                  <DialogTrigger asChild>
                    <img src={sculpture.src} alt={sculpture.alt} className="w-full h-auto block cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="p-0 border-0 max-w-none w-auto h-auto">
                    <img src={sculpture.src.replace('w=400', 'w=1200').replace('h=400', 'h=1200')} alt={sculpture.alt} className="max-h-[90vh] max-w-[90vw] object-contain" />
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

export default Sculpture;
