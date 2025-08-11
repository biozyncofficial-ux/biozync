import React from 'react';
import { CheckCircle, ArrowRightCircle, Circle } from 'lucide-react';

const DevelopmentRoadmap = () => {
  const roadmapItems = [
    { phase: 'Research Foundation', period: 'Mar–May 2025', status: 'completed', description: 'Identified photorespiration inefficiencies and proposed solution.' },
    { phase: 'Validation Phase', period: 'Jun–Jul 2025', status: 'completed', description: 'Validated both scientific and business approaches.' },
    { phase: 'Genetic Design Phase', period: 'Aug–Nov 2025', status: 'current', description: 'Designed and simulated gene pathways for sugar conversion.' },
    { phase: 'Metabolic Engineering', period: 'Nov–Jan 2025', status: 'current', description: 'Insertion of designed pathways in lab-grown saplings.' },
    { phase: 'Greenhouse Trials', period: 'Feb–May 2026', status: 'future', description: 'Testing growth performance, safety, and CO₂ capture.' },
    { phase: 'Field Trials (Pilot Scale)', period: 'Jun–Dec 2026', status: 'future', description: 'Real-environment validation in multiple Indian locations.' },
    { phase: 'Scale-up and Partnerships', period: 'Jan 2027 onwards', status: 'future', description: 'Work with restoration and climate orgs to scale planting.' }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-white drop-shadow-lg" />;
      case 'current':
        return <ArrowRightCircle className="w-6 h-6 text-white drop-shadow-lg animate-pulse" />;
      default:
        return <Circle className="w-6 h-6 text-white/70 drop-shadow-lg" />;
    }
  };

  const getStatusGradient = (status) => {
    switch (status) {
      case 'completed':
        return 'from-emerald-500 to-emerald-600';
      case 'current':
        return 'from-purple-400 to-purple-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCardGlow = (status) => {
    switch (status) {
      case 'completed':
        return 'shadow-[0_0_20px_rgba(16,185,129,0.3)]';
      case 'current':
        return 'shadow-[0_0_30px_rgba(206,183,252,0.4)]';
      default:
        return 'shadow-[0_8px_32px_rgba(0,0,0,0.3)]';
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
      
      {/* Floating orbs for atmosphere */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-teal-500/20 to-purple-400/20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gradient-to-r from-purple-400/20 to-teal-500/20 blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-teal-300 via-purple-200 to-teal-300 bg-clip-text drop-shadow-2xl">
            Development Roadmap
          </h2>
          <p className="text-xl text-teal-100/90 font-medium tracking-wide">From R&D to Field Deployment</p>
        </div>

        <div className="space-y-6 relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500 via-purple-400 to-gray-500 opacity-30"></div>
          
          {roadmapItems.map((item, index) => (
            <div key={index} className="relative group">
              <div className="flex items-start gap-8">
                {/* Status indicator */}
                <div className="flex-shrink-0 relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getStatusGradient(item.status)} 
                    flex items-center justify-center shadow-lg transform transition-all duration-300 
                    group-hover:scale-110 group-hover:shadow-xl`}>
                    {getStatusIcon(item.status)}
                  </div>
                </div>
                
                {/* Content card */}
                <div className={`flex-1 backdrop-blur-xl bg-black/40 border border-teal-500/20 
                  rounded-2xl p-8 transition-all duration-500 hover:border-purple-400/30 
                  hover:bg-black/60 transform hover:-translate-y-1 ${getCardGlow(item.status)} 
                  group-hover:shadow-[0_0_40px_rgba(206,183,252,0.2)]`}>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-teal-300 to-purple-200 bg-clip-text">
                      {item.phase}
                    </h3>
                    <span className={`text-sm font-medium px-4 py-2 rounded-full w-fit transition-all duration-300
                      ${item.status === 'completed' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                        item.status === 'current' ? 'bg-purple-500/20 text-purple-200 border border-purple-400/30' :
                        'bg-gray-500/20 text-gray-300 border border-gray-500/30'}`}>
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-teal-100/90 leading-relaxed text-lg font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-black/60 backdrop-blur-xl border border-teal-500/20 rounded-full px-8 py-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
              <span className="text-sm text-teal-200">Completed</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 animate-pulse"></div>
              <span className="text-sm text-purple-200">Current</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-500 to-gray-600"></div>
              <span className="text-sm text-gray-300">Future</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentRoadmap;