import React, { useState, useEffect } from 'react';
import PolygonStatsGrid from './PolygonStatsGrid';
import WhyUsSection from './WhyUsSection';
import MissionVision from "../components/MissionVision";
import ContactForm from './ContactForm';
import SolutionsSlider1 from './SolutionsSlider1'; // ✅ Import new component

const bgVideo = "https://res.cloudinary.com/dwk7tj6jb/video/upload/dbm3thp2dzkxptkoitit.mp4";

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

  const scrollToContactForm = () => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/20 to-black/90 z-10"></div>
        {/* Content */}
        <div className="relative z-20 max-w-7xl w-full px-4 sm:px-8 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="text-left text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-snug">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Healing the past
              </span>
              <br />
              <span className="text-white">crafting new paths</span>
            </h1>
            <p className="text-left text-lg md:text-xl text-white-300 mb-6 italic">
              Mission Towards a Sustainable Earth
            </p>
            <button
              onClick={scrollToContactForm}
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-full text-base hover:from-teal-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-md shadow-teal-500/25 hover:shadow-lg hover:shadow-teal-500/40"
            >
              Get Update
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Stats Grid */}
      <PolygonStatsGrid collapseCountdown={collapseCountdown} netZeroCountdown={netZeroCountdown} />
            
      {/* ✅ Solutions Slider */}
      <SolutionsSlider1 />

      {/* ✅ Why Us Section */}
      <WhyUsSection />
      
      {/* ✅ Mission and Vision Section */}
      <MissionVision />
      
      {/* ✅ Contact Form Section */}
      <div id="contact-form">
  <ContactForm />
</div>
    </div>
  );
}

export default HomePage;
