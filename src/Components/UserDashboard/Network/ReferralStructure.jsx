import React from "react";
import styles from "./ReferralStructure.module.css";
import data from "../JsonData/referralstructure.json"; // dummy JSON

const ReferralStructure = () => {
  return (
    <div className={styles.referrals_directAffiliatesContainer}>
      <h3 className={styles.referrals_heading}>Affiliate Referrals</h3>
{/* <p className={styles.referrals_tablepara}  >Monthly breakdown of key financial metrics</p> */}
      <table className={styles.referrals_table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Affiliate Name</th>
            <th>Level</th>
            <th>TEam Size</th>
            <th>Direct Referral</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.level}</td>
              <td>{item.team}</td>
              <td>{item.referrals}</td>
              <td>
                <span
                  className={`${styles.referrals_status} ${
                    item.status.toLowerCase() === "active"
                      ? styles.active
                      : styles.inactive
                  }`}
                >
                  {item.status}
                </span>
              </td>
              {/* <td>
                <button className={styles.viewBtn}>View Teams</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReferralStructure;
