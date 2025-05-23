import React, { useState } from 'react';
import './MyPayout.css';
import { FaMoneyBillWave, FaClock, FaCalendarAlt } from 'react-icons/fa';

const MyPayout = () => {
  const [filter, setFilter] = useState('all');

  const payouts = [
    { ref: "REF123", date: "2025-05-01", status: "Completed", active: true },
    { ref: "REF456", date: "2025-05-05", status: "Pending", active: false },
    { ref: "REF789", date: "2025-05-07", status: "Failed", active: true },
  ];

  const filtered = payouts.filter(item =>
    filter === 'all' ? true : item.status.toLowerCase() === filter.toLowerCase()
  );

  return (
    <div className="payout-container">
      <h2 className="payout-heading">My Payout</h2>

      <div className="payout-cards">
        <div className="card">
          <FaMoneyBillWave className="card-icon green" />
          <div>
            <p>Total Earning</p>
            <h3>₹ 12,000</h3>
          </div>
        </div>
        <div className="card">
          <FaClock className="card-icon yellow" />
          <div>
            <p>Pending Payouts</p>
            <h3>₹ 4,500</h3>
          </div>
        </div>
        {/* <div className="card">
          <FaCalendarAlt className="card-icon blue" />
          <div>
            <p>Next Payout</p>
            <h3>10 May 2025</h3>
          </div>
        </div> */}
      </div>

      <div className="filter-buttons">
        {["All", "Completed", "Pending", "Failed"].map(type => (
          <button
            key={type}
            className={filter === type.toLowerCase() ? "active" : ""}
            onClick={() => setFilter(type.toLowerCase())}
          >
            {type}
          </button>
        ))}
      </div>

      <table className="payout-table">
        <thead>
          <tr>
            <th>Reference</th>
            <th>Date</th>
            <th>Status</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, index) => (
            <tr key={index}>
              <td>{item.ref}</td>
              <td>{item.date}</td>
              <td>
                <span className={`status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
              <td>{item.active ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPayout;
