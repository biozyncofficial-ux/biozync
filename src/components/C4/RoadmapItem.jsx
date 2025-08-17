// components/RoadmapItem.jsx
import React from 'react';
import { CheckCircle2, Clock } from 'lucide-react';

const RoadmapItem = ({ phase, title, timeframe, status, description }) => (
  <div className="relative flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-teal-900/20 via-black/40 to-teal-800/20 backdrop-blur-sm border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
    <div className="flex-shrink-0">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
          status === "completed"
            ? "bg-teal-500 text-white"
            : status === "in-progress"
            ? "bg-teal-400 text-black"
            : "bg-teal-800 text-teal-200"
        }`}
      >
        {status === "completed" ? (
          <CheckCircle2 size={16} />
        ) : status === "in-progress" ? (
          <Clock size={16} />
        ) : (
          phase
        )}
      </div>
    </div>
    <div className="flex-1">
      <div className="flex items-center justify-between mb-2">
        {/* Title in teal */}
        <h4 className="text-lg font-bold text-teal-400">{title}</h4>
        <span className="text-sm text-white bg-teal-900/30 px-3 py-1 rounded-full">
          {timeframe}
        </span>
      </div>
      {/* Description in white */}
      <p className="text-white text-sm">{description}</p>
    </div>
  </div>
);

export default RoadmapItem;
