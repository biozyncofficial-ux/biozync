//products.jsx
//src/pages/Products.jsx
// BioZync Products Page
// This page showcases BioZync's innovative products with a focus on sustainability and eco-technology
import React, { useState, useEffect } from 'react';

export default function Products() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const products = [
    {
      id: 'c3SuperTree',
      icon: '🌳',
      title: 'C3 Super Trees',
      description:
        'Smart trees designed for near-term climate impact by recycling photorespiration byproducts into sugars. C3 Super Trees offer improved CO₂ absorption and faster growth without compromising ecological balance.',
      features: [
        'Up to 30% more CO₂ absorption',
        'Improved sugar recycling for growth',
        'Field-pilot ready by 2026',
        'Low genetic risk, high ecological safety'
      ],
      link: '/products/c3SuperTree'
    },
    {
      id: 'c4SuperTree',
      icon: '🌲',
      title: 'C4 Super Trees',
      description:
        'Next-generation bioengineered trees utilizing advanced C4 photosynthesis pathways. These remarkable organisms absorb 200% more CO₂ while producing 150% more oxygen than traditional trees, accelerating ecosystem restoration and air purification.',
      features: [
        '3× CO₂ absorption capacity',
        '70% faster biomass growth',
        'Thrives in heat & drought',
        'Ultra-resilient for harsh climates'
      ],
      link: '/products/c4SuperTree'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Custom CSS Variables */}
      <style jsx>{`
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
        }
        
        .bg-particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }
        
        .bg-particle-1 {
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, var(--primary-teal) 0%, transparent 70%);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .bg-particle-2 {
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, var(--secondary-teal) 0%, transparent 70%);
          top: 60%;
          right: 15%;
          animation-delay: -2s;
        }
        
        .bg-particle-3 {
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, var(--light-teal) 0%, transparent 70%);
          bottom: 20%;
          left: 20%;
          animation-delay: -4s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .grid-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: 
            linear-gradient(rgba(0, 192, 149, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 192, 149, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .glass-card {
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(0, 192, 149, 0.15);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          border-color: rgba(0, 192, 149, 0.3);
          box-shadow: 0 20px 40px rgba(0, 192, 149, 0.1);
        }
        
        .glow-text {
          text-shadow: 0 0 20px rgba(0, 192, 149, 0.5);
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .feature-check {
          color: var(--primary-teal);
          font-weight: bold;
          margin-right: 8px;
        }
      `}</style>

      {/* Dynamic background particles */}
      <div className="bg-particle bg-particle-1"></div>
      <div className="bg-particle bg-particle-2"></div>
      <div className="bg-particle bg-particle-3"></div>

      {/* Subtle grid pattern overlay */}
      <div className="grid-overlay"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 mb-6 glass-card rounded-full">
            <span className="text-2xl mr-2">🌍</span>
            <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
              Revolutionary Green Technology
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text" style={{ color: 'var(--text-primary)' }}>
            Sustainable Solutions for Tomorrow
          </h1>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            At <strong className="glow-text" style={{ color: 'var(--primary-teal)' }}>BioZync</strong>, we're pioneering the future with groundbreaking eco-technologies. 
            Our innovative solutions tackle climate change head-on while promoting sustainable architecture and ecosystem regeneration.
          </p>
        </div>

        {/* Products Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          {products.map((product) => (
            <div 
              key={product.id}
              className={`glass-card rounded-3xl p-8 relative overflow-hidden transition-all duration-500 ${
                hoveredCard === product.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Product overlay effect */}
              <div className={`absolute inset-0 transition-opacity duration-300 ${
                hoveredCard === product.id ? 'opacity-5' : 'opacity-0'
              }`} style={{ 
                background: 'linear-gradient(135deg, rgba(0, 192, 149, 0.1) 0%, rgba(0, 230, 176, 0.05) 100%)'
              }}></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 text-center">
                  {product.icon}
                </div>
                
                <h2 className="text-3xl font-bold mb-4 glow-text" style={{ color: 'var(--text-primary)' }}>
                  {product.title}
                </h2>
                
                <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-base" style={{ color: 'var(--text-accent)' }}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <a 
                  href={product.link} 
                  className="inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--primary-teal) 0%, var(--secondary-teal) 100%)',
                    color: 'var(--bg-primary)',
                    boxShadow: '0 4px 20px rgba(0, 192, 149, 0.3)'
                  }}
                >
                  {product.id === 'c3SuperTree' ? 'Explore C3 Trees' : 'Discover C4 Trees'}
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center glass-card rounded-3xl p-12 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 glow-text" style={{ color: 'var(--text-primary)' }}>
            Ready to Build a Sustainable Future?
          </h3>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Join thousands of forward-thinking organizations already using Biozync solutions 
            to create positive environmental impact while achieving their sustainability goals.
          </p>
        </div>
      </div>
    </div>
  );
}
