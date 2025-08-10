import React, { useState } from 'react';

// Import all modular components
import HeroSection from '../components/C3/HeroSection.jsx';
import BenefitsSection from '../components/C3/BenefitsSection';
import PerformanceComparison from '../components/C3/PerformanceComparison';
import EnvironmentalCalculator from '../components/C3/EnvironmentalCalculator';
import ImpactCalculatorModal from '../components/C3/ImpactCalculatorModal';
import DevelopmentRoadmap from '../components/C3/DevelopmentRoadmap';
import ApplicationsSection from '../components/C3/ApplicationsSection';
import ScienceSection from '../components/C3/ScienceSection';
import FooterSection from '../components/C3/FooterSection';

const C3SuperTreesLanding = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleCalculatorToggle = () => {
    setIsCalculatorOpen(!isCalculatorOpen);
    if (!isCalculatorOpen) {
      setTimeout(() => {
        document.getElementById('impact-calculator')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection onCalculateClick={handleCalculatorToggle} />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Performance Comparison */}
      <PerformanceComparison />

      {/* Environmental Impact Calculator */}
      <EnvironmentalCalculator />

      {/* Impact Calculator Modal */}
      <ImpactCalculatorModal isOpen={isCalculatorOpen} />

      {/* Development Roadmap */}
      <DevelopmentRoadmap />

      {/* Applications */}
      <ApplicationsSection />

      {/* The Science Behind It */}
      <ScienceSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default C3SuperTreesLanding;