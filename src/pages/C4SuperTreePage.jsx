import React, { useState, useMemo } from 'react';

function C4SuperTreePage() {
  const [treeCount, setTreeCount] = useState(1000);

  // Constants for tree environmental impact
  const TREE_CONSTANTS = {
    NORMAL_CO2_PER_TREE: 21, // kg/year
    NORMAL_O2_PER_TREE: 118, // kg/year
    C4_MULTIPLIER: 2.5, // More realistic multiplier for C4 efficiency
    GROWTH_RATE_MULTIPLIER: 1.8, // C4 trees grow faster
    WATER_EFFICIENCY: 3 // C4 trees use water more efficiently
  };

  // Calculate environmental impact with useMemo for performance
  const environmentalImpact = useMemo(() => {
    const normalCO2 = treeCount * TREE_CONSTANTS.NORMAL_CO2_PER_TREE;
    const normalO2 = treeCount * TREE_CONSTANTS.NORMAL_O2_PER_TREE;
    const c4CO2 = normalCO2 * TREE_CONSTANTS.C4_MULTIPLIER;
    const c4O2 = normalO2 * TREE_CONSTANTS.C4_MULTIPLIER;
    
    // Additional calculations
    const co2Difference = c4CO2 - normalCO2;
    const o2Difference = c4O2 - normalO2;
    const waterSaved = treeCount * 500 * (TREE_CONSTANTS.WATER_EFFICIENCY - 1); // liters/year
    const equivalentCars = Math.round(co2Difference / 4600); // Average car emits 4.6 tons CO2/year
    
    return {
      normal: { co2: normalCO2, o2: normalO2 },
      c4: { co2: c4CO2, o2: c4O2 },
      difference: { co2: co2Difference, o2: o2Difference },
      waterSaved,
      equivalentCars
    };
  }, [TREE_CONSTANTS.C4_MULTIPLIER, TREE_CONSTANTS.NORMAL_CO2_PER_TREE, TREE_CONSTANTS.NORMAL_O2_PER_TREE, TREE_CONSTANTS.WATER_EFFICIENCY, treeCount]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toLocaleString();
  };

  const getTreeCountDescription = () => {
    if (treeCount < 100) return "Small grove";
    if (treeCount < 1000) return "Community forest";
    if (treeCount < 5000) return "Small forest";
    if (treeCount < 10000) return "Large forest";
    return "Massive reforestation project";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-teal-50">
      <style jsx>{`
        :root {
          --primary-teal: #00C095;
          --secondary-teal: #00E6B0;
          --accent-teal: #00A085;
          --dark-teal: #008B75;
          --light-teal: #4DDBBA;
          --text-primary: #E6FFFA;
          --text-secondary: #B3F5E6;
          --text-accent: #80EDD1;
          --bg-primary: #000000;
          --bg-secondary: #0a0a0a;
          --bg-tertiary: #111111;
          --glass-bg: rgba(0, 0, 0, 0.7);
          --glass-border: rgba(0, 192, 149, 0.15);
          --shadow-glow: 0 0 30px rgba(0, 192, 149, 0.4);
          --shadow-soft: 0 8px 32px rgba(0, 0, 0, 0.3);
          --shadow-hover: 0 12px 48px rgba(0, 192, 149, 0.25);
          --shadow-intense: 0 0 60px rgba(0, 192, 149, 0.3);
          --gradient-primary: linear-gradient(135deg, #00C095 0%, #00E6B0 100%);
          --gradient-secondary: linear-gradient(135deg, #00A085 0%, #00C095 100%);
          --gradient-accent: linear-gradient(135deg, #00C095 0%, #4DDBBA 100%);
          --gradient-bg: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #111111 100%);
          --gradient-hero: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(10,10,10,0.6) 100%);
          --gradient-card: linear-gradient(135deg, rgba(0, 192, 149, 0.1) 0%, rgba(0, 230, 176, 0.05) 100%);
        }
        
        .glass-card {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: var(--shadow-soft);
        }
        
        .glass-card:hover {
          box-shadow: var(--shadow-hover);
        }
        
        .glow-effect {
          box-shadow: var(--shadow-glow);
        }
        
        .gradient-primary {
          background: var(--gradient-primary);
        }
        
        .gradient-card {
          background: var(--gradient-card);
        }
        
        .slider-track {
          background: linear-gradient(to right, var(--dark-teal), var(--primary-teal), var(--secondary-teal));
        }
        
        .slider-thumb {
          background: var(--gradient-primary);
          box-shadow: var(--shadow-glow);
        }
        
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          background: linear-gradient(to right, var(--dark-teal), var(--primary-teal), var(--secondary-teal));
          border-radius: 5px;
          outline: none;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        
        input[type="range"]:hover {
          opacity: 1;
        }
        
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: var(--gradient-primary);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: var(--shadow-glow);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: var(--gradient-primary);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: var(--shadow-glow);
        }
      `}</style>

      <header className="relative px-6 py-12 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-8 glow-effect">
            🌲 C4 Super Trees
          </h1>
          <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="./assets/c4su.jpg" 
              alt="C4 Super Trees in a lush forest environment" 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          <p className="text-xl md:text-2xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
            Revolutionary <strong className="text-emerald-400">C4 Super Trees</strong> engineered with advanced C4 photosynthesis pathways 
            for unprecedented carbon capture efficiency and accelerated oxygen production. These trees represent 
            the future of sustainable reforestation and climate restoration.
          </p>
        </div>
      </header>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            🔬 Scientific Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">🌿 Enhanced Photosynthesis</h3>
              <p className="text-teal-100 leading-relaxed">
                C4 pathway concentrates CO₂ around the enzyme that fixes carbon, dramatically increasing efficiency especially in hot, dry conditions.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">💧 Water Efficiency</h3>
              <p className="text-teal-100 leading-relaxed">
                Uses {TREE_CONSTANTS.WATER_EFFICIENCY}× less water per unit of CO₂ captured compared to traditional C3 trees.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">🌡️ Climate Resilience</h3>
              <p className="text-teal-100 leading-relaxed">
                Thrives in high temperatures and low water conditions where normal trees struggle.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">⚡ Rapid Growth</h3>
              <p className="text-teal-100 leading-relaxed">
                Grows {TREE_CONSTANTS.GROWTH_RATE_MULTIPLIER}× faster than conventional trees, reaching maturity sooner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            📊 Performance Comparison
          </h2>
          <div className="glass-card rounded-2xl p-8 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-teal-600">
                  <th className="py-4 px-6 text-emerald-400 font-bold text-lg">Metric</th>
                  <th className="py-4 px-6 text-emerald-400 font-bold text-lg">Normal Trees</th>
                  <th className="py-4 px-6 text-emerald-400 font-bold text-lg">C4 Super Trees</th>
                  <th className="py-4 px-6 text-emerald-400 font-bold text-lg">Improvement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-teal-700 hover:bg-teal-900/20 transition-colors">
                  <td className="py-4 px-6 text-teal-100 font-semibold">CO₂ Absorption (per tree/year)</td>
                  <td className="py-4 px-6 text-teal-200">{TREE_CONSTANTS.NORMAL_CO2_PER_TREE} kg</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold">{(TREE_CONSTANTS.NORMAL_CO2_PER_TREE * TREE_CONSTANTS.C4_MULTIPLIER).toFixed(1)} kg</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold">+{((TREE_CONSTANTS.C4_MULTIPLIER - 1) * 100).toFixed(0)}%</td>
                </tr>
                <tr className="border-b border-teal-700 hover:bg-teal-900/20 transition-colors">
                  <td className="py-4 px-6 text-teal-100 font-semibold">O₂ Production (per tree/year)</td>
                  <td className="py-4 px-6 text-teal-200">{TREE_CONSTANTS.NORMAL_O2_PER_TREE} kg</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold">{(TREE_CONSTANTS.NORMAL_O2_PER_TREE * TREE_CONSTANTS.C4_MULTIPLIER).toFixed(1)} kg</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold">+{((TREE_CONSTANTS.C4_MULTIPLIER - 1) * 100).toFixed(0)}%</td>
                </tr>
                <tr className="hover:bg-teal-900/20 transition-colors">
                  <td className="py-4 px-6 text-teal-100 font-semibold">Water Usage Efficiency</td>
                  <td className="py-4 px-6 text-teal-200">Standard</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold">{TREE_CONSTANTS.WATER_EFFICIENCY}× more efficient</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold">-{(((TREE_CONSTANTS.WATER_EFFICIENCY - 1) / TREE_CONSTANTS.WATER_EFFICIENCY) * 100).toFixed(0)}% water needed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            🧮 Environmental Impact Calculator
          </h2>
          <div className="glass-card rounded-2xl p-8">
            <div className="mb-12">
              <label htmlFor="treeRange" className="block text-xl font-bold text-emerald-400 mb-4">
                <strong>Number of Trees:</strong> {treeCount.toLocaleString()} 
                <span className="text-teal-300 ml-2">({getTreeCountDescription()})</span>
              </label>
              <input
                type="range"
                id="treeRange"
                min="1"
                max="10001"
                step="3"
                value={treeCount}
                onChange={(e) => setTreeCount(parseInt(e.target.value))}
                className="w-full h-2 mb-4"
              />
              <div className="flex justify-between text-sm text-teal-400">
                <span>1</span>
                <span>2,500</span>
                <span>5,000</span>
                <span>7,500</span>
                <span>10,000</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card rounded-2xl p-6 border-2 border-teal-600 hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-teal-400 mb-6">🌳 Normal Trees (Annual Impact)</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-teal-300">{formatNumber(environmentalImpact.normal.co2)}</span>
                    <span className="text-teal-200">kg CO2 absorbed</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-teal-300">{formatNumber(environmentalImpact.normal.o2)}</span>
                    <span className="text-teal-200">kg O2 produced</span>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 border-2 border-emerald-500 hover:scale-105 transition-all duration-300 glow-effect">
                <h3 className="text-2xl font-bold text-emerald-400 mb-6">🌲 C4 Super Trees (Annual Impact)</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-emerald-300">{formatNumber(environmentalImpact.c4.co2)}</span>
                    <span className="text-emerald-200">kg CO2 absorbed</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-emerald-300">{formatNumber(environmentalImpact.c4.o2)}</span>
                    <span className="text-emerald-200">kg O2 produced</span>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 border-2 border-yellow-500 hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">📈 Additional Benefits</h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-yellow-300">+{formatNumber(environmentalImpact.difference.co2)}</span>
                    <span className="text-yellow-200 text-sm">kg extra CO2 captured</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-yellow-300">+{formatNumber(environmentalImpact.difference.o2)}</span>
                    <span className="text-yellow-200 text-sm">kg extra O2 produced</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-yellow-300">{formatNumber(environmentalImpact.waterSaved)}</span>
                    <span className="text-yellow-200 text-sm">liters water saved</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center gradient-card">
              <h4 className="text-2xl font-bold text-emerald-400 mb-4">🌍 Real-World Context</h4>
              <p className="text-xl text-teal-100 mb-4">
                The extra CO2 captured by C4 Super Trees is equivalent to taking{' '}
                <strong className="text-emerald-400 text-2xl">{environmentalImpact.equivalentCars.toLocaleString()} cars</strong> off the road for a year!
              </p>
              {treeCount >= 1000 && (
                <p className="text-xl text-teal-100">
                  This forest would produce enough oxygen for approximately{' '}
                  <strong className="text-emerald-400 text-2xl">{Math.round(environmentalImpact.c4.o2 / 550).toLocaleString()} people</strong> annually.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            🎯 Applications
          </h2>
          <div className="glass-card rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-teal-900/20 transition-colors">
                <div className="text-2xl">🏙️</div>
                <div>
                  <strong className="text-emerald-400 text-lg">Urban Reforestation:</strong>
                  <p className="text-teal-100 mt-2">Rapid green infrastructure development in cities</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-teal-900/20 transition-colors">
                <div className="text-2xl">📊</div>
                <div>
                  <strong className="text-emerald-400 text-lg">Carbon Offset Projects:</strong>
                  <p className="text-teal-100 mt-2">Accelerated carbon sequestration for climate goals</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-teal-900/20 transition-colors">
                <div className="text-2xl">🏜️</div>
                <div>
                  <strong className="text-emerald-400 text-lg">Arid Land Restoration:</strong>
                  <p className="text-teal-100 mt-2">Reforestation in challenging, dry environments</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-teal-900/20 transition-colors">
                <div className="text-2xl">🏭</div>
                <div>
                  <strong className="text-emerald-400 text-lg">Industrial Carbon Capture:</strong>
                  <p className="text-teal-100 mt-2">Large-scale atmospheric CO2 reduction</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-teal-900/20 transition-colors col-span-full">
                <div className="text-2xl">🌿</div>
                <div>
                  <strong className="text-emerald-400 text-lg">Ecosystem Restoration:</strong>
                  <p className="text-teal-100 mt-2">Fast-track recovery of degraded landscapes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="glass-card rounded-2xl p-12 glow-effect">
            <h3 className="text-3xl font-bold text-emerald-400 mb-6">Ready to Transform Your Environment?</h3>
            <p className="text-xl text-teal-100 mb-8">Join the future of sustainable reforestation with C4 Super Trees.</p>
            <button className="gradient-primary text-black font-bold text-xl px-12 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default C4SuperTreePage;