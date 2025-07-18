import React, { useState } from 'react';
import { Leaf, TrendingUp, Droplets, Shield, Clock, Zap, TreePine, Globe, ChevronDown, CheckCircle, ArrowRightCircle, Circle } from 'lucide-react';

const C3SuperTreesLanding = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [treeCount, setTreeCount] = useState(1000);

  const performanceData = [
    { metric: 'CO₂ Absorbed/year', c3: '22 kg', superTree: '~30 kg', improvement: '+33%' },
    { metric: 'Biomass Growth Rate', c3: 'Baseline', superTree: '+50%', improvement: 'Faster canopy' },
    { metric: 'Water Efficiency', c3: 'Standard', superTree: '+10%', improvement: 'Slightly improved' },
    { metric: 'Carbon Sequestration', c3: 'Moderate', superTree: 'Long-lasting', improvement: 'Higher stability' }
  ];

  const roadmapItems = [
    { phase: 'Research Foundation', period: 'Mar–May 2025', status: 'completed', description: 'Identified photorespiration inefficiencies and proposed solution.' },
    { phase: 'Validation Phase', period: 'Jun–Jul 2025', status: 'completed', description: 'Validated both scientific and business approaches.' },
    { phase: 'Genetic Design Phase', period: 'Aug–Nov 2025', status: 'current', description: 'Designed and simulated gene pathways for sugar conversion.' },
    { phase: 'Metabolic Engineering', period: 'Nov–Jan 2025', status: 'current', description: 'Insertion of designed pathways in lab-grown saplings.' },
    { phase: 'Greenhouse Trials', period: 'Feb–May 2026', status: 'future', description: 'Testing growth performance, safety, and CO₂ capture.' },
    { phase: 'Field Trials (Pilot Scale)', period: 'Jun–Dec 2026', status: 'future', description: 'Real-environment validation in multiple Indian locations.' },
    { phase: 'Scale-up and Partnerships', period: 'Jan 2027 onwards', status: 'future', description: 'Work with restoration and climate orgs to scale planting.' }
  ];

  const applications = [
    { title: 'Afforestation & Reforestation', description: 'Restoring degraded land with enhanced carbon capture', icon: TreePine },
    { title: 'Urban Forestry', description: 'Green infrastructure projects in cities', icon: Globe },
    { title: 'Agricultural Restoration', description: 'Converting unused farmland to carbon sinks', icon: Leaf },
    { title: 'Climate Initiatives', description: 'Government and CSR climate projects', icon: Shield },
    { title: 'Agroforestry Systems', description: 'Climate-resilient agricultural integration', icon: TrendingUp }
  ];

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

  const handleCalculatorToggle = () => {
    setIsCalculatorOpen(!isCalculatorOpen);
    if (!isCalculatorOpen) {
      setTimeout(() => {
        document.getElementById('impact-calculator')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-white" />;
      case 'current':
        return <ArrowRightCircle className="w-6 h-6 text-white" />;
      default:
        return <Circle className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-full mb-6">
              <Leaf className="w-5 h-5 text-teal-400" />
              <span className="text-sm font-medium text-teal-300">Smart Trees That Waste Less and Capture More</span>
            </div>
            
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-shadow duration-300">
              <TrendingUp className="w-8 h-8 text-teal-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-teal-300 mb-2">+33%</div>
              <div className="text-sm text-teal-100">More CO₂ Capture</div>
            </div>
            <div className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-shadow duration-300">
              <Zap className="w-8 h-8 text-teal-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-teal-300 mb-2">+50%</div>
              <div className="text-sm text-teal-100">Faster Growth</div>
            </div>
            <div className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-shadow duration-300">
              <Clock className="w-8 h-8 text-teal-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-teal-300 mb-2">2026</div>
              <div className="text-sm text-teal-100">Field-Pilot Ready</div>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <button 
              onClick={handleCalculatorToggle}
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

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">Key Benefits</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              C3 Super Trees enhance existing metabolic processes without modifying the entire photosynthetic system, keeping them biologically safe and ecologically compatible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: "30% More Carbon Capture", desc: "Significantly increased CO₂ absorption per tree" },
              { icon: Zap, title: "Faster Growth", desc: "Improved sugar availability accelerates development" },
              { icon: Droplets, title: "Water Efficiency", desc: "Slight improvements in water usage" },
              { icon: Shield, title: "Low Genetic Risk", desc: "Builds on existing metabolic processes" }
            ].map((benefit, index) => (
              <div key={index} className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 group">
                <benefit.icon className="w-12 h-12 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 text-teal-300">{benefit.title}</h3>
                <p className="text-teal-100">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">Performance Comparison</h2>
            <p className="text-xl text-teal-100">Side-by-side comparison of traditional C3 trees vs C3 Super Trees</p>
          </div>

          <div className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-teal-500/20">
                  <th className="text-left py-4 px-6 text-teal-300">Metric</th>
                  <th className="text-center py-4 px-6 text-teal-300">C3 Tree</th>
                  <th className="text-center py-4 px-6 text-teal-300">C3 Super Tree</th>
                  <th className="text-center py-4 px-6 text-teal-300">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {performanceData.map((row, index) => (
                  <tr key={index} className="border-b border-teal-500/10 hover:bg-teal-500/5 transition-colors">
                    <td className="py-4 px-6 font-medium text-teal-100">{row.metric}</td>
                    <td className="py-4 px-6 text-center text-gray-300">{row.c3}</td>
                    <td className="py-4 px-6 text-center text-teal-300 font-semibold">{row.superTree}</td>
                    <td className="py-4 px-6 text-center text-emerald-400 font-semibold">{row.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Environmental Impact Calculator */}
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

      {/* Impact Calculator */}
      {isCalculatorOpen && (
        <section id="impact-calculator" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 shadow-lg shadow-teal-500/20">
              <h3 className="text-3xl font-bold mb-8 text-center text-white drop-shadow-lg">Environmental Impact Calculator</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/5 rounded-2xl p-6 border border-teal-500/20">
                  <h4 className="text-xl font-semibold mb-4 text-teal-300">Normal Trees (Annual Impact)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-teal-100">CO₂ Absorbed:</span>
                      <span className="text-white font-semibold">22 kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-teal-100">CO₂ Sequestered:</span>
                      <span className="text-white font-semibold">~18 kg</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/5 rounded-2xl p-6 border border-teal-500/20 shadow-lg shadow-teal-500/20">
                  <h4 className="text-xl font-semibold mb-4 text-teal-300">C3 Super Trees (Annual Impact)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-teal-100">CO₂ Absorbed:</span>
                      <span className="text-emerald-400 font-semibold">30+ kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-teal-100">CO₂ Sequestered:</span>
                      <span className="text-emerald-400 font-semibold">~26 kg</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-6 text-black">
                  <h4 className="text-2xl font-bold mb-4">Real-World Context</h4>
                  <p className="text-lg mb-2">Each C3 Super Tree's extra CO₂ capture equals:</p>
                  <p className="text-lg font-semibold">Offsetting 1,000 km on a petrol scooter</p>
                  <p className="text-lg font-semibold">Over 20 years: 520 kg CO₂ locked away</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Development Roadmap */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">Development Roadmap</h2>
            <p className="text-xl text-teal-100">From R&D to Field Deployment</p>
          </div>

          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    item.status === 'completed' ? 'bg-emerald-500' : 
                    item.status === 'current' ? 'bg-teal-500' : 
                    'bg-gray-500'
                  }`}>
                    {getStatusIcon(item.status)}
                  </div>
                </div>
                <div className="flex-1 bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-teal-300">{item.phase}</h3>
                    <span className="text-sm text-teal-100 bg-teal-500/20 px-3 py-1 rounded-full w-fit">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-teal-100">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">Applications</h2>
            <p className="text-xl text-teal-100">Diverse deployment opportunities for maximum climate impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 group">
                <app.icon className="w-12 h-12 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 text-teal-300">{app.title}</h3>
                <p className="text-teal-100">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Science Behind It */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-lg">The Science Behind It</h2>
          <div className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8">
            <p className="text-lg text-teal-100 leading-relaxed mb-6">
              Traditional C3 trees lose significant carbon through photorespiration, especially under heat and drought. 
              C3 Super Trees are enhanced to redirect those losses into glucose, reducing waste and increasing net CO₂ assimilation.
            </p>
            <p className="text-lg text-teal-100 leading-relaxed">
              This is achieved without a full photosynthetic overhaul, keeping trees ecologically balanced and fast to deploy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-teal-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent text-3xl font-bold mb-4">
            C3 SUPER TREES
          </div>
          <p className="text-teal-100 mb-6">Smart Trees That Waste Less and Capture More</p>
          <p className="text-sm text-teal-300">© 2025 C3 Super Trees. Photosynthetic optimization for near-term climate impact.</p>
        </div>
      </footer>
    </div>
  );
};

export default C3SuperTreesLanding;