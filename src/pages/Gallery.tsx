import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-2 text-white hover:opacity-80 transition-opacity min-w-[120px] justify-center"
          style={{
            background: 'rgba(255, 255, 255, 0.12)',
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(7.9px)',
            WebkitBackdropFilter: 'blur(7.9px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <ArrowLeft className="mr-2 w-4 h-4 text-white" />
          <span className="font-bold text-lg text-white">BACK</span>
        </Link>
      </div>

      <div className="mx-auto">
        
        {/* Main gallery container */}
        <article className="overflow-hidden">
          {/* Row 1: 4 items at 25% each on large screens, 50% on small */}
          <div className="float-left w-1/2 lg:w-1/4">
            <div className="vinyl-item">
              <img src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop" alt="Artwork 1" />
            </div>
          </div>
          <div className="float-left w-1/2 lg:w-1/4">
            <div className="vinyl-item">
              <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop" alt="Artwork 2" />
            </div>
          </div>
          <div className="float-left w-1/2 lg:w-1/4">
            <div className="vinyl-item">
              <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop" alt="Artwork 3" />
            </div>
          </div>
          <div className="float-left w-1/2 lg:w-1/4">
            <div className="vinyl-item">
              <img src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop" alt="Artwork 4" />
            </div>
          </div>
          
          {/* Row 2: Larger piece takes 50% width, smaller takes 25% on large screens */}
          <div className="float-left w-1/2">
            <div className="vinyl-item">
              <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop" alt="Featured Artwork" />
            </div>
          </div>
          <div className="float-left w-1/2 lg:w-1/4">
            <div className="vinyl-item">
              <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop" alt="Artwork 5" />
            </div>
          </div>
          
          {/* Row 3: Mixed sizes */}
          <div className="float-left w-full lg:w-1/4">
            <div className="vinyl-item">
              <img src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop" alt="Artwork 6" />
            </div>
          </div>
          <div className="float-left w-1/2 lg:w-1/4">
            <div className="vinyl-item">
              <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop" alt="Artwork 7" />
            </div>
          </div>
          <div className="float-left w-1/2 lg:w-1/4">
            <div className="vinyl-item">
              <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop" alt="Artwork 8" />
            </div>
          </div>
          
          {/* Complex section with stacked items */}
          <div className="float-left w-full md:w-1/2 lg:w-1/4">
            <div className="vinyl-item">
              <img src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop" alt="Artwork 9" />
            </div>
            <div className="vinyl-item">
              <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop" alt="Artwork 10" />
            </div>
          </div>
          
          {/* Another complex section */}
          <div className="float-left w-full md:w-1/2 lg:w-1/4">
            <div className="float-left w-full">
              <div className="vinyl-item">
                <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop" alt="Artwork 11" />
              </div>
            </div>
            <div className="float-left w-full">
              <div className="float-left w-1/2">
                <div className="vinyl-item">
                  <img src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop" alt="Artwork 12" />
                </div>
              </div>
              <div className="float-left w-1/2">
                <div className="vinyl-item">
                  <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop" alt="Artwork 13" />
                </div>
              </div>
              <div className="float-left w-1/2">
                <div className="vinyl-item">
                  <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=200&h=200&fit=crop" alt="Artwork 14" />
                </div>
              </div>
              <div className="float-left w-1/2">
                <div className="vinyl-item">
                  <img src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop" alt="Artwork 15" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Last large item */}
          <div className="float-left w-full lg:w-1/2">
            <div className="vinyl-item">
              <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=800&fit=crop" alt="Featured Large Artwork" />
            </div>
          </div>
          
          {/* Clear floats */}
          <div className="clear-both"></div>
        </article>
      </div>
    </div>
  );
};

export default Gallery;
