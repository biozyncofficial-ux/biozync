import React, { useState } from 'react';
import { ChevronDown, MapPin, Heart, Leaf, Camera, Award, Users, Globe, Gift, Sparkles } from 'lucide-react';

const treeOptions = [
  {
    id: 1,
    category: 'Birthday Tree',
    label: 'Growing Joyfully',
    tagline: 'Celebrate a life with a gift that grows.',
    image: '/images/birthday-tree.jpg',
    icon: Gift,
    color: 'from-pink-500 to-purple-600'
  },
  {
    id: 2,
    category: 'Anniversary Tree',
    label: 'Deeply Rooted Love',
    tagline: 'Root your love in something timeless.',
    image: '/images/anniversary-tree.jpg',
    icon: Heart,
    color: 'from-red-500 to-pink-600'
  },
  {
    id: 3,
    category: 'Newborn Tree',
    label: 'New Life Begins',
    tagline: 'Welcome new life by planting new life.',
    image: '/images/newborn-tree.jpg',
    icon: Sparkles,
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 4,
    category: 'Graduation Tree',
    label: 'Rising Strong',
    tagline: 'Mark their journey with a tree that grows alongside them.',
    image: '/images/graduation-tree.jpg',
    icon: Award,
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 5,
    category: 'Career Milestone Tree',
    label: 'Success That Grows',
    tagline: 'Celebrate success with something that stands tall.',
    image: '/images/career-tree.jpg',
    icon: Award,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 6,
    category: 'Tribute / In Memory Tree',
    label: 'Living Legacy',
    tagline: 'Honor a life by giving back to the Earth.',
    image: '/images/memory-tree.jpg',
    icon: Heart,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 7,
    category: 'Thank You Tree',
    label: 'Gratitude in Bloom',
    tagline: 'Gratitude that grows greener every day.',
    image: '/images/thankyou-tree.jpg',
    icon: Heart,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 8,
    category: 'Get Well Soon Tree',
    label: 'Healing Naturally',
    tagline: 'Send healing energy through living roots.',
    image: '/images/getwell-tree.jpg',
    icon: Leaf,
    color: 'from-green-400 to-lime-500'
  },
  {
    id: 9,
    category: 'Love & Friendship Tree',
    label: 'Everlasting Bond',
    tagline: 'Because some bonds deserve to bloom forever.',
    image: '/images/friendship-tree.jpg',
    icon: Heart,
    color: 'from-rose-500 to-pink-600'
  },
  {
    id: 10,
    category: 'Spiritual Offering / Pooja Tree',
    label: 'Sacred & Pure',
    tagline: 'A sacred act rooted in nature.',
    image: '/images/pooja-tree.jpg',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 11,
    category: 'Just Because / Climate Tree',
    label: 'For Earth, With Love',
    tagline: 'No reason needed — just love for the planet.',
    image: '/images/climate-tree.jpg',
    icon: Globe,
    color: 'from-blue-500 to-green-600'
  },
  {
    id: 12,
    category: 'Housewarming Tree',
    label: 'Rooting New Beginnings',
    tagline: 'Grow blessings in every corner of a new home.',
    image: '/images/housewarming-tree.jpg',
    icon: Gift,
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 13,
    category: 'Festival Tree (Diwali, Pongal, etc.)',
    label: 'Festive & Green',
    tagline: 'Celebrate light, life, and land together.',
    image: '/images/festival-tree.jpg',
    icon: Sparkles,
    color: 'from-yellow-400 to-red-600'
  },
  {
    id: 14,
    category: 'Custom Occasion',
    label: 'Fully Personal',
    tagline: 'Your reason. Their tree. One lasting impact.',
    image: '/images/custom-tree.jpg',
    icon: Gift,
    color: 'from-gray-500 to-slate-600'
  },
];

export default function GetTree() {
  const [selected, setSelected] = useState(treeOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const IconComponent = selected.icon;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-16 px-4 py-16 md:px-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
            Plant a Tree
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Give a gift that grows, breathes, and makes a lasting impact on our planet
          </p>
        </div>

        {/* Selection & Hero Section */}
        <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-12 items-center justify-center">
          {/* Image Display */}
          <div className="relative group">
            <div className="w-80 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50">
              <img 
                src={selected.image} 
                alt={selected.category} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl hidden items-center justify-center">
                <div className="text-center space-y-4">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${selected.color} flex items-center justify-center mx-auto`}>
                    <IconComponent size={40} className="text-white" />
                  </div>
                  <p className="text-gray-400">Tree Image</p>
                </div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          </div>

          {/* Selection Info */}
          <div className="flex flex-col gap-6 max-w-md text-center lg:text-left">
            {/* Custom Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-xl px-6 py-4 text-left flex items-center justify-between hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-lg"
              >
                <span className="text-lg font-medium">{selected.category}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-600 rounded-xl shadow-2xl max-h-64 overflow-y-auto z-50">
                  {treeOptions.map((option, index) => {
                    const OptionIcon = option.icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => {
                          setSelected(option);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-6 py-4 text-left hover:bg-gray-700 transition-colors duration-200 flex items-center gap-3 ${
                          selected.id === option.id ? 'bg-gray-700' : ''
                        } ${index === 0 ? 'rounded-t-xl' : ''} ${index === treeOptions.length - 1 ? 'rounded-b-xl' : ''}`}
                      >
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${option.color} flex items-center justify-center`}>
                          <OptionIcon size={16} className="text-white" />
                        </div>
                        <span>{option.category}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${selected.color} flex items-center justify-center`}>
                  <IconComponent size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{selected.label}</h2>
              </div>
              
              <p className="text-gray-300 text-lg italic leading-relaxed">{selected.tagline}</p>
              
              <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Plant This Tree
              </button>
            </div>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="w-full max-w-6xl">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              What You Get
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Leaf,
                  title: 'Tree Plantation',
                  description: 'Your tree is planted by local farmers or SHG members on degraded land selected for restoration. Verified plantation site, native or genetically enhanced species, supports livelihoods and land healing.',
                  color: 'from-green-500 to-emerald-600'
                },
                {
                  icon: Gift,
                  title: 'E-Greeting Card',
                  description: 'A personalized digital greeting card is sent to the recipient with your custom message. Beautifully designed themes (Birthday, Memorial, Love, etc.), custom name, date, and note.',
                  color: 'from-pink-500 to-purple-600'
                },
                {
                  icon: Award,
                  title: 'E-Certificate of Plantation',
                  description: 'Your recipient receives a verified certificate showing the tree\'s impact. Name of the recipient, tree ID and plantation date, land location and CO₂ offset stats.',
                  color: 'from-yellow-500 to-orange-600'
                },
                {
                  icon: MapPin,
                  title: 'Geo-Tag & Monitoring',
                  description: 'Track the tree\'s health, growth, and environmental impact in real-time. Satellite-based and on-ground verification with exact location shown on the map.',
                  color: 'from-blue-500 to-cyan-600'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl p-6 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Images Section */}
        <div className="w-full max-w-6xl">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Our Impact
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300">
                    <div className="h-32 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Camera size={32} className="text-teal-400" />
                    </div>
                    <p className="text-sm text-teal-400 text-center font-medium">Project Gallery</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Plant a Tree Section */}
        <div className="w-full max-w-6xl">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-text text-transparent">
              Why Plant a Tree?
            </h2>
            <p className="text-xl text-gray-300 text-center mb-8 italic">
              Choose your reason. Let it grow forever.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Globe,
                  title: 'Environmental Impact',
                  reasons: [
                    'Absorb Carbon Naturally: Trees capture CO₂ from the atmosphere',
                    'Restore Degraded Ecosystems: Rebuild biodiversity and heal landscapes',
                    'Improve Air Quality: Filter pollutants and particulate matter',
                    'Protect Soil & Prevent Erosion: Roots hold soil and enrich it over time',
                    'Support Local Wildlife: Provide food and shelter to animals'
                  ]
                },
                {
                  icon: Heart,
                  title: 'Emotional Connection',
                  reasons: [
                    'Create a Living Memory: Mark special moments with something that grows',
                    'Feel Connected to Nature: Bring nature back into our hearts',
                    'Reduce Eco-Anxiety: Take real action for climate concerns',
                    'Leave a Legacy: Trees can last 50–100+ years beyond our lifetime'
                  ]
                },
                {
                  icon: Users,
                  title: 'Social Impact',
                  reasons: [
                    'Empower Rural Communities: Support green jobs and financial dignity',
                    'Educate Future Generations: Every tree tells a story of sustainability',
                    'Participate in Climate Action: Create positive feedback loops',
                    'Support Land Restoration: Help restore millions of hectares'
                  ]
                },
                {
                  icon: Sparkles,
                  title: 'Personal Touch',
                  reasons: [
                    'Gift Something Meaningful: Unlike flowers, trees keep living and giving',
                    'Celebrate Without Waste: Eco-friendly gifting reduces your footprint',
                    'Mark New Beginnings: Perfect for weddings, babies, or new journeys',
                    'Join a Global Movement: Be part of a climate-positive community'
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                      <section.icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {section.reasons.map((reason, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed">{reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}