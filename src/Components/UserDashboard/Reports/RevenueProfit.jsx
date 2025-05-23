import React from "react";
import styles from "./RevenueProfit.module.css";
import data from "../JsonData/directAffiliates.json"; // dummy JSON

const RevenueProfit = () => {
  return (
    <div className={styles.RevenuedirectAffiliatesContainer}>
      <h3 className={styles.Revenue_heading}>Revenue Analysis</h3>
<p className={styles.Revenue_tablepara}  >Monthly breakdown of key financial metrics</p>
      <table className={styles.Revenue_table}>
        <thead>
          <tr>
            <th>Month</th>
            <th>Revenue</th>
            <th>Profit</th>
            <th>Commission</th>
            <th>Margin (%)</th>
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

export default RevenueProfit;
