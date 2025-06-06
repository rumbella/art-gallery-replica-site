
import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-start">
        <div className="text-white">
          <h1 className="text-sm font-light tracking-wider">GIACOMO PIUSSI</h1>
          <p className="text-xs opacity-60 mt-1">pittore</p>
        </div>
        
        <div className="text-white">
         
           <button className="flex items-center text-white text-sm font-light tracking-wider hover:opacity-80 transition-opacity">
          MENU
          <Menu className="ml-2 w-4 h-4" />
        </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
