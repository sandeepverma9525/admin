import { useState, useEffect } from 'react';
import './Wallets.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';

export default function AffiliateWalletSystem() {
  const [affiliates, setAffiliates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [selectedAffiliate, setSelectedAffiliate] = useState(null);
  const [modalType, setModalType] = useState(null); // 'details', 'add', 'deduct'
  const [formData, setFormData] = useState({
    amount: '',
    transactionType: 'Direct Bonus',
    notes: ''
  });

  // Fetch affiliates data from API
  useEffect(() => {
    const fetchAffiliates = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        
        console.log('Token from localStorage:', token);
        
        const response = await axios.get('https://pronet.ap-1.evennode.com/api/user/getAllUser', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        console.log('API Response:', response.data);
        
        // !Transform API data to match our component structure
        const transformedData = response.data.data.map(user => ({
          id: user._id || user.id || `AF${Math.floor(Math.random() * 10000)}`,
          name: user.name || 'Unknown',
          email: user.email || 'No email',
          level: user.level || 'N/A',
          status: user.user_status || 'N/A',
          balance: user.balance || 0,
          pending: user.pending || 0,
          locked: user.locked || 0,
          totalEarnings: user.totalEarnings || 0,
          transactions: user.transactions || []
        }));
        
        console.log('Transformed Data:', transformedData);
        setAffiliates(transformedData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching affiliates:', err);
        setError(err.message || 'Failed to fetch affiliates');
        setLoading(false);
      }
    };

    fetchAffiliates();
  }, []);

  // Calculate total metrics
  const totalBalance = affiliates.reduce((sum, affiliate) => sum + affiliate.balance, 0);
  const pendingBalance = affiliates.reduce((sum, affiliate) => sum + affiliate.pending, 0);
  const lockedBalance = affiliates.reduce((sum, affiliate) => sum + affiliate.locked, 0);
  const totalEarnings = affiliates.reduce((sum, affiliate) => sum + affiliate.totalEarnings, 0);

  // Filter affiliates based on search and status
  const filteredAffiliates = affiliates.filter(affiliate => {
    const matchesSearch = 
      (affiliate.name && affiliate.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (affiliate.email && affiliate.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (affiliate.id && affiliate.id.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesStatus = statusFilter === 'All Status' || affiliate.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'amount' ? parseFloat(value) || '' : value
    });
  };

  // Open modal for different actions
  const openModal = (type, affiliate) => {
    console.log('Opening modal:', type, affiliate);
    setSelectedAffiliate(affiliate);
    setModalType(type);
    setFormData({
      amount: '',
      transactionType: 'Direct Bonus',
      notes: ''
    });
  };

  // Close modal
  const closeModal = () => {
    setSelectedAffiliate(null);
    setModalType(null);
  };

  // Handle adding funds to wallet
  const handleAddFunds = async (e) => {
    e.preventDefault();
    if (!formData.amount || formData.amount <= 0) return;

    try {
      console.log('Adding funds:', {
        affiliateId: selectedAffiliate.id,
        amount: formData.amount,
        transactionType: formData.transactionType,
        notes: formData.notes
      });
      
      // In a real implementation, you would send this data to your API
      // const token = localStorage.getItem('token');
      // await axios.post('your-api-endpoint/add-funds', {
      //   affiliateId: selectedAffiliate.id,
      //   amount: formData.amount,
      //   transactionType: formData.transactionType,
      //   notes: formData.notes
      // }, {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // });
      
      // For now, we'll just update the state locally
      const updatedAffiliates = affiliates.map(affiliate => {
        if (affiliate.id === selectedAffiliate.id) {
          const newTransaction = {
            id: affiliate.transactions ? affiliate.transactions.length + 1 : 1,
            type: formData.transactionType,
            amount: formData.amount,
            date: new Date().toISOString().slice(0, 10)
          };
          
          return {
            ...affiliate,
            balance: (affiliate.balance || 0) + formData.amount,
            totalEarnings: (affiliate.totalEarnings || 0) + formData.amount,
            transactions: [newTransaction, ...(affiliate.transactions || [])]
          };
        }
        return affiliate;
      });
      
      setAffiliates(updatedAffiliates);
      closeModal();
    } catch (err) {
      console.error('Error adding funds:', err);
      alert('Failed to add funds. Please try again.');
    }
  };

  // Handle deducting funds from wallet
  const handleDeductFunds = async (e) => {
    e.preventDefault();
    if (!formData.amount || formData.amount <= 0) return;

    try {
      console.log('Deducting funds:', {
        affiliateId: selectedAffiliate.id,
        amount: formData.amount,
        notes: formData.notes
      });
      
      // In a real implementation, you would send this data to your API
      // const token = localStorage.getItem('token');
      // await axios.post('your-api-endpoint/deduct-funds', {
      //   affiliateId: selectedAffiliate.id,
      //   amount: formData.amount,
      //   notes: formData.notes
      // }, {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // });
      
      const updatedAffiliates = affiliates.map(affiliate => {
        if (affiliate.id === selectedAffiliate.id) {
          // Check if there is enough balance
          if (affiliate.balance < formData.amount) {
            alert("Insufficient balance!");
            return affiliate;
          }
          
          const newTransaction = {
            id: affiliate.transactions ? affiliate.transactions.length + 1 : 1,
            type: 'Withdrawal',
            amount: -formData.amount,
            date: new Date().toISOString().slice(0, 10),
            notes: formData.notes
          };
          
          return {
            ...affiliate,
            balance: affiliate.balance - formData.amount,
            transactions: [newTransaction, ...(affiliate.transactions || [])]
          };
        }
        return affiliate;
      });
      
      setAffiliates(updatedAffiliates);
      closeModal();
    } catch (err) {
      console.error('Error deducting funds:', err);
      alert('Failed to deduct funds. Please try again.');
    }
  };

  if (loading) {
    return <div className="loading-message">Loading affiliate data...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="affiliate-wallet-container">
      <h1 className="Affiliatewallete-main-title">Affiliate Wallets</h1>
      
      {/* Summary Boxes */}
      <div className="summary-boxes">
        <div className="summary-box total-balance">
          <div className="box-label">Total Balance</div>
          <div className="box-value">${totalBalance.toFixed(2)}</div>
          <div className="box-subtitle">Available in wallets</div>
        </div>
        
        <div className="summary-box pending-balance">
          <div className="box-label">Pending Balance</div>
          <div className="box-value">${pendingBalance.toFixed(2)}</div>
          <div className="box-subtitle">Awaiting clearance</div>
        </div>
        
        <div className="summary-box locked-balance">
          <div className="box-label">Locked Balance</div>
          <div className="box-value">${lockedBalance.toFixed(2)}</div>
          <div className="box-subtitle">Locked due to policies</div>
        </div>
        
        <div className="summary-box total-earnings">
          <div className="box-label">Total Earnings</div>
          <div className="box-value">${totalEarnings.toFixed(2)}</div>
          <div className="box-subtitle">All-time earnings</div>
        </div>
      </div>
      
      {/* Wallet Management Section */}
      <div className="Affiliatewallete-wallet-management">
        <h2>Affiliate Wallets</h2>
        
        <div className="wallet-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search wallets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="walletefilter-container">
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className="walletstatus-filter"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Pending</option>
              <option>Suspended</option>
            </select>
          </div>
        </div>
        
        {/* Affiliates Table */}
        <div className="walleteaffiliates-table">
          <div className="walletetable-header">
            <div className="walleteheader-cell">ID</div>
            <div className="walleteheader-cell">Affiliate</div>
            <div className="walleteheader-cell">Level</div>
            <div className="walleteheader-cell">Status</div>
            <div className="walleteheader-cell">Balance</div>
            <div className="walleteheader-cell">Pending</div>
            <div className="walleteheader-cell">Locked</div>
            <div className="walleteheader-cell">Actions</div>
          </div>
          
          {filteredAffiliates.length > 0 ? (
            filteredAffiliates.map(affiliate => (
              <div key={affiliate.id} className="walletetable-row">
                <div className="welletecell">{affiliate.id}</div>
                <div className="walletecellaffiliate-info">
                  <div className="walleteaffiliatename">{affiliate.name}</div>
                  <div className="walleteaffiliate-email">{affiliate.email}</div>
                </div>
                <div className="walletecell">
                  <span className={`walletelevel-badge ${(affiliate.level || '').toLowerCase()}`}>
                    {affiliate.level || 'N/A'}
                  </span>
                </div>
                <div className="walletecell">
                  <span className={`walletestatus-badge ${(affiliate.status || '').toLowerCase()}`}>
                    {affiliate.status || 'N/A'}
                  </span>
                </div>
                <div className="walletecell">${(affiliate.balance || 0).toFixed(2)}</div>
                <div className="walletecell">${(affiliate.pending || 0).toFixed(2)}</div>
                <div className="walletecell">${(affiliate.locked || 0).toFixed(2)}</div>
                <div className="walletecell walleteactions">
                  <button
                    className="walleteaction-button walleteview" 
                    onClick={() => openModal('details', affiliate)}
                  >
                    <FaEye />
                  </button>
                  <button 
                    className="walleteaction-button walleteadd" 
                    onClick={() => openModal('add', affiliate)}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                  </button>
                  <button 
                    className="walleteaction-button walletededuct" 
                    onClick={() => openModal('deduct', affiliate)}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M19 13H5v-2h14v2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">No affiliates found</div>
          )}
        </div>
      </div>

      {/* Details Modal */}
      {modalType === 'details' && selectedAffiliate && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal-header">
              <h3>Wallet Details</h3>
              <button className="close-button" onClick={closeModal}>×</button>
            </div>
            <div className="modal-content">
              <div className="details-section">
                <div className="detail-row">
                  <div className="detail-label">Name:</div>
                  <div className="detail-value">{selectedAffiliate.name || 'N/A'}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Email:</div>
                  <div className="detail-value">{selectedAffiliate.email || 'N/A'}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Level:</div>
                  <div className="detail-value">
                    <span className={`level-badge ${(selectedAffiliate.level || '').toLowerCase()}`}>
                      {selectedAffiliate.level || 'N/A'}
                    </span>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Status:</div>
                  <div className="detail-value">
                    <span className={`status-badge ${(selectedAffiliate.status || '').toLowerCase()}`}>
                      {selectedAffiliate.status || 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="financial-summary">
                <div className="financial-item">
                  <div className="financial-label">Available Balance:</div>
                  <div className="financial-value">${(selectedAffiliate.balance || 0).toFixed(2)}</div>
                </div>
                <div className="financial-item">
                  <div className="financial-label">Total Earnings:</div>
                  <div className="financial-value">${(selectedAffiliate.totalEarnings || 0).toFixed(2)}</div>
                </div>
                <div className="financial-item">
                  <div className="financial-label">Pending Balance:</div>
                  <div className="financial-value">${(selectedAffiliate.pending || 0).toFixed(2)}</div>
                </div>
                <div className="financial-item">
                  <div className="financial-label">Locked Balance:</div>
                  <div className="financial-value">${(selectedAffiliate.locked || 0).toFixed(2)}</div>
                </div>
              </div>
              
              <div className="transactions-section">
                <h4>Recent Transactions</h4>
                <div className="transactions-list">
                  {selectedAffiliate.transactions && selectedAffiliate.transactions.length > 0 ? (
                    selectedAffiliate.transactions.map(transaction => (
                      <div key={transaction.id} className="transaction-item">
                        <div className={`transaction-type ${transaction.amount < 0 ? 'negative' : 'positive'}`}>
                          {transaction.type}
                        </div>
                        <div className="transaction-details">
                          <div className="transaction-date">{transaction.date}</div>
                          <div className={`transaction-amount ${transaction.amount < 0 ? 'negative' : 'positive'}`}>
                            {transaction.amount < 0 ? '-' : '+'} ${Math.abs(transaction.amount).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-transactions">No transactions found</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add Funds Modal */}
      {modalType === 'add' && selectedAffiliate && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal-header">
              <h3>Add Funds to Wallet</h3>
              <button className="close-button" onClick={closeModal}>×</button>
            </div>
            <div className="modal-content">
              <form onSubmit={handleAddFunds}>
                <div className="form-group">
                  <label>Name:</label>
                  <div className="form-value">{selectedAffiliate.name || 'N/A'}</div>
                </div>
                
                <div className="form-group">
                  <label>Current Balance:</label>
                  <div className="form-value">${(selectedAffiliate.balance || 0).toFixed(2)}</div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="amount">Amount:</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="Enter amount"
                    min="0.01"
                    step="0.01"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="transactionType">Transaction Type:</label>
                  <select
                    id="transactionType"
                    name="transactionType"
                    value={formData.transactionType}
                    onChange={handleInputChange}
                  >
                    <option value="Direct Bonus">Direct Bonus</option>
                    <option value="Team Bonus">Team Bonus</option>
                    <option value="Monthly Bonus">Monthly Bonus</option>
                    <option value="Referral Bonus">Referral Bonus</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="notes">Notes:</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Add notes (optional)"
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
                  <button type="submit" className="submit-button">Add Funds</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* Deduct Funds Modal */}
      {modalType === 'deduct' && selectedAffiliate && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className="modal-header">
              <h3>Deduct Funds from Wallet</h3>
              <button className="close-button" onClick={closeModal}>×</button>
            </div>
            <div className="modal-content">
              <form onSubmit={handleDeductFunds}>
                <div className="form-group">
                  <label>Name:</label>
                  <div className="form-value">{selectedAffiliate.name || 'N/A'}</div>
                </div>
                
                <div className="form-group">
                  <label>Current Balance:</label>
                  <div className="form-value">${(selectedAffiliate.balance || 0).toFixed(2)}</div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="amount">Amount:</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder="Enter amount"
                    min="0.01"
                    max={selectedAffiliate.balance}
                    step="0.01"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="notes">Notes:</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Add reason for deduction (optional)"
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
                  <button type="submit" className="submit-button deduct">Deduct Funds</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}