import React from 'react';
import { TrendingUp, Zap, Droplets, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    { 
      icon: TrendingUp, 
      title: "30% More Carbon Capture", 
      desc: "Significantly increased CO₂ absorption per tree" 
    },
    { 
      icon: Zap, 
      title: "Faster Growth", 
      desc: "Improved sugar availability accelerates development" 
    },
    { 
      icon: Droplets, 
      title: "Water Efficiency", 
      desc: "Slight improvements in water usage" 
    },
    { 
      icon: Shield, 
      title: "Low Genetic Risk", 
      desc: "Builds on existing metabolic processes" 
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">Key Benefits</h2>
          <p className="text-xl text-white-100 max-w-3xl mx-auto">
            C3 Super Trees enhance existing metabolic processes without modifying the entire photosynthetic system, keeping them biologically safe and ecologically compatible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 group">
              <benefit.icon className="w-12 h-12 text-teal-300 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-teal-300">{benefit.title}</h3>
              <p className="text-white-100">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
