import React, { useState } from 'react';
import './Applications.css';

import { Search, ChevronDown, Eye } from 'lucide-react';
import { FaWallet, FaUsers, FaUserPlus, FaLevelUpAlt } from "react-icons/fa";
import { div } from 'framer-motion/client';


import AffiliateModal from '../Affiliates/AffiliatePopup'; // Import the modal

const Applications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data
  const kycData = [
   
  //   { 
  //   id: "APP001",
  //   name: "Michael Wilson",
  //   email: "michael@example.com",
  //   phone: "+1 987-654-3210",
  //   applied: "2023-06-10",
  //   sponsorId: "AF001",
  //   sponsor: "John Doe",
  //   status: "Pending",
  //   package: "Gold"
  // },
  // { 
  //   id: "APP002",
  //   name: "Sarah Garcia",
  //   email: "sarah@example.com",
  //   phone: "+1 876-543-2109",
  //   applied: "2023-06-12",
  //   sponsorId: "AF003",
  //   sponsor: "Robert Johnson",
  //   status: "Approved",
  //   package: "Silver"
  // },
  // { 
  //   id: "APP003",
  //   name: "David Martinez",
  //   email: "david@example.com",
  //   phone: "+1 765-432-1098",
  //   applied: "2023-06-15",
  //   sponsorId: "AF002",
  //   sponsor: "Alice Smith",
  //   status: "Rejected",
  //   package: "Bronze"
  // },
  // { 
  //   id: "APP004",
  //   name: "Jennifer Taylor",
  //   email: "jennifer@example.com",
  //   phone: "+1 654-321-0987",
  //   applied: "2023-06-18",
  //   sponsorId: "AF001",
  //   sponsor: "John Doe",
  //   status: "Pending",
  //   package: "Gold"
  // },
  // { 
  //   id: "APP005",
  //   name: "James Anderson",
  //   email: "james@example.com",
  //   phone: "+1 543-210-9876",
  //   applied: "2023-06-20",
  //   sponsorId: "AF004",
  //   sponsor: "Mary Williams",
  //   status: "Pending",
  //   package: "Platinum"
  // },
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
      case 'approved': return 'status-badge status-approved';
      case 'Rejected': return 'status-badge status-rejected';
      case 'rejected': return 'status-badge status-rejected';
      default: return 'status-badge status-pending';
    }
  };


  const [isModalOpen, setIsModalOpen] = useState(false);

  // const affiliateData = {
  //   id: 'AFF123',
  //   name: 'Sandeep Verma',
  //   email: 'sandeep@example.com',
  //   status: 'Active',
  //   level: 'Gold',
  //   joinDate: '2024-01-15',
  //   teamSize: 20,
  //   earnings: 12000.5,
  //   pendingAmount: 1500.75
  // };

  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  

  return (

    <div className='applicationContainer'>

      <h1 className="applicationpage-title">Affiliate Applications</h1>
      
      {/* !Card */}
      <div className='applicationtopCards'>
        <div className='applicationcard' style={{ background: '#0c1a2b' }}>
          {/* <div className='icon'><FaUsers /></div> */}
          <div>            
            <h4>Pending Applications</h4>
            <p>0</p>
            <span className='applicationupdateminuts'>New applications to review</span>
          </div>
        </div>

        <div className='applicationcard' style={{ background: '#0c1a2b' }}>
          {/* <div className='icon'><FaUsers /></div> */}
          <div>
            <h4>pproved This Month</h4>
            <p>0</p>
            <span className='applicationupdateminuts'>New affiliates added</span>
          </div>
        </div>




        <div className='applicationcard' style={{ background: '#0c1a2b' }}>
          {/* <div className='icon'><FaUsers /></div> */}
          <div>

            <h4>verage Processing Time</h4>
            <p>0 days</p>
            <span className='applicationupdateminuts'>From application to decision</span>
          </div>
        </div>
        
      </div>



      {/* Controls container */}

    <div className="application-applications">

      <h1 className="applicationpage-title">Applications</h1>

      

      <div className="applicationcontrols">
        <div className="applicationsearch-container">
          <Search className="applicationsearch-icon" size={18} />
          <input
            type="text"
            placeholder="Search applications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="applicationsearch-input"
          />
        </div>

        <div className="applicationdropdown-container">
          <button
            className="applicationdropdown-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {statusFilter}
            <ChevronDown size={16} />
          </button>

          {showDropdown && (
            <div className="applicationdropdown-menu">
              {statusOptions.map((option) => (
                <div
                  key={option}
                  className="applicationdropdown-item"
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

      <div className="applicationtable-container">
        <table className="application-table">
          <thead>
            <tr>  
              <th>ID</th>
              <th> Applicant</th>
              <th>Package</th>
              <th>Sponsor</th>
              <th>Applied Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td className="applicationaffiliate-cell">
                  <div className="applicationname">{item.name}</div>
                  <div className="applicationaffiliate-id">{item.phone}</div>
                  <div className="applicationemail">{item.email}</div>
                </td>
                <td>{item.package}</td>
                <td>{item.sponsor}</td>
                <td>{item.applied}</td>
                <td>
                  <span className={getStatusBadgeClass(item.status)}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button className="applicationaction-button" onClick={handleViewClick}>
                    <Eye size={18} />
                  </button>
                  <AffiliateModal 
                  affiliate={affiliateData}
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                   />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="applicationpagination">
        <div className="applicationshowing-info">
          Showing {currentData.length > 0 ? startIndex + 1 : 0} of {Math.min(endIndex, filteredData.length)} applications
        </div>
        <div className="applicationpagination-buttons">
          <button
            className="applicationprev-button"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="applicationnext-button"
            onClick={goToNextPage}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Applications;