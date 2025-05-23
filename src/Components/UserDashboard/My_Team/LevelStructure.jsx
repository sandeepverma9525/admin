// import React from "react";
// import styles from "./LevelStructure.module.css";
// import levelData from "../JsonData/levelStructure.json";

// const LevelStructure = () => {
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>📈 Level Structure</h2>
//       <p className={styles.subtitle}>Your team structure broken down by levels</p>

//       <div className={styles.grid}>
//         {levelData.map((level, index) => {
//           const completion = Math.round(
//             (level.activeMembers / (level.activeMembers + level.inactiveMembers)) * 100
//           );

//           return (
//             <div className={styles.card} key={index}>
//               <div className={styles.header}>
//                 <h3 className={styles.levelTitle}>Level {level.level}</h3>
//                 <span className={styles.memberBadge}>{level.totalMembers} Members</span>
//               </div>
//               <div className={styles.details}>
//                 <p><strong>Active Members:</strong> {level.activeMembers}</p>
//                 <p><strong>Inactive Members:</strong> {level.inactiveMembers}</p>
//                 <p><strong>Level Volume:</strong> ${level.volume.toLocaleString()}</p>
//                 <p><strong>Completion:</strong> {completion}%</p>
//               </div>
//               <div className={styles.progressBar}>
//                 <div
//                   className={styles.progress}
//                   style={{ width: `${completion}%` }}
//                 ></div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default LevelStructure;




// ! 2
// import React from "react";
// import styles from "./LevelStructure.module.css";

// const dummyLevels = [
//   {
//     level: 1,
//     activeMembers: 8,
//     inactiveMembers: 0,
//     levelVolume: 4500,
//   },
//   {
//     level: 2,
//     activeMembers: 22,
//     inactiveMembers: 2,
//     levelVolume: 12750,
//   },
//   {
//     level: 3,
//     activeMembers: 48,
//     inactiveMembers: 8,
//     levelVolume: 28400,
//   },
//   {
//     level: 4,
//     activeMembers: 78,
//     inactiveMembers: 16,
//     levelVolume: 36900,
//   },
//   {
//     level: 5,
//     activeMembers: 34,
//     inactiveMembers: 10,
//     levelVolume: 18100,
//   },
//   {
//     level: 6,
//     activeMembers: 45,
//     inactiveMembers: 15,
//     levelVolume: 22400,
//   },
//   {
//     level: 7,
//     activeMembers: 30,
//     inactiveMembers: 5,
//     levelVolume: 15600,
//   },
//   {
//     level: 8,
//     activeMembers: 12,
//     inactiveMembers: 3,
//     levelVolume: 7800,
//   },
//   {
//     level: 9,
//     activeMembers: 6,
//     inactiveMembers: 2,
//     levelVolume: 3200,
//   },
// ];

// const LevelStructure = () => {
//   return (
//     <div className={styles.levelStructure}>
//       <h2>🪢 Level Structure</h2>
//       <p>Your team structure broken down by levels</p>

//       <div className={styles.grid}>
//         {dummyLevels.map((level) => {
//           const total = level.activeMembers + level.inactiveMembers;
//           const completion = total > 0 ? Math.round((level.activeMembers / total) * 100) : 0;

//           return (
//             <div key={level.level} className={styles.card}>
//               <div className={styles.cardTop}>
//                 <strong>Level {level.level}</strong>
//                 <span>{total} Members</span>
//               </div>
//               <p>Active Members: {level.activeMembers}</p>
//               <p>Inactive Members: {level.inactiveMembers}</p>
//               <p>
//                 Level Volume: <strong>${level.levelVolume.toLocaleString()}</strong>
//               </p>
//               <p>Completion: <strong>{completion}%</strong></p>

//               <div className={styles.progressBar}>
//                 <div
//                   className={styles.progress}
//                   style={{ width: `${completion}%` }}
//                 ></div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default LevelStructure;





import React from "react";
import styles from "./LevelStructure.module.css";
import { motion } from "framer-motion";

const levels = [
  { level: 1, active: 8, inactive: 0, volume: 4500 },
  { level: 2, active: 22, inactive: 2, volume: 12750 },
  { level: 3, active: 48, inactive: 8, volume: 28400 },
  { level: 4, active: 78, inactive: 16, volume: 36900 },
  { level: 5, active: 34, inactive: 10, volume: 18100 },
  { level: 6, active: 45, inactive: 15, volume: 22400 },
  { level: 7, active: 30, inactive: 5, volume: 15600 },
  { level: 8, active: 12, inactive: 3, volume: 7800 },
  { level: 9, active: 6, inactive: 2, volume: 3200 },
];

const LevelStructure = () => {
  return (
    <div className={styles.container}>
      <h2>🪢 Level Structure</h2>
      <p>Your team structure broken down by levels</p>

      <div className={styles.grid}>
        {levels.map((item) => {
          const total = item.active + item.inactive;
          const completion = total ? Math.round((item.active / total) * 100) : 0;

          return (
            <motion.div
              className={styles.card}
              key={item.level}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.level * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.header}>
                <strong>Level {item.level}</strong>
                <span>{total} Members</span>
              </div>
              <p>Active Members: {item.active}</p>
              <p>Inactive Members: {item.inactive}</p>
              <p>
                Level Volume: <strong>${item.volume.toLocaleString()}</strong>
              </p>
              <p>Completion: <strong>{completion}%</strong></p>

              <div className={styles.bar}>
                <motion.div
                  className={styles.fill}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${completion}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LevelStructure;
