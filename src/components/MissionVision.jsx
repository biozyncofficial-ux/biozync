import React, { useState, useEffect } from "react";
import { Target, Eye, Globe, Leaf, Zap } from "lucide-react";
import globeVideo from "../assets/globe.mp4"; // ✅ Import your local video

const MissionVision = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSectionHover = (section) => {
    setActiveSection(section);
  };

  const handleSectionLeave = () => {
    setActiveSection(null);
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white overflow-hidden flex items-center justify-center">
      
      {/* Fullscreen Globe Video with Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: `brightness(0.4) contrast(1.2) ${activeSection ? 'blur(2px)' : 'blur(0px)'}`,
        }}
      >
        <source src={globeVideo} type="video/mp4" /> {/* ✅ Local video source */}
      </video>

      {/* Dynamic Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          activeSection === "mission"
            ? "bg-gradient-to-br from-emerald-900/80 to-black/60"
            : activeSection === "vision"
            ? "bg-gradient-to-br from-blue-900/80 to-black/60"
            : "bg-black/50"
        }`}
      ></div>

      {/* Mission - Top Left */}
      <div
        className={`absolute top-16 left-10 max-w-md text-right z-10 transform transition-all duration-700 ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } ${activeSection === "mission" ? "scale-110" : "scale-100"}`}
        onMouseEnter={() => handleSectionHover("mission")}
        onMouseLeave={handleSectionLeave}
      >
        <div className="group cursor-pointer">
          <div className="flex items-center justify-end space-x-4 mb-6">
            <div
              className={`transform transition-all duration-500 ${
                activeSection === "mission" ? "rotate-12 scale-110" : "rotate-0 scale-100"
              }`}
            >
              <span className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-400/30">
                <Target className="w-8 h-8 text-white" />
              </span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Mission
            </h2>
          </div>
          <p className="text-gray-200 text-lg leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
            To engineer bio-intelligent systems that regenerate ecosystems,
            reduce environmental stress, and drive the transition to a circular,
            regenerative economy.
          </p>
          <div className="flex justify-end space-x-3 opacity-60">
            <Leaf className="w-5 h-5 text-emerald-400" />
            <Zap className="w-5 h-5 text-teal-400" />
            <Globe className="w-5 h-5 text-cyan-400" />
          </div>
        </div>
      </div>

      {/* Vision - Bottom Right */}
      <div
        className={`absolute bottom-16 right-10 max-w-md text-left z-10 transform transition-all duration-700 delay-300 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } ${activeSection === "vision" ? "scale-110" : "scale-100"}`}
        onMouseEnter={() => handleSectionHover("vision")}
        onMouseLeave={handleSectionLeave}
      >
        <div className="group cursor-pointer">
          <div className="flex items-center space-x-4 mb-6">
            <div
              className={`transform transition-all duration-500 ${
                activeSection === "vision" ? "rotate-12 scale-110" : "rotate-0 scale-100"
              }`}
            >
              <span className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold bg-gradient-to-br from-blue-400 to-cyan-600 shadow-lg shadow-blue-400/30">
                <Eye className="w-8 h-8 text-white" />
              </span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Vision
            </h2>
          </div>
          <p className="text-gray-200 text-lg leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
            To build a world where nature and technology evolve together,
            reversing climate collapse and creating a planet where life thrives.
          </p>
          <div className="flex space-x-3 opacity-60">
            <Globe className="w-5 h-5 text-blue-400" />
            <Leaf className="w-5 h-5 text-cyan-400" />
            <Zap className="w-5 h-5 text-teal-400" />
          </div>
        </div>
      </div>
          <div
            className={`absolute inset-4 rounded-full border transition-all duration-1000 ${
              activeSection === "mission"
                ? "border-emerald-400/40"
                : activeSection === "vision"
                ? "border-blue-400/40"
                : "border-teal-400/20"
            }`}
          ></div>
          <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2">
          </div>
   

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default MissionVision;
