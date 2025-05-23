
import React, { useState } from "react";
// import RevenueProfit from "./RevenueProfit";
import ReferralStructure from "./ReferralStructure";
// import ReportCommissions from "./ReportCommissions";
import { FaWallet, FaUsers, FaUserPlus, FaLevelUpAlt } from "react-icons/fa";
// import Overview from "./Overview";
import styles from "./Network.module.css";
import AddAffiliates from "./AddAffiliates";
// import {Link} from 'react-router-dom'

const Network = () => {
  const [activeTab, setActiveTab] = useState("ReferralStructure");

  const renderContent = () => {
    switch (activeTab) {
    //   case "Referral Structure":
        // return <RevenueProfit />;
      case "Add Affiliates":
        return <AddAffiliates />;
    //   case "Commissions":
        // return <ReportCommissions />;
      default:
      return <ReferralStructure />;
    }
  };



  return (
    <div className={styles.network_teamContainer} >
      <div className={styles.network_topBar}>
        <h2>Network</h2>

        {/* <div>
          <button className={styles.btn}
            style={{
              // border:'1px solid red',
              height: "40px",
              background: '#32B3A6',
              fontSize: 'large',

            }}
          >Placement Affiliate</button>
        </div> */}
      </div>

      <div className={styles.network_topCards}>
          <div className={styles.network_card} >
            <div className={styles.network_icon}><FaUsers /></div>
            <div>
              <h4>Total Earnings</h4>
              <p>$1,25,000</p>
            </div>
          </div>

          <div className={styles.network_card} >
            <div className={styles.network_icon}><FaUsers /></div>
            <div>
              <h4>Total Earnings</h4>
              <p>$1,25,000</p>
            </div>
          </div>

          <div className={styles.network_card} >
            <div className={styles.network_icon}><FaUsers /></div>
            <div>
              <h4>Total Earnings</h4>
              <p>$1,25,000</p>
            </div>
          </div>

          <div className={styles.network_card} >
            <div className={styles.network_icon}><FaUsers /></div>
            <div>
              <h4>Total Earnings</h4>
              <p>$1,25,000</p>
            </div>
          </div>


        </div>

      <div
        className={styles.network_tabButtons}
      >
        {[
            "Referral Structure",
            "Add Affiliates",
            //   "Network Tree",
        //   "Commissions",
        ].map((tab) => (
          <button
            style={{
              // border: 'solid red',
              width: '250px',
              fontSize: '18px',
              color:'white',
              // background:'#152637'
              background: activeTab === tab ? '#0F1C2E' : '#2B3D54',

            }}
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ""
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>{renderContent()}</div>
    </div>
  );
};

export default Network;
