// components/HeroSection.jsx
import React from 'react';
import * as Icons from 'lucide-react';
import { KEY_STATS } from './constants';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-black to-teal-800/20"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-500 to-teal-100 bg-clip-text text-transparent">
              C4 SUPER TREES
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white-200 mb-4">
            The Future of Trees Powered by C4 Photosynthesis
          </p>
          <p className="text-lg text-white-300 max-w-2xl mx-auto">
            Long-term R&D for maximum carbon removal efficiency
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {KEY_STATS.map((stat, index) => {
            const IconComponent = Icons[stat.icon];
            return (
              <div key={index} className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                <div className="flex items-center space-x-3 mb-3">
                  <IconComponent className="w-8 h-8 text-teal-400" />
                  <span className="text-3xl font-bold text-white-400">{stat.value}</span>
                </div>
                <h3 className="text-lg font-semibold text-white-100 mb-2">{stat.title}</h3>
                <p className="text-teal-200 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;