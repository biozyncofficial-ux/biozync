import React from 'react';

const PolygonStatsGrid = ({ collapseCountdown }) => {
  return (
    <section className="px-4 py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Top Left - CO2 Emissions */}
        <div className="relative bg-gradient-to-br from-green-400/10 to-green-800/20 backdrop-blur border border-green-500/30 p-8 rounded-3xl clip-polygon">
          <img src="/images/earth.png" alt="Earth" className="absolute top-4 left-4 w-20 opacity-80" />
          <h3 className="text-xl md:text-2xl font-semibold text-white">Global CO₂ Emissions</h3>
          <p className="text-3xl md:text-4xl font-bold text-emerald-400">40+ billion tonnes/year</p>
        </div>

        {/* Top Right - Climate Actions */}
        <div className="bg-gradient-to-br from-sky-500/10 to-blue-800/10 backdrop-blur-sm border border-blue-500/20 p-8 rounded-3xl clip-polygon">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Climate Actions</h3>
          <p className="text-4xl font-bold text-sky-300">383,529</p>
          <p className="text-gray-300">Actions taken worldwide</p>
        </div>

        {/* Bottom Left - CO2 Saved */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-green-900/20 backdrop-blur-sm border border-emerald-500/20 p-8 rounded-3xl clip-polygon">
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Collectively Saving</h3>
          <p className="text-4xl font-bold text-emerald-400">7,436,796</p>
          <p className="text-gray-300">KG CO₂eq emissions</p>
        </div>

        {/* Bottom Right - Collapse Countdown */}
        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 p-8 rounded-3xl clip-polygon">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            Time left to prevent irreversible climate collapse
          </h3>
          <div className="bg-black/50 rounded-xl p-4 border border-red-500/30">
            <div className="text-xl md:text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 text-center">
              {collapseCountdown}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolygonStatsGrid;
