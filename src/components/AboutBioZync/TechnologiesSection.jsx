import React from "react";
import { Cpu, TreePine, Satellite, Database } from "lucide-react";

const TechnologiesSection = () => {
  const technologies = [
    {
      title: "Genetically Enhanced Trees",
      description:
        "We develop advanced tree species optimized for fast growth, high CO₂ absorption, and resilience to climate stress, accelerating reforestation and carbon capture.",
      icon: TreePine,
      gradient: "from-teal-500/10 via-emerald-500/5 to-transparent",
      border: "border-teal-400/20 hover:border-teal-400/40",
      iconColor: "text-teal-400 group-hover:text-teal-300",
      glowColor: "group-hover:drop-shadow-[0_0_20px_rgba(0,192,149,0.4)]",
      bgOverlay: "bg-gradient-to-br from-teal-500/5 to-transparent",
    },
    {
      title: "MRV System", 
      description:
        "Our system uses geotagged field data and manual verification to provide real-time monitoring, ensuring transparency and accountability in carbon offset projects.",
      icon: Satellite,
      gradient: "from-purple-500/10 via-teal-500/5 to-transparent",
      border: "border-purple-400/20 hover:border-purple-400/40",
      iconColor: "text-purple-300 group-hover:text-purple-200",
      glowColor: "group-hover:drop-shadow-[0_0_20px_rgba(206,183,252,0.4)]",
      bgOverlay: "bg-gradient-to-br from-purple-500/5 to-transparent",
    },
    {
      title: "BioIntelligent Systems",
      description:
        "By combining biotechnology with ecological modeling and field diagnostics, we enable predictive ecosystem restoration and smarter land management.",
      icon: Cpu,
      gradient: "from-teal-400/10 via-cyan-500/5 to-transparent",
      border: "border-teal-300/20 hover:border-teal-300/40",
      iconColor: "text-teal-300 group-hover:text-teal-200",
      glowColor: "group-hover:drop-shadow-[0_0_20px_rgba(0,230,176,0.4)]",
      bgOverlay: "bg-gradient-to-br from-teal-400/5 to-transparent",
    },
    {
      title: "Carbon Credit Registry",
      description:
        "A centralized, secure platform for generating, managing, and verifying traceable carbon credits, streamlining access to green finance and carbon markets.",
      icon: Database,
      gradient: "from-emerald-500/10 via-teal-600/5 to-transparent",
      border: "border-emerald-400/20 hover:border-emerald-400/40",
      iconColor: "text-emerald-400 group-hover:text-emerald-300",
      glowColor: "group-hover:drop-shadow-[0_0_20px_rgba(52,211,153,0.4)]",
      bgOverlay: "bg-gradient-to-br from-emerald-500/5 to-transparent",
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden" style={{ 
      background: 'var(--bg-primary)',
      backgroundImage: 'var(--gradient-bg)'
    }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-teal-500/20 to-transparent blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500/15 to-transparent blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-gradient-to-r from-teal-400/10 to-transparent blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Enhanced Heading */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent leading-tight">
              Our Technology
            </h2>
            <div className="h-1 w-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-teal-400 to-emerald-100"></div>
          </div>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light" style={{ color: 'var(--text-secondary)' }}>
            Pioneering innovations that power large-scale ecological restoration and carbon capture.
          </p>
        </div>

        {/* Enhanced Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-3xl p-8 bg-gradient-to-br ${tech.gradient} backdrop-blur-xl border-2 ${tech.border} hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer overflow-hidden`}
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: 'var(--shadow-soft)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
                }}
              >
                {/* Background overlay */}
                <div className={`absolute inset-0 ${tech.bgOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent animate-pulse"></div>
                
                <div className="relative z-10">
                  {/* Icon container with enhanced styling */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <Icon 
                        size={48} 
                        className={`${tech.iconColor} ${tech.glowColor} transition-all duration-300`}
                        strokeWidth={1.5}
                      />
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-current/10 to-transparent blur-sm"></div>
                    </div>
                  </div>

                  {/* Title with enhanced typography */}
                  <h3 className="text-2xl font-bold mb-4 leading-tight text-green-500 group-hover:text-green-600 transition-colors duration-300">
  {tech.title}
</h3>

                  {/* Description with improved readability */}
                  <p className="text-base leading-relaxed font-medium group-hover:text-white/90 transition-colors duration-300" 
                     style={{ color: 'var(--text-accent)' }}>
                    {tech.description}
                  </p>

                  {/* Subtle bottom accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-teal-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full bg-teal-400/40 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .group:hover {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TechnologiesSection;