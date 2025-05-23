import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';

const EpinTable = ({ epins, activeTab }) => {
  if (epins.length === 0) {
    return (
      <div className="empty-state">
        No E-pins found matching your criteria.
      </div>
    );
  }
// !api 
  // const [unusedEpins, setUnusedEpins] = useFormStatus([]);
// const [selectedEpin, setSelectedEpin] = useState("");

// useEffect(() => {
//   const fetchEpins = async () => {
//     const userId = localStorage.getItem("adminId");
//     const token = localStorage.getItem("token");

//     try {
//       const response = await axios.get(
//         `https://pronet.ap-1.evennode.com/api/user/GetEpinsByUserId/${userId}`,
        
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(response.data)
//       // setUnusedEpins(response.data?.data || []);
//     } catch (error) {
//       console.error("Error fetching epins:", error.message);
//     }
//   };

//   fetchEpins();
// }, []);


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
            <tr>
              <th>E-Pin ID</th>
              <th>Amount</th>
              <th>Generated On</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {epins.map((epin) => (
              <tr key={epin.id}>
                <td className="epin-id">{epin.id}</td>
                <td>${epin.amount}</td>
                <td>{epin.generatedOn}</td>
                <td>
                  <span className={`status-badge ${epin.status}`}>
                    {epin.status.charAt(0).toUpperCase() + epin.status.slice(1)}
                  </span>
                </td>
                <td>
                  {epin.status === 'used' ? `Used by ${epin.usedBy} on ${epin.usedOn}` : 
                   epin.status === 'transferred' ? `Transferred to ${epin.transferredTo} on ${epin.transferredOn}` : 
                   'Available'}
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