
import React from 'react';
import { X } from 'lucide-react';
import './AffiliatePopup.css';

const AffiliateModal = ({ affiliate, isOpen, onClose }) => {
  if (!isOpen) return null;

  const fullDetails = affiliate; // Directly use affiliate data

  const countTotalReferrals = (user) => {
  if (!user.referrals || user.referrals.length === 0) return 0;

  let total = user.referrals.length;

  for (let referral of user.referrals) {
    total += countTotalReferrals(referral); // Recursively count nested referrals
  }

  return total;
};

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
              {/* <span className={`badge badge-${fullDetails.status.toLowerCase()}`}>
                {fullDetails.status}
              </span>
              <span className={`badge badge-${fullDetails.level.toLowerCase()}`}>
                {fullDetails.level}
              </span> */}
            </div>
          </div>

          <div className="detail-section">
            <h3>Basic Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">ID</span>
                <span className="detail-value">{fullDetails._id}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email</span>
                <span className="detail-value">{fullDetails.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone</span>
                <span className="detail-value">{fullDetails.phone_no}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Date of Birth</span>
                <span className="detail-value">{fullDetails.dob?.slice(0, 10)}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Gender</span>
                <span className="detail-value">{fullDetails.gender}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Adhar No.</span>
                <span className="detail-value">{fullDetails.aadhar_no}</span>
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
                <span className="detail-value">{fullDetails.
user_address}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3>Affiliate Details</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Joining Date</span>
                <span className="detail-value">{fullDetails.createdAt?.slice(0, 10)}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Team Size</span>
                <span className="detail-value">{countTotalReferrals(affiliate)}</span>
              </div>
              {/* <div className="detail-item">
                <span className="detail-label">Total Earnings</span>
                <span className="detail-value">${fullDetails.earnings.toFixed(2)}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Pending Amount</span>
                <span className="detail-value">${fullDetails.pendingAmount.toFixed(2)}</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateModal;