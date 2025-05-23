// import { useState } from 'react';

// const AffiliateReport = () => {
//   const [activeTab, setActiveTab] = useState('Overview');
//   const [timeframe, setTimeframe] = useState('Yearly');

//   // Data for Overview tab
//   const overviewData = {
//     totalRevenue: 400000,
//     netProfit: 245000,
//     commissionsPaid: 112000,
//     activeAffiliates: 205,
//     revenueTargetAchievement: 95,
//     affiliateGrowth: 78,
//     systemStability: 99.8
//   };

//   // Data for Revenue & Profit tab
//   const revenueData = [
//     { month: 'Jan', revenue: 45000, profit: 28000, commission: 12600, margin: 62.2 },
//     { month: 'Feb', revenue: 52000, profit: 32000, commission: 14560, margin: 61.5 },
//     { month: 'Mar', revenue: 48000, profit: 29000, commission: 13440, margin: 60.4 },
//     { month: 'Apr', revenue: 61000, profit: 37000, commission: 17080, margin: 60.7 },
//     { month: 'May', revenue: 55000, profit: 34000, commission: 15400, margin: 61.8 },
//     { month: 'Jun', revenue: 67000, profit: 41000, commission: 18760, margin: 61.2 },
//     { month: 'Jul', revenue: 72000, profit: 44000, commission: 20160, margin: 61.1 },
//   ];

//   // Data for Affiliates tab
//   const affiliatesData = [
//     { id: 'AFF001', name: 'John Doe', joined: '2023-01-15', referrals: 15, earnings: 5400 },
//     { id: 'AFF002', name: 'Alice Smith', joined: '2023-02-20', referrals: 22, earnings: 8800 },
//     { id: 'AFF003', name: 'Robert Jones', joined: '2023-03-10', referrals: 18, earnings: 6900 },
//     { id: 'AFF004', name: 'Emily White', joined: '2023-04-05', referrals: 25, earnings: 9500 },
//   ];

//   // Data for Commissions tab
//   const commissionsData = [
//     { month: 'Jan', direct: 8500, team: 3200, monthly: 4300, total: 16000 },
//     { month: 'Feb', direct: 9800, team: 3700, monthly: 4900, total: 18400 },
//     { month: 'Mar', direct: 9200, team: 3500, monthly: 4600, total: 17300 },
//     { month: 'Apr', direct: 11500, team: 4300, monthly: 5800, total: 21600 },
//     { month: 'May', direct: 10400, team: 3900, monthly: 5200, total: 19500 },
//     { month: 'Jun', direct: 12700, team: 4800, monthly: 6400, total: 23900 },
//     { month: 'Jul', direct: 13600, team: 5100, monthly: 6800, total: 25500 },
//   ];

//   // Helper function to format numbers
//   const formatCurrency = (value) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       maximumFractionDigits: 0
//     }).format(value);
//   };

//   // Calculate totals for Revenue tab
//   const revenueTotals = {
//     revenue: revenueData.reduce((sum, item) => sum + item.revenue, 0),
//     profit: revenueData.reduce((sum, item) => sum + item.profit, 0),
//     commission: revenueData.reduce((sum, item) => sum + item.commission, 0),
//     margin: (revenueData.reduce((sum, item) => sum + item.profit, 0) / 
//              revenueData.reduce((sum, item) => sum + item.revenue, 0) * 100).toFixed(1)
//   };

//   // Calculate totals for Affiliates tab
//   const affiliatesTotals = {
//     referrals: affiliatesData.reduce((sum, item) => sum + item.referrals, 0),
//     earnings: affiliatesData.reduce((sum, item) => sum + item.earnings, 0)
//   };

//   // Calculate totals for Commissions tab
//   const commissionsTotals = {
//     direct: commissionsData.reduce((sum, item) => sum + item.direct, 0),
//     team: commissionsData.reduce((sum, item) => sum + item.team, 0),
//     monthly: commissionsData.reduce((sum, item) => sum + item.monthly, 0),
//     total: commissionsData.reduce((sum, item) => sum + item.total, 0)
//   };

//   // Render Overview tab content
//   const renderOverview = () => (
//     <div className="overview-container">
//       <div className="metrics-grid">
//         <div className="metric-card">
//           <h3>Total Revenue</h3>
//           <div className="metric-value">{formatCurrency(overviewData.totalRevenue)}</div>
//           <div className="metric-change">+12% from previous period</div>
//         </div>

//         <div className="metric-card">
//           <h3>Net Profit</h3>
//           <div className="metric-value">{formatCurrency(overviewData.netProfit)}</div>
//           <div className="metric-change">+8% from previous period</div>
//         </div>

//         <div className="metric-card">
//           <h3>Commissions Paid</h3>
//           <div className="metric-value">{formatCurrency(overviewData.commissionsPaid)}</div>
//           <div className="metric-change">+15% from previous period</div>
//         </div>

//         <div className="metric-card">
//           <h3>Active Affiliates</h3>
//           <div className="metric-value">{overviewData.activeAffiliates}</div>
//           <div className="metric-change">+22 from previous period</div>
//         </div>
//       </div>

//       <div className="executive-summary">
//         <h3>Executive Summary</h3>
//         <p>
//           The system has shown strong performance this period with a 12% increase in total revenue compared to the previous period. 
//           Net profit grew by 8%, with commission payouts up by 15%. The affiliate network expanded with 22 new active affiliates compared 
//           to the last period. Key areas of growth include direct bonuses (+15%) and monthly bonuses (+12%). The financial health of the 
//           system remains strong with positive cash flow and increasing member engagement metrics.
//         </p>

//         <div className="progress-metrics">
//           <div className="progress-item">
//             <div className="progress-label">
//               <span>Revenue Target Achievement</span>
//               <span>{overviewData.revenueTargetAchievement}%</span>
//             </div>
//             <div className="progress-bar">
//               <div className="progress-filled" style={{ width: `${overviewData.revenueTargetAchievement}%`, backgroundColor: '#26C6DA' }}></div>
//             </div>
//           </div>

//           <div className="progress-item">
//             <div className="progress-label">
//               <span>Affiliate Growth</span>
//               <span>{overviewData.affiliateGrowth}%</span>
//             </div>
//             <div className="progress-bar">
//               <div className="progress-filled" style={{ width: `${overviewData.affiliateGrowth}%`, backgroundColor: '#26C6DA' }}></div>
//             </div>
//           </div>

//           <div className="progress-item">
//             <div className="progress-label">
//               <span>System Stability</span>
//               <span>{overviewData.systemStability}%</span>
//             </div>
//             <div className="progress-bar">
//               <div className="progress-filled" style={{ width: `${overviewData.systemStability}%`, backgroundColor: '#42A5F5' }}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Render Revenue & Profit tab content
//   const renderRevenue = () => (
//     <div className="revenue-container">
//       <div className="revenue-analysis">
//         <h3>Revenue Analysis</h3>
//         <p>Monthly breakdown of key financial metrics</p>

//         <div className="table-wrapper">
//           <table className="data-table">
//             <thead>
//               <tr>
//                 <th>Month</th>
//                 <th>Revenue</th>
//                 <th>Profit</th>
//                 <th>Commission</th>
//                 <th>Margin</th>
//               </tr>
//             </thead>
//             <tbody>
//               {revenueData.map((row, index) => (
//                 <tr key={index}>
//                   <td>{row.month}</td>
//                   <td>{formatCurrency(row.revenue)}</td>
//                   <td>{formatCurrency(row.profit)}</td>
//                   <td>{formatCurrency(row.commission)}</td>
//                   <td>{row.margin}%</td>
//                 </tr>
//               ))}
//             </tbody>
//             <tfoot>
//               <tr>
//                 <td className="total-row">Total</td>
//                 <td className="total-row">{formatCurrency(revenueTotals.revenue)}</td>
//                 <td className="total-row">{formatCurrency(revenueTotals.profit)}</td>
//                 <td className="total-row">{formatCurrency(revenueTotals.commission)}</td>
//                 <td className="total-row">{revenueTotals.margin}%</td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   // Render Affiliates tab content
//   const renderAffiliates = () => (
//     <div className="affiliates-container">
//       <div className="affiliate-performance">
//         <h3>Affiliate Performance</h3>
//         <p>Key metrics for top performing affiliates</p>

//         <div className="table-wrapper">
//           <table className="data-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Joined</th>
//                 <th>Referrals</th>
//                 <th>Earnings</th>
//               </tr>
//             </thead>
//             <tbody>
//               {affiliatesData.map((row, index) => (
//                 <tr key={index}>
//                   <td>{row.id}</td>
//                   <td>{row.name}</td>
//                   <td>{row.joined}</td>
//                   <td>{row.referrals}</td>
//                   <td>{formatCurrency(row.earnings)}</td>
//                 </tr>
//               ))}
//             </tbody>
//             <tfoot>
//               <tr>
//                 <td colSpan="3" className="total-row">Total</td>
//                 <td className="total-row">{affiliatesTotals.referrals}</td>
//                 <td className="total-row">{formatCurrency(affiliatesTotals.earnings)}</td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   // Render Commissions tab content
//   const renderCommissions = () => (
//     <div className="commissions-container">
//       <div className="commission-breakdown">
//         <h3>Commission Breakdown</h3>
//         <p>Monthly overview of commission payouts</p>

//         <div className="table-wrapper">
//           <table className="data-table">
//             <thead>
//               <tr>
//                 <th>Month</th>
//                 <th>Direct</th>
//                 <th>Team</th>
//                 <th>Monthly</th>
//                 <th>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {commissionsData.map((row, index) => (
//                 <tr key={index}>
//                   <td>{row.month}</td>
//                   <td>{formatCurrency(row.direct)}</td>
//                   <td>{formatCurrency(row.team)}</td>
//                   <td>{formatCurrency(row.monthly)}</td>
//                   <td>{formatCurrency(row.total)}</td>
//                 </tr>
//               ))}
//             </tbody>
//             <tfoot>
//               <tr>
//                 <td className="total-row">Total</td>
//                 <td className="total-row">{formatCurrency(commissionsTotals.direct)}</td>
//                 <td className="total-row">{formatCurrency(commissionsTotals.team)}</td>
//                 <td className="total-row">{formatCurrency(commissionsTotals.monthly)}</td>
//                 <td className="total-row">{formatCurrency(commissionsTotals.total)}</td>
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   // Render active tab content
//   const renderActiveTabContent = () => {
//     switch (activeTab) {
//       case 'Overview':
//         return renderOverview();
//       case 'Revenue & Profit':
//         return renderRevenue();
//       case 'Affiliates':
//         return renderAffiliates();
//       case 'Commissions':
//         return renderCommissions();
//       default:
//         return renderOverview();
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-header">
//         <h1>Reports & Analytics</h1>
//         <div className="header-actions">
//           <button className="action-button">
//             <svg className="icon" viewBox="0 0 24 24" width="18" height="18">
//               <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5v-2z" />
//             </svg>
//             Export
//           </button>
//           <button className="action-button">
//             <svg className="icon" viewBox="0 0 24 24" width="18" height="18">
//               <path fill="currentColor" d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-7h8v7zm3-9H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1zm-1-3H6V5h12v2z" />
//             </svg>
//             Print
//           </button>
//           <div className="dropdown">
//             <button className="dropdown-button">
//               <svg className="icon" viewBox="0 0 24 24" width="18" height="18">
//                 <path fill="currentColor" d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
//               </svg>
//               {timeframe}
//               <svg className="dropdown-arrow" viewBox="0 0 24 24" width="18" height="18">
//                 <path fill="currentColor" d="M7 10l5 5 5-5z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="tabs">
//         <button 
//           className={`tab-button ${activeTab === 'Overview' ? 'active' : ''}`}
//           onClick={() => setActiveTab('Overview')}
//         >
//           Overview
//         </button>
//         <button 
//           className={`tab-button ${activeTab === 'Revenue & Profit' ? 'active' : ''}`}
//           onClick={() => setActiveTab('Revenue & Profit')}
//         >
//           Revenue & Profit
//         </button>
//         <button 
//           className={`tab-button ${activeTab === 'Affiliates' ? 'active' : ''}`}
//           onClick={() => setActiveTab('Affiliates')}
//         >
//           Affiliates
//         </button>
//         <button 
//           className={`tab-button ${activeTab === 'Commissions' ? 'active' : ''}`}
//           onClick={() => setActiveTab('Commissions')}
//         >
//           Commissions
//         </button>
//       </div>

//       <div className="tab-content">
//         {renderActiveTabContent()}
//       </div>
//     </div>
//   );
// };

// // Apply CSS styles
// const styles = {
//   /* Global styles */
//   ':root': {
//     '--primary-dark': '#172B4D',
//     '--secondary-dark': '#1D3557',
//     '--accent-blue': '#2684FF',
//     '--text-light': '#F8F9FA',
//     '--border-color': '#2D3B55',
//     '--card-bg': '#1E293B',
//     '--hover-bg': '#2C3E50'
//   },

//   '*': {
//     boxSizing: 'border-box',
//     margin: 0,
//     padding: 0
//   },

//   body: {
//     fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
//     backgroundColor: '#0F172A',
//     color: '#F8F9FA',
//     lineHeight: 1.6
//   }
// };

// // Apply the styles using custom style tag
// const styleTag = document.createElement('style');
// styleTag.textContent = `
//   .dashboard-container {
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 20px;
//     background-color: #0F172A;
//     color: #F8F9FA;
//   }

//   .dashboard-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 20px;
//   }

//   .header-actions {
//     display: flex;
//     gap: 10px;
//   }

//   .action-button {
//     display: flex;
//     align-items: center;
//     gap: 5px;
//     background-color: #1E293B;
//     color: #F8F9FA;
//     border: 1px solid #2D3B55;
//     border-radius: 4px;
//     padding: 8px 16px;
//     cursor: pointer;
//     font-size: 14px;
//   }

//   .action-button:hover {
//     background-color: #2C3E50;
//   }

//   .dropdown {
//     position: relative;
//   }

//   .dropdown-button {
//     display: flex;
//     align-items: center;
//     gap: 5px;
//     background-color: #1E293B;
//     color: #F8F9FA;
//     border: 1px solid #2D3B55;
//     border-radius: 4px;
//     padding: 8px 16px;
//     cursor: pointer;
//     font-size: 14px;
//   }

//   .dropdown-button:hover {
//     background-color: #2C3E50;
//   }

//   .icon {
//     display: inline-block;
//     vertical-align: middle;
//   }

//   .tabs {
//     display: flex;
//     border-bottom: 1px solid #2D3B55;
//     margin-bottom: 20px;
//   }

//   .tab-button {
//     background: none;
//     border: none;
//     color: #F8F9FA;
//     padding: 12px 24px;
//     cursor: pointer;
//     font-size: 14px;
//     position: relative;
//   }

//   .tab-button.active {
//     background-color: #172B4D;
//     border-top-left-radius: 4px;
//     border-top-right-radius: 4px;
//     font-weight: 500;
//   }

//   .tab-button.active::after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 2px;
//     background-color: #2684FF;
//   }

//   .tab-button:hover:not(.active) {
//     background-color: #172B4D80;
//   }

//   .tab-content {
//     background-color: #172B4D;
//     border-radius: 4px;
//     padding: 20px;
//   }

//   .metrics-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//     gap: 20px;
//     margin-bottom: 24px;
//   }

//   .metric-card {
//     background-color: #1E293B;
//     padding: 20px;
//     border-radius: 4px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   }

//   .metric-card h3 {
//     font-size: 14px;
//     font-weight: 500;
//     margin-bottom: 10px;
//     color: #CBD5E1;
//   }

//   .metric-value {
//     font-size: 28px;
//     font-weight: 600;
//     margin-bottom: 5px;
//   }

//   .metric-change {
//     font-size: 12px;
//     color: #94A3B8;
//   }

//   .executive-summary {
//     background-color: #1E293B;
//     padding: 20px;
//     border-radius: 4px;
//     margin-top: 20px;
//   }

//   .executive-summary h3 {
//     font-size: 16px;
//     font-weight: 500;
//     margin-bottom: 15px;
//   }

//   .executive-summary p {
//     margin-bottom: 20px;
//     font-size: 14px;
//     line-height: 1.6;
//     color: #CBD5E1;
//   }

//   .progress-metrics {
//     margin-top: 20px;
//   }

//   .progress-item {
//     margin-bottom: 15px;
//   }

//   .progress-label {
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 5px;
//     font-size: 14px;
//   }

//   .progress-bar {
//     height: 8px;
//     background-color: #2D3B55;
//     border-radius: 4px;
//     overflow: hidden;
//   }

//   .progress-filled {
//     height: 100%;
//     border-radius: 4px;
//   }

//   .revenue-analysis, .affiliate-performance, .commission-breakdown {
//     background-color: #1E293B;
//     padding: 20px;
//     border-radius: 4px;
//   }

//   .revenue-analysis h3, .affiliate-performance h3, .commission-breakdown h3 {
//     font-size: 16px;
//     font-weight: 500;
//     margin-bottom: 5px;
//   }

//   .revenue-analysis p, .affiliate-performance p, .commission-breakdown p {
//     font-size: 14px;
//     color: #94A3B8;
//     margin-bottom: 20px;
//   }

//   .table-wrapper {
//     overflow-x: auto;
//   }

//   .data-table {
//     width: 100%;
//     border-collapse: collapse;
//     font-size: 14px;
//   }

//   .data-table th, .data-table td {
//     padding: 12px;
//     text-align: left;
//     border-bottom: 1px solid #2D3B55;
//   }

//   .data-table th {
//     font-weight: 500;
//     color: #CBD5E1;
//   }

//   .data-table tbody tr:hover {
//     background-color: #2C3E50;
//   }

//   .data-table tfoot {
//     font-weight: 500;
//   }

//   .total-row {
//     background-color: #2684FF;
//     color: white;
//     font-weight: 500;
//   }
// `;
// document.head.appendChild(styleTag);

// export default AffiliateReport;




import React, { useState } from "react";
import RevenueProfit from "./RevenueProfit";
import ReportAffiliates from "./ReportAffiliates";
import ReportCommissions from "./ReportCommissions";
import { FaWallet, FaUsers, FaUserPlus, FaLevelUpAlt } from "react-icons/fa";
import Overview from "./Overview";
import styles from "./Reports.module.css";
// import {Link} from 'react-router-dom'

const Reports = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderContent = () => {
    switch (activeTab) {
      case "Revenue & Profit":
        return <RevenueProfit />;
      case "Affiliates":
        return <ReportAffiliates />;
      case "Commissions":
        return <ReportCommissions />;
      default:
      return <Overview />;
    }
  };



  return (
    <div className={styles.teamContainer} >
      <div className={styles.topBar}>
        <h2>Reports</h2>

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

      <div className={styles.topCards}>
          <div className={styles.card} >
            <div className={styles.icon}><FaUsers /></div>
            <div>
              <h4>Total Earnings</h4>
              <p>$1,25,000</p>
            </div>
          </div>

          <div className={styles.card} >
            <div className={styles.icon}><FaUsers /></div>
            <div>
              <h4>Total Earnings</h4>
              <p>$1,25,000</p>
            </div>
          </div>

          <div className={styles.card} >
            <div className={styles.icon}><FaUsers /></div>
            <div>
              <h4>Total Earnings</h4>
              <p>$1,25,000</p>
            </div>
          </div>

          <div className={styles.card} >
            <div className={styles.icon}><FaUsers /></div>
            <div>
              <h4>Total Earnings</h4>
              <p>$1,25,000</p>
            </div>
          </div>


        </div>

      <div
        className={styles.tabButtons}
        // style={{border:'1px solid red'}}
      >
        {[
          "Overview",
          "Revenue & Profit",
          "Affiliates",
          "Commissions",
        ].map((tab) => (
          <button
            style={{
              // border: 'solid red',
              width: '200px',
              fontSize: '18px',
              // background:'#152637',
              color:'white',
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

export default Reports;


