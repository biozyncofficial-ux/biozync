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
        return <CheckCircle className="w-6 h-6 text-white" />;
      case 'current':
        return <ArrowRightCircle className="w-6 h-6 text-white" />;
      default:
        return <Circle className="w-6 h-6 text-white" />;
    }
  };

  return (
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
  );
};

export default DevelopmentRoadmap;