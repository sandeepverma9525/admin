import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';

const EpinTable = ({ activeTab }) => {

  const [epins, setEpins] = useState([]);

  useEffect(() => {
    const fetchEpins = async () => {
      const id = localStorage.getItem("adminId");
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          `https://pronet.ap-1.evennode.com/api/user/GetEpinsByAdminId/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEpins(response.data.epins);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching epins:", error.message);
      }
    };

    fetchEpins();
  }, []);

  // Filter according to activeTab
  const filteredEpins = epins.filter((epin) => {
    if (activeTab === 'used') return epin.status === 'used';
    if (activeTab === 'unused') return epin.status === 'unused';
    if (activeTab === 'transferred') return epin.status === 'transferred';
    return true;
  });

  if (filteredEpins.length === 0) {
    return <div className="empty-state">No E-pins found matching your criteria.</div>;
  }

  return (
    <div className="epintable-container">
      <div className="epintable-header">
        <h2 className="epintable-title">
          <span className="epintable-icon">📄</span>
          {activeTab === 'unused' ? 'Unused E-Pins' :
            activeTab === 'used' ? 'Used E-Pins' : 'All E-Pins'}
        </h2>
      </div>
      <div className="epintable-wrapper">
        <table className="epindata-table">
          <thead>
            <tr >
              <th style={{ fontSize: '15px', }}>E-Pin Code</th>
              <th style={{ fontSize: '15px', }}>Amount</th>
              <th style={{ fontSize: '15px', }}>Generated On</th>
              <th style={{ fontSize: '15px', }}>Status</th>
              <th style={{ fontSize: '15px', }}>User Type</th>
            </tr>
          </thead>
          <tbody>
            {/* {filteredEpins.map((epin, index) => ( */}
            {filteredEpins.slice().reverse().map((epin, index) => (
              <tr key={index}>
                <td>{epin.epin_codes?.[0]}</td>
                <td>${epin.value}</td>
                {/* <td>{new Date(epin.generated_at).toLocaleString()}</td> */}
                <td>{new Date(epin.generated_at).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric'
                })}</td>
                <td>
                  <span className={`status-badge ${epin.status}`}>
                    {epin.status.charAt(0).toUpperCase() + epin.status.slice(1)}
                  </span>
                </td>
                <td>
                  {epin.userType
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default EpinTable;