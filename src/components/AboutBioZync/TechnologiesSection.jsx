import React from "react";
import { Cpu, TreePine, Satellite, Database } from "lucide-react";

const TechnologiesSection = () => {
  const technologies = [
    {
      title: "Genetically Enhanced Trees",
      description:
        "Bio-engineered species designed for high CO₂ absorption, rapid growth, and improved resilience to climate stress.",
      icon: TreePine,
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-400/30",
      iconColor: "text-green-400",
    },
    {
      title: "MRV (Monitoring, Reporting & Verification)",
      description:
        "Real-time MRV with geotagging and AI-driven satellite analytics ensures transparency and trust in carbon offset claims.",
      icon: Satellite,
      gradient: "from-blue-500/20 to-indigo-500/20",
      border: "border-blue-400/30",
      iconColor: "text-blue-400",
    },
    {
      title: "BioIntelligent Systems",
      description:
        "Integrating biotechnology with IoT sensors for predictive ecosystem management and precision restoration.",
      icon: Cpu,
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-400/30",
      iconColor: "text-purple-400",
    },
    {
      title: "Data-driven Carbon Registry",
      description:
        "Blockchain-based carbon credit registry that enables auditable, traceable, and secure transactions for green finance.",
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
            Technologies We Use
          </h2>
          <p className="text-lg text-gray-400">
            Cutting-edge science and tech powering our bio-regeneration systems
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
