import React, {useState} from 'react'
import './Withdrawals.css';
// Assuming you're using a package like react-icons or Lucide React
// If not, you can replace these with your preferred icon components
import { Search, ChevronDown, Eye } from 'lucide-react';
import { FaWallet, FaUsers, FaUserPlus, FaLevelUpAlt } from "react-icons/fa";
import { div } from 'framer-motion/client';

const Withdrawals = () => {

    const [searchTerm, setSearchTerm] = useState('');
      const [statusFilter, setStatusFilter] = useState('All Status');
      const [showDropdown, setShowDropdown] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
    
      // Sample data
      const kycData = [
  //        { 
  //   id: "WID001",
  //   affiliateId: "AF001",
  //   name: "John Doe",
  //   amount: 450.75,
  //   requestDate: "2023-06-15",
  //   status: "Pending",
  //   paymentMethod: "Bank Transfer"
  // },
  // { 
  //   id: "WID002",
  //   affiliateId: "AF002",
  //   name: "Alice Smith",
  //   amount: 320.40,
  //   requestDate: "2023-06-16",
  //   status: "Processed",
  //   paymentMethod: "PayPal"
  // },
  // { 
  //   id: "WID003",
  //   affiliateId: "AF004",
  //   name: "Mary Williams",
  //   amount: 780.25,
  //   requestDate: "2023-06-17",
  //   status: "Pending",
  //   paymentMethod: "Bank Transfer"
  // },
  // { 
  //   id: "WID004",
  //   affiliateId: "AF006",
  //   name: "Patricia Davis",
  //   amount: 1250.60,
  //   requestDate: "2023-06-14",
  //   status: "Rejected",
  //   paymentMethod: "Crypto"
  // },
  // { 
  //   id: "WID005",
  //   affiliateId: "AF003",
  //   name: "Robert Johnson",
  //   amount: 190.30,
  //   requestDate: "2023-06-18",
  //   status: "Pending",
  //   paymentMethod: "PayPal"
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
          case 'Rejected': return 'status-badge status-rejected';
          default: return 'status-badge status-pending';
        }
      };
    
        const getIcon = (method) => {
    switch (method) {
        case 'Bank Transfer': return '🏦';
        case 'PayPal': return '💳';
        case 'Crypto': return '₿';
        default: return '💰';
    }
    };
    
      


  return (
    <div className='withdrowalContaine'>
      <h1 className="withdrawl-title">Withdrawal Management</h1>
         {/* Card */}
            <div className='withdrawltopCards'>
              <div className='withdrawlcard' style={{ background: '#0c1a2b' }}>
                {/* <div className='icon'><FaUsers /></div> */}
                <div>
                  <h4>Pending Withdrawals</h4>
                  <p>$1,421.30</p>
                  <span className='withdrawalupdateminuts'>requests to process</span>
                </div>
              </div>

              <div className='withdrawlcard' style={{ background: '#0c1a2b' }}>
                {/* <div className='icon'><FaUsers /></div> */}
                <div>
                  <h4>Processed This Month</h4>
                  <p>$12,850.45</p>
                  <span className='withdrawalupdateminuts'>28 withdrawals processed</span>
                </div>
              </div>
      
      


              <div className='withdrawlcard' style={{ background: '#0c1a2b' }}>
                {/* <div className='icon'><FaUsers /></div> */}
                <div>
                  <h4>Average Processing Time</h4>
                  <p>1.2 days</p>
                  <span className='withdrawalupdateminuts'>From request to payment</span>
                </div>
              </div>
              
            </div>



        {/* Table */}
            <div className="withdrawl-applications">
            
                  <h1 className="page-title">Withdrawal Requests</h1>
            
                  
            
                  <div className="withdrawlcontrols">
                    <div className="withdrawlsearch-container">
                      <Search className="withdrawlsearch-icon" size={18} />
                      <input
                        type="text"
                        placeholder="Search applications..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="withdrawlsearch-input"
                      />
                    </div>
            
                    <div className="withdrawldropdown-container">
                      <button
                        className="withdrawldropdown-button"
                        onClick={() => setShowDropdown(!showDropdown)}
                      >
                        {statusFilter}
                        <ChevronDown size={16} />
                      </button>
            
                      {showDropdown && (
                        <div className="withdrawldropdown-menu">
                          {statusOptions.map((option) => (
                            <div
                              key={option}
                              className="withdrawldropdown-item"
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
            
                  <div className="withdrawltable-container">
                    <table className="withdrawl-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Affiliate</th>
                          <th>Amount</th>
                          <th>Method</th>
                          <th>Request Date</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentData.map((item) => (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td className="withdrawlaffiliate-cell">
                              <div className="withdrawlname">{item.name}</div>
                              <div className="withdrawlaffiliate-id">{item.affiliateId}</div>
                              {/* <div className="email">{item.email}</div> */}
                            </td>
                            <td>{item.amount}</td>
                            <td>
                              <span >
                                {getIcon(item.paymentMethod)} {item.paymentMethod}
                              </span>
                            </td>
                            <td>{item.requestDate}</td>
                            <td>
                              <span className={getStatusBadgeClass(item.status)}>
                                {item.status}
                              </span>
                            </td>
                            <td>
                              <button className="withdrawlaction-button">
                                <Eye size={18} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
            
                  <div className="withdrawlpagination">
                    <div className="withdrawlshowing-info">
                      Showing {currentData.length > 0 ? startIndex + 1 : 0} of {Math.min(endIndex, filteredData.length)} applications
                    </div>
                    <div className="withdrawlpagination-buttons">
                      <button
                        className="withdrawlprev-button"
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                      <button
                        className="withdrawlnext-button"
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages || totalPages === 0}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default Withdrawals
