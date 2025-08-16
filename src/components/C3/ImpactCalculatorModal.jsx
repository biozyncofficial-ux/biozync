import React from 'react';

const ImpactCalculatorModal = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <section id="impact-calculator" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8 shadow-lg shadow-teal-500/20">
          {/* Title */}
          <h3 className="text-3xl font-bold mb-8 text-center text-[#00C095] drop-shadow-lg">
            Environmental Impact Calculator
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Normal Trees */}
            <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/5 rounded-2xl p-6 border border-teal-500/20">
              <h4 className="text-xl font-semibold mb-4 text-[#00C095]">
                Normal Trees (Annual Impact)
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white">CO₂ Absorbed:</span>
                  <span className="text-white font-semibold">22 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">CO₂ Sequestered:</span>
                  <span className="text-white font-semibold">~18 kg</span>
                </div>
              </div>
            </div>

            {/* C3 Super Trees */}
            <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/5 rounded-2xl p-6 border border-teal-500/20 shadow-lg shadow-teal-500/20">
              <h4 className="text-xl font-semibold mb-4 text-[#00C095]">
                C3 Super Trees (Annual Impact)
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white">CO₂ Absorbed:</span>
                  <span className="text-emerald-400 font-semibold">30+ kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">CO₂ Sequestered:</span>
                  <span className="text-emerald-400 font-semibold">~26 kg</span>
                </div>
              </div>
            </div>
          </div>

          {/* Real-World Context */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-6 text-black">
              <h4 className="text-2xl font-bold mb-4 text-[#00C095]">
                Real-World Context
              </h4>
              <p className="text-lg mb-2 text-white">
                Each C3 Super Tree's extra CO₂ capture equals:
              </p>
              <p className="text-lg font-semibold text-white">
                Offsetting 1,000 km on a petrol scooter
              </p>
              <p className="text-lg font-semibold text-white">
                Over 20 years: 520 kg CO₂ locked away
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCalculatorModal;
