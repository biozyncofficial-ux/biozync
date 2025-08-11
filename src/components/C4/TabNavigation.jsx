// components/TabNavigation.jsx
import React from 'react';
import * as Icons from 'lucide-react';
import { TAB_NAVIGATION } from './constants';

const TabNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {TAB_NAVIGATION.map(({ id, label, icon }) => {
        const IconComponent = Icons[icon];
        return (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === id
                ? 'bg-teal-500 text-black shadow-lg shadow-teal-500/30'
                : 'bg-teal-900/30 text-white-200 hover:bg-teal-800/40 hover:text-white-100 border border-teal-400/20'
            }`}
          >
            <IconComponent size={20} />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default TabNavigation;