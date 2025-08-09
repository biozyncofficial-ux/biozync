import React from "react";
import { Cpu, TreePine, Satellite, Database } from "lucide-react";

const TechnologiesSection = () => {
  const technologies = [
    {
      title: "Genetically Enhanced Trees",
      description:
      "We develop advanced tree species optimized for fast growth, high CO₂ absorption, and resilience to climate stress, accelerating reforestation and carbon capture.",
      icon: TreePine,
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-400/30",
      iconColor: "text-green-400",
    },
    {
      title: "MRV System",
      description:
      "Our system uses geotagged field data and manual verification to provide real-time monitoring, ensuring transparency and accountability in carbon offset projects.",
      icon: Satellite,
      gradient: "from-blue-500/20 to-indigo-500/20",
      border: "border-blue-400/30",
      iconColor: "text-blue-400",
    },
    {
      title: "BioIntelligent Systems",
      description:
      "By combining biotechnology with ecological modeling and field diagnostics, we enable predictive ecosystem restoration and smarter land management.",
      icon: Cpu,
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-400/30",
      iconColor: "text-purple-400",
    },
    {
      title: "Carbon Credit Registry",
      description:
      "A centralized, secure platform for generating, managing, and verifying traceable carbon credits, streamlining access to green finance and carbon markets.",
      icon: Database,
      gradient: "from-yellow-500/20 to-orange-500/20",
      border: "border-yellow-400/30",
      iconColor: "text-yellow-400",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Our Technology
          </h2>
          <p className="text-lg text-gray-400">
            Pioneering innovations that power large-scale ecological restoration and carbon capture.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl p-6 bg-gradient-to-br ${tech.gradient} backdrop-blur-sm border ${tech.border} hover:scale-105 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center justify-center mb-4">
                  <Icon size={40} className={`${tech.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
