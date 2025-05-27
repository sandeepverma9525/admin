import React from 'react';

const TabsNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'all-members', label: 'All Members' },
    // { id: 'direct-affiliates', label: 'Direct Affiliates' },
    { id: 'level-structure', label: 'Level Structure' },
    { id: 'binary-tree', label: 'Binary Tree' }
  ];

  return (
    <div className="tabs-container">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabsNavigation;