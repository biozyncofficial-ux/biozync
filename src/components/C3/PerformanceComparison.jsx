import React from 'react';

const PerformanceComparison = () => {
  const performanceData = [
    { metric: 'CO₂ Absorbed/year', c3: '22 kg', superTree: '~30 kg', improvement: '+33%' },
    { metric: 'Biomass Growth Rate', c3: 'Baseline', superTree: '+50%', improvement: 'Faster canopy' },
    { metric: 'Water Efficiency', c3: 'Standard', superTree: '+10%', improvement: 'Slightly improved' },
    { metric: 'Carbon Sequestration', c3: 'Moderate', superTree: 'Long-lasting', improvement: 'Higher stability' }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">Performance Comparison</h2>
          <p className="text-xl text-teal-100">Side-by-side comparison of traditional C3 trees vs C3 Super Trees</p>
        </div>

        <div className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-teal-500/20">
                <th className="text-left py-4 px-6 text-teal-300">Metric</th>
                <th className="text-center py-4 px-6 text-teal-300">C3 Tree</th>
                <th className="text-center py-4 px-6 text-teal-300">C3 Super Tree</th>
                <th className="text-center py-4 px-6 text-teal-300">Improvement</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map((row, index) => (
                <tr key={index} className="border-b border-teal-500/10 hover:bg-teal-500/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-teal-100">{row.metric}</td>
                  <td className="py-4 px-6 text-center text-gray-300">{row.c3}</td>
                  <td className="py-4 px-6 text-center text-teal-300 font-semibold">{row.superTree}</td>
                  <td className="py-4 px-6 text-center text-emerald-400 font-semibold">{row.improvement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PerformanceComparison;