import React from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const sculptures = [
  { id: 1, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651070/giacomo/tFdPgitxQ6sfC6HnLSmnan5C4_1.jpg", alt: "Sculpture 1" },
  { id: 2, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651073/giacomo/3WZTlsJaYlPj3lWgScdi6gTiw_1.jpg", alt: "Sculpture 2" },
  { id: 3, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651070/giacomo/8IsKshDpc376UAyKxYIKY9m1E0_1.jpg", alt: "Sculpture 3" },
  { id: 4, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651070/giacomo/EtQsdQPjVZuiB9PBy1nBYAMnp8_1.jpg", alt: "Sculpture 4" },
  { id: 5, src: "https://res.cloudinary.com/thinkdigital/image/upload/v1756651073/giacomo/7jWaJ7geij3fuRD3XSAmp6zsOcc_1.jpg", alt: "Sculpture 5" },
];

const Sculpture = () => {
  return (
    <div className="min-h-screen bg-custom-bg text-foreground overflow-y-auto snap-y snap-mandatory">
      <div className="flex flex-col w-full">
        {sculptures.map((sculpture) => (
          <div key={sculpture.id} className="flex-shrink-0 w-full h-screen snap-center flex items-center justify-center">
            <img
              src={sculpture.src}
              alt={sculpture.alt}
              className="h-full w-auto object-cover"
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
