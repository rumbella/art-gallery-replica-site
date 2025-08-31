
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 p-6">
      <div className="flex justify-between items-start">
        <div className="text-white">
          <h1 className="text-sm font-light tracking-wider">GIACOMO PIUSSI</h1>
          <p className="text-xs opacity-60 mt-1">pittore</p>
        </div>
        
        <div className="text-white flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Link to="/sculpture" className="text-sm font-light tracking-wider hover:opacity-80 transition-opacity">
            SCULPTURE
          </Link>
          <Link to="/painting" className="text-sm font-light tracking-wider hover:opacity-80 transition-opacity">
            PAINTING
          </Link>
          <Link to="/exhibition" className="text-sm font-light tracking-wider hover:opacity-80 transition-opacity">
            EXHIBITION
          </Link>
          <Link to="/gallery" className="text-sm font-light tracking-wider hover:opacity-80 transition-opacity">
            GALLERY
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
