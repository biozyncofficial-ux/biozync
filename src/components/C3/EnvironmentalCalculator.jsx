import React, { useState } from 'react';
import { Leaf, Wind, Car, TreePine } from 'lucide-react';

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
    <>
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
          --purple-accent: #CEB7FC;
        }

        .animated-border {
          position: relative;
          overflow: hidden;
        }

        .animated-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(45deg, var(--primary-teal), var(--secondary-teal), var(--purple-accent));
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask-composite: xor;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .animated-border:hover::before {
          opacity: 1;
        }

        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          border-radius: 10px;
          outline: none;
          transition: all 0.3s ease;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--gradient-primary);
          cursor: pointer;
          box-shadow: var(--shadow-glow);
          border: 2px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 0 40px rgba(0, 192, 149, 0.8);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--gradient-primary);
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: var(--shadow-glow);
          transition: all 0.3s ease;
        }

        .card-hover-effect {
          position: relative;
          overflow: hidden;
        }

        .card-hover-effect::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(0, 192, 149, 0.1), transparent);
          transform: rotate(45deg);
          transition: transform 0.6s ease;
          pointer-events: none;
          opacity: 0;
        }

        .card-hover-effect:hover::after {
          transform: rotate(45deg) translate(100%, 100%);
          opacity: 1;
        }

        .pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite alternate;
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 20px rgba(0, 192, 149, 0.3);
          }
          100% {
            box-shadow: 0 0 35px rgba(0, 192, 149, 0.6), 0 0 60px rgba(206, 183, 252, 0.2);
          }
        }

        .floating-animation {
          animation: floating 6s ease-in-out infinite;
        }

        @keyframes floating {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-1deg); }
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--secondary-teal) 0%, var(--purple-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .number-counter {
          transition: all 0.3s ease;
          position: relative;
        }

        .number-counter::after {
          content: attr(data-value);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--secondary-teal) 0%, var(--purple-accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          transform: scale(1.1);
          transition: all 0.3s ease;
        }

        .number-counter:hover::after {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <section className="px-4 sm:px-6 py-16 min-h-screen" 
               style={{ background: 'var(--gradient-bg)' }}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full pulse-glow floating-animation" 
                 style={{ 
                   background: 'var(--gradient-primary)',
                   border: '3px solid rgba(255, 255, 255, 0.1)'
                 }}>
              <TreePine size={32} style={{ color: 'var(--text-primary)' }} />
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight" 
                style={{ 
                  color: 'var(--text-primary)',
                  textShadow: '0 4px 16px rgba(0, 192, 149, 0.4)',
                  lineHeight: '1.1'
                }}>
              Environmental Impact
              <span className="block gradient-text mt-2">Calculator</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed" 
               style={{ color: 'var(--text-secondary)' }}>
              Calculate the environmental benefits of tree planting initiatives
            </p>
          </div>

          {/* Main Calculator Card */}
          <div className="animated-border backdrop-blur-xl rounded-3xl p-8 sm:p-12 transition-all duration-700 hover:shadow-2xl card-hover-effect"
               style={{ 
                 background: 'var(--glass-bg)',
                 border: '1px solid var(--glass-border)',
                 boxShadow: 'var(--shadow-soft)'
               }}>
            
            {/* Tree Count Control */}
            <div className="mb-16">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <label className="text-2xl font-semibold mb-4 sm:mb-0" 
                       style={{ color: 'var(--text-primary)' }}>
                  Number of Trees
                </label>
                <div className="text-4xl sm:text-5xl font-bold number-counter" 
                     style={{ color: 'var(--secondary-teal)' }}
                     data-value={treeCount.toLocaleString()}>
                  {treeCount.toLocaleString()}
                </div>
              </div>
              
              {/* Enhanced Slider */}
              <div className="relative">
                <div className="mb-4 p-4 rounded-xl" 
                     style={{ background: 'rgba(0, 192, 149, 0.05)' }}>
                  <input
                    type="range"
                    min="1"
                    max="10001"
                    value={treeCount}
                    onChange={(e) => setTreeCount(parseInt(e.target.value))}
                    className="w-full cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, var(--primary-teal) 0%, var(--secondary-teal) ${(treeCount / 10001) * 100}%, #333333 ${(treeCount / 10001) * 100}%, #333333 100%)`
                    }}
                  />
                </div>
                
                {/* Slider Labels */}
                <div className="flex justify-between text-sm" 
                     style={{ color: 'var(--text-secondary)' }}>
                  <span className="px-3 py-1 rounded-full" 
                        style={{ background: 'rgba(0, 192, 149, 0.1)' }}>1</span>
                  <span className="px-3 py-1 rounded-full" 
                        style={{ background: 'rgba(0, 192, 149, 0.1)' }}>5K</span>
                  <span className="px-3 py-1 rounded-full" 
                        style={{ background: 'rgba(0, 192, 149, 0.1)' }}>10K+</span>
                </div>
              </div>
            </div>

            {/* Impact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* CO2 Capture Card */}
              <div className="group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 card-hover-effect"
                   style={{ 
                     background: 'var(--gradient-card)',
                     border: '1px solid var(--glass-border)',
                     boxShadow: 'var(--shadow-soft)'
                   }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                     style={{ 
                       background: 'var(--gradient-primary)',
                       boxShadow: 'var(--shadow-glow)'
                     }}>
                  <Leaf size={24} style={{ color: 'var(--text-primary)' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" 
                    style={{ color: 'var(--text-primary)' }}>
                  Annual CO₂ Capture
                </h3>
                <p className="text-4xl font-bold gradient-text transition-all duration-300 group-hover:scale-105">
                  {formatNumber(environmentalImpact.co2)} kg
                </p>
                <p className="text-sm mt-3 opacity-80" 
                   style={{ color: 'var(--text-secondary)' }}>
                  Carbon dioxide absorbed
                </p>
              </div>

              {/* O2 Production Card */}
              <div className="group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 card-hover-effect"
                   style={{ 
                     background: 'var(--gradient-card)',
                     border: '1px solid var(--glass-border)',
                     boxShadow: 'var(--shadow-soft)'
                   }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                     style={{ 
                       background: 'var(--gradient-primary)',
                       boxShadow: 'var(--shadow-glow)'
                     }}>
                  <Wind size={24} style={{ color: 'var(--text-primary)' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" 
                    style={{ color: 'var(--text-primary)' }}>
                  Annual O₂ Production
                </h3>
                <p className="text-4xl font-bold gradient-text transition-all duration-300 group-hover:scale-105">
                  {formatNumber(environmentalImpact.o2)} kg
                </p>
                <p className="text-sm mt-3 opacity-80" 
                   style={{ color: 'var(--text-secondary)' }}>
                  Oxygen generated
                </p>
              </div>

              {/* Cars Equivalent Card */}
              <div className="group relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-3 card-hover-effect"
                   style={{ 
                     background: 'var(--gradient-card)',
                     border: '1px solid var(--glass-border)',
                     boxShadow: 'var(--shadow-soft)'
                   }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                     style={{ 
                       background: 'var(--gradient-primary)',
                       boxShadow: 'var(--shadow-glow)'
                     }}>
                  <Car size={24} style={{ color: 'var(--text-primary)' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" 
                    style={{ color: 'var(--text-primary)' }}>
                  Equivalent Cars Removed
                </h3>
                <p className="text-4xl font-bold gradient-text transition-all duration-300 group-hover:scale-105">
                  {environmentalImpact.equivalentCars}
                </p>
                <p className="text-sm mt-3 opacity-80" 
                   style={{ color: 'var(--text-secondary)' }}>
                  Annual emissions offset
                </p>
              </div>
            </div>

            {/* Environmental Impact Summary */}
            <div className="mt-16 p-8 rounded-2xl text-center animated-border"
                 style={{ 
                   background: 'linear-gradient(135deg, rgba(0, 192, 149, 0.08) 0%, rgba(206, 183, 252, 0.08) 100%)',
                   border: '1px solid var(--glass-border)'
                 }}>
              <p className="text-lg leading-relaxed" 
                 style={{ color: 'var(--text-secondary)' }}>
                <span className="font-semibold gradient-text text-xl">Environmental Impact:</span>{' '}
                Your <span className="font-bold" style={{ color: 'var(--secondary-teal)' }}>
                  {treeCount.toLocaleString()} trees
                </span> will make a significant difference for our planet's future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnvironmentalCalculator;