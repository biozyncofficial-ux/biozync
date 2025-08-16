import React from "react";
import { Sparkles, Users, Lightbulb, Target, Shield } from "lucide-react";

// Step 1: Static gradient map for Tailwind JIT
const gradientMap = {
  gp: "from-[#00C095] to-[#CEB7FC]",
  pg: "from-[#CEB7FC] to-[#00E6B0]",
  gt: "from-[#00E6B0] to-[#CEB7FC]",
  tg: "from-[#CEB7FC] to-[#00C095]",
  gg: "from-[#00C095] to-[#00E6B0]",
};

const JourneyTimeline = () => {
  // Step 2: Changed color values to keys
  const milestones = [
    {
      date: "March 2025",
      title: "Biozync Was Born",
      description:
        "Planted the first seed of our mission — to reengineer trees and restore ecosystems through climate biotech.",
      icon: Sparkles,
      color: "gp",
    },
    {
      date: "April 2025",
      title: "Core Team Formed",
      description:
        "Built a passionate founding team and proposed our first solution to address land degradation and CO₂ capture.",
      icon: Users,
      color: "pg",
    },
    {
      date: "May 2025",
      title: "Research & Validation",
      description:
        "Studied global research on tree genetics, climate restoration, and carbon markets to refine our approach.",
      icon: Lightbulb,
      color: "gt",
    },
    {
      date: "June 2025",
      title: "Business Model Defined",
      description:
        "Mapped our idea into a viable business model and began validating the market opportunity and impact potential.",
      icon: Target,
      color: "tg",
    },
    {
      date: "July 2025",
      title: "Expert Consultations",
      description:
        "Engaged with domain experts in biotechnology and sustainability to refine both our technical and business strategies.",
      icon: Shield,
      color: "gg",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-black text-[#E6FFFA] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#111111]"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#00C095] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#CEB7FC] rounded-full opacity-5 blur-3xl"></div>
      {/* Step 4: Fixed invalid opacity-3 to opacity-5 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00E6B0] rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#00C095]/20 via-[#CEB7FC]/20 to-[#00E6B0]/20 border border-[#00C095]/30 rounded-full text-[#00E6B0] backdrop-blur-sm">
              Our Story
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#00C095] via-[#CEB7FC] to-[#00E6B0] bg-clip-text text-transparent">
            Our Journey
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#B3F5E6] max-w-3xl mx-auto leading-relaxed">
            Key milestones in our mission to regenerate the planet
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#00C095] via-[#CEB7FC] via-[#00E6B0] to-[#00C095] shadow-[0_0_20px_rgba(0,192,149,0.5)]"></div>
          
          {/* Mobile vertical line - Left aligned */}
          <div className="block md:hidden absolute left-8 top-0 h-full w-px bg-gradient-to-b from-[#00C095] via-[#CEB7FC] via-[#00E6B0] to-[#00C095] shadow-[0_0_10px_rgba(0,192,149,0.5)]"></div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-start md:items-center ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  } group`}
                >
                  {/* Mobile layout - all cards left aligned */}
                  <div className="block md:hidden w-full pl-16">
                    <div className="relative bg-gradient-to-br from-[#00C095]/10 via-[#CEB7FC]/5 via-[#00E6B0]/5 to-transparent backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#00C095]/20 hover:border-[#CEB7FC]/40 transition-all duration-500 hover:shadow-[0_12px_48px_rgba(206,183,252,0.25)] group-hover:transform group-hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00C095]/5 via-[#CEB7FC]/5 to-[#00E6B0]/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          {/* Step 3: Fixed mobile icon chip gradient */}
                          <div
                            className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${gradientMap[milestone.color]} mr-4 shadow-[0_0_20px_rgba(206,183,252,0.4)] group-hover:shadow-[0_0_30px_rgba(206,183,252,0.6)] transition-all duration-300`}
                          >
                            <Icon className="text-white" size={20} />
                          </div>
                          <span className="text-sm sm:text-base font-bold text-[#CEB7FC] tracking-wide">
                            {milestone.date}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#E6FFFA] group-hover:text-[#CEB7FC] transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#B3F5E6] leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Mobile dot */}
                    <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-[#00C095] via-[#CEB7FC] to-[#00E6B0] rounded-full border-2 border-black shadow-[0_0_15px_rgba(206,183,252,0.6)] group-hover:shadow-[0_0_25px_rgba(206,183,252,0.8)] transition-all duration-300"></div>
                  </div>

                  {/* Desktop layout - alternating sides */}
                  <div
                    className={`hidden md:block w-full max-w-lg lg:max-w-xl ${
                      index % 2 === 0 
                        ? "pr-8 lg:pr-12 text-right" 
                        : "pl-8 lg:pl-12 text-left"
                    }`}
                  >
                    <div className="relative bg-gradient-to-br from-[#00C095]/10 via-[#CEB7FC]/5 via-[#00E6B0]/5 to-transparent backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-[#00C095]/20 hover:border-[#CEB7FC]/40 transition-all duration-500 hover:shadow-[0_12px_48px_rgba(206,183,252,0.25)] group-hover:transform group-hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00C095]/5 via-[#CEB7FC]/5 to-[#00E6B0]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className={`flex items-center mb-4 ${
                          index % 2 === 0 ? "justify-end" : "justify-start"
                        }`}>
                          {index % 2 === 0 ? (
                            <>
                              <span className="text-base font-bold text-[#CEB7FC] mr-4 tracking-wide">
                                {milestone.date}
                              </span>
                              {/* Step 3: Fixed desktop icon chip gradient */}
                              <div
                                className={`inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-r ${gradientMap[milestone.color]} shadow-[0_0_20px_rgba(206,183,252,0.4)] group-hover:shadow-[0_0_30px_rgba(206,183,252,0.6)] transition-all duration-300`}
                              >
                                <Icon className="text-white" size={24} />
                              </div>
                            </>
                          ) : (
                            <>
                              {/* Step 3: Fixed desktop icon chip gradient */}
                              <div
                                className={`inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-r ${gradientMap[milestone.color]} mr-4 shadow-[0_0_20px_rgba(206,183,252,0.4)] group-hover:shadow-[0_0_30px_rgba(206,183,252,0.6)] transition-all duration-300`}
                              >
                                <Icon className="text-white" size={24} />
                              </div>
                              <span className="text-base font-bold text-[#CEB7FC] tracking-wide">
                                {milestone.date}
                              </span>
                            </>
                          )}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-[#E6FFFA] group-hover:text-[#CEB7FC] transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <p className="text-[#B3F5E6] leading-relaxed text-lg">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop dot on line */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 lg:w-6 lg:h-6 bg-gradient-to-r from-[#00C095] via-[#CEB7FC] to-[#00E6B0] rounded-full border-4 border-black shadow-[0_0_20px_rgba(206,183,252,0.6)] group-hover:shadow-[0_0_30px_rgba(206,183,252,0.8)] transition-all duration-300 group-hover:scale-125"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-16 text-center">
          <div className="inline-block w-24 h-px bg-gradient-to-r from-transparent via-[#CEB7FC] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;