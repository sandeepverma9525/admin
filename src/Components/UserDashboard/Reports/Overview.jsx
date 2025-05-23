import React from 'react';
import './Overview.css';

const Overview = () => {
  const metrics = [
    {
      name: "Revenue Target Achievement",
      value: 95,
      color: "#3DD598"
    },
    {
      name: "Affiliate Growth",
      value: 78,
      color: "#3DD598"
    },
    {
      name: "System Stability",
      value: 99.8,
      color: "#3A86FF"
    }
  ];

  return (
    <div className="dashboard">
        <h1 className="summary-title">Executive Summary</h1>
      <div className="summary-container">
        
        
        <p className="summary-text">
          The system has shown strong performance this period with a 12% increase in total revenue compared to the previous period. Net profit grew by 8%, with commission payouts up by 15%. The affiliate network has expanded, with 22 more active affiliates compared to the last period. Key areas of growth include direct bonuses (+15%) and monthly bonuses (+12%). The financial health of the system remains strong with positive cash flow and increasing member engagement metrics.
        </p>
        
        <div className="metrics-container">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-row">
              <div className="metric-label">{metric.name}</div>
              <div className="metric-value">{metric.value}%</div>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill" 
                  style={{ 
                    width: `${metric.value}%`,
                    backgroundColor: metric.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;