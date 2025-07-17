import React, { useState, useEffect } from 'react';
import PolygonStatsGrid from './PolygonStatsGrid';
import WhyUsSection from './WhyUsSection';
import MissionVision from "../components/MissionVision";
import  ContactForm from './ContactForm';

const bgVideo = "https://res.cloudinary.com/dwk7tj6jb/video/upload/dbm3thp2dzkxptkoitit.mp4";

// ✅ Solutions Slider Component
const SolutionsSlider = () => {
  const solutions = [
    { title: "Renewable Energy", description: "Solar, wind, and hydroelectric power solutions" },
    { title: "Carbon Capture", description: "Advanced technologies to remove CO2 from atmosphere" },
    { title: "Ecosystem Restoration", description: "Healing damaged ecosystems and biodiversity" },
    { title: "Sustainable Agriculture", description: "Regenerative farming practices for food security" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % solutions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [solutions.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative approaches to tackle climate change and build a sustainable future
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500/10 to-emerald-500/10 backdrop-blur-sm border border-teal-500/20">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-500 transform ${
                    index === currentIndex
                      ? 'bg-gradient-to-br from-teal-500/20 to-emerald-500/20 scale-105 shadow-lg shadow-teal-500/25'
                      : 'bg-gray-800/50 hover:bg-gray-700/50'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 text-sm">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function HomePage() {
  const [collapseCountdown, setCollapseCountdown] = useState('');
  const [netZeroCountdown, setNetZeroCountdown] = useState('');

  useEffect(() => {
    const collapseDeadline = new Date("2030-01-01T00:00:00Z").getTime();
    const netZeroDeadline = new Date("2050-01-01T00:00:00Z").getTime();

    const updateCountdowns = () => {
      const now = new Date().getTime();

      const getRemainingTime = (deadline) => {
        const distance = deadline - now;

        const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return `${years}Y:${months}M:${days}D:${hours}H:${minutes}M:${seconds}S`;
      };

      setCollapseCountdown(getRemainingTime(collapseDeadline));
      setNetZeroCountdown(getRemainingTime(netZeroDeadline));
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ✅ Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl w-full px-6 sm:px-10 lg:px-20">
          <div className="max-w-4xl">
            <h1 className="text-left text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Healing the past
              </span>
              <br />
              <span className="text-white">crafting new paths</span>
            </h1>
            <p className="text-left text-xl md:text-2xl text-gray-300 mb-8">
              Mission Towards a Sustainable Earth
            </p>
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-full text-lg hover:from-teal-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40"
            >
              Get Update
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Stats Grid */}
      <PolygonStatsGrid collapseCountdown={collapseCountdown} netZeroCountdown={netZeroCountdown} />
             
      {/* ✅ Solutions Slider */}
      <SolutionsSlider />

      {/* ✅ Why Us Section */}
      <WhyUsSection />
      
      {/* ✅ Mission and Vision Section */}
      <MissionVision />
      {/* ✅ Contact Form Section */}
       <ContactForm />

    </div>
  );
}

export default HomePage;
