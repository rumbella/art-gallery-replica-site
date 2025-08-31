import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const sculptures = [
  { id: 1, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651070/giacomo/tFdPgitxQ6sfC6HnLSmnan5C4_1.jpg", alt: "Sculpture 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop", alt: "Sculpture 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=600&fit=crop", alt: "Sculpture 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop", alt: "Sculpture 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop", alt: "Sculpture 5" },
];

const Sculpture = () => {
  return (
    <div className="min-h-screen bg-custom-bg text-foreground overflow-hidden">
      <div className="flex w-full h-screen overflow-x-auto snap-x snap-mandatory">
        {sculptures.map((sculpture) => (
          <div key={sculpture.id} className="flex-shrink-0 w-full h-full snap-center flex items-center justify-center">
            <img
              src={sculpture.src.replace('w=400', 'w=1200').replace('h=400', 'h=1200')}
              alt={sculpture.alt}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
      <div className="fixed bottom-8 right-8 text-white font-inter text-sm tracking-wider vertical-text">
        KEEP SCROLLING
      </div>
    </div>
  );
};

export default Sculpture;
