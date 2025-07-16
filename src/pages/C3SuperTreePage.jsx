import React, { useState, useMemo } from 'react';

function C3TreePage() {
  const [treeCount, setTreeCount] = useState(1000);

  const TREE_CONSTANTS = {
    NORMAL_CO2_PER_TREE: 21, // kg/year
    NORMAL_O2_PER_TREE: 118, // kg/year
    C3_MULTIPLIER: 1, // Baseline
    GROWTH_RATE_MULTIPLIER: 1, // Normal growth
    WATER_EFFICIENCY: 1 // Standard
  };

  const environmentalImpact = useMemo(() => {
    const normalCO2 = treeCount * TREE_CONSTANTS.NORMAL_CO2_PER_TREE;
    const normalO2 = treeCount * TREE_CONSTANTS.NORMAL_O2_PER_TREE;

    return {
      co2: normalCO2,
      o2: normalO2,
      waterUsage: treeCount * 500, // liters/year estimate
      equivalentCars: Math.round(normalCO2 / 4600)
    };
  }, [treeCount]);

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-green-50">
      <style jsx>{`
        :root {
          --primary-green: #00C06A;
          --secondary-green: #00E68F;
          --text-primary: #E6FFFA;
          --text-secondary: #B3F5E6;
          --glass-bg: rgba(0, 0, 0, 0.7);
          --glass-border: rgba(0, 192, 106, 0.15);
          --gradient-primary: linear-gradient(135deg, #00C06A 0%, #00E68F 100%);
        }
        .glass-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        .gradient-primary {
          background: var(--gradient-primary);
        }
      `}</style>

      {/* Hero */}
      <header className="px-6 py-12 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-8">
            🌳 C3 Native Trees
          </h1>
          <img
            src="./assets/c3tree.jpg"
            alt="C3 Trees in natural forest"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mb-6"
          />
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
            <strong>C3 Trees</strong> form the backbone of Earth's ecosystems, ensuring biodiversity, 
            soil stability, and carbon sequestration. Perfect for restoring traditional forests and 
            supporting a rich web of life.
          </p>
        </div>
      </header>

      {/* Advantages */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            🌱 Key Advantages of C3 Trees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">🌍 Biodiversity Support</h3>
              <p className="text-green-100">Essential habitat providers, supporting diverse flora & fauna.</p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">🌦️ Climate Adaptability</h3>
              <p className="text-green-100">Thrive in varied climates with resilience to seasonal changes.</p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">🌳 Long-Term Stability</h3>
              <p className="text-green-100">Maintain ecosystem balance through slow, steady growth.</p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-green-400 mb-4">🛡️ Soil Health</h3>
              <p className="text-green-100">Prevent erosion, enrich soil, and promote nutrient cycling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto glass-card rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-400">
            🌍 Environmental Impact Calculator
          </h2>
          <div className="mb-6">
            <label className="block text-lg mb-2">Number of Trees: {treeCount.toLocaleString()}</label>
            <input
              type="range"
              min="1"
              max="10001"
              value={treeCount}
              onChange={(e) => setTreeCount(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <h3 className="text-green-400 text-xl font-bold mb-4">Annual CO₂ Capture</h3>
              <p className="text-3xl font-bold">{formatNumber(environmentalImpact.co2)} kg</p>
            </div>
            <div className="glass-card p-6 text-center">
              <h3 className="text-green-400 text-xl font-bold mb-4">Annual O₂ Production</h3>
              <p className="text-3xl font-bold">{formatNumber(environmentalImpact.o2)} kg</p>
            </div>
            <div className="glass-card p-6 text-center">
              <h3 className="text-green-400 text-xl font-bold mb-4">Equivalent Cars Removed</h3>
              <p className="text-3xl font-bold">{environmentalImpact.equivalentCars}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            🌳 Applications
          </h2>
          <div className="glass-card rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>🏞️ <strong>Forest Restoration:</strong> Bring back degraded ecosystems.</div>
            <div>🏘️ <strong>Community Forestry:</strong> Promote local sustainability projects.</div>
            <div>🐾 <strong>Wildlife Corridors:</strong> Enhance biodiversity connectivity.</div>
            <div>🏡 <strong>Urban Greening:</strong> Increase green cover in cities.</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 text-center">
        <div className="glass-card rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-green-400 mb-4">Plant C3 Trees, Secure the Future</h3>
          <button className="gradient-primary text-black font-bold px-10 py-4 rounded-full hover:scale-105 transition">
            Start Planting Now
          </button>
        </div>
      </footer>
    </div>
  );
}

export default C3TreePage;
