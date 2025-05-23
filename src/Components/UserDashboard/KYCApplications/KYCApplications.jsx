import React, { useState } from 'react';
import './KYCApplications.css';
// Assuming you're using a package like react-icons or Lucide React
// If not, you can replace these with your preferred icon components
import { Search, ChevronDown, Eye } from 'lucide-react';
import { FaWallet, FaUsers, FaUserPlus, FaLevelUpAlt } from "react-icons/fa";
import { div } from 'framer-motion/client';

const KYCApplications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data
  const kycData = [
    // {
    //   id: 'KYC001',
    //   name: 'John Doe',
    //   affiliateId: 'AF001',
    //   email: 'john@example.com',
    //   documentType: 'Passport',
    //   submissionDate: '2023-05-12',
    //   status: 'Pending'
    // },
    // {
    //   id: 'KYC002',
    //   name: 'Robert Johnson',
    //   affiliateId: 'AF003',
    //   email: 'robert@example.com',
    //   documentType: 'ID Card',
    //   submissionDate: '2023-05-10',
    //   status: 'Approved'
    // },
    // {
    //   id: 'KYC003',
    //   name: 'Mary Williams',
    //   affiliateId: 'AF004',
    //   email: 'mary@example.com',
    //   documentType: 'Driving License',
    //   submissionDate: '2023-05-15',
    //   status: 'Rejected'
    // },
    // {
    //   id: 'KYC004',
    //   name: 'Patricia Davis',
    //   affiliateId: 'AF006',
    //   email: 'patricia@example.com',
    //   documentType: 'Passport',
    //   submissionDate: '2023-05-18',
    //   status: 'Pending'
    // },
    // {
    //   id: 'KYC005',
    //   name: 'Alice Smith',
    //   affiliateId: 'AF002',
    //   email: 'alice@example.com',
    //   documentType: 'ID Card',
    //   submissionDate: '2023-05-20',
    //   status: 'Pending'
    // }
  ];

  const statusOptions = ['All Status', 'Pending', 'Approved', 'Rejected'];

  // Filter data based on search term and status filter
  const filteredData = kycData.filter(item => {
    const matchesSearch =
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.affiliateId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.documentType.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All Status' || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Pagination
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Handle pagination
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Get status badge class
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Approved': return 'status-badge status-approved';
      case 'Rejected': return 'status-badge status-rejected';
      default: return 'status-badge status-pending';
    }
  };


  

  return (

    <div className='kycContaine'>

      <h1 className="kycpage-title">KYC Applications</h1>
      {/* Card */}
      <div className='kyctopCards'>
        <div className='kyccard' style={{ background: '#0c1a2b' }}>
          {/* <div className='icon'><FaUsers /></div> */}
          <div>
            <h4>Pending Verification</h4>
            <p>0</p>
            <span className='kycupdateminuts'>Updated 10 minutes ago</span>
          </div>
        </div>

        <div className='kyccard' style={{ background: '#0c1a2b' }}>
          {/* <div className='icon'><FaUsers /></div> */}
          <div>
            <h4>Approved</h4>
            <p>0</p>
            <span className='kycupdateminuts'>Total approved MYC</span>
          </div>
        </div>


        <div className='kyccard' style={{ background: '#0c1a2b' }}>
          {/* <div className='icon'><FaUsers /></div> */}
          <div>
            <h4>Rejected</h4>
            <p>0</p>
            <span className='kycupdateminuts'>Total rejected KYC</span>
          </div>
        </div>
        
      </div>

    <div className="kyc-applications">

      <h1 className="kycpage-title">KYC Applications</h1>

      

      <div className="kyccontrols">
        <div className="kycsearch-container">
          <Search className="kycsearch-icon" size={18} />
          <input
            type="text"
            placeholder="Search applications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="kycsearch-input"
          />
        </div>

        <div className="kycdropdown-container">
          <button
            className="kycdropdown-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {statusFilter}
            <ChevronDown size={16} />
          </button>

          {showDropdown && (
            <div className="kycdropdown-menu">
              {statusOptions.map((option) => (
                <div
                  key={option}
                  className="kycdropdown-item"
                  onClick={() => {
                    setStatusFilter(option);
                    setShowDropdown(false);
                    setCurrentPage(1); // Reset to first page on filter change
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="kyctable-container">
        <table className="kyc-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Affiliate</th>
              <th>Document Type</th>
              <th>Submission Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td className="kycaffiliate-cell">
                  <div className="kycname">{item.name}</div>
                  <div className="kycaffiliate-id">{item.affiliateId}</div>
                  <div className="kycemail">{item.email}</div>
                </td>
                <td>{item.documentType}</td>
                <td>{item.submissionDate}</td>
                <td>
                  <span className={getStatusBadgeClass(item.status)}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button className="kycaction-button">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="kycpagination">
        <div className="kycshowing-info">
          Showing {currentData.length > 0 ? startIndex + 1 : 0} of {Math.min(endIndex, filteredData.length)} applications
        </div>
        <div className="kycpagination-buttons">
          <button
            className="kycprev-button"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="kycnext-button"
            onClick={goToNextPage}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </div> */}
    </div>
    </div>
  );
};

export default KYCApplications;