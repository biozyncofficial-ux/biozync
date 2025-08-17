import React from 'react';
import { Leaf, ChevronDown } from 'lucide-react';
import C3TreeStats from './C3TreeStats';

const HeroSection = ({ onCalculateClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
              C3 SUPER
            </span>
            <br />
            <span className="text-white drop-shadow-lg">TREES</span>
          </h1>
          
          <p className="text-lg md:text-xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Photosynthetic optimization for near-term climate impact. Enhanced trees that recycle photorespiration byproducts into sugars, achieving up to 30% more carbon capture.
          </p>
        </div>

        {/* Key Stats */}
        <C3TreeStats />

        {/* CTA */}
        <div className="space-y-4">
          <button 
            onClick={onCalculateClick}
            className="bg-gradient-to-r from-teal-500 to-emerald-500 px-8 py-4 rounded-full font-semibold text-black hover:scale-105 transition-transform duration-300 shadow-lg shadow-teal-500/40"
            aria-label="Calculate environmental impact of C3 Super Trees"
          >
            Calculate Impact
          </button>
          <div className="flex justify-center">
            <ChevronDown className="w-8 h-8 text-teal-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;