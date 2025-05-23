
import React from "react";
import styles from "./ReportAffiliates.module.css";
import data from "../JsonData/directAffiliates.json"; // dummy JSON

const ReportCommissions = () => {
  return (
    <div className={styles.RevenuedirectAffiliatesContainer}>
      <h3 className={styles.Revenue_heading}>Commission Breakdown</h3>
    <p className={styles.Revenue_tablepara}>Monthly overview of commission payouts</p>
   
      <table className={styles.Revenue_table}>
        <thead>
          <tr>
            <th> Month</th>
            <th>Direct</th>
            <th>Team</th>
            <th>Monthly</th>
            <th>Total</th>
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

export default ReportCommissions;
