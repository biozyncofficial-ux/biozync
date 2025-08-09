import React, { useState, useEffect } from 'react';

const SolutionsSlider = () => {
  const solutions = [
    { title: "Bioengineered Carbon-Capturing Trees", description: "Genetically enhanced trees that absorb CO₂ faster and thrive in challenging environments." },
    { title: "Verified Tree-Based Carbon Credits", description: "Scientifically validated carbon sequestration backed by transparent field data and standards." },
    { title: "Regenerative Reforestation", description: "Restoring degraded ecosystems using native, fast-growing, high-impact species." },
    { title: "Climate-Resilient Tree Design", description: "Engineered trees that grow faster, restore land, and support biodiversity and local livelihoods." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % solutions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [solutions.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative approaches to tackle climate change and build a sustainable future
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 backdrop-blur-sm border border-teal-500/20">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-500 transform ${
                    index === currentIndex
                      ? 'bg-gradient-to-br from-teal-500/20 to-emerald-500/20 scale-105 shadow-lg shadow-teal-500/25'
                      : 'bg-gray-800/50 hover:bg-gray-700/50'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 text-sm">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSlider;
