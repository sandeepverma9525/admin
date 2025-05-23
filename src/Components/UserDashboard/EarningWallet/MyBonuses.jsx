import React from 'react';
import styles from './EarningWallet.module.css';
import data from '../JsonData/bonuses.json';

const MyBonuses = () => {
  return (
    <div className={styles.bonusHistory}>
      <h3 style={{ marginBottom: '15px', fontSize: '1.3rem' }}>Bonus History</h3>
      {data.map((bonus, index) => (
        <div key={index} className={styles.bonusItem}>
          <span>{bonus.type}</span>
          <div>
            <span>₹{bonus.amount}</span> &nbsp;
            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{bonus.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBonuses;
