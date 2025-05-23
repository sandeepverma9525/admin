
// Dashboard.jsx
import React from "react";
import TopCards from "./TopCards";
import Charts from "./Charts";
import BottomCards from "./BottomCards";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.Dasnbboardheading}>
      <h2 className={styles.dashhead}>Admin Dashboard</h2>
      <div className={styles.dashtopbtn}>
        {/* <button className={styles.dashboard_topbutton}>Reports</button> */}
        {/* <button className={styles.dashboard_topbutton2}>Addvanced Analytics</button> */}
      </div>

</div>
      <TopCards />
      <Charts />
      {/* <BottomCards /> */}
    </div>
  );
};

export default Dashboard;
