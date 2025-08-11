// C4SuperTrees.jsx - Main Component
import React, { useState } from 'react';
import HeroSection from '../components/C4/HeroSection';
import TabNavigation from '../components/C4/TabNavigation';
import { OverviewTab, PerformanceTab, ImpactTab, RoadmapTab, ScienceTab } from '../components/C4/TabContent';
import Footer from '../components/C4/Footer';

const C4SuperTrees = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'performance':
        return <PerformanceTab />;
      case 'impact':
        return <ImpactTab />;
      case 'roadmap':
        return <RoadmapTab />;
      case 'science':
        return <ScienceTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Navigation Tabs */}
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        <div className="space-y-8">
          {renderTabContent()}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default C4SuperTrees;