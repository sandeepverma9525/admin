import React from 'react';
import styles from './LifestyleFunds.module.css';

const fundData = [
  { title: 'Jewellery Fund', balance: 3454, goal: 2000 },
  { title: 'Travel Fund', balance: 7450, goal: 5000 },
  { title: 'Car Fund', balance: 12000, goal: 50000 },
  { title: 'House Fund', balance: 18500, goal: 250000 },
];

const LifestyleFunds = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Lifestyle Funds</h3>
      <div className={styles.cardGrid}>
        {fundData.map((fund, index) => {
          const percentage = Math.min((fund.balance / fund.goal) * 100, 100).toFixed(0);
          return (
            <div className={styles.card} key={index}>
              <div className={styles.topRow}>
                <span>{fund.title}</span>
                <span className={styles.balance}>${fund.balance.toLocaleString()}</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.fill} style={{ width: `${percentage}%` }} />
              </div>
              <div className={styles.goalText}>
                {percentage}% towards ${fund.goal.toLocaleString()} goal
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LifestyleFunds;
