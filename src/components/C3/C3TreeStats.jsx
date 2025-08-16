import React from 'react';
import { TrendingUp, Zap, Clock } from 'lucide-react';

const C3TreeStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '+33%',
      label: 'More CO₂ Capture'
    },
    {
      icon: Zap,
      value: '+50%',
      label: 'Faster Growth'
    },
    {
      icon: Clock,
      value: '2026',
      label: 'Field-Pilot Ready'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-shadow duration-300"
        >
          <stat.icon className="w-8 h-8 text-teal-600 mb-3 mx-auto" />
          <div className="text-3xl font-bold text-white-300 mb-2">{stat.value}</div>
          <div className="text-sm text-white-100">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default C3TreeStats;