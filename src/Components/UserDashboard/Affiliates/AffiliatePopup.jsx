// import React, { useState } from 'react';
// import { Eye, X } from 'lucide-react';
// import './AffiliatePopup.css';

// const AffiliatePopup = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
  
//   // Sample affiliate data - replace with your actual data source
//   const affiliateData = {
//     id: "AFF12345",
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+91 9876543210",
//     dateOfBirth: "15-05-1985",
//     gender: "Male",
//     state: "Maharashtra",
//     city: "Mumbai",
//     address: "123, Success Apartments, Andheri East",
//     adharNo: "XXXX-XXXX-1234",
//     status: "Active",
//     level: "Diamond",
//     joiningDate: "10-01-2023",
//     teamSize: 45,
//     earning: "₹87,500"
//   };

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };

//   return (
//     <div className="affiliate-container">
//       <button className="action-btn" onClick={togglePopup}>
//         <Eye size={18} />
//       </button>

//       {isPopupOpen && (
//         <div className="popup-overlay">
//           <div className="popup-content">
//             <div className="popup-header">
//               <h2>Affiliate Details</h2>
//               <button className="close-btn" onClick={togglePopup}>
//                 <X size={18} />
//               </button>
//             </div>
            
//             <div className="popup-body">
//               <div className="detail-row">
//                 <div className="detail-item">
//                   <span className="detail-label">ID:</span>
//                   <span className="detail-value">{affiliateData.id}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Name:</span>
//                   <span className="detail-value">{affiliateData.name}</span>
//                 </div>
//               </div>

//               <div className="detail-row">
//                 <div className="detail-item">
//                   <span className="detail-label">Email:</span>
//                   <span className="detail-value">{affiliateData.email}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Phone:</span>
//                   <span className="detail-value">{affiliateData.phone}</span>
//                 </div>
//               </div>

//               <div className="detail-row">
//                 <div className="detail-item">
//                   <span className="detail-label">Date of Birth:</span>
//                   <span className="detail-value">{affiliateData.dateOfBirth}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Gender:</span>
//                   <span className="detail-value">{affiliateData.gender}</span>
//                 </div>
//               </div>

//               <div className="detail-row">
//                 <div className="detail-item">
//                   <span className="detail-label">State:</span>
//                   <span className="detail-value">{affiliateData.state}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">City:</span>
//                   <span className="detail-value">{affiliateData.city}</span>
//                 </div>
//               </div>

//               <div className="detail-row">
//                 <div className="detail-item wide">
//                   <span className="detail-label">Address:</span>
//                   <span className="detail-value">{affiliateData.address}</span>
//                 </div>
//               </div>

//               <div className="detail-row">
//                 <div className="detail-item">
//                   <span className="detail-label">Adhar No:</span>
//                   <span className="detail-value">{affiliateData.adharNo}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Status:</span>
//                   <span className="detail-value status-badge">{affiliateData.status}</span>
//                 </div>
//               </div>

//               <div className="detail-row">
//                 <div className="detail-item">
//                   <span className="detail-label">Level:</span>
//                   <span className="detail-value">{affiliateData.level}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Joining Date:</span>
//                   <span className="detail-value">{affiliateData.joiningDate}</span>
//                 </div>
//               </div>

//               <div className="detail-row">
//                 <div className="detail-item">
//                   <span className="detail-label">Team Size:</span>
//                   <span className="detail-value">{affiliateData.teamSize}</span>
//                 </div>
//                 <div className="detail-item">
//                   <span className="detail-label">Earning:</span>
//                   <span className="detail-value earning">{affiliateData.earning}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AffiliatePopup;




// !2
import React from 'react';
import { X } from 'lucide-react';
import './AffiliatePopup.css';

const AffiliateModal = ({ affiliate, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Mock additional data that wasn't in the original component
  const additionalData = {
    phone: '+91 9876543210',
    dateOfBirth: '1990-05-15',
    gender: 'Male',
    state: 'California',
    city: 'San Francisco',
    address: '123 Tech Street, Silicon Valley',
    adharNo: '1234-5678-9012'
  };

  // Combine with affiliate data
  const fullDetails = { ...affiliate, ...additionalData };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Affiliate Details</h2>
          <button className="close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-content">
          <div className="affiliate-header">
            <div className="affiliate-name">{fullDetails.name}</div>
            <div className="affiliate-badges">
              <span className={`badge badge-${fullDetails.status.toLowerCase()}`}>
                {fullDetails.status}
              </span>
              <span className={`badge badge-${fullDetails.level.toLowerCase()}`}>
                {fullDetails.level}
              </span>
            </div>
          </div>

          <div className="detail-section">
            <h3>Basic Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">ID</span>
                <span className="detail-value">{fullDetails.id}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{fullDetails.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone</span>
                <span className="detail-value">{fullDetails.phone}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Date of Birth</span>
                <span className="detail-value">{fullDetails.dateOfBirth}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Gender</span>
                <span className="detail-value">{fullDetails.gender}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Adhar No.</span>
                <span className="detail-value">{fullDetails.adharNo}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3>Address</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">State</span>
                <span className="detail-value">{fullDetails.state}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">City</span>
                <span className="detail-value">{fullDetails.city}</span>
              </div>
              <div className="detail-item full-width">
                <span className="detail-label">Address</span>
                <span className="detail-value">{fullDetails.address}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3>Affiliate Details</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Joining Date</span>
                <span className="detail-value">{fullDetails.joinDate}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Team Size</span>
                <span className="detail-value">{fullDetails.teamSize}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Total Earnings</span>
                <span className="detail-value">${fullDetails.earnings.toFixed(2)}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Pending Amount</span>
                <span className="detail-value">${fullDetails.pendingAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateModal;