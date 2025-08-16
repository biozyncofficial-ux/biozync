import React, { useState } from 'react';
import { TreePine, Globe, Leaf, Shield, TrendingUp } from 'lucide-react';

const ApplicationsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const applications = [
    { 
      title: 'Afforestation & Reforestation', 
      description: 'Restoring degraded land with enhanced carbon capture', 
      icon: TreePine,
      gradient: 'from-primary-teal to-secondary-teal'
    },
    { 
      title: 'Urban Forestry', 
      description: 'Green infrastructure projects in cities', 
      icon: Globe,
      gradient: 'from-secondary-teal to-light-teal'
    },
    { 
      title: 'Agricultural Restoration', 
      description: 'Converting unused farmland to carbon sinks', 
      icon: Leaf,
      gradient: 'from-accent-teal to-primary-teal'
    },
    { 
      title: 'Climate Initiatives', 
      description: 'Government and CSR climate projects', 
      icon: Shield,
      gradient: 'from-dark-teal to-accent-teal'
    },
    { 
      title: 'Agroforestry Systems', 
      description: 'Climate-resilient agricultural integration', 
      icon: TrendingUp,
      gradient: 'from-light-teal to-secondary-teal'
    }
  ];

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-primary-teal to-secondary-teal rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary-teal/20 via-secondary-teal/10 to-transparent blur-3xl opacity-50"></div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block relative mb-6">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-primary-teal via-secondary-teal to-light-teal bg-clip-text leading-tight">
              Applications
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-teal to-transparent opacity-60"></div>
          </div>
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Diverse deployment opportunities for maximum climate impact
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary-teal"></div>
            <div className="w-3 h-3 border border-secondary-teal rounded-full animate-pulse"></div>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary-teal"></div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className="relative h-full bg-glass-bg backdrop-blur-xl border border-glass-border rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-primary-teal/40 hover:shadow-shadow-hover">
                
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/5 via-transparent to-secondary-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/10 via-transparent to-secondary-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-teal/20 to-secondary-teal/20 backdrop-blur-sm border border-primary-teal/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <app.icon className="w-8 h-8 text-secondary-teal group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    {/* Icon Glow */}
                    <div className="absolute inset-0 bg-primary-teal/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                  </div>

                  {/* Title */}
<h3 className="text-2xl font-bold mb-4 transition-colors duration-300"
    style={{ color: "#00C095" }}>
  {app.title}
</h3>

                  {/* Description */}
<p className="transition-colors duration-300 leading-relaxed"
   style={{ color: "#FFFFFF" }}>
  {app.description}
</p>

                  {/* Bottom Accent Line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-primary-teal/0 via-primary-teal/40 to-primary-teal/0 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-teal via-secondary-teal to-primary-teal opacity-30 blur-sm"></div>
                </div>
              </div>

              {/* Enhanced Hover Shadow */}
              <div className="absolute inset-0 bg-primary-teal/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 transform scale-105"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            {applications.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'bg-secondary-teal w-8' 
                    : 'bg-primary-teal/50 hover:bg-primary-teal'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Custom CSS Variables Integration */
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
        }

        .text-primary-teal { color: var(--primary-teal); }
        .text-secondary-teal { color: var(--secondary-teal); }
        .text-text-primary { color: var(--text-primary); }
        .text-text-secondary { color: var(--text-secondary); }
        .bg-glass-bg { background-color: var(--glass-bg); }
        .border-glass-border { border-color: var(--glass-border); }
        .border-primary-teal\\/40 { border-color: rgba(0, 192, 149, 0.4); }
        .bg-primary-teal\\/5 { background-color: rgba(0, 192, 149, 0.05); }
        .bg-secondary-teal\\/5 { background-color: rgba(0, 230, 176, 0.05); }
        .bg-primary-teal\\/10 { background-color: rgba(0, 192, 149, 0.1); }
        .bg-secondary-teal\\/10 { background-color: rgba(0, 230, 176, 0.1); }
        .bg-primary-teal\\/20 { background-color: rgba(0, 192, 149, 0.2); }
        .bg-secondary-teal\\/20 { background-color: rgba(0, 230, 176, 0.2); }
        .bg-primary-teal\\/30 { background-color: rgba(0, 192, 149, 0.3); }
        .border-primary-teal\\/30 { border-color: rgba(0, 192, 149, 0.3); }
        .from-primary-teal\\/0 { --tw-gradient-from: rgba(0, 192, 149, 0); }
        .via-primary-teal\\/40 { --tw-gradient-via: rgba(0, 192, 149, 0.4); }
        .to-primary-teal\\/0 { --tw-gradient-to: rgba(0, 192, 149, 0); }
        .shadow-shadow-hover { box-shadow: var(--shadow-hover); }
      `}</style>
    </section>
  );
};

export default ApplicationsSection;