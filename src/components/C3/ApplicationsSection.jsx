import React from 'react';
import { TreePine, Globe, Leaf, Shield, TrendingUp } from 'lucide-react';

const ApplicationsSection = () => {
  const applications = [
    { title: 'Afforestation & Reforestation', description: 'Restoring degraded land with enhanced carbon capture', icon: TreePine },
    { title: 'Urban Forestry', description: 'Green infrastructure projects in cities', icon: Globe },
    { title: 'Agricultural Restoration', description: 'Converting unused farmland to carbon sinks', icon: Leaf },
    { title: 'Climate Initiatives', description: 'Government and CSR climate projects', icon: Shield },
    { title: 'Agroforestry Systems', description: 'Climate-resilient agricultural integration', icon: TrendingUp }
  ];

  return (
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
  );
};

export default ApplicationsSection;