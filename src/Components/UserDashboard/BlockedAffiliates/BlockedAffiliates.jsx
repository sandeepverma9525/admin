// import { useState } from 'react';
// import './BlockedAffiliates.css'

// // Main component
// export default function BlockedAffiliates() {
//   // Initial state for affiliates data
//   const [affiliates, setAffiliates] = useState([
//     {
//       id: 'AF001',
//       name: 'John Smith',
//       email: 'john@example.com',
//       level: 'Gold',
//       joinDate: '2023-01-15',
//       earnings: 2840.25,
//       isBlocked: false,
//       blockReason: '',
//       blockedSince: null,
//       blockedBy: null
//     },
//     {
//       id: 'AF002',
//       name: 'Emma Johnson',
//       email: 'emma@example.com',
//       level: 'Silver',
//       joinDate: '2023-01-22',
//       earnings: 1450.75,
//       isBlocked: false,
//       blockReason: '',
//       blockedSince: null,
//       blockedBy: null
//     },
//     {
//       id: 'AF005',
//       name: 'James Brown',
//       email: 'james@example.com',
//       level: 'Silver',
//       joinDate: '2022-11-10',
//       earnings: 3200.50,
//       isBlocked: true,
//       blockReason: 'Violation of terms of service - ...',
//       blockedSince: '2023-06-15',
//       blockedBy: 'Admin'
//     },
//     {
//       id: 'AF008',
//       name: 'Michael Wilson',
//       email: 'michael@example.com',
//       level: 'Bronze',
//       joinDate: '2022-09-05',
//       earnings: 3501.50,
//       isBlocked: true,
//       blockReason: 'Multiple account violations',
//       blockedSince: '2023-06-20',
//       blockedBy: 'Admin'
//     }
//   ]);

//   // State for managing block/unblock modal
//   const [showModal, setShowModal] = useState(false);
//   const [selectedAffiliate, setSelectedAffiliate] = useState(null);
//   const [modalAction, setModalAction] = useState(''); // 'block' or 'unblock'
//   const [blockReason, setBlockReason] = useState('');
//   const [notification, setNotification] = useState({ show: false, message: '', type: '' });

//   // Filter affiliates based on block status
//   const activeAffiliates = affiliates.filter(aff => !aff.isBlocked);
//   const blockedAffiliates = affiliates.filter(aff => aff.isBlocked);
  
//   // Calculate potential revenue loss from blocked affiliates
//   const potentialRevenueLoss = blockedAffiliates.reduce((sum, aff) => sum + aff.earnings, 0);

//   // Handler for opening block modal
//   const handleBlockClick = (affiliate) => {
//     setSelectedAffiliate(affiliate);
//     setModalAction('block');
//     setBlockReason('');
//     setShowModal(true);
//   };

//   // Handler for opening unblock modal
//   const handleUnblockClick = (affiliate) => {
//     setSelectedAffiliate(affiliate);
//     setModalAction('unblock');
//     setBlockReason('');
//     setShowModal(true);
//   };

//   // Handler for confirming block/unblock action
//   const handleConfirmAction = () => {
//     if (modalAction === 'block' && !blockReason.trim()) {
//       setNotification({
//         show: true,
//         message: 'Please provide a reason for blocking the affiliate.',
//         type: 'error'
//       });
//       return;
//     }

//     setAffiliates(prevAffiliates => 
//       prevAffiliates.map(aff => {
//         if (aff.id === selectedAffiliate.id) {
//           if (modalAction === 'block') {
//             return {
//               ...aff,
//               isBlocked: true,
//               blockReason,
//               blockedSince: new Date().toISOString().split('T')[0],
//               blockedBy: 'Admin'
//             };
//           } else {
//             return {
//               ...aff,
//               isBlocked: false,
//               blockReason: '',
//               blockedSince: null,
//               blockedBy: null
//             };
//           }
//         }
//         return aff;
//       })
//     );

//     // Show success notification
//     setNotification({
//       show: true,
//       message: modalAction === 'block' 
//         ? `${selectedAffiliate.name} has been blocked successfully.` 
//         : `${selectedAffiliate.name} has been unblocked successfully.`,
//       type: 'success'
//     });

//     // Close modal
//     setShowModal(false);
//     setSelectedAffiliate(null);
    
//     // Hide notification after 3 seconds
//     setTimeout(() => {
//       setNotification({ show: false, message: '', type: '' });
//     }, 3000);
//   };

//   // Handler for searching blocked affiliates
//   const [searchTerm, setSearchTerm] = useState('');
//   const filteredBlockedAffiliates = blockedAffiliates.filter(aff => 
//     aff.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     aff.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     aff.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="affiliate-management">
//       <h1 className="page-title">Affiliate Status Management</h1>
      
//       {/* Dashboard Cards */}
//       <div className="dashboard-cards">
//         <div className="card active-card">
//           <h2>Active Affiliates</h2>
//           <div className="card-value">{activeAffiliates.length}</div>
//           <div className="card-subtitle">Currently active</div>
//         </div>
        
//         <div className="card blocked-card">
//           <h2>Total Blocked</h2>
//           <div className="card-value">{blockedAffiliates.length}</div>
//           <div className="card-subtitle">Blocked affiliates</div>
//         </div>
        
//         <div className="card revenue-card">
//           <h2>Potential Revenue Loss</h2>
//           <div className="card-value">${potentialRevenueLoss.toFixed(2)}</div>
//           <div className="card-subtitle">From blocked affiliates</div>
//         </div>
//       </div>
      
//       {/* Active Affiliates Section */}
//       <div className="section">
//         <h2 className="section-title">Active Affiliates</h2>
//         <div className="table-container">
//           <table className="affiliates-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Affiliate</th>
//                 <th>Level</th>
//                 <th>Join Date</th>
//                 <th>Earnings</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {activeAffiliates.map(affiliate => (
//                 <tr key={affiliate.id}>
//                   <td>{affiliate.id}</td>
//                   <td>
//                     <div>{affiliate.name}</div>
//                     <div className="email">{affiliate.email}</div>
//                   </td>
//                   <td>
//                     <span className={`level-badge ${affiliate.level.toLowerCase()}`}>
//                       {affiliate.level}
//                     </span>
//                   </td>
//                   <td>{affiliate.joinDate}</td>
//                   <td>${affiliate.earnings.toFixed(2)}</td>
//                   <td>
//                     <button 
//                       className="block-btn"
//                       onClick={() => handleBlockClick(affiliate)}
//                     >
//                       Block
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {activeAffiliates.length === 0 && (
//                 <tr>
//                   <td colSpan="6" className="empty-table">No active affiliates found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Blocked Affiliates Section */}
//       <div className="section">
//         <h2 className="section-title">Blocked Affiliate List</h2>
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search blocked affiliates..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>
//         <div className="table-container">
//           <table className="affiliates-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Affiliate</th>
//                 <th>Level</th>
//                 <th>Blocked Since</th>
//                 <th>Reason</th>
//                 <th>Blocked By</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredBlockedAffiliates.map(affiliate => (
//                 <tr key={affiliate.id}>
//                   <td>{affiliate.id}</td>
//                   <td>
//                     <div>{affiliate.name}</div>
//                     <div className="email">{affiliate.email}</div>
//                   </td>
//                   <td>
//                     <span className={`level-badge ${affiliate.level.toLowerCase()}`}>
//                       {affiliate.level}
//                     </span>
//                   </td>
//                   <td>{affiliate.blockedSince}</td>
//                   <td className="reason-cell">{affiliate.blockReason}</td>
//                   <td>{affiliate.blockedBy}</td>
//                   <td>
//                     <button 
//                       className="unblock-btn"
//                       onClick={() => handleUnblockClick(affiliate)}
//                     >
//                       Unblock
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {filteredBlockedAffiliates.length === 0 && (
//                 <tr>
//                   <td colSpan="7" className="empty-table">No blocked affiliates found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Modal for Block/Unblock */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <div className="modal-header">
//               <h3>{modalAction === 'block' ? 'Block Affiliate' : 'Unblock Affiliate'}</h3>
//               <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
//             </div>
//             <div className="modal-body">
//               <div className="affiliate-info">
//                 <div><strong>ID:</strong> {selectedAffiliate.id}</div>
//                 <div><strong>Name:</strong> {selectedAffiliate.name}</div>
//                 <div>
//                   <strong>Level:</strong> 
//                   <span className={`level-badge ${selectedAffiliate.level.toLowerCase()}`}>
//                     {selectedAffiliate.level}
//                   </span>
//                 </div>
//               </div>
              
//               {modalAction === 'block' && (
//                 <div className="form-group">
//                   <label htmlFor="blockReason">Reason for blocking:</label>
//                   <textarea
//                     id="blockReason"
//                     value={blockReason}
//                     onChange={(e) => setBlockReason(e.target.value)}
//                     placeholder="Enter reason for blocking this affiliate..."
//                     rows="3"
//                   />
//                 </div>
//               )}
              
//               {modalAction === 'unblock' && (
//                 <p>Are you sure you want to unblock this affiliate?</p>
//               )}
//             </div>
//             <div className="modal-footer">
//               <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
//               <button 
//                 className={modalAction === 'block' ? 'confirm-block-btn' : 'confirm-unblock-btn'}
//                 onClick={handleConfirmAction}
//               >
//                 {modalAction === 'block' ? 'Block Affiliate' : 'Unblock Affiliate'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Notification */}
//       {notification.show && (
//         <div className={`notification ${notification.type}`}>
//           {notification.message}
//         </div>
//       )}
    
//     </div>
//   );
// }






// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './BlockedAffiliates.css';

// // Main component
// export default function BlockedAffiliates() {
//   // State for affiliates data
//   const [affiliates, setAffiliates] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // State for managing block/unblock modal
//   const [showModal, setShowModal] = useState(false);
//   const [selectedAffiliate, setSelectedAffiliate] = useState(null);
//   const [modalAction, setModalAction] = useState(''); // 'block' or 'unblock'
//   const [blockReason, setBlockReason] = useState('');
//   const [notification, setNotification] = useState({ show: false, message: '', type: '' });

//   // Fetch affiliates data from API
//   useEffect(() => {
//     const fetchAffiliates = async () => {
//       try {
//         setIsLoading(true);
//         const token = localStorage.getItem('token');
//         console.log('Using token from localStorage:', token);
        
//         const response = await axios.get('https://pronet.ap-1.evennode.com/api/user/getAllUser', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
        
//         console.log('API Response:', response.data);// 👈 Debug line
        
//         if (response.data.Status && Array.isArray(response.data.data)) {
//       const data = response.data.data;
//       setAffiliates(data); // or whatever you're doing with it
//     } else {
//       console.error("Unexpected data format:", response.data);
//     }

//         // Transform the API data to match our component structure
//         const formattedData = response.data.data.map(user => ({
//           id: user._id || user.id,
//           name: user.name || 'Unknown',
//           email: user.email || 'No email',
//           level: user.level || 'Standard',
//           joinDate: user.createdAt ? new Date(user.createdAt).toISOString().split('T')[0] : 'Unknown',
//           earnings: user.earnings || 0,
//           isBlocked: user.isBlocked || false,
//           blockReason: user.blockReason || '',
//           blockedSince: user.blockedSince ? new Date(user.blockedSince).toISOString().split('T')[0] : null,
//           blockedBy: user.blockedBy || 'System'
//         }));

//         setAffiliates(formattedData);
//         setIsLoading(false);
//       } catch (err) {
//         console.error('Error fetching affiliates data:', err);
//         setError('Failed to load affiliates data. Please try again later.');
//         setIsLoading(false);
//       }
//     };

//     fetchAffiliates();
//   }, []);

//   // Handler for block/unblock API call
//   const handleBlockUnblockAPI = async (userId, action, reason = '') => {
//     try {
//       const token = localStorage.getItem('token');
//       console.log(`Attempting to ${action} user:`, userId);
      
//       const response = await axios.put(
//         `https://pronet.ap-1.evennode.com/api/admin/blockUnblockUser/${userId}`,
//         { reason },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );
      
//       console.log(`${action} response:`, response.data);
//       return response.data;
//     } catch (err) {
//       console.error(`Error during ${action} operation:`, err);
//       throw err;
//     }
//   };

//   // Filter affiliates based on block status
//   const activeAffiliates = affiliates.filter(aff => !aff.isBlocked);
//   const blockedAffiliates = affiliates.filter(aff => aff.isBlocked);
  
//   // Calculate potential revenue loss from blocked affiliates
//   const potentialRevenueLoss = blockedAffiliates.reduce((sum, aff) => sum + aff.earnings, 0);

//   // Handler for opening block modal
//   const handleBlockClick = (affiliate) => {
//     setSelectedAffiliate(affiliate);
//     setModalAction('block');
//     setBlockReason('');
//     setShowModal(true);
//   };

//   // Handler for opening unblock modal
//   const handleUnblockClick = (affiliate) => {
//     setSelectedAffiliate(affiliate);
//     setModalAction('unblock');
//     setBlockReason('');
//     setShowModal(true);
//   };

//   // Handler for confirming block/unblock action
//   const handleConfirmAction = async () => {
//     if (modalAction === 'block' && !blockReason.trim()) {
//       setNotification({
//         show: true,
//         message: 'Please provide a reason for blocking the affiliate.',
//         type: 'error'
//       });
//       return;
//     }

//     try {
//       await handleBlockUnblockAPI(
//         selectedAffiliate.id, 
//         modalAction,
//         modalAction === 'block' ? blockReason : ''
//       );

//       // Update local state
//       setAffiliates(prevAffiliates => 
//         prevAffiliates.map(aff => {
//           if (aff.id === selectedAffiliate.id) {
//             if (modalAction === 'block') {
//               return {
//                 ...aff,
//                 isBlocked: true,
//                 blockReason,
//                 blockedSince: new Date().toISOString().split('T')[0],
//                 blockedBy: 'Admin'
//               };
//             } else {
//               return {
//                 ...aff,
//                 isBlocked: false,
//                 blockReason: '',
//                 blockedSince: null,
//                 blockedBy: null
//               };
//             }
//           }
//           return aff;
//         })
//       );

//       // Show success notification
//       setNotification({
//         show: true,
//         message: modalAction === 'block' 
//           ? `${selectedAffiliate.name} has been blocked successfully.` 
//           : `${selectedAffiliate.name} has been unblocked successfully.`,
//         type: 'success'
//       });
//     } catch (err) {
//       console.error('Error during block/unblock operation:', err);
//       setNotification({
//         show: true,
//         message: `Failed to ${modalAction} affiliate. Please try again.`,
//         type: 'error'
//       });
//     }

//     // Close modal
//     setShowModal(false);
//     setSelectedAffiliate(null);
    
//     // Hide notification after 3 seconds
//     setTimeout(() => {
//       setNotification({ show: false, message: '', type: '' });
//     }, 3000);
//   };

//   // Handler for searching blocked affiliates
//   const [searchTerm, setSearchTerm] = useState('');
//   const filteredBlockedAffiliates = blockedAffiliates.filter(aff => 
//     aff.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     aff.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     aff.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (isLoading) {
//     return <div className="loading-spinner">Loading affiliates data...</div>;
//   }

//   if (error) {
//     return <div className="error-message">{error}</div>;
//   }

//   return (
//     <div className="affiliate-management">
//       <h1 className="page-title">Affiliate Status Management</h1>
      
//       {/* Dashboard Cards */}
//       <div className="dashboard-cards">
//         <div className="card active-card">
//           <h2>Active Affiliates</h2>
//           <div className="card-value">{activeAffiliates.length}</div>
//           <div className="card-subtitle">Currently active</div>
//         </div>
        
//         <div className="card blocked-card">
//           <h2>Total Blocked</h2>
//           <div className="card-value">{blockedAffiliates.length}</div>
//           <div className="card-subtitle">Blocked affiliates</div>
//         </div>
        
//         <div className="card revenue-card">
//           <h2>Potential Revenue Loss</h2>
//           <div className="card-value">${potentialRevenueLoss.toFixed(2)}</div>
//           <div className="card-subtitle">From blocked affiliates</div>
//         </div>
//       </div>
      
//       {/* Active Affiliates Section */}
//       <div className="section">
//         <h2 className="section-title">Active Affiliates</h2>
//         <div className="table-container">
//           <table className="affiliates-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Affiliate</th>
//                 <th>Level</th>
//                 <th>Join Date</th>
//                 <th>Earnings</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {activeAffiliates.map(affiliate => (
//                 <tr key={affiliate.id}>
//                   <td>{affiliate.id}</td>
//                   <td>
//                     <div>{affiliate.name}</div>
//                     <div className="email">{affiliate.email}</div>
//                   </td>
//                   <td>
//                     <span className={`level-badge ${(affiliate.level || 'standard').toLowerCase()}`}>
//                       {affiliate.level || 'Standard'}
//                     </span>
//                   </td>
//                   <td>{affiliate.joinDate}</td>
//                   <td>${affiliate.earnings.toFixed(2)}</td>
//                   <td>
//                     <button 
//                       className="block-btn"
//                       onClick={() => handleBlockClick(affiliate)}
//                     >
//                       Block
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {activeAffiliates.length === 0 && (
//                 <tr>
//                   <td colSpan="6" className="empty-table">No active affiliates found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Blocked Affiliates Section */}
//       <div className="section">
//         <h2 className="section-title">Blocked Affiliate List</h2>
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search blocked affiliates..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>
//         <div className="table-container">
//           <table className="affiliates-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Affiliate</th>
//                 <th>Level</th>
//                 <th>Blocked Since</th>
//                 <th>Reason</th>
//                 <th>Blocked By</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredBlockedAffiliates.map(affiliate => (
//                 <tr key={affiliate.id}>
//                   <td>{affiliate.id}</td>
//                   <td>
//                     <div>{affiliate.name}</div>
//                     <div className="email">{affiliate.email}</div>
//                   </td>
//                   <td>
//                     <span className={`level-badge ${(affiliate.level || 'standard').toLowerCase()}`}>
//                       {affiliate.level || 'Standard'}
//                     </span>
//                   </td>
//                   <td>{affiliate.blockedSince || 'Unknown'}</td>
//                   <td className="reason-cell">{affiliate.blockReason || 'No reason provided'}</td>
//                   <td>{affiliate.blockedBy || 'System'}</td>
//                   <td>
//                     <button 
//                       className="unblock-btn"
//                       onClick={() => handleUnblockClick(affiliate)}
//                     >
//                       Unblock
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {filteredBlockedAffiliates.length === 0 && (
//                 <tr>
//                   <td colSpan="7" className="empty-table">No blocked affiliates found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Modal for Block/Unblock */}
//       {showModal && selectedAffiliate && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <div className="modal-header">
//               <h3>{modalAction === 'block' ? 'Block Affiliate' : 'Unblock Affiliate'}</h3>
//               <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
//             </div>
//             <div className="modal-body">
//               <div className="affiliate-info">
//                 <div><strong>ID:</strong> {selectedAffiliate.id}</div>
//                 <div><strong>Name:</strong> {selectedAffiliate.name}</div>
//                 <div>
//                   <strong>Level:</strong> 
//                   <span className={`level-badge ${(selectedAffiliate.level || 'standard').toLowerCase()}`}>
//                     {selectedAffiliate.level || 'Standard'}
//                   </span>
//                 </div>
//               </div>
              
//               {modalAction === 'block' && (
//                 <div className="form-group">
//                   <label htmlFor="blockReason">Reason for blocking:</label>
//                   <textarea
//                     id="blockReason"
//                     value={blockReason}
//                     onChange={(e) => setBlockReason(e.target.value)}
//                     placeholder="Enter reason for blocking this affiliate..."
//                     rows="3"
//                   />
//                 </div>
//               )}
              
//               {modalAction === 'unblock' && (
//                 <p>Are you sure you want to unblock this affiliate?</p>
//               )}
//             </div>
//             <div className="modal-footer">
//               <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
//               <button 
//                 className={modalAction === 'block' ? 'confirm-block-btn' : 'confirm-unblock-btn'}
//                 onClick={handleConfirmAction}
//               >
//                 {modalAction === 'block' ? 'Block Affiliate' : 'Unblock Affiliate'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Notification */}
//       {notification.show && (
//         <div className={`notification ${notification.type}`}>
//           {notification.message}
//         </div>
//       )}
    
//     </div>
//   );
// }








// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import './BlockedAffiliates.css';

// // Main component
// export default function BlockedAffiliates() {
//   // State for affiliates data
//   const [affiliates, setAffiliates] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // State for managing block/unblock modal
//   const [showModal, setShowModal] = useState(false);
//   const [selectedAffiliate, setSelectedAffiliate] = useState(null);
//   const [modalAction, setModalAction] = useState(''); // 'block' or 'unblock'
//   const [blockReason, setBlockReason] = useState('');
//   const [notification, setNotification] = useState({ show: false, message: '', type: '' });

//   // Function to fetch data - extracted for reuse
//   const fetchAffiliates = useCallback(async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem('token');
//       console.log('Using token from localStorage:', token ? token.substring(0, 10) + '...' : 'No token found');
      
//       const response = await axios.get('https://pronet.ap-1.evennode.com/api/user/getAllUser', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
      
//       console.log('API Response:', response.data);
      
//       // Transform the API data to match our component structure
//       let formattedData = [];
//       if (response.data && response.data.data && Array.isArray(response.data.data)) {
//         formattedData = response.data.data.map(user => ({
//           id: user._id || user.id,
//           name: user.name || 'Unknown',
//           email: user.email || 'No email',
//           level: user.level || 'Standard',
//           joinDate: user.createdAt ? new Date(user.createdAt).toISOString().split('T')[0] : 'Unknown',
//           earnings: user.earnings || 0,
//           isBlocked: user.isBlocked || false,
//           blockReason: user.blockReason || '',
//           blockedSince: user.blockedSince ? new Date(user.blockedSince).toISOString().split('T')[0] : null,
//           blockedBy: user.blockedBy || 'System'
//         }));
//       } else {
//         console.warn('Unexpected API response format:', response.data);
//       }

//       setAffiliates(formattedData);
//       setIsLoading(false);
//     } catch (err) {
//       console.error('Error fetching affiliates data:', err);
//       setError('Failed to load affiliates data. Please try again later.');
//       setIsLoading(false);
//     }
//   }, []);

//   // Initial data fetch
//   useEffect(() => {
//     fetchAffiliates();
//   }, [fetchAffiliates]);

//   // Refresh data function
//   const refreshData = () => {
//     console.log('Refreshing data from API...');
//     fetchAffiliates();
//   };

//   // Handler for block/unblock API call
//   const handleBlockUnblockAPI = async (userId, action, reason = '') => {
//     try {
//       const token = localStorage.getItem('token');
//       console.log(`Attempting to ${action} user:`, userId);
      
//       // The API endpoint seems to expect a specific structure
//       // Let's try a simpler approach with just the essential data
//       const isBlocking = action === 'block';
//       const payload = {};
      
//       // For debugging - check exactly what's being sent
//       console.log('Sending request to:', `https://pronet.ap-1.evennode.com/api/admin/blockUnblockUser/${userId}`);
//       console.log('With token:', token ? token.substring(0, 10) + '...' : 'No token found');
      
//       // Check if we need to include a specific property for block/unblock status
//       // Try different payload formats based on API documentation or error responses
//       if (isBlocking) {
//         // Option 1: Try with status property
//         payload.status = false;
        
//         // Include reason if provided
//         if (reason) {
//           payload.reason = reason;
//         }
//       } else {
//         // For unblocking
//         payload.status = true;
//       }
      
//       console.log('Sending payload:', payload);
      
//       const response = await axios.put(
//         `https://pronet.ap-1.evennode.com/api/admin/blockUnblockUser/${userId}`,
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         }
//       );
      
//       console.log(`${action} response:`, response.data);
//       return response.data;
//     } catch (err) {
//       console.error(`Error during ${action} operation:`, err);
      
//       // Enhanced error logging
//       if (err.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.error('Error response data:', err.response.data);
//         console.error('Error response status:', err.response.status);
//         console.error('Error response headers:', err.response.headers);
//       }
      
//       throw err;
//     }
//   };

//   // Filter affiliates based on block status
//   const activeAffiliates = affiliates.filter(aff => !aff.isBlocked);
//   const blockedAffiliates = affiliates.filter(aff => aff.isBlocked);
  
//   // Calculate potential revenue loss from blocked affiliates
//   const potentialRevenueLoss = blockedAffiliates.reduce((sum, aff) => sum + aff.earnings, 0);

//   // Handler for opening block modal
//   const handleBlockClick = (affiliate) => {
//     setSelectedAffiliate(affiliate);
//     setModalAction('block');
//     setBlockReason('');
//     setShowModal(true);
//   };

//   // Handler for opening unblock modal
//   const handleUnblockClick = (affiliate) => {
//     setSelectedAffiliate(affiliate);
//     setModalAction('unblock');
//     setBlockReason('');
//     setShowModal(true);
//   };

//   // Handler for confirming block/unblock action
//   const handleConfirmAction = async () => {
//     if (modalAction === 'block' && !blockReason.trim()) {
//       setNotification({
//         show: true,
//         message: 'Please provide a reason for blocking the affiliate.',
//         type: 'error'
//       });
//       return;
//     }

//     try {
//       await handleBlockUnblockAPI(
//         selectedAffiliate.id, 
//         modalAction,
//         modalAction === 'block' ? blockReason : ''
//       );

//       // Update local state - even if the API call might have failed, let's update the UI
//       // You might want to refresh the data from the API instead for consistency
//       setAffiliates(prevAffiliates => 
//         prevAffiliates.map(aff => {
//           if (aff.id === selectedAffiliate.id) {
//             if (modalAction === 'block') {
//               return {
//                 ...aff,
//                 isBlocked: true,
//                 blockReason,
//                 blockedSince: new Date().toISOString().split('T')[0],
//                 blockedBy: 'Admin'
//               };
//             } else {
//               return {
//                 ...aff,
//                 isBlocked: false,
//                 blockReason: '',
//                 blockedSince: null,
//                 blockedBy: null
//               };
//             }
//           }
//           return aff;
//         })
//       );

//       // Show success notification
//       setNotification({
//         show: true,
//         message: modalAction === 'block' 
//           ? `${selectedAffiliate.name} has been blocked successfully.` 
//           : `${selectedAffiliate.name} has been unblocked successfully.`,
//         type: 'success'
//       });
      
//       // Refresh the data from the API to ensure consistency
//       refreshData();
      
//     } catch (err) {
//       console.error('Error during block/unblock operation:', err);
      
//       // Still update the UI if needed for a smoother user experience
//       // This is a fallback in case the API is having issues but we want the UI to be responsive
//       setAffiliates(prevAffiliates => 
//         prevAffiliates.map(aff => {
//           if (aff.id === selectedAffiliate.id) {
//             if (modalAction === 'block') {
//               return {
//                 ...aff,
//                 isBlocked: true,
//                 blockReason,
//                 blockedSince: new Date().toISOString().split('T')[0],
//                 blockedBy: 'Admin'
//               };
//             } else {
//               return {
//                 ...aff,
//                 isBlocked: false,
//                 blockReason: '',
//                 blockedSince: null,
//                 blockedBy: null
//               };
//             }
//           }
//           return aff;
//         })
//       );
      
//       setNotification({
//         show: true,
//         message: `Note: Changes applied locally. Server sync may be delayed.`,
//         type: 'warning'
//       });
//     }

//     // Close modal
//     setShowModal(false);
//     setSelectedAffiliate(null);
    
//     // Hide notification after 3 seconds
//     setTimeout(() => {
//       setNotification({ show: false, message: '', type: '' });
//     }, 3000);
//   };

//   // Handler for searching blocked affiliates
//   const [searchTerm, setSearchTerm] = useState('');
//   const filteredBlockedAffiliates = blockedAffiliates.filter(aff => 
//     aff.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     aff.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     aff.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (isLoading) {
//     return <div className="loading-spinner">Loading affiliates data...</div>;
//   }

//   if (error) {
//     return <div className="error-message">{error}</div>;
//   }

//   return (
//     <div className="affiliate-management">
//       <h1 className="page-title">Affiliate Status Management</h1>
      
//       {/* Dashboard Cards */}
//       <div className="dashboard-cards">
//         <div className="card active-card">
//           <h2>Active Affiliates</h2>
//           <div className="card-value">{activeAffiliates.length}</div>
//           <div className="card-subtitle">Currently active</div>
//         </div>
        
//         <div className="card blocked-card">
//           <h2>Total Blocked</h2>
//           <div className="card-value">{blockedAffiliates.length}</div>
//           <div className="card-subtitle">Blocked affiliates</div>
//         </div>
        
//         <div className="card revenue-card">
//           <h2>Potential Revenue Loss</h2>
//           <div className="card-value">${potentialRevenueLoss.toFixed(2)}</div>
//           <div className="card-subtitle">From blocked affiliates</div>
//         </div>
//       </div>
      
//       {/* Active Affiliates Section */}
//       <div className="section">
//         <h2 className="section-title">Active Affiliates</h2>
//         <div className="table-container">
//           <table className="affiliates-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Affiliate</th>
//                 <th>Level</th>
//                 <th>Join Date</th>
//                 <th>Earnings</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {activeAffiliates.map(affiliate => (
//                 <tr key={affiliate.id}>
//                   <td>{affiliate.id}</td>
//                   <td>
//                     <div>{affiliate.name}</div>
//                     <div className="email">{affiliate.email}</div>
//                   </td>
//                   <td>
//                     <span className={`level-badge ${(affiliate.level || 'standard').toLowerCase()}`}>
//                       {affiliate.level || 'Standard'}
//                     </span>
//                   </td>
//                   <td>{affiliate.joinDate}</td>
//                   <td>${affiliate.earnings.toFixed(2)}</td>
//                   <td>
//                     <button 
//                       className="block-btn"
//                       onClick={() => handleBlockClick(affiliate)}
//                     >
//                       Block
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {activeAffiliates.length === 0 && (
//                 <tr>
//                   <td colSpan="6" className="empty-table">No active affiliates found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Blocked Affiliates Section */}
//       <div className="section">
//         <h2 className="section-title">Blocked Affiliate List</h2>
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search blocked affiliates..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>
//         <div className="table-container">
//           <table className="affiliates-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Affiliate</th>
//                 <th>Level</th>
//                 <th>Blocked Since</th>
//                 <th>Reason</th>
//                 <th>Blocked By</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredBlockedAffiliates.map(affiliate => (
//                 <tr key={affiliate.id}>
//                   <td>{affiliate.id}</td>
//                   <td>
//                     <div>{affiliate.name}</div>
//                     <div className="email">{affiliate.email}</div>
//                   </td>
//                   <td>
//                     <span className={`level-badge ${(affiliate.level || 'standard').toLowerCase()}`}>
//                       {affiliate.level || 'Standard'}
//                     </span>
//                   </td>
//                   <td>{affiliate.blockedSince || 'Unknown'}</td>
//                   <td className="reason-cell">{affiliate.blockReason || 'No reason provided'}</td>
//                   <td>{affiliate.blockedBy || 'System'}</td>
//                   <td>
//                     <button 
//                       className="unblock-btn"
//                       onClick={() => handleUnblockClick(affiliate)}
//                     >
//                       Unblock
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {filteredBlockedAffiliates.length === 0 && (
//                 <tr>
//                   <td colSpan="7" className="empty-table">No blocked affiliates found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Modal for Block/Unblock */}
//       {showModal && selectedAffiliate && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <div className="modal-header">
//               <h3>{modalAction === 'block' ? 'Block Affiliate' : 'Unblock Affiliate'}</h3>
//               <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
//             </div>
//             <div className="modal-body">
//               <div className="affiliate-info">
//                 <div><strong>ID:</strong> {selectedAffiliate.id}</div>
//                 <div><strong>Name:</strong> {selectedAffiliate.name}</div>
//                 <div>
//                   <strong>Level:</strong> 
//                   <span className={`level-badge ${(selectedAffiliate.level || 'standard').toLowerCase()}`}>
//                     {selectedAffiliate.level || 'Standard'}
//                   </span>
//                 </div>
//               </div>
              
//               {modalAction === 'block' && (
//                 <div className="form-group">
//                   <label htmlFor="blockReason">Reason for blocking:</label>
//                   <textarea
//                     id="blockReason"
//                     value={blockReason}
//                     onChange={(e) => setBlockReason(e.target.value)}
//                     placeholder="Enter reason for blocking this affiliate..."
//                     rows="3"
//                   />
//                 </div>
//               )}
              
//               {modalAction === 'unblock' && (
//                 <p>Are you sure you want to unblock this affiliate?</p>
//               )}
//             </div>
//             <div className="modal-footer">
//               <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
//               <button 
//                 className={modalAction === 'block' ? 'confirm-block-btn' : 'confirm-unblock-btn'}
//                 onClick={handleConfirmAction}
//               >
//                 {modalAction === 'block' ? 'Block Affiliate' : 'Unblock Affiliate'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Notification */}
//       {notification.show && (
//         <div className={`notification ${notification.type}`}>
//           {notification.message}
//         </div>
//       )}
    
//     </div>
//   );
// }










// import { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import './BlockedAffiliates.css';

// // Main component
// export default function BlockedAffiliates() {
//   // State for affiliates data
//   const [affiliates, setAffiliates] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // State for managing block/unblock modal
//   const [showModal, setShowModal] = useState(false);
//   const [selectedAffiliate, setSelectedAffiliate] = useState(null);
//   const [modalAction, setModalAction] = useState(''); // 'block' or 'unblock'
//   const [blockReason, setBlockReason] = useState('');
//   const [notification, setNotification] = useState({ show: false, message: '', type: '' });

//   // Function to fetch data - extracted for reuse
//   const fetchAffiliates = useCallback(async () => {
//     try {
//       setIsLoading(true);
//       const token = localStorage.getItem('token');
//       console.log('Using token from localStorage:', token ? token.substring(0, 10) + '...' : 'No token found');
      
//       const response = await axios.get('https://pronet.ap-1.evennode.com/api/user/getAllUser', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
      
//       console.log('API Response:', response.data);
      
//       // Transform the API data to match our component structure
//       let formattedData = [];
//       if (response.data && response.data.data && Array.isArray(response.data.data)) {
//         formattedData = response.data.data.map(user => ({
//           id: user._id || user.id,
//           name: user.name || 'Unknown',
//           email: user.email || 'No email',
//           level: user.level || 'Standard',
//           joinDate: user.createdAt ? new Date(user.createdAt).toISOString().split('T')[0] : 'Unknown',
//           earnings: user.earnings || 0,
//           isBlocked: user.user_status || false,
//           blockReason: user.user_blocked_status || '',
//           blockedSince: user.blockedSince ? new Date(user.blockedSince).toISOString().split('T')[0] : null,
//           blockedBy: user.blockedBy || 'System'
//         }));
//       } else {
//         console.warn('Unexpected API response format:', response.data);
//       }

//       setAffiliates(formattedData);
//       setIsLoading(false);
//     } catch (err) {
//       console.error('Error fetching affiliates data:', err);
//       setError('Failed to load affiliates data. Please try again later.');
//       setIsLoading(false);
//     }
//   }, []);

//   // Initial data fetch
//   useEffect(() => {
//     fetchAffiliates();
//   }, [fetchAffiliates]);

//   // Refresh data function
//   const refreshData = () => {
//     console.log('Refreshing data from API...');
//     fetchAffiliates();
//   };

//   // Handler for block/unblock API call
//   const handleBlockUnblockAPI = async (userId, action, reason = '') => {
//     try {
//       const token = localStorage.getItem('token');
//       console.log(`Attempting to ${action} user:`, userId);
      
//       // The API endpoint seems to expect a specific structure
//       // Let's try a simpler approach with just the essential data
//       const isBlocking = action === 'block';
//       const payload = {};
      
//       // For debugging - check exactly what's being sent
//       console.log('Sending request to:', `https://pronet.ap-1.evennode.com/api/admin/blockUnblockUser/${userId}`);
//       console.log('With token:', token ? token.substring(0, 10) + '...' : 'No token found');
      
//       // Check if we need to include a specific property for block/unblock status
//       // Try different payload formats based on API documentation or error responses
//       if (isBlocking) {
//         // Option 1: Try with status property
//         payload.status = false;
        
//         // Include reason if provided
//         if (reason) {
//           payload.reason = reason;
//         }
//       } else {
//         // For unblocking
//         payload.status = true;
//       }
      
//       console.log('Sending payload:', payload);
      
//       const response = await axios.put(
//         `https://pronet.ap-1.evennode.com/api/admin/blockUnblockUser/${userId}`,
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         }
//       );
      
//       console.log(`${action} response:`, response.data);
//       return response.data;
//     } catch (err) {
//       console.error(`Error during ${action} operation:`, err);
      
//       // Enhanced error logging
//       if (err.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         console.error('Error response data:', err.response.data);
//         console.error('Error response status:', err.response.status);
//         console.error('Error response headers:', err.response.headers);
//       }
      
//       throw err;
//     }
//   };

//   // Filter affiliates based on block status
//   const activeAffiliates = affiliates.filter(aff => !aff.isBlocked);
//   const blockedAffiliates = affiliates.filter(aff => aff.isBlocked);
  
//   // Calculate potential revenue loss from blocked affiliates
//   const potentialRevenueLoss = blockedAffiliates.reduce((sum, aff) => sum + aff.earnings, 0);

//   // Handler for opening block modal
//   const handleBlockClick = (affiliate) => {
//     setSelectedAffiliate(affiliate);
//     setModalAction('block');
//     setBlockReason('');
//     setShowModal(true);
//   };

//   // Handler for opening unblock modal
//   const handleUnblockClick = (affiliate) => {
//     setSelectedAffiliate(affiliate);
//     setModalAction('unblock');
//     setBlockReason('');
//     setShowModal(true);
//   };

//   // Handler for confirming block/unblock action
//   const handleConfirmAction = async () => {
//     if (modalAction === 'block' && !blockReason.trim()) {
//       setNotification({
//         show: true,
//         message: 'Please provide a reason for blocking the affiliate.',
//         type: 'error'
//       });
//       return;
//     }

//     try {
//       await handleBlockUnblockAPI(
//         selectedAffiliate.id, 
//         modalAction,
//         modalAction === 'block' ? blockReason : ''
//       );

//       // Update local state - even if the API call might have failed, let's update the UI
//       // You might want to refresh the data from the API instead for consistency
//       setAffiliates(prevAffiliates => 
//         prevAffiliates.map(aff => {
//           if (aff.id === selectedAffiliate.id) {
//             if (modalAction === 'block') {
//               return {
//                 ...aff,
//                 isBlocked: true,
//                 blockReason,
//                 blockedSince: new Date().toISOString().split('T')[0],
//                 blockedBy: 'Admin'
//               };
//             } else {
//               return {
//                 ...aff,
//                 isBlocked: false,
//                 blockReason: '',
//                 blockedSince: null,
//                 blockedBy: null
//               };
//             }
//           }
//           return aff;
//         })
//       );

//       // Show success notification
//       setNotification({
//         show: true,
//         message: modalAction === 'block' 
//           ? `${selectedAffiliate.name} has been blocked successfully.` 
//           : `${selectedAffiliate.name} has been unblocked successfully.`,
//         type: 'success'
//       });
      
//       // Refresh the data from the API to ensure consistency
//       refreshData();
      
//     } catch (err) {
//       console.error('Error during block/unblock operation:', err);
      
//       // Still update the UI if needed for a smoother user experience
//       // This is a fallback in case the API is having issues but we want the UI to be responsive
//       setAffiliates(prevAffiliates => 
//         prevAffiliates.map(aff => {
//           if (aff.id === selectedAffiliate.id) {
//             if (modalAction === 'block') {
//               return {
//                 ...aff,
//                 isBlocked: true,
//                 blockReason,
//                 blockedSince: new Date().toISOString().split('T')[0],
//                 blockedBy: 'Admin'
//               };
//             } else {
//               return {
//                 ...aff,
//                 isBlocked: false,
//                 blockReason: '',
//                 blockedSince: null,
//                 blockedBy: null
//               };
//             }
//           }
//           return aff;
//         })
//       );
      
//       setNotification({
//         show: true,
//         message: `Note: Changes applied locally. Server sync may be delayed.`,
//         type: 'warning'
//       });
//     }

//     // Close modal
//     setShowModal(false);
//     setSelectedAffiliate(null);
    
//     // Hide notification after 3 seconds
//     setTimeout(() => {
//       setNotification({ show: false, message: '', type: '' });
//     }, 3000);
//   };

//   // Handler for searching blocked affiliates
//   const [searchTerm, setSearchTerm] = useState('');
//   const filteredBlockedAffiliates = blockedAffiliates.filter(aff => 
//     aff.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     aff.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     aff.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (isLoading) {
//     return <div className="loading-spinner">Loading affiliates data...</div>;
//   }

//   if (error) {
//     return <div className="error-message">{error}</div>;
//   }

//   return (
//     <div className="affiliate-management">
//       <h1 className="page-title">Affiliate Status Management</h1>
      
//       {/* Dashboard Cards */}
//       <div className="dashboard-cards">
//         <div className="card active-card">
//           <h2>Active Affiliates</h2>
//           <div className="card-value">{activeAffiliates.length}</div>
//           <div className="card-subtitle">Currently active</div>
//         </div>
        
//         <div className="card blocked-card">
//           <h2>Total Blocked</h2>
//           <div className="card-value">{blockedAffiliates.length}</div>
//           <div className="card-subtitle">Blocked affiliates</div>
//         </div>
        
//         <div className="card revenue-card">
//           <h2>Potential Revenue Loss</h2>
//           <div className="card-value">${potentialRevenueLoss.toFixed(2)}</div>
//           <div className="card-subtitle">From blocked affiliates</div>
//         </div>
//       </div>
      
//       {/* Active Affiliates Section */}
//       <div className="section">
//         <h2 className="section-title">Active Affiliates</h2>
//         <div className="table-container">
//           <table className="affiliates-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Affiliate</th>
//                 <th>Level</th>
//                 <th>Join Date</th>
//                 <th>Earnings</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {activeAffiliates.map(affiliate => (
//                 <tr key={affiliate.id}>
//                   <td>{affiliate.id}</td>
//                   <td>
//                     <div>{affiliate.name}</div>
//                     <div className="email">{affiliate.email}</div>
//                   </td>
//                   <td>
//                     <span className={`level-badge ${(affiliate.level || 'standard').toLowerCase()}`}>
//                       {affiliate.level || 'Standard'}
//                     </span>
//                   </td>
//                   <td>{affiliate.joinDate}</td>
//                   <td>${affiliate.earnings.toFixed(2)}</td>
//                   <td>
//                     <button 
//                       className="block-btn"
//                       onClick={() => handleBlockClick(affiliate)}
//                     >
//                       Block
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {activeAffiliates.length === 0 && (
//                 <tr>
//                   <td colSpan="6" className="empty-table">No active affiliates found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Blocked Affiliates Section */}
//       <div className="section">
//         <h2 className="section-title">Blocked Affiliate List</h2>
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search blocked affiliates..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="search-input"
//           />
//         </div>
//         <div className="table-container">
//           <table className="affiliates-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Affiliate</th>
//                 <th>Level</th>
//                 <th>Blocked Since</th>
//                 <th>Reason</th>
//                 <th>Blocked By</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredBlockedAffiliates.map(affiliate => (
//                 <tr key={affiliate.id}>
//                   <td>{affiliate.id}</td>
//                   <td>
//                     <div>{affiliate.name}</div>
//                     <div className="email">{affiliate.email}</div>
//                   </td>
//                   <td>
//                     <span className={`level-badge ${(affiliate.level || 'standard').toLowerCase()}`}>
//                       {affiliate.level || 'Standard'}
//                     </span>
//                   </td>
//                   <td>{affiliate.blockedSince || 'Unknown'}</td>
//                   <td className="reason-cell">{affiliate.blockReason || 'No reason provided'}</td>
//                   <td>{affiliate.blockedBy || 'System'}</td>
//                   <td>
//                     <button 
//                       className="unblock-btn"
//                       onClick={() => handleUnblockClick(affiliate)}
//                     >
//                       Unblock
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {filteredBlockedAffiliates.length === 0 && (
//                 <tr>
//                   <td colSpan="7" className="empty-table">No blocked affiliates found</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Modal for Block/Unblock */}
//       {showModal && selectedAffiliate && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <div className="modal-header">
//               <h3>{modalAction === 'block' ? 'Block Affiliate' : 'Unblock Affiliate'}</h3>
//               <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
//             </div>
//             <div className="modal-body">
//               <div className="affiliate-info">
//                 <div><strong>ID:</strong> {selectedAffiliate.id}</div>
//                 <div><strong>Name:</strong> {selectedAffiliate.name}</div>
//                 <div>
//                   <strong>Level:</strong> 
//                   <span className={`level-badge ${(selectedAffiliate.level || 'standard').toLowerCase()}`}>
//                     {selectedAffiliate.level || 'Standard'}
//                   </span>
//                 </div>
//               </div>
              
//               {modalAction === 'block' && (
//                 <div className="form-group">
//                   <label htmlFor="blockReason">Reason for blocking:</label>
//                   <textarea
//                     id="blockReason"
//                     value={blockReason}
//                     onChange={(e) => setBlockReason(e.target.value)}
//                     placeholder="Enter reason for blocking this affiliate..."
//                     rows="3"
//                   />
//                 </div>
//               )}
              
//               {modalAction === 'unblock' && (
//                 <p>Are you sure you want to unblock this affiliate?</p>
//               )}
//             </div>
//             <div className="modal-footer">
//               <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
//               <button 
//                 className={modalAction === 'block' ? 'confirm-block-btn' : 'confirm-unblock-btn'}
//                 onClick={handleConfirmAction}
//               >
//                 {modalAction === 'block' ? 'Block Affiliate' : 'Unblock Affiliate'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Notification */}
//       {notification.show && (
//         <div className={`notification ${notification.type}`}>
//           {notification.message}
//         </div>
//       )}
    
//     </div>
//   );
// }










import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './BlockedAffiliates.css';

// Main component
export default function BlockedAffiliates() {
  // State for affiliates data
  const [affiliates, setAffiliates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for managing block/unblock modal
  const [showModal, setShowModal] = useState(false);
  const [selectedAffiliate, setSelectedAffiliate] = useState(null);
  const [modalAction, setModalAction] = useState(''); // 'block' or 'unblock'
  const [blockReason, setBlockReason] = useState('');
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  // Function to fetch data - extracted for reuse
  const fetchAffiliates = useCallback(async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      console.log('Using token from localStorage:', token ? token.substring(0, 10) + '...' : 'No token found');
      
      const response = await axios.get('https://pronet.ap-1.evennode.com/api/user/getAllUser', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      console.log('API Response:', response.data);
      
      // Transform the API data to match our component structure
      let formattedData = [];
      if (response.data && response.data.data && Array.isArray(response.data.data)) {
        formattedData = response.data.data.map(user => ({
          id: user._id || user.id,
          name: user.name || 'Unknown',
          email: user.email || 'No email',
          level: user.level || 'Standard',
          joinDate: user.createdAt ? new Date(user.createdAt).toISOString().split('T')[0] : 'Unknown',
          earnings: user.earnings || 0,
          isBlocked: user.user_status || false,
          blockReason: user.user_blocked_status || '',
          blockedSince: user.blockedSince ? new Date(user.blockedSince).toISOString().split('T')[0] : null,
          blockedBy: user.blockedBy || 'System'
        }));
      } else {
        console.warn('Unexpected API response format:', response.data);
      }

      setAffiliates(formattedData);
      setInitialDataLoaded(true);
      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching affiliates data:', err);
      setError('Failed to load affiliates data. Please try again later.');
      setIsLoading(false);
    }
  }, []);

  // Initial data fetch
  useEffect(() => {
    fetchAffiliates();
  }, [fetchAffiliates]);

  // Add a state to track if we have data loaded initially
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  // Refresh data function - only do full API refresh when needed
  const refreshData = () => {
    console.log('Refreshing data from API...');
    fetchAffiliates();
  };

  // Handler for block/unblock API call
  const handleBlockUnblockAPI = async (userId, action, reason = '') => {
    try {
      const token = localStorage.getItem('token');
      console.log(`Attempting to ${action} user:`, userId);
      
      // Fixed: Use "Blocked" or "Unblock" as the API expects
      const payload = {
        status: action === 'block' ? "Blocked" : "Unblock",
        reason: action === 'block' ? reason : ''
      };

       console.log('Sending to backend:', payload); // 🐞 DEBUG
      
      // Include reason if provided for blocking
      if (action === 'block' && reason) {
        payload.reason = reason;
      }
      
      console.log('Sending request to:', `https://pronet.ap-1.evennode.com/api/admin/blockUnblockUser/${userId}`,
         payload,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      );
      console.log('With token:', token ? token.substring(0, 10) + '...' : 'No token found');
      console.log('Sending payload:', payload);
      
      const response = await axios.put(
        `https://pronet.ap-1.evennode.com/api/admin/blockUnblockUser/${userId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      console.log(`${action} response:`, response.data);
      return response.data;
    } catch (err) {
      console.error(`Error during ${action} operation:`, err);
      
      // Enhanced error logging
      if (err.response) {
        console.error('Error response data:', err.response.data);
        console.error('Error response status:', err.response.status);
        console.error('Error response headers:', err.response.headers);
        
        // If we have a message from the API, return it for better error handling
        // if (err.response.data && err.response.data.message) {
        //   throw new Error(err.response.data.message);
        // }

        if (err.response && err.response.data && err.response.data.message) {
  throw new Error(err.response.data.message);
} else {
  throw new Error('Something went wrong. Please try again later.');
}
      }
      
      throw err;
    }
  };

  

  // Filter affiliates based on block status
  const activeAffiliates = affiliates.filter(aff => !aff.isBlocked);
  const blockedAffiliates = affiliates.filter(aff => aff.isBlocked);
  
  // Calculate potential revenue loss from blocked affiliates
  const potentialRevenueLoss = blockedAffiliates.reduce((sum, aff) => sum + (aff.earnings || 0), 0);

  // Calculate total affiliates count for statistics
  const totalAffiliatesCount = affiliates.length;
  const blockedPercentage = totalAffiliatesCount > 0 
    ? Math.round((blockedAffiliates.length / totalAffiliatesCount) * 100) 
    : 0;

  // Handler for opening block modal
  const handleBlockClick = (affiliate) => {
    setSelectedAffiliate(affiliate);
    setModalAction('block');
    setBlockReason('');
    setShowModal(true);
  };

  // Handler for opening unblock modal
  const handleUnblockClick = (affiliate) => {
    setSelectedAffiliate(affiliate);
    setModalAction('unblock');
    setBlockReason('');
    setShowModal(true);
  };



  const handleConfirmAction = async () => {
  if (modalAction === 'block' && !blockReason.trim()) {
    setNotification({
      show: true,
      message: 'Please provide a reason for blocking the affiliate.',
      type: 'error'
    });
    return;
  }

  try {
    const result = await handleBlockUnblockAPI(
      selectedAffiliate.id,
      modalAction,
      modalAction === 'block' ? blockReason : ''
    );

    if (result && result.Status) {
      setNotification({
        show: true,
        message: modalAction === 'block'
          ? `${selectedAffiliate.name} has been blocked successfully.`
          : `${selectedAffiliate.name} has been unblocked successfully.`,
        type: 'success'
      });

      fetchAffiliates(); // fresh data reload
    }
  } catch (err) {
    setNotification({
      show: true,
      message: `Failed to ${modalAction} affiliate. Please try again.`,
      type: 'error'
    });
  }

  setShowModal(false);
  setSelectedAffiliate(null);

  setTimeout(() => {
    setNotification({ show: false, message: '', type: '' });
  }, 3000);
};



  // Handler for searching blocked affiliates
  const [searchTerm, setSearchTerm] = useState('');
  const filteredBlockedAffiliates = blockedAffiliates.filter(aff => 
    aff.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    aff.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    aff.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div className="loading-spinner">Loading affiliates data...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="affiliate-management">
      <h1 className="page-title">Affiliate Status Management</h1>
      
      {/* Dashboard Cards */}
      <div className="dashboard-cards">
        <div className="card active-card">
          <h2>Active Affiliates</h2>
          <div className="card-value">{activeAffiliates.length}</div>
          <div className="card-subtitle">Currently active</div>
        </div>
        
        <div className="card blocked-card">
          <h2>Total Blocked</h2>
          <div className="card-value">{blockedAffiliates.length}</div>
          <div className="card-subtitle">Blocked affiliates</div>
        </div>
        
        {/* <div className="card revenue-card">
          <h2>Potential Revenue Loss</h2>
          <div className="card-value">${potentialRevenueLoss.toFixed(2)}</div>
          <div className="card-subtitle">From blocked affiliates</div>
        </div> */}
        
        <div className="card percentage-card">
          <h2>Block Rate</h2>
          <div className="card-value">{blockedPercentage}%</div>
          <div className="card-subtitle">Of total affiliates</div>
        </div>
      </div>
      
      {/* Active Affiliates Section */}
      <div className="section">
        <h2 className="section-title">Active Affiliates</h2>
        <div className="table-container">
          <table className="affiliates-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Affiliate</th>
                <th>Level</th>
                <th>Join Date</th>
                <th>Earnings</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeAffiliates.map(affiliate => (
                <tr key={affiliate.id}>
                  <td>{affiliate.id}</td>
                  <td>
                    <div>{affiliate.name}</div>
                    <div className="email">{affiliate.email}</div>
                  </td>
                  <td>
                    <span className={`level-badge ${(affiliate.leve || '').toLowerCase()}`}>
                      {affiliate.level || ''}
                    </span>
                  </td>
                  <td>{affiliate.joinDate}</td>
                  <td>${affiliate.earnings.toFixed(2)}</td>
                  <td>
                    <button 
                      className="block-btn"
                      onClick={() => handleBlockClick(affiliate)}
                    >
                      Block
                    </button>
                  </td>
                </tr>
              ))}
              {activeAffiliates.length === 0 && (
                <tr>
                  <td colSpan="6" className="empty-table">No active affiliates found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      



      {/* Blocked Affiliates Section */}
      <div className="section">
        <h2 className="section-title">Blocked Affiliate List</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search blocked affiliates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="table-container">
          <table className="affiliates-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Affiliate</th>
                <th>Level</th>
                {/* <th>Blocked Since</th> */}
                {/* <th>Reason</th> */}
                <th>Blocked By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBlockedAffiliates.map(affiliate => (
                <tr key={affiliate.id}>
                  <td>{affiliate.id}</td>
                  <td>
                    <div>{affiliate.name}</div>
                    <div className="email">{affiliate.email}</div>
                  </td>
                  <td>
                    <span className={`level-badge ${(affiliate.level || 'standard').toLowerCase()}`}>
                      {affiliate.level || 'Standard'}
                    </span>
                  </td>
                  {/* <td>{affiliate.blockedSince || 'Unknown'}</td> */}
                  {/* <td className="reason-cell">{affiliate.blockReason || 'No reason provided'}</td> */}
                  <td>{affiliate.blockedBy || 'System'}</td>
                  <td>
                    <button 
                      className="unblock-btn"
                      onClick={() => handleUnblockClick(affiliate)}
                    >
                      Unblock
                    </button>
                  </td>
                </tr>
              ))}
              {filteredBlockedAffiliates.length === 0 && (
                <tr>
                  <td colSpan="7" className="empty-table">No blocked affiliates found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Modal for Block/Unblock */}
      {showModal && selectedAffiliate && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>{modalAction === 'block' ? 'Block Affiliate' : 'Unblock Affiliate'}</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="affiliate-info">
                <div><strong>ID:</strong> {selectedAffiliate.id}</div>
                <div><strong>Name:</strong> {selectedAffiliate.name}</div>
                <div>
                  {/* <strong>Level:</strong>  */}
                  {/* <span className={`level-badge ${(selectedAffiliate.level || 'standard').toLowerCase()}`}>
                    {selectedAffiliate.level || 'Standard'}
                  </span> */}
                </div>
              </div>
              
              {modalAction === 'block' && (
                <div className="form-group">
                  {/* <label htmlFor="blockReason">Reason for blocking:</label> */}
                  {/* <textarea
                    id="blockReason"
                    value={blockReason}
                    onChange={(e) => setBlockReason(e.target.value)}
                    placeholder="Enter reason for blocking this affiliate..."
                    rows="3"
                  /> */}
                </div>
              )}
              
              {modalAction === 'unblock' && (
                <p>Are you sure you want to unblock this affiliate?</p>
              )}
            </div>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              <button 
                className={modalAction === 'block' ? 'confirm-block-btn' : 'confirm-unblock-btn'}
                onClick={handleConfirmAction}
              >
                {modalAction === 'block' ? 'Block Affiliate' : 'Unblock Affiliate'}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Notification */}
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    
    </div>
  );
}