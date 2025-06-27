import { useState } from 'react';

export default function Tabs({ currentTab, onTabChange }) {
  const tabs = ['Upcoming', 'Finished', 'League'];

  return (
    <div className="flex gap-3 justify-center mb-6">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 rounded-full text-sm font-semibold
            ${currentTab === tab
              ? 'bg-primary text-black'
              : 'bg-gray-700 text-white hover:bg-gray-600'}
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
