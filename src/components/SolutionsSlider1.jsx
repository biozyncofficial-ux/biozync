import React, { useState } from 'react';

const SolutionsSlider = () => {
  const solutions = [
    { title: "Bioengineered Carbon-Capturing Trees", description: "Genetically enhanced trees that absorb CO₂ faster and thrive in challenging environments." },
    { title: "Verified Tree-Based Carbon Credits", description: "Scientifically validated carbon sequestration backed by transparent field data and standards." },
    { title: "Regenerative Reforestation", description: "Restoring degraded ecosystems using native, fast-growing, high-impact species." },
    { title: "Climate-Resilient Tree Design", description: "Engineered trees that grow faster, restore land, and support biodiversity and local livelihoods." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardStyles = `
    /* CSS Variables */
    :root {
      --primary-teal: #00C095;
      --secondary-teal: #00E6B0;
      --accent-teal: #00A085;
      --dark-teal: #008B75;
      --light-teal: #4DDBBA;
      --text-primary: #E6FFFA;
      --text-secondary: #B3F5E6;
      --text-accent: #80EDD1;
      --bg-primary: #000000;
      --bg-secondary: #0a0a0a;
      --bg-tertiary: #111111;
      --glass-bg: rgba(0, 0, 0, 0.7);
      --glass-border: rgba(0, 192, 149, 0.15);
      --shadow-glow: 0 0 30px rgba(0, 192, 149, 0.4);
      --shadow-soft: 0 8px 32px rgba(0, 0, 0, 0.3);
      --shadow-hover: 0 12px 48px rgba(0, 192, 149, 0.25);
      --shadow-intense: 0 0 60px rgba(0, 192, 149, 0.3);
      --gradient-primary: linear-gradient(135deg, #00C095 0%, #00E6B0 100%);
      --gradient-secondary: linear-gradient(135deg, #00A085 0%, #00C095 100%);
      --gradient-accent: linear-gradient(135deg, #00C095 0%, #4DDBBA 100%);
      --gradient-bg: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #111111 100%);
      --gradient-hero: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(10,10,10,0.6) 100%);
      --gradient-card: linear-gradient(135deg, rgba(0, 192, 149, 0.1) 0%, rgba(0, 230, 176, 0.05) 100%);
      --purple-accent: #CEB7FC;
    }

    .solution-card {
      position: relative;
      overflow: hidden;
      border-radius: 16px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      cursor: pointer;
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      backdrop-filter: blur(10px);
    }

    .solution-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient-card);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    .solution-card:hover::before {
      opacity: 1;
    }

    .solution-card.active {
      transform: scale(1.05) translateY(-4px);
      box-shadow: var(--shadow-intense);
      border-color: var(--primary-teal);
    }

    .solution-card.active::before {
      opacity: 0.8;
    }

    .solution-card:hover {
      transform: scale(1.03) translateY(-2px);
      box-shadow: var(--shadow-hover);
      border-color: var(--secondary-teal);
    }

    .solution-card:hover:not(.active) {
      background: rgba(0, 192, 149, 0.05);
    }

    .card-content {
      position: relative;
      z-index: 2;
      padding: 1.5rem;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .card-title {
      color: var(--primary-teal);
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      line-height: 1.3;
      transition: all 0.3s ease;
    }

    .solution-card:hover .card-title {
      color: var(--secondary-teal);
      text-shadow: 0 0 10px rgba(0, 230, 176, 0.3);
    }

    .solution-card.active .card-title {
      color: var(--secondary-teal);
      text-shadow: 0 0 15px rgba(0, 230, 176, 0.4);
    }

    .card-description {
      color: var(--text-primary);
      font-size: 0.875rem;
      line-height: 1.5;
      flex-grow: 1;
      transition: color 0.3s ease;
    }

    .solution-card:hover .card-description {
      color: var(--text-secondary);
    }

    .card-accent {
      position: absolute;
      top: 0;
      right: 0;
      width: 4px;
      height: 100%;
      background: var(--gradient-primary);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .solution-card:hover .card-accent,
    .solution-card.active .card-accent {
      opacity: 1;
    }

    .card-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, var(--primary-teal) 0%, transparent 70%);
      opacity: 0;
      transform: translate(-50%, -50%);
      transition: opacity 0.4s ease;
      z-index: 0;
    }

    .solution-card:hover .card-glow {
      opacity: 0.1;
    }

    .solution-card.active .card-glow {
      opacity: 0.15;
    }

    .progress-indicator {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background: var(--gradient-primary);
      transition: width 0.3s ease;
      opacity: 0;
    }

    .solution-card.active .progress-indicator {
      opacity: 1;
      width: 100%;
    }

    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px rgba(0, 192, 149, 0.3); }
      50% { box-shadow: 0 0 30px rgba(0, 192, 149, 0.5); }
    }

    .solution-card.active {
      animation: pulse-glow 2s ease-in-out infinite;
    }
  `;

  return (
    <>
      <style>{cardStyles}</style>
      <section className="py-20" style={{ background: 'var(--gradient-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Our <span style={{ 
                background: 'var(--gradient-primary)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Solutions</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Innovative approaches to tackle climate change and build a sustainable future
            </p>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl" style={{ 
            background: 'var(--gradient-card)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--glass-border)'
          }}>
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className={`solution-card ${index === currentIndex ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className="card-glow"></div>
                    <div className="card-content">
                      <h3 className="card-title">
                        {solution.title}
                      </h3>
                      <p className="card-description">
                        {solution.description}
                      </p>
                    </div>
                    <div className="card-accent"></div>
                    <div className="progress-indicator"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 opacity-100' 
                    : 'opacity-50 hover:opacity-75'
                }`}
                style={{
                  background: index === currentIndex 
                    ? 'var(--gradient-primary)' 
                    : 'var(--glass-border)'
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsSlider;