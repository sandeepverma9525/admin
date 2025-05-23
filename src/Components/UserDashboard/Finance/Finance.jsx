import { useState } from 'react';
import { CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import "./Finance.css";

const Finance = () => {

  const [transactions, setTransactions] = useState([
    // { id: 'TRX-1231', date: '2023-07-28', type: 'Commission', affiliate: 'John Doe', amount: '$1,250', status: 'Completed', showActions: false },
    // { id: 'TRX-1232', date: '2023-07-27', type: 'Withdrawal', affiliate: 'Alice Smith', amount: '-$5,000', status: 'Pending', showActions: true },
    // { id: 'TRX-1233', date: '2023-07-28', type: 'Commission', affiliate: 'John Doe', amount: '$1,250', status: 'Completed', showActions: false },
    // { id: 'TRX-1234', date: '2023-07-27', type: 'Withdrawal', affiliate: 'Alice Smith', amount: '-$5,000', status: 'Pending', showActions: true },
    // { id: 'TRX-1235', date: '2023-07-27', type: 'Deposit', affiliate: 'Robert Johnson', amount: '$10,000', status: 'Pending', showActions: true },
    // { id: 'TRX-1236', date: '2023-07-26', type: 'Commission', affiliate: 'Mary Williams', amount: '$850', status: 'Completed', showActions: false },
    // { id: 'TRX-1237', date: '2023-07-25', type: 'Withdrawal', affiliate: 'James Brown', amount: '-$2,500', status: 'Processing', showActions: false },
    // { id: 'TRX-1238', date: '2023-07-25', type: 'Deposit', affiliate: 'Patricia Davis', amount: '$7,500', status: 'Pending', showActions: true },
    // { id: 'TRX-1239', date: '2023-07-24', type: 'Commission', affiliate: 'Linda Wilson', amount: '$1,100', status: 'Completed', showActions: false },
    // { id: 'TRX-1240', date: '2023-07-23', type: 'Withdrawal', affiliate: 'Michael Moore', amount: '-$3,500', status: 'Declined', showActions: false },
    
    // ...rest same
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All Statuses');

  const handleApprove = (id) => {
    setTransactions(t =>
      t.map(tx => tx.id === id ? { ...tx, status: 'Completed', showActions: false } : tx)
    );
    alert(`Transaction ${id} approved successfully!`);
  };

  const handleDecline = (id) => {
    setTransactions(t =>
      t.map(tx => tx.id === id ? { ...tx, status: 'Declined', showActions: false } : tx)
    );
    alert(`Transaction ${id} declined.`);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed': return 'status-badge status-completed';
      case 'Pending': return 'status-badge status-pending';
      case 'Processing': return 'status-badge status-processing';
      case 'Declined': return 'status-badge status-declined';
      default: return 'status-badge';
    }
  };

  const getTypeIcon = (type) => {
    let iconClass = 'type-icon ';
    switch (type) {
      case 'Commission': return <span className={iconClass + 'commission'}>$</span>;
      case 'Withdrawal': return <span className={iconClass + 'withdrawal'}>↑</span>;
      case 'Deposit': return <span className={iconClass + 'deposit'}>↓</span>;
      default: return null;
    }
  };

  const getAmountClass = (amount) =>
    amount.startsWith('-') ? 'amount-negative' : 'amount-positive';

  const filtered = transactions.filter(t =>
    (t.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
     t.affiliate.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterStatus === 'All Statuses' || t.status === filterStatus)
  );


  return (
    <div className="FinanceContainer">
      <h1 className="Financetitle">Finance Management</h1>

      <div className="financetopCards">
        <div className="financecard" style={{ background: "#0c1a2b" }}>
          {/* <div className='icon'><FaUsers /></div> */}
          <div>
            <h4>Total Revenue</h4>
            <p>$0</p>
            {/* <span className='updateminuts'>+12.5% from previous period</span> */}
          </div>
        </div>

        <div className="financecard" style={{ background: "#0c1a2b" }}>
          {/* <div className='icon'><FaUsers /></div> */}
          <div>
            <h4>Net Profit</h4>
            <p>$0</p>
            {/* <span className='updateminuts'>+8.3% from previous period</span> */}
          </div>
        </div>

        <div className="financecard" style={{ background: "#0c1a2b" }}>
          {/* <div className='icon'><FaUsers /></div> */}
          <div>
            <h4> Operating Costs</h4>
            <p>$0</p>
            {/* <span className='updateminuts'> +4.2% from previous period</span> */}
          </div>
        </div>

        <div className="financecard" style={{ background: "#0c1a2b" }}>
          {/* <div className='icon'><FaUsers /></div> */}
          <div>
            <h4>Total Deposits</h4>
            <p>$0</p>
            {/* <span className='updateminuts'>+18.1% from previous period</span> */}
          </div>
        </div>

        <div className="financecard" style={{ background: "#0c1a2b" }}>
          {/* <div className='icon'><FaUsers /></div> */}
          <div>
            <h4>Total Deposits</h4>
            <p>$0</p>
            {/* <span className="financeupdateminuts">+18.1% from previous period</span> */}
          </div>
        </div>

        <div className="financecard" style={{ background: "#0c1a2b" }}>
          {/* <div className='icon'><FaUsers /></div> */}
          <div>
            <h4>Total Withdrawals</h4>
            <p>$0</p>
            {/* <span className="financeupdateminuts">+22.3% from previous period</span> */}
          </div>
        </div>
      </div>




      <div className="finance-transaction-container">
      <h2 className="finance-transaction-heading">Recent Transactions</h2>

      <div className="finance-transaction-header">
        <div className="finance-search-container">
          <input
            className="finance-search-input"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="finance-status-filter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option>All Statuses</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Declined</option>
        </select>
      </div>



{/* table  */}
      <div className="finance-table-container">
        <table className="finance-transaction-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Type</th>
              <th>Affiliate</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(tx => (
              <tr key={tx.id}>
                <td>{tx.id}</td>
                <td>{tx.date}</td>
                <td className="finance-type-cell">{getTypeIcon(tx.type)}{tx.type}</td>
                <td>{tx.affiliate}</td>
                <td className={getAmountClass(tx.amount)}>{tx.amount}</td>
                <td><span className={getStatusClass(tx.status)}>{tx.status}</span></td>
                <td className="actions-cell">
                  {tx.showActions ? (
                    <>
                      <CheckCircle className="action-icon action-approve" onClick={() => handleApprove(tx.id)} />
                      <XCircle className="action-icon action-decline" onClick={() => handleDecline(tx.id)} />
                    </>
                  ) : (
                    <ChevronRight className="action-icon action-detail" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="load-more">
        <button className="load-more-btn">Load More</button>
      </div> */}
    </div>


    </div>
  );
};

export default Finance;




