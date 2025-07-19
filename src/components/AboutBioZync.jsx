import React, { useState } from "react";

// Sections
import HeroSection from "./AboutBioZync/HeroSection";
import StatsSection from "./AboutBioZync/StatsSection";
import FoundationTabs from "./AboutBioZync/FoundationTabs";
import TechnologiesSection from "./AboutBioZync/TechnologiesSection";
import JourneyTimeline from "./AboutBioZync/JourneyTimeline";
import FeaturedProjects from "./AboutBioZync/FeaturedProjects";
import TestimonialsSection from "./AboutBioZync/TestimonialsSection";
import TeamSection from "./AboutBioZync/TeamSection"; // ✅ Added Team Section
import CTASection from "./AboutBioZync/CTASection";

function AboutBioZync() {
  const [activeTab, setActiveTab] = useState("mission");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black text-text-primary">
      {/* Hero Section with video control */}
      <HeroSection
        isVideoPlaying={isVideoPlaying}
        setIsVideoPlaying={setIsVideoPlaying}
      />

      {/* Key Stats */}
      <StatsSection />

      {/* Foundation Tabs */}
      <FoundationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Technologies */}
      <TechnologiesSection />

      {/* Journey Timeline */}
      <JourneyTimeline />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* ✅ Team Section */}
      <TeamSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Call-to-Action */}
      <CTASection />
    </div>
  );
}

export default AboutBioZync;
