import React, { useState } from 'react';
import HeroSection from './AboutBioZync/HeroSection';
import StatsSection from './AboutBioZync/StatsSection';
import FoundationTabs from './AboutBioZync/FoundationTabs';
import TechnologiesSection from './AboutBioZync/TechnologiesSection';
import JourneyTimeline from './AboutBioZync/JourneyTimeline';
import FeaturedProjects from './AboutBioZync/FeaturedProjects';
import TestimonialsSection from './AboutBioZync/TestimonialsSection';
import CTASection from './AboutBioZync/CTASection';

function AboutBioZync() {
  const [activeTab, setActiveTab] = useState('mission');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // ✅ Added this state

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-teal via-primary-secondary to-primary-accent text-text-primary">
      <HeroSection isVideoPlaying={isVideoPlaying} setIsVideoPlaying={setIsVideoPlaying} />
      <StatsSection />
      <FoundationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <TechnologiesSection />
      <JourneyTimeline />
      <FeaturedProjects />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

export default AboutBioZync;
