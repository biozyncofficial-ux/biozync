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
    bgGlow: "bg-[#00C095]/5",
    borderColor: "border-[#00C095]/20",
    hoverBorder: "hover:border-[#00C095]/40",
    iconBg: "bg-gradient-to-br from-[#00C095] to-[#00E6B0]"
  },
  {
    icon: Dna,
    title: "Enhance Tree Genetics",
    desc: "Using advanced biotechnology, we engineer trees with faster growth and higher carbon capture making reforestation far more effective.",
    gradient: "from-[#00A085] to-[#4DDBBA]",
    bgGlow: "bg-[#00A085]/5",
    borderColor: "border-[#00A085]/20",
    hoverBorder: "hover:border-[#00A085]/40",
    iconBg: "bg-gradient-to-br from-[#00A085] to-[#4DDBBA]"
  },
  {
    icon: Users,
    title: "Empower SHGs and Communities",
    desc: "We partner with Self-Help Groups (SHGs), training and employing rural women and farmers creating livelihoods with dignity.",
    gradient: "from-[#CEB7FC] to-[#00E6B0]",
    bgGlow: "bg-[#CEB7FC]/5",
    borderColor: "border-[#CEB7FC]/20",
    hoverBorder: "hover:border-[#CEB7FC]/40",
    iconBg: "bg-gradient-to-br from-[#CEB7FC] to-[#00E6B0]"
  },
  {
    icon: Award,
    title: "Issue High-Integrity Carbon Credits",
    desc: "Our enhanced forests generate verifiable, transparent carbon credits aligned with Verra and future-ready for global markets.",
    gradient: "from-[#00C095] to-[#4DDBBA]",
    bgGlow: "bg-[#4DDBBA]/5",
    borderColor: "border-[#4DDBBA]/20",
    hoverBorder: "hover:border-[#4DDBBA]/40",
    iconBg: "bg-gradient-to-br from-[#00C095] to-[#4DDBBA]"
  },
  {
    icon: Satellite,
    title: "Provide Transparent Monitoring (MRV)",
    desc: "We use satellites, drones, and monitor our project health and carbon removal giving buyers full traceability.",
    gradient: "from-[#008B75] to-[#CEB7FC]",
    bgGlow: "bg-[#008B75]/5",
    borderColor: "border-[#008B75]/20",
    hoverBorder: "hover:border-[#008B75]/40",
    iconBg: "bg-gradient-to-br from-[#008B75] to-[#CEB7FC]"
  },
  {
    icon: Globe,
    title: "Scale Globally from India",
    desc: "Starting in India, our model is built to expand across continents combining tech and ecology to help the world reach net zero.",
    gradient: "from-[#00E6B0] to-[#4DDBBA]",
    bgGlow: "bg-[#00E6B0]/5",
    borderColor: "border-[#00E6B0]/20",
    hoverBorder: "hover:border-[#00E6B0]/40",
    iconBg: "bg-gradient-to-br from-[#00E6B0] to-[#4DDBBA]"
  },
];

const WhyUsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-[#0a0a0a] to-[#111111] text-[#E6FFFA] overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00C095]/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#CEB7FC]/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#00E6B0]/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#00C095] rounded-full animate-pulse opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 py-24 px-6">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-[#00C095]/10 to-[#CEB7FC]/10 rounded-full border border-[#00C095]/20 backdrop-blur-sm">
            <Sparkles className="w-6 h-6 text-[#00C095] animate-pulse" />
            <span className="text-[#00C095] font-bold text-lg tracking-wide uppercase">Our Advantages</span>
            <Sparkles className="w-6 h-6 text-[#CEB7FC] animate-pulse" />
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-[#E6FFFA] via-[#00E6B0] to-[#CEB7FC] bg-clip-text text-transparent mb-8 leading-tight">
            Why Choose <span className="text-[#00C095]">Us</span>?
          </h2>
          
          <p className="text-xl text-[#B3F5E6] max-w-3xl mx-auto leading-relaxed font-light">
            Discover how we're revolutionizing carbon removal through innovative technology, 
            community empowerment, and sustainable forest restoration.
          </p>

          {/* Decorative line */}
          <div className="mt-12 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-[#00C095]/50 to-transparent w-full max-w-md"></div>
            <div className="mx-4 w-3 h-3 bg-[#00C095] rounded-full animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#00C095]/50 to-transparent w-full max-w-md"></div>
          </div>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {whyUsData.map((item, index) => (
              <AnimatedCard 
                key={index} 
                {...item} 
                index={index}
                delay={index * 0.1}
                isHovered={hoveredIndex === index}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className="text-center mt-24">
          <div className="inline-flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#00C095]/10 to-[#CEB7FC]/10 rounded-2xl border border-[#00C095]/30 backdrop-blur-sm hover:border-[#00C095]/50 transition-all duration-500 cursor-pointer group">
              <span className="text-[#00E6B0] font-semibold text-lg">Ready to make an impact?</span>
              <ArrowRight className="w-6 h-6 text-[#00C095] group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            
            <div className="flex items-center gap-2 opacity-60">
              <div className="w-2 h-2 bg-[#00C095] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#CEB7FC] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-[#00E6B0] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
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
  bgGlow, 
  borderColor, 
  hoverBorder, 
  iconBg, 
  index, 
  delay,
  isHovered,
  onHover,
  onLeave 
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl backdrop-blur-md ${bgGlow} ${borderColor} ${hoverBorder} border-2 transition-all duration-700 hover:scale-[1.02] cursor-pointer h-full`}
      style={{
        boxShadow: isHovered ? '0 25px 50px rgba(0, 192, 149, 0.15)' : '0 8px 32px rgba(0, 0, 0, 0.3)',
        transform: `translateY(${index * 2}px)`,
        animation: `fadeInUp 0.8s ease-out ${delay}s both`
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Enhanced animated background gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
      />
      
      {/* Glowing border effect */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(135deg, rgba(0, 192, 149, 0.1) 0%, rgba(206, 183, 252, 0.1) 100%)`,
          filter: 'blur(1px)'
        }}
      />
      
      <div className="relative p-8 h-full flex flex-col min-h-[400px]">
        {/* Enhanced Icon Section */}
        <div className="mb-8 relative">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${iconBg} shadow-lg relative overflow-hidden`}
            style={{
              transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
              transition: 'transform 0.5s ease-out'
            }}
          >
            {/* Icon glow effect */}
            <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Icon className="w-10 h-10 text-white relative z-10" />
          </div>
          
          {/* Floating number indicator */}
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#00C095] to-[#CEB7FC] flex items-center justify-center shadow-lg">
            <span className="text-xs font-black text-white">{index + 1}</span>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="flex-1 flex flex-col">
          <h3 
            className="text-2xl font-bold mb-6 text-[#E6FFFA] group-hover:text-[#00E6B0] transition-colors duration-500 leading-tight"
            style={{
              transform: isHovered ? 'translateX(8px)' : 'translateX(0px)',
              transition: 'transform 0.4s ease-out'
            }}
          >
            {title}
          </h3>
          
          <p 
            className="text-[#B3F5E6] leading-relaxed text-base group-hover:text-[#80EDD1] transition-colors duration-500 flex-1"
            style={{
              transform: isHovered ? 'translateX(8px)' : 'translateX(0px)',
              transition: 'transform 0.4s ease-out 0.1s'
            }}
          >
            {desc}
          </p>

          {/* Enhanced hover indicator */}
          <div 
            className="flex items-center gap-3 mt-8 text-[#00C095] font-semibold"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateX(0px)' : 'translateX(-20px)',
              transition: 'all 0.4s ease-out'
            }}
          >
            <span className="text-sm tracking-wide">Learn more</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>

        {/* Subtle corner accent */}
        <div 
          className="absolute bottom-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, transparent 50%, ${gradient.includes('#00C095') ? '#00C095' : '#CEB7FC'} 50%)`,
            borderRadius: '0 0 24px 0'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default WhyUsSection;