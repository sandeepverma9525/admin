// // EarningWallet.jsx
// import React, { useState } from "react";
// import styles from "./EarningWallet.module.css";
// import earningData from "../JsonData/earningWalletData.json";

// const EarningWallet = () => {
//   const [filter, setFilter] = useState("All");

//   const filteredData = earningData.filter((entry) =>
//     filter === "All" ? true : entry.type === filter
//   );

//   return (
//     <div className={styles.walletContainer}>
//       <div className={styles.topSection}>
//         <h2>Earning Wallet</h2>
//         <div className={styles.filters}>
//           <select onChange={(e) => setFilter(e.target.value)} value={filter}>
//             <option value="All">All</option>
//             <option value="Credit">Credit</option>
//             <option value="Debit">Debit</option>
//           </select>
//         </div>
//       </div>

//       <table className={styles.walletTable}>
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>Amount</th>
//             <th>Description</th>
//             <th>Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((entry, index) => (
//             <tr key={index}>
//               <td>{entry.type === "Credit" ? "💰 Credit" : "💸 Debit"}</td>
//               <td>₹{entry.amount}</td>
//               <td>{entry.description}</td>
//               <td>{entry.date}</td>
//               <td>
//                 <span
//                   className={
//                     entry.status === "Completed"
//                       ? styles.completed
//                       : styles.pending
//                   }
//                 >
//                   {entry.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EarningWallet;




// EarningWallet.jsx
import React, { useState } from 'react';
import styles from './EarningWallet.module.css';
import WalletCard from './WalletCard';
import MyBonuses from './MyBonuses';
import RewardsAchievements from './RewardsAchievements';
import LifestyleFunds from './LifestyleFunds';



const EarningWallet = () => {
  const [activeTab, setActiveTab] = useState('MyBonuses');

  const walletData = {
    balance: 452.75,
    lastPayoutDate: '2025-05-06',
    pendingBonuses: {
      team: 120.5,
      direct: 75.25,
      monthly: 256.0,
      unlockInDays: 3,
    },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'MyBonuses':
        return <MyBonuses />;
        
        case 'Rewards':
        return <RewardsAchievements />;

        case 'Lifestyle':
        return <LifestyleFunds />;

      default:
        return null;
    }
  };

  return (
    <div className={styles.earningWallet}>
      <div className={styles.topSection}
      style={{
        // marginRight:'40px',
        // marginLeft:'40px',
        // marginTop:'40px'  

      }}
      >

        <h2>Earning Wallet</h2>
        <button className={styles.payoutBtn}
        style={{
          // border:'1px solid red',
            height:"40px",
            background:'#32B3A6',
            fontSize:'large',
          }}>Request Payout</button>
      </div>

      <WalletCard
        balance={walletData.balance}
        lastPayoutDate={walletData.lastPayoutDate}
        pendingBonuses={walletData.pendingBonuses}
      />

      <div className={styles.tabButtons}
      style={{marginTop:'40px',
        marginLeft:'40px',
        marginBottom:'20px'
      }}
      >
        <button
        style={{
          width:'200px',
          // background:'#1F2E42',
          background:activeTab === 'MyBonuses'?"#152637":"#1F2E42"
        }}
          className={activeTab === 'MyBonuses' ? styles.active : ''}
          onClick={() => setActiveTab('MyBonuses')}
        >
          My Bonuses
        </button>
        <button
        style={{
          width:'200px',
          // background:'#1F2E42',
          background:activeTab === 'Rewards'?"#152637":"#1F2E42"
        }}
          className={activeTab === 'Rewards' ? styles.active : ''}
          onClick={() => setActiveTab('Rewards')}
        >
          Rewards & Achievements
        </button>
        <button
        style={{
          width:'200px',
          // background:'#1F2E42',
          background:activeTab === 'Lifestyle'?"#152637":"#1F2E42"
        }}
          className={activeTab === 'Lifestyle' ? styles.active : ''}
          onClick={() => setActiveTab('Lifestyle')}
        >
          Lifestyle Funds
        </button>
      </div>

      <div className={styles.tabContent}>{renderTabContent()}</div>
    </div>
  );
};

export default EarningWallet;
