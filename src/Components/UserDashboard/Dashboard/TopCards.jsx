import React from "react";
import styles from "./TopCards.module.css";
import { FaWallet, FaUsers, FaUserPlus, FaLevelUpAlt } from "react-icons/fa";

const cards = [
  { title: "Total Earnings", value: "$0", icon: <FaWallet /> },
  { title: "Team Members", value: "0", icon: <FaUsers /> },
  { title: "Direct Referrals", value: "0", icon: <FaUserPlus /> },
  { title: "Current Level", value: "", icon: <FaLevelUpAlt /> },
];

const TopCards = () => {
  return (
    <div className={styles.topCards}>
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
            <p>$0</p>
          </div>
      </div>

      <div className={styles.card} >
        <div className={styles.icon}><FaUsers /></div>
        <div>
            <h4>Total Earnings</h4>
            <p>$0</p>
          </div>
      </div>

      <div className={styles.card} >
        <div className={styles.icon}><FaUsers /></div>
        <div>
            <h4>Total Earnings</h4>
            <p>$0</p>
          </div>
      </div>

      <div className={styles.card} >
        <div className={styles.icon}><FaUsers /></div>
        <div>
            <h4>Total Earnings</h4>
            <p>$0</p>
          </div>
      </div>

      <div className={styles.card} >
        <div className={styles.icon}><FaUsers /></div>
        <div>
            <h4>Total Earnings</h4>
            <p>$0</p>
          </div>
      </div>

      <div className={styles.card} >
        <div className={styles.icon}><FaUsers /></div>
        <div>
            <h4>Total Earnings</h4>
            <p>$0</p>
          </div>
      </div>

      <div className={styles.card} >
        <div className={styles.icon}><FaUsers /></div>
        <div>
            <h4>Total Earnings</h4>
            <p>$0</p>
          </div>
      </div>

      



    </div>
  );
};

export default TopCards;
