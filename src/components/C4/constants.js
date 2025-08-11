// constants.js
export const PERFORMANCE_DATA = [
  {
    metric: "CO₂ Absorbed",
    normalTree: "22 kg",
    c4SuperTree: "60+ kg",
    targetGains: "+185%"
  },
  {
    metric: "Water Use Efficiency", 
    normalTree: "Standard",
    c4SuperTree: "2×",
    targetGains: "-50% water usage"
  },
  {
    metric: "Growth Speed",
    normalTree: "Baseline", 
    c4SuperTree: "+70% faster",
    targetGains: "Faster canopy"
  },
  {
    metric: "Drought Resilience",
    normalTree: "Medium",
    c4SuperTree: "High", 
    targetGains: "Heat & arid-proof"
  }
];

export const ROADMAP_PHASES = [
  {
    phase: "1",
    title: "Problem Validation & Research",
    timeframe: "Completed : Apr–Jul 2025",
    status: "completed",
    description: "Researched global C3 inefficiencies and validated potential of C4 gene conversion."
  },
  {
    phase: "2", 
    title: "Bienertia Gene Strategy & Feasibility",
    timeframe: "In Progress : Aug–Oct 2025",
    status: "in-progress",
    description: "Mapped key gene components for single-cell C4 function."
  },
  {
    phase: "3",
    title: "GMO Regulatory Strategy", 
    timeframe: "In Progress : Nov 2025–Feb 2026",
    status: "in-progress",
    description: "Designing containment, biosafety protocols, and compliance models."
  },
  {
    phase: "4",
    title: "Synthetic Pathway Engineering",
    timeframe: "Future : Mar–Sep 2026", 
    status: "future",
    description: "Gene stacking and initial lab implementation in model plants."
  },
  {
    phase: "5",
    title: "Greenhouse Trials & CO₂ Efficiency Tests",
    timeframe: "Future : Late 2026–2027",
    status: "future", 
    description: "Growth trials in high-temperature controlled environments."
  },
  {
    phase: "6",
    title: "Open Field Trials",
    timeframe: "Future – 2028",
    status: "future",
    description: "Launching in selected arid zones for real-world testing."
  }
];

export const TAB_NAVIGATION = [
  { id: 'overview', label: 'Overview', icon: 'TreePine' },
  { id: 'performance', label: 'Performance', icon: 'BarChart3' },
  { id: 'impact', label: 'Impact', icon: 'Globe' },
  { id: 'roadmap', label: 'Roadmap', icon: 'Calendar' },
  { id: 'science', label: 'Science', icon: 'Microscope' }
];

export const KEY_STATS = [
  {
    icon: 'ArrowUp',
    value: '3×',
    title: 'More CO₂ Captured',
    description: 'Per tree compared to standard trees'
  },
  {
    icon: 'Droplets', 
    value: '2×',
    title: 'Water Efficient',
    description: 'Less water needed for growth'
  },
  {
    icon: 'Thermometer',
    value: '+70%', 
    title: 'Faster Growth',
    description: 'Rapid biomass accumulation'
  }
];

export const OVERVIEW_BENEFITS = [
  {
    icon: 'Zap',
    text: 'Hyper-efficient at carbon fixation'
  },
  {
    icon: 'Thermometer',
    text: 'Ultra-resilient in high-heat, dry environments'  
  },
  {
    icon: 'Globe',
    text: 'Game-changers for climate restoration'
  }
];

export const SCIENCE_APPLICATIONS = [
  { icon: 'Target', text: 'Hyper-efficient carbon sinks' },
  { icon: 'MapPin', text: 'Dryland and desert afforestation' }, 
  { icon: 'BarChart3', text: 'Scalable carbon offset plantations' },
  { icon: 'TreePine', text: 'Climate-smart forestry' },
  { icon: 'Globe', text: 'Industrial buffer zones' }
];