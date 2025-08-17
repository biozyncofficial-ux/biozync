// components/PerformanceTable.jsx
import React from 'react';
import { PERFORMANCE_DATA } from './constants';

const PerformanceTable = () => (
  <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-teal-900/20 via-black/40 to-teal-800/20 backdrop-blur-sm border border-teal-400/20">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-teal-600/30 to-teal-500/30">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-bold text-teal-100 uppercase tracking-wider">Metric</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-teal-100 uppercase tracking-wider">Normal Tree</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-teal-100 uppercase tracking-wider">C4 Super Tree</th>
            <th className="px-6 py-4 text-left text-sm font-bold text-teal-100 uppercase tracking-wider">Targeted Gains</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-teal-400/10">
          {PERFORMANCE_DATA.map((row, index) => (
            <tr key={index} className="hover:bg-teal-900/10 transition-all duration-300">
              <td className="px-6 py-4 text-teal-400 font-medium">{row.metric}</td>
              <td className="px-6 py-4 text-white-200">{row.normalTree}</td>
              <td className="px-6 py-4 text-white-300 font-bold">{row.c4SuperTree}</td>
              <td className="px-6 py-4 text-white-400 font-bold">{row.targetGains}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PerformanceTable;