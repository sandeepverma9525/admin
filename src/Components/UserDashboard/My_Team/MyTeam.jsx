// MyTeam.jsx
import React, { useState } from "react";
import AllMembers from "./AllMembers";
import DirectAffiliates from "./DirectAffiliates";
import LevelStructure from "./LevelStructure";
import BinaryTree from "./BinaryTree";
import styles from "./MyTeam.module.css";
// import {Link} from 'react-router-dom'

const MyTeam = () => {
  const [activeTab, setActiveTab] = useState("All Members");

  const renderContent = () => {
    switch (activeTab) {
      case "Direct Affiliates":
        return <DirectAffiliates />;
      case "Level Structure":
        return <LevelStructure />;
      case "Binary Tree":
        return <BinaryTree />;
      default:
        return <AllMembers />;
    }
  };

  return (
    <div className={styles.teamContainer}>
      <div className={styles.topBar}>
        <h2>My Team</h2>
        <div>
          
          <button className={styles.btn}
         style={{
          // border:'1px solid red',
            height:"40px",
            background:'#32B3A6',
            fontSize:'large',

          }}
         >Placement Affiliate</button>
        </div>
      </div>

      <div 
      className={styles.tabButtons}
      >
        {[
          "All Members",
          "Direct Affiliates",
          "Level Structure",
          "Binary Tree",
        ].map((tab) => (
          <button
          style={{
            // border: 'solid red',
            width:'200px',
            fontSize:'18px',
            // background:'#152637'
             background: activeTab === tab ? '#0F1C2E' : '#2B3D54',

          }}
            key={tab}
            className={`${styles.tab} ${
              activeTab === tab ? styles.active : ""
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

export default MyTeam;








// import { useState } from 'react';

// export default function TeamManagement() {
//   const [activeTab, setActiveTab] = useState('all-members');
//   const [showPlacementForm, setShowPlacementForm] = useState(false);
//   const [formData, setFormData] = useState({
//     affiliate: '',
//     placeUnder: '',
//     position: 'left'
//   });

//   // Sample team members data
//   const teamMembers = [
//     {
//       id: 1,
//       initials: 'JD',
//       name: 'John Doe',
//       email: 'john@example.com',
//       level: 1,
//       joinedDate: '2023-01-15',
//       referrals: 5,
//       earnings: 1245.00,
//       status: 'Active'
//     },
//     {
//       id: 2,
//       initials: 'AS',
//       name: 'Alice Smith',
//       email: 'alice@example.com',
//       level: 2,
//       joinedDate: '2023-02-10',
//       referrals: 3,
//       earnings: 870.50,
//       status: 'Active'
//     },
//     {
//       id: 3,
//       initials: 'RJ',
//       name: 'Robert Johnson',
//       email: 'robert@example.com',
//       level: 1,
//       joinedDate: '2023-02-22',
//       referrals: 0,
//       earnings: 450.00,
//       status: 'Inactive'
//     },
//     {
//       id: 4,
//       initials: 'ED',
//       name: 'Emily Davis',
//       email: 'emily@example.com',
//       level: 3,
//       joinedDate: '2023-03-05',
//       referrals: 8,
//       earnings: 2340.75,
//       status: 'Active'
//     },
//     {
//       id: 5,
//       initials: 'MW',
//       name: 'Michael Wilson',
//       email: 'michael@example.com',
//       level: 2,
//       joinedDate: '2023-03-18',
//       referrals: 2,
//       earnings: 780.25,
//       status: 'Active'
//     }
//   ];

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handlePlacementSubmit = () => {
//     // Validate
//     if (!formData.affiliate || !formData.placeUnder) {
//       alert('Please select both an affiliate and a parent affiliate');
//       return;
//     }
    
//     console.log('Placement Affiliate Data:', formData);
//     // Here you would implement the actual placement logic
//     alert(`Affiliate ${formData.affiliate} placed under ${formData.placeUnder} in position ${formData.position}`);
//     setShowPlacementForm(false);
//     setFormData({
//       affiliate: '',
//       placeUnder: '',
//       position: 'left'
//     });
//   };

//   const getInitialColor = (initials) => {
//     // Generate consistent colors based on initials
//     const colors = [
//       '#ef4444', '#3b82f6', '#22c55e', 
//       '#eab308', '#a855f7', '#ec4899'
//     ];
//     const sum = initials.charCodeAt(0) + (initials.charCodeAt(1) || 0);
//     return colors[sum % colors.length];
//   };

//   // Inline CSS styles
//   const styles = {
//     container: {
//       backgroundColor: '#111827',
//       color: 'white',
//       minHeight: '100vh',
//       padding: '1.5rem'
//     },
//     wrapper: {
//       maxWidth: '1200px',
//       margin: '0 auto'
//     },
//     header: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: '1.5rem'
//     },
//     title: {
//       fontSize: '1.5rem',
//       fontWeight: 'bold'
//     },
//     buttonGroup: {
//       display: 'flex',
//       gap: '0.75rem'
//     },
//     primaryButton: {
//       backgroundColor: '#14b8a6',
//       color: 'white',
//       padding: '0.5rem 1rem',
//       borderRadius: '0.25rem',
//       display: 'flex',
//       alignItems: 'center',
//       cursor: 'pointer',
//       border: 'none',
//       fontFamily: 'inherit',
//       fontSize: '1rem'
//     },
//     secondaryButton: {
//       backgroundColor: '#374151',
//       color: 'white',
//       padding: '0.5rem 1rem',
//       borderRadius: '0.25rem',
//       display: 'flex',
//       alignItems: 'center',
//       cursor: 'pointer',
//       border: 'none',
//       fontFamily: 'inherit',
//       fontSize: '1rem'
//     },
//     iconSpan: {
//       marginRight: '0.5rem'
//     },
//     tabsContainer: {
//       display: 'flex',
//       borderBottom: '1px solid #374151',
//       marginBottom: '1.5rem'
//     },
//     tab: {
//       padding: '0.75rem 1.5rem',
//       cursor: 'pointer',
//       color: '#9ca3af',
//       background: 'none',
//       border: 'none',
//       fontFamily: 'inherit',
//       fontSize: '1rem'
//     },
//     activeTab: {
//       borderBottom: '2px solid #3b82f6',
//       color: '#3b82f6'
//     },
//     membersSection: {
//       backgroundColor: '#1f2937',
//       borderRadius: '0.5rem',
//       padding: '1.5rem',
//       marginBottom: '2rem'
//     },
//     sectionHeader: {
//       display: 'flex',
//       alignItems: 'center',
//       marginBottom: '1rem'
//     },
//     sectionIcon: {
//       marginRight: '0.5rem'
//     },
//     sectionTitle: {
//       fontSize: '1.25rem',
//       fontWeight: 'bold'
//     },
//     sectionDescription: {
//       color: '#9ca3af',
//       marginBottom: '1.5rem'
//     },
//     tableHeader: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
//       gap: '1rem',
//       borderBottom: '1px solid #374151',
//       paddingBottom: '1rem',
//       marginBottom: '0.5rem',
//       color: '#9ca3af'
//     },
//     tableRow: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
//       gap: '1rem',
//       borderBottom: '1px solid #374151',
//       padding: '1rem 0'
//     },
//     affiliateCell: {
//       display: 'flex',
//       alignItems: 'center'
//     },
//     avatar: {
//       width: '2.5rem',
//       height: '2.5rem',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: 'white',
//       fontWeight: 'bold',
//       marginRight: '0.75rem'
//     },
//     affiliateInfo: {
//       display: 'flex',
//       flexDirection: 'column'
//     },
//     affiliateName: {
//       fontWeight: 500
//     },
//     affiliateEmail: {
//       color: '#9ca3af',
//       fontSize: '0.875rem'
//     },
//     cell: {
//       display: 'flex',
//       alignItems: 'center'
//     },
//     statusBadge: {
//       padding: '0.25rem 0.5rem',
//       borderRadius: '9999px',
//       fontSize: '0.75rem'
//     },
//     activeStatus: {
//       backgroundColor: 'rgba(34, 197, 94, 0.2)',
//       color: '#86efac'
//     },
//     inactiveStatus: {
//       backgroundColor: '#374151',
//       color: '#d1d5db'
//     },
//     actionButton: {
//       color: '#60a5fa',
//       background: 'none',
//       border: 'none',
//       cursor: 'pointer',
//       fontFamily: 'inherit',
//       fontSize: '1rem',
//       padding: 0
//     },
//     modal: {
//       position: 'fixed',
//       inset: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.75)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       zIndex: 50
//     },
//     modalContent: {
//       backgroundColor: '#1f2937',
//       borderRadius: '0.5rem',
//       padding: '1.5rem',
//       width: '100%',
//       maxWidth: '28rem'
//     },
//     modalHeader: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: '1rem'
//     },
//     modalTitle: {
//       fontSize: '1.125rem',
//       fontWeight: 500
//     },
//     closeButton: {
//       color: '#9ca3af',
//       background: 'none',
//       border: 'none',
//       cursor: 'pointer'
//     },
//     formGroup: {
//       marginBottom: '1rem'
//     },
//     label: {
//       display: 'block',
//       color: '#d1d5db',
//       marginBottom: '0.5rem'
//     },
//     select: {
//       width: '100%',
//       backgroundColor: '#374151',
//       border: '1px solid #4b5563',
//       borderRadius: '0.25rem',
//       padding: '0.5rem 0.75rem',
//       color: 'white',
//       outline: 'none',
//       fontFamily: 'inherit',
//       fontSize: '1rem'
//     },
//     formActions: {
//       display: 'flex',
//       justifyContent: 'flex-end',
//       marginTop: '1.5rem'
//     },
//     cancelButton: {
//       backgroundColor: '#4b5563',
//       color: 'white',
//       padding: '0.5rem 1rem',
//       borderRadius: '0.25rem',
//       marginRight: '0.5rem',
//       cursor: 'pointer',
//       border: 'none',
//       fontFamily: 'inherit',
//       fontSize: '1rem'
//     },
//     submitButton: {
//       backgroundColor: '#2563eb',
//       color: 'white',
//       padding: '0.5rem 1rem',
//       borderRadius: '0.25rem',
//       cursor: 'pointer',
//       border: 'none',
//       fontFamily: 'inherit',
//       fontSize: '1rem'
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.wrapper}>
//         <div style={styles.header}>
//           <h1 style={styles.title}>Team Management</h1>
//           <div style={styles.buttonGroup}>
//             <button 
//               style={styles.primaryButton}
//               onClick={() => alert("Add New Affiliate button clicked")}
//             >
//               <span style={styles.iconSpan}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
//                 </svg>
//               </span>
//               Add New Affiliate
//             </button>
//             <button 
//               style={styles.secondaryButton}
//               onClick={() => setShowPlacementForm(true)}
//             >
//               <span style={styles.iconSpan}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
//                 </svg>
//               </span>
//               Placement Affiliate
//             </button>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div style={styles.tabsContainer}>
//           <button
//             style={activeTab === 'all-members' 
//               ? {...styles.tab, ...styles.activeTab} 
//               : styles.tab
//             }
//             onClick={() => setActiveTab('all-members')}
//           >
//             All Members
//           </button>
//           <button
//             style={activeTab === 'direct-affiliates' 
//               ? {...styles.tab, ...styles.activeTab} 
//               : styles.tab
//             }
//             onClick={() => setActiveTab('direct-affiliates')}
//           >
//             Direct Affiliates
//           </button>
//           <button
//             style={activeTab === 'level-structure' 
//               ? {...styles.tab, ...styles.activeTab} 
//               : styles.tab
//             }
//             onClick={() => setActiveTab('level-structure')}
//           >
//             Level Structure
//           </button>
//           <button
//             style={activeTab === 'binary-tree' 
//               ? {...styles.tab, ...styles.activeTab} 
//               : styles.tab
//             }
//             onClick={() => setActiveTab('binary-tree')}
//           >
//             Binary Tree
//           </button>
//         </div>

//         {/* Team Members Section */}
//         <div style={styles.membersSection}>
//           <div style={styles.sectionHeader}>
//             <svg 
//               style={styles.sectionIcon}
//               xmlns="http://www.w3.org/2000/svg" 
//               width="24" 
//               height="24" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//             </svg>
//             <h2 style={styles.sectionTitle}>Team Members</h2>
//           </div>
//           <p style={styles.sectionDescription}>Manage all your team members and their details</p>

//           {/* Table Header */}
//           <div style={styles.tableHeader}>
//             <div>Affiliate</div>
//             <div>Level</div>
//             <div>Joined Date</div>
//             <div>Referrals</div>
//             <div>Earnings</div>
//             <div>Status</div>
//             <div>Actions</div>
//           </div>

//           {/* Table Rows */}
//           {teamMembers.map(member => (
//             <div key={member.id} style={styles.tableRow}>
//               <div style={styles.affiliateCell}>
//                 <div style={{
//                   ...styles.avatar,
//                   backgroundColor: getInitialColor(member.initials)
//                 }}>
//                   {member.initials}
//                 </div>
//                 <div style={styles.affiliateInfo}>
//                   <div style={styles.affiliateName}>{member.name}</div>
//                   <div style={styles.affiliateEmail}>{member.email}</div>
//                 </div>
//               </div>
//               <div style={styles.cell}>Level {member.level}</div>
//               <div style={styles.cell}>{member.joinedDate}</div>
//               <div style={styles.cell}>{member.referrals}</div>
//               <div style={styles.cell}>${member.earnings.toFixed(2)}</div>
//               <div style={styles.cell}>
//                 <span style={{
//                   ...styles.statusBadge,
//                   ...(member.status === 'Active' ? styles.activeStatus : styles.inactiveStatus)
//                 }}>
//                   {member.status}
//                 </span>
//               </div>
//               <div style={styles.cell}>
//                 <button style={styles.actionButton}>View</button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Placement Affiliate Modal */}
//         {showPlacementForm && (
//           <div style={styles.modal}>
//             <div style={styles.modalContent}>
//               <div style={styles.modalHeader}>
//                 <h3 style={styles.modalTitle}>Placement Affiliate</h3>
//                 <button 
//                   onClick={() => setShowPlacementForm(false)}
//                   style={styles.closeButton}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
              
//               <div>
//                 <div style={styles.formGroup}>
//                   <label style={styles.label}>Affiliate to Place</label>
//                   <select 
//                     name="affiliate"
//                     value={formData.affiliate}
//                     onChange={handleFormChange}
//                     style={styles.select}
//                   >
//                     <option value="">Select an affiliate</option>
//                     {teamMembers.map(member => (
//                       <option key={member.id} value={member.id}>{member.name}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div style={styles.formGroup}>
//                   <label style={styles.label}>Place Under</label>
//                   <select 
//                     name="placeUnder"
//                     value={formData.placeUnder}
//                     onChange={handleFormChange}
//                     style={styles.select}
//                   >
//                     <option value="">Select a parent affiliate</option>
//                     {teamMembers.map(member => (
//                       <option key={member.id} value={member.id}>{member.name}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div style={styles.formGroup}>
//                   <label style={styles.label}>Position</label>
//                   <select 
//                     name="position"
//                     value={formData.position}
//                     onChange={handleFormChange}
//                     style={styles.select}
//                   >
//                     <option value="left">Left</option>
//                     <option value="right">Right</option>
//                   </select>
//                 </div>
                
//                 <div style={styles.formActions}>
//                   <button
//                     type="button"
//                     onClick={() => setShowPlacementForm(false)}
//                     style={styles.cancelButton}
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handlePlacementSubmit}
//                     style={styles.submitButton}
//                   >
//                     Place Affiliate
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }