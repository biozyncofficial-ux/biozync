// src/components/PolygonStatsGrid.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const PolygonStatsGrid = ({ collapseCountdown = "05:23:47:12" }) => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedValues, setAnimatedValues] = useState({
    actions: 0,
    savings: 0
  });

  // Counter animation effect
  useEffect(() => {
    const animateCounter = (target, key, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedValues(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, 16);
    };

    const timeout = setTimeout(() => {
      animateCounter(383529, 'actions');
      animateCounter(7436796, 'savings');
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const statsCards = [
    {
      id: 'emissions',
      title: "Global CO₂ Emissions",
      value: "40+ billion tonnes/year",
      description: "Annual carbon dioxide emissions worldwide",
      icon: "🌍",
      gradient: "bg-gradient-to-br from-[#00C095]/20 via-[#00E6B0]/10 to-[#00A085]/20",
      border: "border-[#00C095]/30",
      textColor: "text-[#00E6B0]",
      glowColor: "shadow-[0_0_30px_rgba(0,192,149,0)]"
    },
    {
      id: 'actions',
      title: "Climate Actions",
      value: formatNumber(animatedValues.actions),
      subtitle: "Actions taken worldwide",
      description: "Individual and collective climate actions recorded",
      icon: "⚡",
      gradient: "bg-gradient-to-br from-[#00A085]/20 via-[#00C095]/10 to-[#4DDBBA]/20",
      border: "border-[#00E6B0]/30",
      textColor: "text-[#4DDBBA]",
      glowColor: "shadow-[0_0_30px_rgba(77,219,186,0)]"
    },
    {
      id: 'savings',
      title: "Collectively Saving",
      value: formatNumber(animatedValues.savings),
      subtitle: "KG CO₂eq emissions reduced",
      description: "Total carbon footprint reduction achieved",
      icon: "🌱",
      gradient: "bg-gradient-to-br from-[#00E6B0]/20 via-[#4DDBBA]/10 to-[#00C095]/20",
      border: "border-[#4DDBBA]/30",
      textColor: "text-[#00E6B0]",
      glowColor: "shadow-[0_0_30px_rgba(0,230,176,0)]"
    }
  ];
const CountdownCard = () => (
  <div 
    className={`
      relative group bg-gradient-to-br from-[#00C095]/10 via-[#00E6B0]/5 to-[#00A085]/10 
      backdrop-blur-md border border-[#00C095]/20 rounded-2xl overflow-hidden
      transition-all duration-500 ease-out
      hover:border-[#00E6B0]/40 hover:shadow-[0_0_40px_rgba(0,192,149,0.25)]
      hover:scale-[1.02] hover:-translate-y-1
    `}
    onMouseEnter={() => setHoveredCard('countdown')}
    onMouseLeave={() => setHoveredCard(null)}
  >
    {/* Background pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,192,149,0.3)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,230,176,0.2)_0%,transparent_50%)]"></div>
    </div>
    
    {/* Animated border */}
    <div className="absolute inset-0 rounded-2xl border border-[#00E6B0]/20 animate-pulse"></div>
    
    <div className="relative p-8">
      {/* Icon */}
      <div className="mb-6 flex items-center gap-3">
        <div className="text-3xl">⏰</div>
      </div>
      {/* Countdown Card Header */}
      {/* Title */}
<h3 className="text-lg md:text-xl font-bold text-[#00C095] mb-6 leading-tight">
        Time left to prevent irreversible climate collapse
      </h3>
      
      {/* Countdown Display */}
      <div className="relative">
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-[#00C095]/20 shadow-inner">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00C095] via-[#00E6B0] to-[#4DDBBA] animate-pulse">
              {collapseCountdown}
            </div>
           <div className="text-xs text-white/70 mt-2 tracking-wider uppercase">
              Days : Hours : Minutes : Seconds
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="mt-6">
        <div className="w-full bg-[#00C095]/20 rounded-full h-1.5 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#00C095] to-[#00E6B0] rounded-full animate-pulse w-3/4"></div>
        </div>
      </div>
    </div>
  </div>
);

  const StatCard = ({ card, index }) => (
    <div
      key={card.id}
      className={`
        relative group ${card.gradient} backdrop-blur-md border ${card.border} 
        rounded-2xl overflow-hidden transition-all duration-500 ease-out
        hover:border-[#00E6B0]/50 ${card.glowColor}
        hover:scale-[1.02] hover:-translate-y-1
        ${hoveredCard === card.id ? 'z-10' : 'z-0'}
      `}
      onMouseEnter={() => setHoveredCard(card.id)}
      onMouseLeave={() => setHoveredCard(null)}
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,192,149,0.4)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,230,176,0.3)_0%,transparent_50%)]"></div>
      </div>
      
      {/* Animated border effect */}
      <div className={`absolute inset-0 rounded-2xl border border-[#00C095]/20 transition-opacity duration-500 ${hoveredCard === card.id ? 'opacity-100 animate-pulse' : 'opacity-50'}`}></div>
      
      <div className="relative p-8">
        {/* Icon and indicator */}
        <div className="flex items-start justify-between mb-6">
          <div className="text-3xl">{card.icon}</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#00E6B0] rounded-full animate-pulse"></div>
            <div className="text-xs text-[#B3F5E6]/60 uppercase tracking-wider">Live</div>
          </div>
        </div>
        
        {/* Title */}
       <h3 className="text-lg md:text-xl font-bold text-[#00C095] mb-4 transition-colors duration-300">
          {card.title}
        </h3>
        
        {/* Main value */}
        <div className="mb-3">
          <p className={`text-3xl md:text-4xl font-black white transition-all duration-300 group-hover:scale-105`}>
            {card.value}
          </p>
        </div>
        
        {/* Subtitle */}
        {card.subtitle && (
          <p className="text-white/90 text-sm mb-4 transition-colors duration-300">
            {card.subtitle}
          </p>
        )}
        
        {/* Description */}
       <p className="text-white/80 text-xs leading-relaxed transition-colors duration-300">
          {card.description}
        </p>
        
        {/* Progress indicator */}
        <div className="mt-6">
          <div className="w-full bg-[#00C095]/10 rounded-full h-1 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r from-[#00C095] to-[#00E6B0] rounded-full transition-all duration-1000 ease-out`}
              style={{
                width: hoveredCard === card.id ? '100%' : '70%'
              }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Hover overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#00C095]/5 via-transparent to-[#00E6B0]/5 transition-opacity duration-500 ${hoveredCard === card.id ? 'opacity-100' : 'opacity-0'}`}></div>
    </div>
  );

  return (
    <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#111111] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#00C095]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00E6B0]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00A085]/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#00C095]/10 backdrop-blur-sm border border-[#00C095]/20 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-[#00E6B0] rounded-full animate-pulse"></div>
            <span className="text-[#B3F5E6] text-sm font-medium uppercase tracking-wider">Real-time Impact</span>
          </div>
<h2 className="text-3xl md:text-4xl font-bold white mb-4">
            Global Climate Impact
          </h2>
<p className="text-white max-w-2xl mx-auto">
            Track real-time environmental data and collective action towards a sustainable future
          </p>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          {/* Stats cards */}
          {statsCards.map((card, index) => (
            <StatCard key={card.id} card={card} index={index} />
          ))}
          
          {/* Countdown card */}
          <CountdownCard />
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
      <button
      onClick={() => navigate("/contact")}
      className="group relative bg-gradient-to-r from-[#00C095] to-[#00E6B0] text-[#000000] font-bold py-4 px-8 rounded-xl hover:shadow-[0_0_30px_rgba(0,192,149,0.2)] transition-all duration-300 hover:scale-105"
    >
      <span className="relative z-10">Take Action Now</span>
      <div className="absolute inset-0 bg-gradient-to-r from-[#00E6B0] to-[#4DDBBA] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PolygonStatsGrid;