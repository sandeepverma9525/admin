import React from 'react';

const TransactionTable = ({ transactions }) => {
  if (transactions.length === 0) {
    return (
      <div className="empty-state">
        No transactions found.
      </div>
    );
  }

  return (
    <div className="epintable-container">
      <div className="epintable-header">
        <h2 className="epintable-title">
          <span className="epintable-icon">📄</span> E-Pin Transactions
        </h2>
        {/* <p className="table-subtitle">Complete history of E-Pin related transactions</p> */}
      </div>
      <div className="epintable-wrapper">
        <table className="epindata-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>E-Pin ID</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="epintransaction-id">{transaction.id}</td>
                <td className="epin-id">{transaction.epinId}</td>
                <td>
                  <span className={`status-badge ${transaction.type}`}>
                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                  </span>
                </td>
                <td>${transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>{transaction.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;