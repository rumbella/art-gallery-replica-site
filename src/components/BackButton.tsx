import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BackButton = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="fixed top-6 left-6 z-50">
      <Link
        to="/"
        className="flex items-center gap-3 text-white backdrop-blur-sm bg-black/20 px-6 py-3 rounded-full hover:bg-black/30 transition-all duration-300"
      >
        <span className="text-xl font-light">⟵</span>
        <span className="text-sm font-light tracking-wider">BACK</span>
      </Link>
    </div>
  );
};

export default BackButton;
