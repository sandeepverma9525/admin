// import React from 'react';
// import './RewardsAchievements.css';

// const rewardLevels = [
//   { level: 'IGNITOR', subscribers: 3, bonus: '10%', reward: 'Branded Merchandise' },
//   { level: 'SPARK', subscribers: 120, bonus: '10%', reward: 'Travel Voucher for Local Events' },
//   { level: 'RISER', subscribers: 750, bonus: '10%', reward: 'Travel Voucher for National Event' },
//   { level: 'PIONEER', subscribers: 2777, bonus: '15%', reward: 'Home Office Setup Voucher' },
//   { level: 'INNOVATOR', subscribers: 5555, bonus: '15%', reward: 'National Tour Package (3 Days & Self)' },
//   { level: 'CATALYST', subscribers: 9000, bonus: '16%', reward: 'Premium Travel Fund with Spouse' },
//   { level: 'TRAILBLAZER', subscribers: 15000, bonus: '16%', reward: 'Exclusive National Event Invitation' },
//   { level: 'VANGUARD', subscribers: 22000, bonus: '17%', reward: 'Leisure Perk for Family Travel' },
//   { level: 'LUMINARY', subscribers: 30000, bonus: '17%', reward: 'Exclusive International Event Invitation' },
//   { level: 'MOGUL', subscribers: 40000, bonus: '18%', reward: 'Luxury Lifestyle Packages' },
//   { level: 'SOVEREIGN', subscribers: 50000, bonus: '18%', reward: 'House Fund Unlock' },
// ];

// export default function RewardsAchievements() {
//   const PV_PER_SUB = 42;

//   return (
//     <div className="rewards-container">
//       <h2>🏆 Achievements & Rewards</h2>
//       <div className="card-grid">
//         {rewardLevels.map((item, idx) => {
//           const requiredPV = item.subscribers * PV_PER_SUB;
//           const progress = 100; // full progress

//           return (
//             <div className="card" key={idx}>
//               <h3>{item.level}</h3>
//               <p>🎯 Required: {item.subscribers} Subscribers</p>
//               <p>💰 Bonus: {item.bonus}</p>
//               <p>🎁 Reward: {item.reward}</p>
//               <p>📊 Required PV: {requiredPV}</p>
//               <div className="progress-bar">
//                 <div className="fill" style={{ width: `${progress}%` }}></div>
//               </div>
//               <span>{progress}% Complete</span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



// // import React from 'react';
// // import styles from './RewardsAchievements.module.css';
// // import { FaStar, FaMedal, FaTrophy } from 'react-icons/fa';

// // const rewardData = {
// //   rank: 'Silver Star',
// //   reward: 25000,
// //   totalReward: 76000,
// // };

// // const RewardsAchievements = () => {
// //   return (
// //     <div className={styles.rewardsWrapper}>
// //       <div className={styles.card}>
// //         <FaStar className={styles.icon} />
// //         <h4>Rank Achieved</h4>
// //         <p>{rewardData.rank}</p>
// //       </div>

// //       <div className={styles.card}>
// //         <FaMedal className={styles.icon} />
// //         <h4>Reward</h4>
// //         <p>₹ {rewardData.reward.toLocaleString()}</p>
// //       </div>

// //       <div className={styles.card}>
// //         <FaTrophy className={styles.icon} />
// //         <h4>Total Rewards</h4>
// //         <p>₹ {rewardData.totalReward.toLocaleString()}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RewardsAchievements;



import React from 'react';
import './RewardsAchievements.css';

const rewardLevels = [
  { level: 'IGNITOR', subscribers: 3, bonus: '10%', reward: 'Branded Merchandise' },
  { level: 'SPARK', subscribers: 120, bonus: '10%', reward: 'Travel Voucher for Local Events' },
  { level: 'RISER', subscribers: 750, bonus: '10%', reward: 'Travel Voucher for National Event' },
  { level: 'PIONEER', subscribers: 2777, bonus: '15%', reward: 'Home Office Setup Voucher' },
  { level: 'INNOVATOR', subscribers: 5555, bonus: '15%', reward: 'National Tour Package (3 Days & Self)' },
  { level: 'CATALYST', subscribers: 9000, bonus: '16%', reward: 'Premium Travel Fund with Spouse' },
  { level: 'TRAILBLAZER', subscribers: 15000, bonus: '16%', reward: 'Exclusive National Event Invitation' },
  { level: 'VANGUARD', subscribers: 22000, bonus: '17%', reward: 'Leisure Perk for Family Travel' },
  { level: 'LUMINARY', subscribers: 30000, bonus: '17%', reward: 'Exclusive International Event Invitation' },
  { level: 'MOGUL', subscribers: 40000, bonus: '18%', reward: 'Luxury Lifestyle Packages' },
  { level: 'SOVEREIGN', subscribers: 50000, bonus: '18%', reward: 'House Fund Unlock' },
];

export default function RewardsAchievements() {
  const PV_PER_SUB = 42;

  return (
    <div className="rewards-container">
      <h2>🏆 Achievements & Rewards</h2>
      <div className="card-grid">
        {rewardLevels.map((item, idx) => {
          const requiredPV = item.subscribers * PV_PER_SUB;
          const progress = 100; // always full since no user input

          return (
            <div className="card" key={idx}>
              <h3>{item.level}</h3>
              <p>🎯 Required: {item.subscribers} Subscribers</p>
              <p>💰 Bonus: {item.bonus}</p>
              <p>🎁 Reward: {item.reward}</p>
              <p>📊 Required PV: {requiredPV}</p>
              <div className="progress-bar">
                <div className="fill" style={{ width: `${progress}%` }}></div>
              </div>
              <span>{progress}% Complete</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
