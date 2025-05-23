import React from "react";
import styles from "./BottomCards.module.css";

const BottomCards = () => {
  return (
    <div className={styles.bottomCards}>
      {/* Latest Bonuses */}
      <div className={styles.card}>
        <h3>Latest Bonuses</h3>
        <ul>
          <li><span>Direct Bonus:</span> $2,500</li>
          <li><span>Team Bonus:</span> $4,000</li>
          <li><span>Monthly Bonus:</span> $6,500</li>
        </ul>
      </div>

      {/* Wallet Balance */}
      <div className={styles.card}>
        <h3>Wallet Balance</h3>
        <p className={styles.balance}>$15,800</p>
      </div>

      {/* Next Achievement */}
      <div className={styles.card}>
        <h3>Next Achievement</h3>
        <ul>
          <li>🥇 Gold Level</li>
          <li>🚗 Car Fund</li>
          <li>✈️ Travel Fund</li>
        </ul>
      </div>
    </div>
  );
};

export default BottomCards;
