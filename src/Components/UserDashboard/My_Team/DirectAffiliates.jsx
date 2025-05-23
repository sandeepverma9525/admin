import React from "react";
import styles from "./DirectAffiliates.module.css";
import data from "../JsonData/directAffiliates.json"; // dummy JSON

const DirectAffiliates = () => {
  return (
    <div className={styles.directAffiliatesContainer}>
      <h3 className={styles.heading}>Direct Affiliates</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Affiliate (Email)</th>
            <th>Joining Date</th>
            <th>Team Size</th>
            <th>Earnings ($)</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.email}</td>
              <td>{item.joiningDate}</td>
              <td>{item.teamSize}</td>
              <td>${item.earnings}</td>
              <td>
                <span
                  className={`${styles.status} ${
                    item.status.toLowerCase() === "active"
                      ? styles.active
                      : styles.inactive
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td>
                <button className={styles.viewBtn}>View Teams</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DirectAffiliates;
