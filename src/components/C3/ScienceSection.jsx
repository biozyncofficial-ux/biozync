import React from 'react';

const ScienceSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-teal-500 drop-shadow-lg">The Science Behind It</h2>
        <div className="bg-black/70 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8">
          <p className="text-lg text-white-100 leading-relaxed mb-6">
            Traditional C3 trees lose significant carbon through photorespiration, especially under heat and drought. 
            C3 Super Trees are enhanced to redirect those losses into glucose, reducing waste and increasing net CO₂ assimilation.
          </p>
          <p className="text-lg text-white-100 leading-relaxed">
            This is achieved without a full photosynthetic overhaul, keeping trees ecologically balanced and fast to deploy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;