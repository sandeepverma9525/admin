import React from 'react';
import styles from './EarningWallet.module.css';

const WalletCard = ({ balance, lastPayoutDate, pendingBonuses }) => {
  return (
    <div className={styles.walletCards}
    style={{
      // padding:"40px",
      paddingLeft:'40px',
      paddingRight:'40px'
    }}
    >
      {/* Available Balance Card */}
      <div className={styles.card}>
        <h3>Available Balance</h3>
        <p className={styles.balance}>${balance ?? 0}</p>
        <span className={styles.subtext}>Available for withdrawal</span>
        <div className={styles.cardFooter}>
          <span>Last Payout:</span>
          <span>{lastPayoutDate ?? 'N/A'}</span>
        </div>
      </div>

      {/* Pending Bonuses Card */}
      <div className={styles.card}>
        <h3>Pending Bonuses</h3>
        <ul className={styles.bonusList}>
          <li>Team Bonus: ${pendingBonuses?.team ?? 0}</li>
          <li>Direct Bonus: ${pendingBonuses?.direct ?? 0}</li>
          <li>Monthly Bonus: ${pendingBonuses?.monthly ?? 0}</li>
          <li>Unlocks in: {pendingBonuses?.unlockInDays ?? 0} days</li>
        </ul>
      </div>
    </div>
  );
};

export default WalletCard;
