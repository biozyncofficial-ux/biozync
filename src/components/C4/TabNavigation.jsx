// components/TabNavigation.jsx
import React from 'react';
import * as Icons from 'lucide-react';
import { TAB_NAVIGATION } from './constants';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="relative mb-8">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/5 to-transparent blur-3xl -z-10" />
      
      <div className="flex flex-wrap gap-3 justify-center p-2 bg-black/20 backdrop-blur-xl rounded-2xl border border-teal-400/10 shadow-2xl">
        {TAB_NAVIGATION.map(({ id, label, icon }, index) => {
          const IconComponent = Icons[icon];
          const isActive = activeTab === id;
          
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`relative group flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold 
                transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-teal-400/50 
                transform-gpu will-change-transform overflow-hidden
                ${isActive
                  ? 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-black shadow-lg shadow-teal-500/40 scale-105 z-10'
                  : 'bg-gradient-to-r from-teal-900/20 to-teal-800/10 text-teal-200 hover:from-teal-800/30 hover:to-teal-700/20 hover:text-white hover:scale-102 border border-teal-400/20 hover:border-teal-300/40'
                }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Shimmer effect for inactive tabs */}
              {!isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-300/10 to-transparent 
                  -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              )}
              
              {/* Icon with enhanced animation */}
              <div className={`relative transition-all duration-300 ${
                isActive ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-3'
              }`}>
                <IconComponent
                  size={22}
                  className={`transition-all duration-300 ${
                    isActive 
                      ? 'text-black drop-shadow-sm' 
                      : 'text-teal-300 group-hover:text-teal-100 group-hover:drop-shadow-[0_0_8px_rgba(0,230,176,0.5)]'
                  }`}
                />
                
                {/* Icon glow effect for active state */}
                {isActive && (
                  <div className="absolute inset-0 bg-black/20 blur-sm -z-10 scale-125" />
                )}
              </div>
              
              {/* Label with improved typography */}
              <span className={`tracking-wide font-medium relative z-10 transition-all duration-300 ${
                isActive 
                  ? 'text-black font-semibold' 
                  : 'group-hover:tracking-wider'
              }`}>
                {label}
              </span>
              
              {/* Enhanced active indicator */}
              {isActive && (
                <>
                  {/* Primary underline */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 
                    bg-gradient-to-r from-transparent via-teal-300 to-transparent rounded-full 
                    animate-pulse shadow-[0_0_10px_rgba(0,230,176,0.8)]" />
                  
                  {/* Secondary glow underline */}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 
                    bg-teal-200 rounded-full blur-sm opacity-80" />
                </>
              )}
              
              {/* Hover indicator for inactive tabs */}
              {!isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 
                  bg-gradient-to-r from-teal-400 to-teal-300 rounded-full 
                  group-hover:w-2/3 transition-all duration-500 ease-out" />
              )}
              
              {/* Background pulse effect for active tab */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-teal-500/30 to-teal-600/20 
                  rounded-xl animate-pulse opacity-50 -z-10" />
              )}
            </button>
          );
        })}
        
        {/* Floating background indicator */}
        <div 
          className="absolute top-2 transition-all duration-500 ease-out pointer-events-none"
          style={{
            left: `${(TAB_NAVIGATION.findIndex(tab => tab.id === activeTab) * 100) / TAB_NAVIGATION.length}%`,
            width: `${100 / TAB_NAVIGATION.length}%`,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="h-full bg-gradient-to-r from-teal-400/10 via-teal-500/15 to-teal-600/10 
            rounded-xl blur-xl scale-110" />
        </div>
      </div>
      
      {/* Bottom reflection effect */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-1 
        bg-gradient-to-r from-transparent via-teal-500/10 to-transparent blur-sm" />
    </div>
  );
};

export default TabNavigation;