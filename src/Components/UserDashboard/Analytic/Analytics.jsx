import React from "react";
import styles from "./Analytics.module.css";
import { FaWallet, FaUsers, FaUserPlus, FaLevelUpAlt } from "react-icons/fa";

const cards = [
  { title: "Total Earnings", value: "$1,25,000", icon: <FaWallet /> },
  { title: "Team Members", value: "240", icon: <FaUsers /> },
  { title: "Direct Referrals", value: "15", icon: <FaUserPlus /> },
  { title: "Current Level", value: "Gold", icon: <FaLevelUpAlt /> },
];

const Analytics = () => {
  return (
    <>
    <div className={styles.analyticContainer}>
        <h2 className={styles.anahead}>Analytics</h2>
        <p className={styles.anapara}>Key Financial Metrics</p>
    <div className={styles.anaCards}>
      {cards.map((card, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.icon}>{card.icon}</div>
          <div>
            <h4>{card.title}</h4>
            <p>{card.value}</p>
          </div>
        </div>
      ))}

      <div className={styles.card} >
        <div className={styles.icon}><FaUsers /></div>
        <div>
            <h4>Total Earnings</h4>
            <p>$1,25,000</p>
          </div>
      </div>

      <div className={styles.card} >
        <div className={styles.icon}><FaUsers /></div>
        <div>
            <h4>Total Earnings</h4>
            <p>$1,25,000</p>
          </div>
      </div>

      <div className={styles.card} >
        <div className={styles.icon}><FaUsers /></div>
        <div>
            <h4>Total Earnings</h4>
            <p>$1,25,000</p>
          </div>
      </div>

      <div className={styles.card} >
        <div className={styles.icon}><FaUsers /></div>
        <div>
            <h4>Total Earnings</h4>
            <p>$1,25,000</p>
          </div>
      </div>

      <div className={styles.card} >
        <div className={styles.icon}><FaUsers /></div>
        <div>
            <h4>Total Earnings</h4>
            <p>$1,25,000</p>
          </div>
      </div>

      <div className={styles.card} >
        <div className={styles.icon}><FaUsers /></div>
        <div>
            <h4>Total Earnings</h4>
            <p>$1,25,000</p>
          </div>
      </div>

      <div className={styles.card} >
        <div className={styles.icon}><FaUsers /></div>
        <div>
            <h4>Total Earnings</h4>
            <p>$1,25,000</p>
          </div>
      </div>

      



    </div>
</div>
    </>
  );
};

export default Analytics;
