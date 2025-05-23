import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import styles from './TotalEarnings.module.css';

const TotalEarnings = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>Total Earnings</h3>
        <FaDollarSign className={styles.icon} />
      </div>
      <div className={styles.cardContent}>
        <h2>$5000</h2>
        <p className={styles.percentage}>+12.5% vs last period</p>
      </div>
    </div>
  );
};

export default TotalEarnings;
