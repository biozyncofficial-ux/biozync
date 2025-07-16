import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Leaf, 
  Dna, 
  Users, 
  Award, 
  Satellite, 
  Globe,
  ChevronRight,
  Sparkles
} from "lucide-react";

const whyUsData = [
  {
    icon: Leaf,
    title: "Restore Degraded Land",
    desc: "We convert barren, degraded lands into rich, biodiverse forests — creating new carbon sinks and reviving local ecosystems.",
    color: "from-emerald-400 to-teal-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    hoverColor: "hover:border-emerald-400/50"
  },
  {
    icon: Dna,
    title: "Enhance Tree Genetics",
    desc: "Using advanced biotechnology, we engineer trees with faster growth and higher carbon capture making reforestation far more effective.",
    color: "from-cyan-400 to-blue-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    hoverColor: "hover:border-cyan-400/50"
  },
  {
    icon: Users,
    title: "Empower SHGs and Communities",
    desc: "We partner with Self-Help Groups (SHGs), training and employing rural women and farmers creating livelihoods with dignity.",
    color: "from-purple-400 to-pink-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    hoverColor: "hover:border-purple-400/50"
  },
  {
    icon: Award,
    title: "Issue High-Integrity Carbon Credits",
    desc: "Our enhanced forests generate verifiable, transparent carbon credits aligned with Verra and future-ready for global markets.",
    color: "from-amber-400 to-orange-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    hoverColor: "hover:border-amber-400/50"
  },
  {
    icon: Satellite,
    title: "Provide Transparent Monitoring (MRV)",
    desc: "We use satellites, drones, and monitor our project health and carbon removal giving buyers full traceability.",
    color: "from-indigo-400 to-purple-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    hoverColor: "hover:border-indigo-400/50"
  },
  {
    icon: Globe,
    title: "Scale Globally from India",
    desc: "Starting in India, our model is built to expand across continents combining tech and ecology to help the world reach net zero.",
    color: "from-green-400 to-emerald-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    hoverColor: "hover:border-green-400/50"
  },
];

const WhyUsSection = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-20 px-6">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-green-400 animate-pulse" />
            <span className="text-green-400 font-semibold text-lg tracking-wide">OUR ADVANTAGES</span>
            <Sparkles className="w-8 h-8 text-green-400 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent mb-6">
            Why Choose <span className="text-green-400">Us</span>?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we're revolutionizing carbon removal through innovative technology, 
            community empowerment, and sustainable forest restoration.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsData.map((item, index) => (
              <AnimatedCard 
                key={index} 
                {...item} 
                index={index}
                delay={index * 0.15} 
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/30 backdrop-blur-sm">
            <span className="text-green-300 font-medium">Ready to make an impact?</span>
            <ChevronRight className="w-5 h-5 text-green-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AnimatedCard = ({ icon: Icon, title, desc, color, bgColor, borderColor, hoverColor, index, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm ${bgColor} ${borderColor} ${hoverColor} border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer`}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-8 h-full flex flex-col">
        {/* Icon Section */}
        <div className="mb-6">
          <motion.div
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${color} shadow-lg`}
          >
            <Icon className="w-8 h-8 text-white" /> {/* ✅ Fixed icon usage */}
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <motion.h3 
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors duration-300"
          >
            {title}
          </motion.h3>
          
          <motion.p 
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-gray-300 leading-relaxed text-base group-hover:text-gray-200 transition-colors duration-300"
          >
            {desc}
          </motion.p>
        </div>

        {/* Hover indicator */}
        <motion.div
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 mt-6 text-green-400"
        >
          <span className="text-sm font-medium">Learn more</span>
          <ChevronRight className="w-4 h-4" />
        </motion.div>

        {/* Card number indicator */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center">
          <span className="text-xs font-bold text-green-400">{index + 1}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyUsSection;
