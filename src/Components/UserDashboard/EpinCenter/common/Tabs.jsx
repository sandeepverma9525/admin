import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === 'all' ? 'active' : ''}`}
        onClick={() => setActiveTab('all')}
      >
        All E-Pins
      </button>

      <button
        className={`tab ${activeTab === 'unused' ? 'active' : ''}`}
        onClick={() => setActiveTab('unused')}
      >
        Unused E-Pins
      </button>
      <button
        className={`tab ${activeTab === 'used' ? 'active' : ''}`}
        onClick={() => setActiveTab('used')}
      >
        Used E-Pins
      </button>
      
      <button
        className={`tab ${activeTab === 'transactions' ? 'active' : ''}`}
        onClick={() => setActiveTab('transactions')}
      >
        Transactions
      </button>
    </div>
  );
};

export default Tabs;