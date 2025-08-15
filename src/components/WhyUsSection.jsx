import React, { useState } from "react";
import { 
  Leaf, 
  Dna, 
  Users, 
  Award, 
  Satellite, 
  Globe,
  ChevronRight,
  Sparkles,
  ArrowRight
} from "lucide-react";

const whyUsData = [
  {
    icon: Leaf,
    title: "Restore Degraded Land",
    desc: "We convert barren, degraded lands into rich, biodiverse forests creating new carbon sinks and reviving local ecosystems.",
    gradient: "from-[#00C095] to-[#00E6B0]",
    iconBg: "bg-gradient-to-br from-[#00C095] to-[#00E6B0]"
  },
  {
    icon: Dna,
    title: "Enhance Tree Genetics",
    desc: "Using advanced biotechnology, we engineer trees with faster growth and higher carbon capture making reforestation far more effective.",
    gradient: "from-[#00A085] to-[#4DDBBA]",
    iconBg: "bg-gradient-to-br from-[#00A085] to-[#4DDBBA]"
  },
  {
    icon: Users,
    title: "Empower SHGs and Communities",
    desc: "We partner with Self-Help Groups (SHGs), training and employing rural women and farmers creating livelihoods with dignity.",
    gradient: "from-[#CEB7FC] to-[#00E6B0]",
    iconBg: "bg-gradient-to-br from-[#CEB7FC] to-[#00E6B0]"
  },
  {
    icon: Award,
    title: "Issue High-Integrity Carbon Credits",
    desc: "Our enhanced forests generate verifiable, transparent carbon credits aligned with Verra and future-ready for global markets.",
    gradient: "from-[#00C095] to-[#4DDBBA]",
    iconBg: "bg-gradient-to-br from-[#00C095] to-[#4DDBBA]"
  },
  {
    icon: Satellite,
    title: "Provide Transparent Monitoring (MRV)",
    desc: "We use satellites, drones, and monitor our project health and carbon removal giving buyers full traceability.",
    gradient: "from-[#008B75] to-[#CEB7FC]",
    iconBg: "bg-gradient-to-br from-[#008B75] to-[#CEB7FC]"
  },
  {
    icon: Globe,
    title: "Scale Globally from India",
    desc: "Starting in India, our model is built to expand across continents combining tech and ecology to help the world reach net zero.",
    gradient: "from-[#00E6B0] to-[#4DDBBA]",
    iconBg: "bg-gradient-to-br from-[#00E6B0] to-[#4DDBBA]"
  },
];

const WhyUsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#111111] text-[#E6FFFA] overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated orbs with improved positioning */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#00C095]/5 rounded-full blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 right-1/3 w-[500px] h-[500px] bg-[#CEB7FC]/5 rounded-full blur-3xl animate-pulse opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#00E6B0]/4 rounded-full blur-3xl animate-pulse opacity-20" style={{animationDelay: '1s'}}></div>
        
        {/* Enhanced floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#00C095] rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
                opacity: 0.15 + Math.random() * 0.25
              }}
            />
          ))}
        </div>

        {/* Mesh gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00C095]/5 to-transparent opacity-30"></div>
      </div>

      <div className="relative z-10 py-32 px-6">
        {/* Enhanced Header Section */}
        <div className="text-center mb-24 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-4 mb-8 px-8 py-4 bg-gradient-to-r from-[#00C095]/15 to-[#CEB7FC]/15 rounded-full border border-[#00C095]/30 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,192,149,0.15)]">
            <Sparkles className="w-6 h-6 text-[#00C095] animate-pulse" />
            <span className="text-[#00C095] font-bold text-lg tracking-wide uppercase">Our Advantages</span>
            <Sparkles className="w-6 h-6 text-[#CEB7FC] animate-pulse" />
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-[#E6FFFA] via-[#00E6B0] to-[#CEB7FC] bg-clip-text text-transparent mb-10 leading-none tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-[#00C095] to-[#00E6B0] bg-clip-text">Us</span>?
          </h2>
          
          <p className="text-2xl text-white max-w-4xl mx-auto leading-relaxed font-light opacity-90">
            Discover how we're revolutionizing carbon removal through innovative technology, 
            community empowerment, and sustainable forest restoration.
          </p>

          {/* Enhanced decorative line */}
          <div className="mt-16 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-[#00C095]/60 to-transparent w-full max-w-lg"></div>
            <div className="mx-6 flex items-center gap-2">
              <div className="w-3 h-3 bg-[#00C095] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#CEB7FC] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-[#00E6B0] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#00C095]/60 to-transparent w-full max-w-lg"></div>
          </div>
        </div>

          {/* Enhanced Cards Grid */}
<div className="max-w-7xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
    {whyUsData.map((item, index) => (
      <div key={index} className="aspect-square">
        <AnimatedCard 
          {...item} 
          index={index}
          delay={index * 0.15}
          isHovered={hoveredIndex === index}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
        />
      </div>
    ))}
  </div>
</div>


        {/* Enhanced Bottom CTA Section */}
        <div className="text-center mt-32">
          <div className="inline-flex flex-col items-center gap-8">
            <div className="group inline-flex items-center gap-6 px-12 py-6 bg-gradient-to-r from-[#00C095]/20 to-[#CEB7FC]/20 rounded-3xl border border-[#00C095]/40 backdrop-blur-lg hover:border-[#00C095]/60 transition-all duration-700 cursor-pointer shadow-[0_12px_48px_rgba(0,192,149,0.15)] hover:shadow-[0_20px_60px_rgba(0,192,149,0.25)]">
              <span className="text-[#00E6B0] font-semibold text-xl">Ready to make an impact?</span>
              <ArrowRight className="w-7 h-7 text-[#00C095] group-hover:translate-x-2 transition-transform duration-500" />
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-[#00C095] rounded-full animate-pulse"></div>
              <div className="w-2.5 h-2.5 bg-[#CEB7FC] rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
              <div className="w-2.5 h-2.5 bg-[#00E6B0] rounded-full animate-pulse" style={{animationDelay: '1.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedCard = ({ 
  icon: Icon, 
  title, 
  desc, 
  gradient, 
  iconBg, 
  index, 
  delay,
  isHovered,
  onHover,
  onLeave 
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl backdrop-blur-lg bg-gradient-to-br from-black/60 via-[#0a0a0a]/40 to-[#111111]/60 border-2 border-[#00C095]/20 hover:border-[#00C095]/50 transition-all duration-700 hover:scale-105 cursor-pointer h-full transform-gpu`}
      style={{
        boxShadow: isHovered 
          ? '0 25px 50px rgba(0, 192, 149, 0.2), 0 0 60px rgba(0, 192, 149, 0.1)' 
          : '0 8px 32px rgba(0, 0, 0, 0.4)',
        transform: `translateY(${index * 3}px)`,
        animation: `fadeInUp 1s ease-out ${delay}s both`
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Enhanced animated background gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
      />
      
      {/* Glowing border effect */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(0, 192, 149, 0.15) 0%, rgba(206, 183, 252, 0.15) 100%)`,
          filter: 'blur(2px)'
        }}
      />
      
      {/* Inner glow effect */}
      <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-[#00C095]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-10 h-full flex flex-col min-h-[450px]">
        {/* Enhanced Icon Section */}
        <div className="mb-10 relative">
          <div
            className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl ${iconBg} shadow-[0_12px_48px_rgba(0,192,149,0.25)] relative overflow-hidden`}
            style={{
              transform: isHovered ? 'scale(1.15) rotate(8deg)' : 'scale(1) rotate(0deg)',
              transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            {/* Icon glow effect */}
            <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Icon className="w-12 h-12 text-white relative z-10" />
          </div>
          
          {/* Enhanced floating number indicator */}
          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00C095] to-[#CEB7FC] flex items-center justify-center shadow-[0_8px_32px_rgba(0,192,149,0.3)]">
            <span className="text-sm font-black text-white">{index + 1}</span>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="flex-1 flex flex-col">
          <h3 
            className="text-2xl font-bold mb-8 text-[#00C095] leading-tight"
            style={{
              transform: isHovered ? 'translateX(12px)' : 'translateX(0px)',
              transition: 'transform 0.5s ease-out'
            }}
          >
            {title}
          </h3>
          
          <p 
            className="text-white leading-relaxed text-lg flex-1 opacity-90"
            style={{
              transform: isHovered ? 'translateX(12px)' : 'translateX(0px)',
              transition: 'transform 0.5s ease-out 0.1s'
            }}
          >
            {desc}
          </p>

          {/* Enhanced hover indicator */}
          <div 
            className="flex items-center gap-4 mt-10 text-[#00C095] font-semibold"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateX(0px) translateY(0px)' : 'translateX(-30px) translateY(10px)',
              transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <span className="text-base tracking-wide">Learn more</span>
            <ChevronRight className="w-6 h-6" />
          </div>
        </div>

        {/* Enhanced corner accent with pulse animation */}
        <div 
          className="absolute bottom-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-30 transition-all duration-700"
          style={{
            background: `linear-gradient(135deg, transparent 50%, ${gradient.includes('#00C095') ? '#00C095' : '#CEB7FC'} 50%)`,
            borderRadius: '0 0 24px 0',
            filter: 'blur(1px)'
          }}
        />

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 rounded-3xl opacity-[0.02] pointer-events-none" 
             style={{backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)', backgroundSize: '20px 20px'}} />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default WhyUsSection;