import React, { useState, useEffect } from 'react';
import { Leaf, Zap, Droplets, Thermometer, TreePine, BarChart3, Target, Microscope, MapPin, Calendar, CheckCircle2, Clock, ArrowUp, Globe } from 'lucide-react';

const C4SuperTrees = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedNumbers, setAnimatedNumbers] = useState({
    co2: 0,
    water: 0,
    growth: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedNumbers({
        co2: 185,
        water: 50,
        growth: 70
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const PerformanceTable = () => (
    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-teal-900/20 via-black/40 to-teal-800/20 backdrop-blur-sm border border-teal-400/20">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-teal-600/30 to-teal-500/30">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-teal-100 uppercase tracking-wider">Metric</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-teal-100 uppercase tracking-wider">Normal Tree</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-teal-100 uppercase tracking-wider">C4 Super Tree</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-teal-100 uppercase tracking-wider">Targeted Gains</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-teal-400/10">
            <tr className="hover:bg-teal-900/10 transition-all duration-300">
              <td className="px-6 py-4 text-teal-100 font-medium">CO₂ Absorbed</td>
              <td className="px-6 py-4 text-teal-200">22 kg</td>
              <td className="px-6 py-4 text-teal-300 font-bold">60+ kg</td>
              <td className="px-6 py-4 text-teal-400 font-bold">+185%</td>
            </tr>
            <tr className="hover:bg-teal-900/10 transition-all duration-300">
              <td className="px-6 py-4 text-teal-100 font-medium">Water Use Efficiency</td>
              <td className="px-6 py-4 text-teal-200">Standard</td>
              <td className="px-6 py-4 text-teal-300 font-bold">2×</td>
              <td className="px-6 py-4 text-teal-400 font-bold">-50% water usage</td>
            </tr>
            <tr className="hover:bg-teal-900/10 transition-all duration-300">
              <td className="px-6 py-4 text-teal-100 font-medium">Growth Speed</td>
              <td className="px-6 py-4 text-teal-200">Baseline</td>
              <td className="px-6 py-4 text-teal-300 font-bold">+70% faster</td>
              <td className="px-6 py-4 text-teal-400 font-bold">Faster canopy</td>
            </tr>
            <tr className="hover:bg-teal-900/10 transition-all duration-300">
              <td className="px-6 py-4 text-teal-100 font-medium">Drought Resilience</td>
              <td className="px-6 py-4 text-teal-200">Medium</td>
              <td className="px-6 py-4 text-teal-300 font-bold">High</td>
              <td className="px-6 py-4 text-teal-400 font-bold">Heat & arid-proof</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const RoadmapItem = ({ phase, title, timeframe, status, description }) => (
    <div className="relative flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-teal-900/20 via-black/40 to-teal-800/20 backdrop-blur-sm border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
      <div className="flex-shrink-0">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
          status === 'completed' ? 'bg-teal-500 text-black' : 
          status === 'in-progress' ? 'bg-teal-400 text-black' : 
          'bg-teal-800 text-teal-200'
        }`}>
          {status === 'completed' ? <CheckCircle2 size={16} /> : 
           status === 'in-progress' ? <Clock size={16} /> : phase}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-bold text-teal-100">{title}</h4>
          <span className="text-sm text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full">{timeframe}</span>
        </div>
        <p className="text-teal-200 text-sm">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-black to-teal-800/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-900/30 rounded-full border border-teal-400/30 mb-6">
              <Leaf className="w-5 h-5 text-teal-400" />
              <span className="text-teal-300 font-medium">PAGE 2</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
                C4 SUPER TREES
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-teal-200 mb-4">
              The Future of Trees – Powered by C4 Photosynthesis
            </p>
            <p className="text-lg text-teal-300 max-w-2xl mx-auto">
              Long-term R&D for maximum carbon removal efficiency
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
              <div className="flex items-center space-x-3 mb-3">
                <ArrowUp className="w-8 h-8 text-teal-400" />
                <span className="text-3xl font-bold text-teal-400">3×</span>
              </div>
              <h3 className="text-lg font-semibold text-teal-100 mb-2">More CO₂ Captured</h3>
              <p className="text-teal-200 text-sm">Per tree compared to standard trees</p>
            </div>
            <div className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
              <div className="flex items-center space-x-3 mb-3">
                <Droplets className="w-8 h-8 text-teal-400" />
                <span className="text-3xl font-bold text-teal-400">2×</span>
              </div>
              <h3 className="text-lg font-semibold text-teal-100 mb-2">Water Efficient</h3>
              <p className="text-teal-200 text-sm">Less water needed for growth</p>
            </div>
            <div className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
              <div className="flex items-center space-x-3 mb-3">
                <Thermometer className="w-8 h-8 text-teal-400" />
                <span className="text-3xl font-bold text-teal-400">+70%</span>
              </div>
              <h3 className="text-lg font-semibold text-teal-100 mb-2">Faster Growth</h3>
              <p className="text-teal-200 text-sm">Rapid biomass accumulation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: TreePine },
            { id: 'performance', label: 'Performance', icon: BarChart3 },
            { id: 'impact', label: 'Impact', icon: Globe },
            { id: 'roadmap', label: 'Roadmap', icon: Calendar },
            { id: 'science', label: 'Science', icon: Microscope }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === id
                  ? 'bg-teal-500 text-black shadow-lg shadow-teal-500/30'
                  : 'bg-teal-900/30 text-teal-200 hover:bg-teal-800/40 hover:text-teal-100 border border-teal-400/20'
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
                <h2 className="text-3xl font-bold text-teal-100 mb-6">What Are C4 Super Trees?</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-teal-200 mb-6 leading-relaxed">
                      C4 Super Trees are engineered to perform single-cell C4 photosynthesis, inspired by the desert plant <em>Bienertia</em>, 
                      which naturally concentrates CO₂ inside a single cell — lowering photorespiration.
                    </p>
                    <p className="text-teal-200 mb-6 leading-relaxed">
                      Our goal is to transform standard C3 trees into C4-like trees, making them:
                    </p>
                    <ul className="space-y-3 text-teal-200">
                      <li className="flex items-start space-x-3">
                        <Zap className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                        <span>Hyper-efficient at carbon fixation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Thermometer className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                        <span>Ultra-resilient in high-heat, dry environments</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Globe className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                        <span>Game-changers for climate restoration</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-teal-800/20 to-teal-900/20 rounded-xl p-6 border border-teal-400/20">
                    <h3 className="text-xl font-bold text-teal-100 mb-4">Expected Benefits</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-teal-200">CO₂ Capture</span>
                        <span className="text-teal-400 font-bold">3× more per tree</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-teal-200">Water Efficiency</span>
                        <span className="text-teal-400 font-bold">Up to 2× more</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-teal-200">Heat Resistance</span>
                        <span className="text-teal-400 font-bold">Extreme conditions</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-teal-200">Biomass Growth</span>
                        <span className="text-teal-400 font-bold">2× faster</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-teal-300 font-medium italic">
                    A moonshot for reforestation — with massive long-term potential.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-teal-100 mb-6">Target Performance (per tree/year)</h2>
              <PerformanceTable />
            </div>
          )}

          {activeTab === 'impact' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-teal-100 mb-6">Environmental Impact Calculator</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
                  <h3 className="text-xl font-bold text-teal-100 mb-4">Normal Trees (Annual Impact)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-teal-200">CO₂ absorbed</span>
                      <span className="text-teal-400 font-bold">22 kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-teal-200">CO₂ sequestered</span>
                      <span className="text-teal-400 font-bold">~18 kg</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-teal-800/30 via-black/40 to-teal-700/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30">
                  <h3 className="text-xl font-bold text-teal-100 mb-4">C4 Super Trees (Annual Impact)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-teal-200">CO₂ absorbed</span>
                      <span className="text-teal-300 font-bold">60+ kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-teal-200">CO₂ sequestered</span>
                      <span className="text-teal-300 font-bold">~54 kg</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
                <h3 className="text-2xl font-bold text-teal-100 mb-6">Additional Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-400 mb-2">+38 kg</div>
                    <div className="text-teal-200">Extra CO₂ absorbed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-400 mb-2">+36 kg</div>
                    <div className="text-teal-200">Extra CO₂ sequestered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-400 mb-2">150+ L</div>
                    <div className="text-teal-200">Water saved per year</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
                <h3 className="text-2xl font-bold text-teal-100 mb-6">Real-World Context</h3>
                <div className="space-y-4 text-teal-200">
                  <p className="text-lg">
                    The extra CO₂ captured by each C4 Super Tree is equivalent to:
                  </p>
                  <div className="bg-teal-900/20 rounded-xl p-4 border border-teal-400/20">
                    <p className="text-teal-300 font-medium">
                      🚗 Taking 1 car off the road for a year
                    </p>
                  </div>
                  <p className="text-lg">
                    Over 20 years, one C4 tree locks in <span className="font-bold text-teal-300">~1.2 tons of CO₂</span> — 
                    <span className="font-bold text-teal-400"> 3× more than a normal tree</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'roadmap' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-teal-100 mb-6">Development Roadmap – From Concept to Field Innovation</h2>
              <div className="space-y-6">
                <RoadmapItem
                  phase="1"
                  title="Problem Validation & Research"
                  timeframe="Completed – Apr–Jul 2025"
                  status="completed"
                  description="Researched global C3 inefficiencies and validated potential of C4 gene conversion."
                />
                <RoadmapItem
                  phase="2"
                  title="Bienertia Gene Strategy & Feasibility"
                  timeframe="In Progress – Aug–Oct 2025"
                  status="in-progress"
                  description="Mapped key gene components for single-cell C4 function."
                />
                <RoadmapItem
                  phase="3"
                  title="GMO Regulatory Strategy"
                  timeframe="In Progress – Nov 2025–Feb 2026"
                  status="in-progress"
                  description="Designing containment, biosafety protocols, and compliance models."
                />
                <RoadmapItem
                  phase="4"
                  title="Synthetic Pathway Engineering"
                  timeframe="Future – Mar–Sep 2026"
                  status="future"
                  description="Gene stacking and initial lab implementation in model plants."
                />
                <RoadmapItem
                  phase="5"
                  title="Greenhouse Trials & CO₂ Efficiency Tests"
                  timeframe="Future – Late 2026–2027"
                  status="future"
                  description="Growth trials in high-temperature controlled environments."
                />
                <RoadmapItem
                  phase="6"
                  title="Open Field Trials"
                  timeframe="Future – 2028"
                  status="future"
                  description="Launching in selected arid zones for real-world testing."
                />
              </div>
            </div>
          )}

          {activeTab === 'science' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
                <h2 className="text-3xl font-bold text-teal-100 mb-6">The Science Behind It</h2>
                <div className="space-y-6">
                  <p className="text-teal-200 text-lg leading-relaxed">
                    <em>Bienertia</em> species naturally evolved to do what no typical tree can: perform C4 photosynthesis in a single cell. 
                    By borrowing this rare adaptation, we aim to engineer trees that can overcome the limitations of C3 metabolism — 
                    achieving maximum photosynthetic output with minimal water.
                  </p>
                  
                  <div className="bg-gradient-to-br from-teal-800/20 to-teal-900/20 rounded-xl p-6 border border-teal-400/20">
                    <h3 className="text-xl font-bold text-teal-100 mb-4">Applications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Target className="w-5 h-5 text-teal-400" />
                        <span className="text-teal-200">Hyper-efficient carbon sinks</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-teal-400" />
                        <span className="text-teal-200">Dryland and desert afforestation</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="w-5 h-5 text-teal-400" />
                        <span className="text-teal-200">Scalable carbon offset plantations</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <TreePine className="w-5 h-5 text-teal-400" />
                        <span className="text-teal-200">Climate-smart forestry</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-teal-400" />
                        <span className="text-teal-200">Industrial buffer zones</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-teal-900/30 to-teal-800/30 border-t border-teal-400/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-2xl font-bold text-teal-100 mb-2">
              Long-term. High-impact. Science-driven.
            </p>
            <p className="text-teal-200">
              C4 Super Trees are our boldest vision for reengineering the planet's lungs and fighting climate change at scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C4SuperTrees;