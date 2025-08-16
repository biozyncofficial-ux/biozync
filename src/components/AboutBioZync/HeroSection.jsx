import React from 'react';
import { Play, Pause, ArrowRight, Leaf } from 'lucide-react';

const HeroSection = ({ isVideoPlaying, setIsVideoPlaying }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background */}
<div className="absolute inset-0 opacity-20">
  {/* Soft Green Glow 1 */}
  <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400 to-green-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
  
  {/* Soft Lime Glow */}
  <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
  
  {/* Soft Teal-Lime Glow */}
  <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-gradient-to-r from-teal-400 to-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
</div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 backdrop-blur-sm mb-6">
            <Leaf className="mr-2 text-green-400" size={20} />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Regenerating Our Planet
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            About{' '}
            <span className="bg-gradient-to-r from-teal-400 via-violet-400 to-teal-300 bg-clip-text text-transparent">
              Biozync
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Biozync is a climate biotech company pioneering a radical approach to environmental restoration.
            We're not just fighting climate change we're solving it at the source by reimagining nature itself.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl font-semibold text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 transform hover:-translate-y-1">
              <span className="flex items-center">
                Explore Our Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </span>
            </button>

            <button
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300"
            >
              <span className="flex items-center">
                {isVideoPlaying ? <Pause size={18} /> : <Play size={18} />}
                <span className="ml-2">Watch Demo</span>
              </span>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            {isVideoPlaying ? (
              <div className="aspect-video bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                <div className="text-center">
                  <Play className="mx-auto mb-4 text-white" size={48} />
                  <p className="text-white text-lg">Demo Video Playing...</p>
                </div>
              </div>
            ) : (
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
                alt="Biozync Innovation"
                className="w-full h-auto"
              />
            )}
            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold text-white shadow-lg">
              Est. 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
