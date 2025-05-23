import React from "react";
import styles from "./ReportAffiliates.module.css";
import data from "../JsonData/directAffiliates.json"; // dummy JSON

const ReportAffiliates = () => {
  return (
    <div className={styles.RevenuedirectAffiliatesContainer}>
      <h3 className={styles.Revenue_heading}>Affiliate Performance</h3>
      <p className={styles.Revenue_tablepara}> Key metrics for top performing affiliates</p>
      <table className={styles.Revenue_table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Joined</th>
            <th>Referrals</th>
            <th>Earnings</th>
            {/* <th>Action</th> */}
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

export default ReportAffiliates;
