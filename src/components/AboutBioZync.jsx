/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Award,
  Users,
  Globe,
  Leaf,
  Target,
  Handshake,
  ArrowRight,
  Calendar,
  TrendingUp,
  CheckCircle,
  Zap,
  Sparkles,
  Star,
  ChevronRight,
  Heart,
  Shield,
  Lightbulb,
  TreePine,
  Waves,
  Mountain
} from 'lucide-react';

function AboutBioZync () {
  const [activeTab, setActiveTab] = useState("mission");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visibleStats, setVisibleStats] = useState({});

  // Animated counter hook
  const useCounter = (end, duration, key) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!visibleStats[key]) return;
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [end, duration, key]);

    return count.toLocaleString();
  };

  const stats = [
    { label: "Living Bio‑Systems Deployed", end: 1000, suffix: "+", key: "stats", icon: TreePine },
    { label: "Global Partnerships", end: 50, suffix: "+", key: "stats", icon: Globe },
    { label: "Acres Regenerated", end: 1000000, suffix: "+", key: "stats", icon: Mountain },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO, EcoGenesis Labs",
      text: "BioZync's innovative approach to bio‑engineering has transformed how we think about sustainable solutions.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, GreenByte AI",
      text: "Their AI‑driven biotechnology platform accelerated our green initiatives by 300%.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Elena Vasquez",
      role: "Director, VerdeCorp",
      text: "Collaboration with BioZync was pivotal in achieving our sustainability goals ahead of schedule.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
  ];

  const milestones = [
    {
      date: "March 2025",
      title: "BioZync Was Born",
      description: "Planted the first seed of our mission — to reengineer trees and restore ecosystems through climate biotech.",
      icon: Sparkles,
      color: "from-purple-400 to-pink-400"
    },
    {
      date: "April 2025",
      title: "Core Team Formed",
      description: "Built a passionate founding team and proposed our first solution to address land degradation and CO₂ capture.",
      icon: Users,
      color: "from-teal-400 to-cyan-400"
    },
    {
      date: "May 2025",
      title: "Research & Validation",
      description: "Studied global research on tree genetics, climate restoration, and carbon markets to refine our approach.",
      icon: Lightbulb,
      color: "from-yellow-400 to-orange-400"
    },
    {
      date: "June 2025",
      title: "Business Model Defined",
      description: "Mapped our idea into a viable business model and began validating the market opportunity and impact potential.",
      icon: Target,
      color: "from-green-400 to-emerald-400"
    },
    {
      date: "July 2025",
      title: "Expert Consultations",
      description: "Engaged with domain experts in biotechnology and sustainability to refine both our technical and business strategies.",
      icon: Shield,
      color: "from-blue-400 to-indigo-400"
    },
  ];

  const values = [
    {
      title: "Regeneration at the Core",
      desc: "We design solutions that restore more than they consume — reviving land, life, and climate.",
      icon: Leaf,
      gradient: "from-emerald-400 to-teal-400"
    },
    {
      title: "Community at the Heart",
      desc: "We empower SHGs and create dignified green jobs — making climate action a force for local opportunity and pride.",
      icon: Heart,
      gradient: "from-pink-400 to-purple-400"
    },
    {
      title: "Transparent by Design",
      desc: "From geo‑tagged trees to verified carbon credits, we ensure full traceability and trust in every step.",
      icon: Shield,
      gradient: "from-blue-400 to-indigo-400"
    },
    {
      title: "Nature‑Led Innovation",
      desc: "We blend the wisdom of nature with biotechnology to build solutions that evolve with the Earth.",
      icon: Zap,
      gradient: "from-yellow-400 to-orange-400"
    },
  ];

  const technologies = [
    {
      name: "Genetically Enhanced Trees",
      description: "Engineered for rapid growth, resilience, and superior carbon absorption in degraded lands.",
      icon: TreePine,
      gradient: "from-green-400 to-emerald-400"
    },
    {
      name: "Ground‑Based Monitoring",
      description: "Geo‑tagged, real‑time data from the field ensures full transparency, traceability, and trust in every project.",
      icon: Target,
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      name: "Soil & Microbiome Restoration",
      description: "Rejuvenating degraded land through improved root systems, microbial diversity, and regenerative planting methods.",
      icon: Waves,
      gradient: "from-purple-400 to-pink-400"
    },
    {
      name: "MRV & Carbon Credit Issuance",
      description: "Robust Monitoring, Reporting & Verification (MRV) systems generate credible, verifiable carbon credits for global markets.",
      icon: TrendingUp,
      gradient: "from-orange-400 to-red-400"
    },
  ];

  const projects = [
    {
      name: "Mangrove Revival Project",
      description: "Restoring coastal mangrove ecosystems in Southeast Asia.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      status: "Active",
      progress: 75
    },
    {
      name: "Desert Greening Initiative",
      description: "Transforming arid land into thriving green corridors.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      status: "Planning",
      progress: 30
    },
    {
      name: "Urban Carbon Sinks",
      description: "Deploying high‑efficiency trees in metropolitan areas.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      status: "Completed",
      progress: 100
    },
  ];

  // Effects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStats((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 backdrop-blur-sm mb-6">
              <Leaf className="mr-2 text-green-400" size={20} />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Regenerating Our Planet
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                BioZync
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              BioZync is a climate biotech company pioneering a radical approach to environmental restoration. 
              We're not just fighting climate change — we're solving it at the source by reimagining nature itself.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl font-semibold text-white shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 transform hover:-translate-y-1">
                <span className="flex items-center">
                  Explore Our Work 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </span>
              </button>
              
              <button 
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300"
              >
                <span className="flex items-center">
                  {isVideoPlaying ? <Pause size={18} /> : <Play size={18} />}
                  <span className="ml-2">Watch Demo</span>
                </span>
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {isVideoPlaying ? (
                <div className="aspect-video bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="mx-auto mb-4 text-white" size={48} />
                    <p className="text-white text-lg">Demo Video Playing...</p>
                  </div>
                </div>
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop"
                  alt="BioZync Innovation"
                  className="w-full h-auto"
                />
              )}
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold text-white shadow-lg">
                Est. 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" data-animate className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="relative group">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4 shadow-lg shadow-purple-500/25">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/rules-of-hooks
                      {useCounter(stat.end, 2000, stat.key)}{stat.suffix}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Foundation Tabs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-300">Explore what drives us forward</p>
          </div>

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
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={20} className="mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            {activeTab === "mission" && (
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6 flex items-center justify-center">
                  <Target className="mr-3 text-purple-400" size={32} />
                  Our Mission
                </h3>
                <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
                  To engineer bio‑intelligent systems that regenerate ecosystems, reduce environmental stress, 
                  and drive the transition to a circular, regenerative economy — blending cutting‑edge technology 
                  with the intelligence of nature.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-400/30">
                    <h4 className="text-xl font-semibold mb-3 text-green-300">Degraded Land Restored</h4>
                    <p className="text-gray-300">
                      We create self‑sustaining bio‑systems that transform barren, degraded landscapes 
                      into thriving, biodiverse ecosystems.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-400/30">
                    <h4 className="text-xl font-semibold mb-3 text-blue-300">Carbon Sequestration</h4>
                    <p className="text-gray-300">
                      We develop high‑efficiency plant systems that capture and store atmospheric CO₂ — 
                      turning degraded land into powerful carbon sinks.
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
                  To build a world where nature and technology evolve together — regenerating ecosystems, 
                  reversing climate collapse, and creating a planet where life can thrive for generations to come.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                      100+
                    </div>
                    <div className="text-gray-300">Regenerative Systems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                      50+
                    </div>
                    <div className="text-gray-300">Global Partnerships</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                      ∞
                    </div>
                    <div className="text-gray-300">Open Innovation</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "values" && (
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6 flex items-center justify-center">
                  <Award className="mr-3 text-purple-400" size={32} />
                  Our Values
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, i) => {
                    const Icon = value.icon;
                    return (
                      <div key={i} className={`bg-gradient-to-br ${value.gradient} bg-opacity-20 rounded-xl p-6 border border-white/20`}>
                        <div className="flex items-center mb-3">
                          <Icon className="mr-3 text-white" size={24} />
                          <h4 className="text-xl font-semibold text-white">{value.title}</h4>
                        </div>
                        <p className="text-gray-200">{value.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "impact" && (
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6 flex items-center justify-center">
                  <TrendingUp className="mr-3 text-purple-400" size={32} />
                  Our Impact
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-400/30">
                    <h4 className="text-xl font-semibold mb-4 text-green-300">Environmental Impact</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Carbon Sequestered</span>
                        <span className="font-bold text-green-300">1,250+ tons</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Biodiversity Restored</span>
                        <span className="font-bold text-green-300">8 ecosystems</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-400/30">
                    <h4 className="text-xl font-semibold mb-4 text-blue-300">Social Impact</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Communities Empowered</span>
                        <span className="font-bold text-blue-300">23</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Green Jobs Created</span>
                        <span className="font-bold text-blue-300">150+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Our Technologies
            </h2>
            <p className="text-xl text-gray-300">Biotech solutions built to restore ecosystems and capture carbon at scale</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="group relative">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 h-full">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tech.gradient} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{tech.name}</h3>
                    <p className="text-gray-300">{tech.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
{/* Journey Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300">Key milestones in our mission</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, i) => {
                const Icon = milestone.icon;
                return (
                  <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full max-w-md ${i % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="flex items-center mb-3">
                          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${milestone.color} mr-3`}>
                            <Icon className="text-white" size={20} />
                          </div>
                          <span className="text-sm font-semibold text-purple-300">{milestone.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300">Transforming landscapes through innovative biotechnology</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'Completed' ? 'bg-green-500 text-white' :
                      project.status === 'Active' ? 'bg-blue-500 text-white' :
                      'bg-yellow-500 text-black'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Progress</span>
                      <span className="text-white font-semibold">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group">
                    Learn More 
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-300">Trusted by leading organizations worldwide</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-gradient-to-r from-purple-400 to-pink-400"
              />
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-300 italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="text-lg font-semibold text-white mb-2">
                {testimonials[currentTestimonial].name}
              </div>
              <div className="text-purple-300 mb-6">
                {testimonials[currentTestimonial].role}
              </div>
              
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === i 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    onClick={() => setCurrentTestimonial(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl transform rotate-1"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Ready to Regenerate the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join us in creating bio‑intelligent solutions that heal our planet while
                driving innovation. Together, we can build a regenerative future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="flex items-center justify-center">
                    <Handshake className="mr-2" size={20} />
                    Partner With Us
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </span>
                </button>
                
                <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300">
                  <span className="flex items-center justify-center">
                    <Users className="mr-2" size={20} />
                    Join Our Team
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutBioZync;