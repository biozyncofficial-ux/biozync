import React, { useState } from "react";
import { Target, Globe, Award, TrendingUp } from "lucide-react";
import { valuesData } from "./data";

const FoundationTabs = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Our Foundation
          </h2>
          <p className="text-xl text-gray-300">Explore what drives us forward</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: "mission", label: "Mission", icon: Target },
            { id: "vision", label: "Vision", icon: Globe },
            { id: "values", label: "Values", icon: Award },
            { id: "impact", label: "Impact", icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={20} className="mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          {activeTab === "mission" && (
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <Target className="mr-3 text-purple-400" size={32} />
                Our Mission
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
                To engineer bio‑intelligent systems that regenerate ecosystems and create a circular economy.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-400/30">
                  <h4 className="text-xl font-semibold mb-3 text-green-300">Degraded Land Restored</h4>
                  <p className="text-gray-300">
                    We create self‑sustaining bio‑systems that transform barren landscapes into thriving ecosystems.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-400/30">
                  <h4 className="text-xl font-semibold mb-3 text-blue-300">Carbon Sequestration</h4>
                  <p className="text-gray-300">
                    We develop high‑efficiency plant systems that capture and store atmospheric CO₂.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 flex items-center justify-center">
                <Globe className="mr-3 text-purple-400" size={32} />
                Our Vision
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
                To build a world where nature and technology regenerate ecosystems together.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    100+
                  </p>
                  <p className="text-gray-300">Regenerative Systems</p>
                </div>
                <div>
                  <p className="text-5xl font-bold bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    50+
                  </p>
                  <p className="text-gray-300">Global Partnerships</p>
                </div>
                <div>
                  <p className="text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    ∞
                  </p>
                  <p className="text-gray-300">Open Innovation</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "values" && (
            <div className="grid md:grid-cols-2 gap-6 text-center">
              {valuesData.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div
                    key={i}
                    className={`bg-gradient-to-br ${value.gradient} bg-opacity-20 rounded-xl p-6 border border-white/20`}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <Icon className="mr-3 text-white" size={24} />
                      <h4 className="text-xl font-semibold text-white">{value.title}</h4>
                    </div>
                    <p className="text-gray-200">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === "impact" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-400/30">
                <h4 className="text-xl font-semibold mb-4 text-green-300">Environmental Impact</h4>
                <p className="text-gray-300">Carbon Sequestered: 1,250+ tons</p>
                <p className="text-gray-300">Biodiversity Restored: 8 ecosystems</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-400/30">
                <h4 className="text-xl font-semibold mb-4 text-blue-300">Social Impact</h4>
                <p className="text-gray-300">Communities Empowered: 23</p>
                <p className="text-gray-300">Green Jobs Created: 150+</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FoundationTabs;
