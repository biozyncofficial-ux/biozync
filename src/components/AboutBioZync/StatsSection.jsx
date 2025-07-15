import React from "react";
import useCounter from "./useCounter";
import { statsData } from "./data";

const StatCard = ({ value, label }) => {
  const count = useCounter(value, 2000);
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg hover:shadow-green-500/20 transition">
      <p className="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
        {count}+
      </p>
      <p className="text-lg text-gray-300">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-black text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-72 h-72 bg-gradient-to-r from-green-500 to-teal-500 rounded-full blur-3xl top-1/4 left-1/3 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl bottom-1/3 right-1/4 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our{" "}
          <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Impact in Numbers
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
