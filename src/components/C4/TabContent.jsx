// components/TabContent.jsx
import React from 'react';
import * as Icons from 'lucide-react';
import PerformanceTable from './PerformanceTable';
import RoadmapItem from './RoadmapItem';
import { OVERVIEW_BENEFITS, SCIENCE_APPLICATIONS, ROADMAP_PHASES } from './constants';

// Overview Tab Content
export const OverviewTab = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
      <h2 className="text-3xl font-bold text-teal-100 mb-6">What Are C4 Super Trees?</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-white-200 mb-6 leading-relaxed">
            C4 Super Trees are engineered to perform single-cell C4 photosynthesis, inspired by the desert plant <em>Bienertia</em>, 
            which naturally concentrates CO₂ inside a single cell — lowering photorespiration.
          </p>
          <p className="text-white-200 mb-6 leading-relaxed">
            Our goal is to transform standard C3 trees into C4-like trees, making them:
          </p>
          <ul className="space-y-3 text-white-200">
            {OVERVIEW_BENEFITS.map((benefit, index) => {
              const IconComponent = Icons[benefit.icon];
              return (
                <li key={index} className="flex items-start space-x-3">
                  <IconComponent className="w-5 h-5 text-white-400 mt-0.5 flex-shrink-0" />
                  <span>{benefit.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-teal-800/20 to-teal-900/20 rounded-xl p-6 border border-teal-400/20">
          <h3 className="text-xl font-bold text-white-100 mb-4">Expected Benefits</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white-200">CO₂ Capture</span>
              <span className="text-white-400 font-bold">3× more per tree</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white-200">Water Efficiency</span>
              <span className="text-white-400 font-bold">Up to 2× more</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white-200">Heat Resistance</span>
              <span className="text-white-400 font-bold">Extreme conditions</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white-200">Biomass Growth</span>
              <span className="text-white-400 font-bold">2× faster</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-white-300 font-medium italic">
          A moonshot for reforestation — with massive long-term potential.
        </p>
      </div>
    </div>
  </div>
);

// Performance Tab Content
export const PerformanceTab = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-white-100 mb-6">Target Performance (per tree/year)</h2>
    <PerformanceTable />
  </div>
);

// Impact Tab Content
export const ImpactTab = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-white-100 mb-6">Environmental Impact Calculator</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
        <h3 className="text-xl font-bold text-white-100 mb-4">Normal Trees (Annual Impact)</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-white-200">CO₂ absorbed</span>
            <span className="text-white-400 font-bold">22 kg</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white-200">CO₂ sequestered</span>
            <span className="text-white-400 font-bold">~18 kg</span>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-teal-800/30 via-black/40 to-teal-700/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30">
        <h3 className="text-xl font-bold text-white-100 mb-4">C4 Super Trees (Annual Impact)</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-white-200">CO₂ absorbed</span>
            <span className="text-white-300 font-bold">60+ kg</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white-200">CO₂ sequestered</span>
            <span className="text-white-300 font-bold">~54 kg</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
      <h3 className="text-2xl font-bold text-white-100 mb-6">Additional Benefits</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-white-400 mb-2">+38 kg</div>
          <div className="text-white-200">Extra CO₂ absorbed</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white-400 mb-2">+36 kg</div>
          <div className="text-white-200">Extra CO₂ sequestered</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white-400 mb-2">150+ L</div>
          <div className="text-white-200">Water saved per year</div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
      <h3 className="text-2xl font-bold text-white-100 mb-6">Real-World Context</h3>
      <div className="space-y-4 text-white-200">
        <p className="text-lg">
          The extra CO₂ captured by each C4 Super Tree is equivalent to:
        </p>
        <div className="bg-teal-900/20 rounded-xl p-4 border border-teal-400/20">
          <p className="text-teal-300 font-medium">
            🚗 Taking 1 car off the road for a year
          </p>
        </div>
        <p className="text-lg">
          Over 20 years, one C4 tree locks in <span className="font-bold text-white-300">~1.2 tons of CO₂</span> — 
          <span className="font-bold text-white-400"> 3× more than a normal tree</span>
        </p>
      </div>
    </div>
  </div>
);

// Roadmap Tab Content
export const RoadmapTab = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-white -100 mb-6">Development Roadmap From Concept to Field Innovation</h2>
    <div className="space-y-6">
      {ROADMAP_PHASES.map((phase, index) => (
        <RoadmapItem
          key={index}
          phase={phase.phase}
          title={phase.title}
          timeframe={phase.timeframe}
          status={phase.status}
          description={phase.description}
        />
      ))}
    </div>
  </div>
);

// Science Tab Content
export const ScienceTab = () => (
  <div className="space-y-8">
    <div className="bg-gradient-to-br from-teal-900/30 via-black/40 to-teal-800/30 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20">
      <h2 className="text-3xl font-bold text-white-100 mb-6">The Science Behind It</h2>
      <div className="space-y-6">
        <p className="text-white-200 text-lg leading-relaxed">
          <em>Bienertia</em> species naturally evolved to do what no typical tree can: perform C4 photosynthesis in a single cell. 
          By borrowing this rare adaptation, we aim to engineer trees that can overcome the limitations of C3 metabolism — 
          achieving maximum photosynthetic output with minimal water.
        </p>
        
        <div className="bg-gradient-to-br from-teal-800/20 to-teal-900/20 rounded-xl p-6 border border-teal-400/20">
          <h3 className="text-xl font-bold text-white-100 mb-4">Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCIENCE_APPLICATIONS.map((app, index) => {
              const IconComponent = Icons[app.icon];
              return (
                <div key={index} className="flex items-center space-x-3">
                  <IconComponent className="w-5 h-5 text-white-400" />
                  <span className="text-white-200">{app.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </div>
);