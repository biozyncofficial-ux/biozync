import React from "react";
import { Sparkles, Users, Lightbulb, Target, Shield } from "lucide-react";

const JourneyTimeline = () => {
  const milestones = [
    {
      date: "March 2025",
      title: "BioZync Was Born",
      description:
        "Planted the first seed of our mission — to reengineer trees and restore ecosystems through climate biotech.",
      icon: Sparkles,
      color: "from-purple-400 to-pink-400",
    },
    {
      date: "April 2025",
      title: "Core Team Formed",
      description:
        "Built a passionate founding team and proposed our first solution to address land degradation and CO₂ capture.",
      icon: Users,
      color: "from-teal-400 to-cyan-400",
    },
    {
      date: "May 2025",
      title: "Research & Validation",
      description:
        "Studied global research on tree genetics, climate restoration, and carbon markets to refine our approach.",
      icon: Lightbulb,
      color: "from-yellow-400 to-orange-400",
    },
    {
      date: "June 2025",
      title: "Business Model Defined",
      description:
        "Mapped our idea into a viable business model and began validating the market opportunity and impact potential.",
      icon: Target,
      color: "from-green-400 to-emerald-400",
    },
    {
      date: "July 2025",
      title: "Expert Consultations",
      description:
        "Engaged with domain experts in biotechnology and sustainability to refine both our technical and business strategies.",
      icon: Shield,
      color: "from-blue-400 to-indigo-400",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <p className="text-lg text-gray-400">
            Key milestones in our mission to regenerate the planet
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`w-full max-w-md ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div
                          className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${milestone.color} mr-3`}
                        >
                          <Icon className="text-white" size={20} />
                        </div>
                        <span className="text-sm font-semibold text-purple-300">
                          {milestone.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot on line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-black"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
