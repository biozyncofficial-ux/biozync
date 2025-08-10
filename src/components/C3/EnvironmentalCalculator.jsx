import React, { useState } from 'react';

const EnvironmentalCalculator = () => {
  const [treeCount, setTreeCount] = useState(1000);

  // Environmental impact calculations
  const environmentalImpact = {
    co2: Math.round(treeCount * 30), // 30 kg CO₂ per C3 Super Tree annually
    o2: Math.round(treeCount * 22), // Approximately 22 kg O₂ per tree annually
    equivalentCars: Math.round(treeCount * 30 / 4500) // Average car emits ~4.5 tons CO₂ per year
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="px-6 py-12">
      <div className="max-w-6xl mx-auto bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 shadow-lg shadow-teal-500/20">
        <h2 className="text-3xl font-bold text-center mb-8 text-teal-400">
          🌍 Environmental Impact Calculator
        </h2>
        <div className="mb-6">
          <label className="block text-lg mb-2 text-teal-300">Number of Trees: {treeCount.toLocaleString()}</label>
          <input
            type="range"
            min="1"
            max="10001"
            value={treeCount}
            onChange={(e) => setTreeCount(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #14b8a6 0%, #14b8a6 ${(treeCount / 10001) * 100}%, #374151 ${(treeCount / 10001) * 100}%, #374151 100%)`
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 text-center shadow-lg shadow-teal-500/20">
            <h3 className="text-teal-400 text-xl font-bold mb-4">Annual CO₂ Capture</h3>
            <p className="text-3xl font-bold text-emerald-400">{formatNumber(environmentalImpact.co2)} kg</p>
          </div>
          <div className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 text-center shadow-lg shadow-teal-500/20">
            <h3 className="text-teal-400 text-xl font-bold mb-4">Annual O₂ Production</h3>
            <p className="text-3xl font-bold text-emerald-400">{formatNumber(environmentalImpact.o2)} kg</p>
          </div>
          <div className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 text-center shadow-lg shadow-teal-500/20">
            <h3 className="text-teal-400 text-xl font-bold mb-4">Equivalent Cars Removed</h3>
            <p className="text-3xl font-bold text-emerald-400">{environmentalImpact.equivalentCars}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalCalculator;