import React, { useState } from 'react';
import MyBonuses from './MyBonuses';
import styles from './EarningWallet.module.css';

const BonusTabs = () => {
  const [activeTab, setActiveTab] = useState('myBonuses');

  return (
    <>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === 'myBonuses' ? styles.active : ''}`}
          onClick={() => setActiveTab('myBonuses')}
        >
          My Bonuses
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'rewards' ? styles.active : ''}`}
          onClick={() => setActiveTab('rewards')}
        >
          Rewards & Achievements
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'lifestyle' ? styles.active : ''}`}
          onClick={() => setActiveTab('lifestyle')}
        >
          Lifestyle Funds
        </button>
      </div>

      {/* Render Components Based on Tab */}
      {activeTab === 'myBonuses' && <MyBonuses />}
      {activeTab === 'rewards' && <div className={styles.bonusHistory}>Coming Soon: Rewards & Achievements</div>}
      {activeTab === 'lifestyle' && <div className={styles.bonusHistory}>Coming Soon: Lifestyle Funds</div>}
    </>
  );
};

export default BonusTabs;
