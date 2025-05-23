// import { useState } from 'react';
// import { Eye } from 'lucide-react';
// import './Support.css';

// // Sample ticket data
// const ticketData = [
//   {
//     id: "TKT001",
//     subject: "Payment not received",
//     affiliate: { name: "John Doe", code: "AF001" },
//     category: "Payment",
//     priority: "High",
//     status: "Open",
//     lastUpdated: "2023-06-15 14:32",
//     description: "Customer claims payment was made but it's not reflecting in their account.",
//     messages: [
//       { sender: "John Doe", time: "2023-06-15 12:30", content: "I made a payment yesterday but it's not showing in my account." },
//       { sender: "Support Agent", time: "2023-06-15 14:32", content: "We're looking into this issue. Could you please provide your transaction reference?" }
//     ]
//   },
//   {
//     id: "TKT002",
//     subject: "How to upgrade my package?",
//     affiliate: { name: "Alice Smith", code: "AF002" },
//     category: "Account",
//     priority: "Medium",
//     status: "Open",
//     lastUpdated: "2023-06-16 09:15",
//     description: "Customer wants information about upgrading their current subscription package.",
//     messages: [
//       { sender: "Alice Smith", time: "2023-06-16 08:45", content: "I'm interested in upgrading my current plan. What are my options?" },
//       { sender: "Support Agent", time: "2023-06-16 09:15", content: "Thank you for your interest! I'd be happy to explain the upgrade options available to you." }
//     ]
//   },
//   {
//     id: "TKT003",
//     subject: "Unable to login",
//     affiliate: { name: "Robert Johnson", code: "AF003" },
//     category: "Technical",
//     priority: "High",
//     status: "In Progress",
//     lastUpdated: "2023-06-14 16:45",
//     description: "Customer is experiencing issues when trying to log into their account.",
//     messages: [
//       { sender: "Robert Johnson", time: "2023-06-14 15:30", content: "I'm unable to login to my account. It says 'invalid credentials' but I'm sure my password is correct." },
//       { sender: "Support Agent", time: "2023-06-14 16:45", content: "I've reset your password. Please check your email for the temporary password and instructions." }
//     ]
//   },
//   {
//     id: "TKT004",
//     subject: "Commission rate query",
//     affiliate: { name: "Mary Williams", code: "AF004" },
//     category: "Commission",
//     priority: "Low",
//     status: "Closed",
//     lastUpdated: "2023-06-12 10:22",
//     description: "Affiliate has questions about commission rates for the new promotion.",
//     messages: [
//       { sender: "Mary Williams", time: "2023-06-12 09:15", content: "What are the commission rates for the summer promotion?" },
//       { sender: "Support Agent", time: "2023-06-12 10:22", content: "The commission rate for the summer promotion is 12%. Let me know if you have any other questions!" }
//     ]
//   },
//   {
//     id: "TKT005",
//     subject: "E-Pin transfer issue",
//     affiliate: { name: "Patricia Davis", code: "AF006" },
//     category: "E-Pin",
//     priority: "Medium",
//     status: "Open",
//     lastUpdated: "2023-06-17 08:55",
//     description: "Customer is unable to transfer e-pins to another account.",
//     messages: [
//       { sender: "Patricia Davis", time: "2023-06-17 08:30", content: "I'm trying to transfer my e-pins to my new account but getting an error." },
//       { sender: "Support Agent", time: "2023-06-17 08:55", content: "I'll check the issue with e-pin transfers right away. Are you getting any specific error message?" }
//     ]
//   }
// ];

// export default function SupportTicketDashboard() {
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [showModal, setShowModal] = useState(false);
  
//   const openTickets = ticketData.filter(ticket => ticket.status === "Open").length;
//   const inProgressTickets = ticketData.filter(ticket => ticket.status === "In Progress").length;
//   const closedThisWeekTickets = ticketData.filter(ticket => ticket.status === "Closed").length;
  
//   const handleViewTicket = (ticket) => {
//     setSelectedTicket(ticket);
//     setShowModal(true);
//   };
  
//   const closeModal = () => {
//     setShowModal(false);
//   };
  
//   // const getPriorityClass = (priority) => {
//   //   switch (priority) {
//   //     case 'High':
//   //       return 'priority-high';
//   //     case 'Medium':
//   //       return 'priority-medium';
//   //     case 'Low':
//   //       return 'priority-low';
//   //     default:
//   //       return '';
//   //   }
//   // };
  
//   const getStatusClass = (status) => {
//     switch (status) {
//       case 'Open':
//         return 'status-open';
//       case 'In Progress':
//         return 'status-in-progress';
//       case 'Closed':
//         return 'status-closed';
//       default:
//         return '';
//     }
//   };
  
//   return (
//     <div className="supportdashboard">
//       <div className="supportcontainer">
//         <div className="supportheader">
//           <h1>Support Tickets</h1>
//           {/* <button className="supportcreate-button">
//             <span>Create New Ticket</span>
//           </button> */}
//         </div>
        
//         <div className="supportstats-grid">
//           {/* Stats Cards */}
//           <div className="supportstats-card">
//             <div className="supportstats-label">Open Tickets</div>
//             <h2 className="supportstats-value">{openTickets}</h2>
//             <p className="supportstats-description">Waiting for response</p>
//           </div>
          
//           <div className="supportstats-card">
//             <div className="supportstats-label">In Progress</div>
//             <h2 className="supportstats-value">{inProgressTickets}</h2>
//             <p className="supportstats-description">Being worked on</p>
//           </div>
          
//           <div className="supportstats-card">
//             <div className="supportstats-label">Closed This Week</div>
//             <h2 className="supportstats-value">{closedThisWeekTickets}</h2>
//             <p className="supportstats-description">Successfully resolved</p>
//           </div>
          
//           <div className="supportstats-card">
//             <div className="supportstats-label">Average Response Time</div>
//             <h2 className="stats-value">4.2 hours</h2>
//             <p className="supportstats-description">In the last 7 days</p>
//           </div>
//         </div>
        
//         <div className="supporttickets-container">
//           <h2>All Tickets</h2>
          
//           <div className="supportfilters">
//             <div className="supportsearch-container">
//               <input 
//                 type="text" 
//                 placeholder="Search tickets..." 
//                 className="supportsearch-input"
//               />
//               <svg className="supportsearch-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//               </svg>
//             </div>
            
//             <div className="supportfilter-selects">
//               <select className="supportfilter-select">
//                 <option>All Status</option>
//                 <option>Open</option>
//                 <option>In Progress</option>
//                 <option>Resolved</option>
//               </select>
//             </div>
//           </div>
          
//           <div className="supporttable-container">
//             <table className="supporttickets-table">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Subject</th>
//                   <th>Affiliate</th>
//                   <th>Category</th>
//                   {/* <th>Priority</th> */}
//                   <th>Status</th>
//                   <th>Last Updated</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {ticketData.map((ticket) => (
//                   <tr key={ticket.id} className="supportticket-row">
//                     <td>{ticket.id}</td>
//                     <td>{ticket.subject}</td>
//                     <td>
//                       {ticket.affiliate.name}
//                       <br />
//                       <span className="supportaffiliate-code">{ticket.affiliate.code}</span>
//                     </td>
//                     <td>{ticket.category}</td>
//                     {/* <td>
//                       <span className={`badge ${getPriorityClass(ticket.priority)}`}>
//                         {ticket.priority}
//                       </span>
//                     </td> */}
//                     <td>
//                       <span className={`badge ${getStatusClass(ticket.status)}`}>
//                         {ticket.status}
//                       </span>
//                     </td>
//                     <td>{ticket.lastUpdated}</td>
//                     <td>
//                       <button 
//                         onClick={() => handleViewTicket(ticket)}
//                         className="supportview-button"
//                       >
//                         <Eye size={20} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
          
//           <div className="supportpagination">
//             <div className="supportpagination-info">Showing 5 of 5 tickets</div>
//             <div className="supportpagination-buttons">
//               <button className="supportpagination-button" disabled>Previous</button>
//               <button className="supportpagination-button">Next</button>
//             </div>
//           </div>
//         </div>
//       </div>
    
//       {/* Ticket Detail Modal */}
//       {showModal && selectedTicket && (
//         <div className="supportmodal-overlay">
//           <div className="supportmodal">
//             <div className="supportmodal-header">
//               <h3>{selectedTicket.subject}</h3>
//               <button 
//                 onClick={closeModal}
//                 className="supportclose-button"
//               >
//                 <svg className="supportclose-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                 </svg>
//               </button>
//             </div>
            
//             <div className="supportmodal-body">
//               <div className="supportticket-details-grid">
//                 <div className="ticket-detail">
//                   <p className="supportdetail-label">Ticket ID</p>
//                   <p>{selectedTicket.id}</p>
//                 </div>
//                 <div className="supportticket-detail">
//                   <p className="supportdetail-label">Status</p>
//                   <p>
//                     <span className={`badge ${getStatusClass(selectedTicket.status)}`}>
//                       {selectedTicket.status}
//                     </span>
//                   </p>
//                 </div>
//                 {/* <div className="supportticket-detail">
//                   <p className="supportdetail-label">Priority</p>
//                   <p>
//                     <span className={`badge ${getPriorityClass(selectedTicket.priority)}`}>
//                       {selectedTicket.priority}
//                     </span>
//                   </p>
//                 </div> */}
//                 <div className="supportticket-detail">
//                   <p className="supportdetail-label">Category</p>
//                   <p>{selectedTicket.category}</p>
//                 </div>
//                 <div className="supportticket-detail">
//                   <p className="supportdetail-label">Affiliate</p>
//                   <p>{selectedTicket.affiliate.name} ({selectedTicket.affiliate.code})</p>
//                 </div>
//                 <div className="supportticket-detail">
//                   <p className="dsupportetail-label">Last Updated</p>
//                   <p>{selectedTicket.lastUpdated}</p>
//                 </div>
//               </div>
              
//               <div className="supportticket-description">
//                 <h4>Description</h4>
//                 <p className="supportdescription-text">{selectedTicket.description}</p>
//               </div>
              
//               {/* <div className="supportticket-conversation">
//                 <h4>Conversation</h4>
//                 <div className="message-list">
//                   {selectedTicket.messages.map((message, index) => (
//                     <div key={index} className={`supportmessage ${message.sender === 'Support Agent' ? 'supportmessage-agent' : 'supportmessage-customer'}`}>
//                       <div className="supportmessage-header">
//                         <p className="supportmessage-sender">{message.sender}</p>
//                         <p className="supportmessage-time">{message.time}</p>
//                       </div>
//                       <p className="message-content">{message.content}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div> */}
              


//                <div className="epinmodal-form-group">
//           <label className="epinmodal-label">
//             Update Status
//           </label>
//           <select
//             // value={generateAmount}
//             // onChange={(e) => setGenerateAmount(Number(e.target.value))}
//             className="modal-input"
//           >
//             <option>Select</option>
//                 <option>Open</option>
//                 <option>In Progress</option>
//                 <option>Resolved</option>
//           </select>
//         </div>
              
//               <div className="supportreply-section">
//                 {/* <h4>Update Status</h4>
//                 <textarea 
//                   className="supportreply-textarea"
//                   placeholder="Type your response here..."
//                 ></textarea> */}
//                 <div className="supportreply-actions">
//                   <button className="supportsend-button">
//                     Update
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import "./Support.css";
import axios from "axios";


export default function SupportTicketDashboard() {
  const [ticketData, setTicketData] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [openTickets, setOpenTickets] = useState(0);
  const [inProgressTickets, setInProgressTickets] = useState(0);
  const [closedThisWeekTickets, setClosedThisWeekTickets] = useState(0);
  const [newStatus, setNewStatus] = useState("");

  const [usersMap, setUsersMap] = useState([]);

  
  const getStatusClass = (status) => {
    switch (status) {
      case "open":
        return "badge-open";
      case "in_progress":
        return "badge-progress";
      case "closed":
        return "badge-closed";
      default:
        return "";
    }
  };

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTicket(null);
  };

  const fetchTickets = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://pronet.ap-1.evennode.com/api/admin/getAllTickets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
console.log(res.data.tickets)
      const data = res.data.tickets;
      setTicketData(data);

      setOpenTickets(data.filter((t) => t.status === "open").length);
      setInProgressTickets(data.filter((t) => t.status === "in_progress").length);
      setClosedThisWeekTickets(data.filter((t) => t.status === "closed").length);
    } catch (error) {
      console.error("API error:", error);
    }
  };
  

  useEffect(() => {
    fetchTickets();
  }, []);


useEffect(() => {
  const fetchData = async () => {
    const token = localStorage.getItem("token");

    try {
      const [ticketRes, userRes] = await Promise.all([
        axios.get("https://pronet.ap-1.evennode.com/api/admin/getAllTickets", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get("https://pronet.ap-1.evennode.com/api/user/getAllUser", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      const usersMap = {};
      userRes.data.data.forEach(user => {
        usersMap[user._id] = user;
      });

      const enrichedTickets = ticketRes.data.tickets.map(ticket => ({
        ...ticket,
        matchedUser: usersMap[ticket.user] || null,
      }));

      setUsersMap(usersMap);
      setTicketData(enrichedTickets);
    } catch (err) {
      console.error("Error fetching:", err);
    }
  };

  fetchData();
}, []);


  const handleUpdateStatus = async () => {
  if (!newStatus || !selectedTicket?._id) return;

  try {
    const token = localStorage.getItem("token");
    await axios.patch(
      `https://pronet.ap-1.evennode.com/api/admin/updateTicketStatus/${selectedTicket._id}`,
      { status: newStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fetchTickets(); // refresh tickets
    closeModal();   // close modal
  } catch (err) {
    console.error("Status update failed", err);
  }
};


  return (
    <div className="supportdashboard">
      <div className="supportcontainer">
        <div className="supportheader">
          <h1>Support Tickets</h1>
        </div>

        <div className="supportstats-grid">
          <div className="supportstats-card">
            <div className="supportstats-label">Open Tickets</div>
            <h2 className="supportstats-value">{openTickets}</h2>
            <p className="supportstats-description">Waiting for response</p>
          </div>

          <div className="supportstats-card">
            <div className="supportstats-label">In Progress</div>
            <h2 className="supportstats-value">{inProgressTickets}</h2>
            <p className="supportstats-description">Being worked on</p>
          </div>

          <div className="supportstats-card">
            <div className="supportstats-label">Closed This Week</div>
            <h2 className="supportstats-value">{closedThisWeekTickets}</h2>
            <p className="supportstats-description">Successfully resolved</p>
          </div>

          <div className="supportstats-card">
            <div className="supportstats-label">Average Response Time</div>
            <h2 className="stats-value">4.2 hours</h2>
            <p className="supportstats-description">In the last 7 days</p>
          </div>
        </div>

        <div className="supporttickets-container">
          <h2>All Tickets</h2>


          <div className="supporttable-container">
            <table className="supporttickets-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Subject</th>
                  <th>Affiliate</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Last Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
  {ticketData.map(ticket => (
    <tr key={ticket._id} className="supportticket-row">
      <td>{ticket._id.slice(0, 8)}...</td>
      <td>{ticket.subject}</td>
      <td>
        {ticket.matchedUser?.name || "N/A"}
        <br />
        <span className="supportaffiliate-code">{ticket.matchedUser?.user_referral_code || "-"}</span>
      </td>
      <td>{ticket.type.charAt(0).toUpperCase() + ticket.type.slice(1)}</td>
      <td>
        <span className={`badge ${getStatusClass(ticket.status)}`}>
          {ticket.status}
        </span>
      </td>
      <td>{(ticket.updatedAt !== ticket.createdAt ? ticket.updatedAt : ticket.createdAt).slice(0, 10)}</td>
      <td>
        <button onClick={() => handleViewTicket(ticket)} className="supportview-button">
          <Eye size={20} />
        </button>
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>

          <div className="supportpagination">
            <div className="supportpagination-info">Showing {ticketData.length} tickets</div>
            {/* <div className="supportpagination-buttons">
              <button className="supportpagination-button" disabled>Previous</button>
              <button className="supportpagination-button">Next</button>
            </div> */}
          </div>
        </div>
      </div>



{/* !POPUP MODULE  */}
      {showModal && selectedTicket && (
        <div className="supportmodal-overlay">
          <div className="supportmodal">
            <div className="supportmodal-header">
              <h3>{selectedTicket.subject}</h3>
              <button onClick={closeModal} className="supportclose-button">
                <svg className="supportclose-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="supportmodal-body">
              <div className="supportticket-details-grid">
                <div className="supportticket-detail">
                  <p className="supportdetail-label">Ticket ID</p>
                  <p>{selectedTicket._id}</p>
                </div>
                <div className="supportticket-detail">
                  <p className="supportdetail-label">Status</p>
                  <p>
                    <span className={`badge ${getStatusClass(selectedTicket.status)}`}>
                      {selectedTicket.status}
                    </span>
                  </p>
                </div>
                <div className="supportticket-detail">
                  <p className="supportdetail-label">Category</p>
                  <p>{selectedTicket.type}</p>
                </div>
                <div className="supportticket-detail">
                  {/* <p className="supportdetail-label">Affiliate</p> */}
                  <p className="supportdetail-label">Affiliate</p>
  <p>
    {selectedTicket.matchedUser?.name || "N/A"}{" "}
    <span className="supportaffiliate-code">
    </span>
  </p>
                  {/* <p>{selectedTicket.affiliate?.name} ({selectedTicket.affiliate?.code})</p> */}
                </div>
                <div className="supportticket-detail">
                  <p className="supportdetail-label">Last Updated</p>
                  <p>{(selectedTicket.updatedAt !== selectedTicket.createdAt ? selectedTicket.updatedAt : selectedTicket.createdAt).slice(0, 10)}</p>
                </div>
              </div>
<textarea
  style={{ background: '#283F58', fontSize: '20px', fontWeight: '100' }}
  className="epinmodal-label"
  readOnly
  defaultValue={selectedTicket.message}
/>

              <div className="supportreply-section">
  <label className="epinmodal-label">Update Status</label>
  <select
    className="modal-input"
    value={newStatus}
    onChange={(e) => setNewStatus(e.target.value)}
  >
    <option value="">Select</option>
    <option value="open">Open</option>
    <option value="in_progress">In Progress</option>
    <option value="closed">Closed</option>
  </select>

  <div className="supportreply-actions">
    <button className="supportsend-button" onClick={handleUpdateStatus}>
      Update
    </button>
  </div>
</div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}





// import { useState } from 'react';
// import { Eye } from 'lucide-react';

// // Sample ticket data
// const ticketData = [
//   {
//     id: "TKT001",
//     subject: "Payment not received",
//     affiliate: { name: "John Doe", code: "AF001" },
//     category: "Payment",
//     priority: "High",
//     status: "Open",
//     lastUpdated: "2023-06-15 14:32",
//     description: "Customer claims payment was made but it's not reflecting in their account.",
//     messages: [
//       { sender: "John Doe", time: "2023-06-15 12:30", content: "I made a payment yesterday but it's not showing in my account." },
//       { sender: "Support Agent", time: "2023-06-15 14:32", content: "We're looking into this issue. Could you please provide your transaction reference?" }
//     ]
//   },
//   {
//     id: "TKT002",
//     subject: "How to upgrade my package?",
//     affiliate: { name: "Alice Smith", code: "AF002" },
//     category: "Account",
//     priority: "Medium",
//     status: "Open",
//     lastUpdated: "2023-06-16 09:15",
//     description: "Customer wants information about upgrading their current subscription package.",
//     messages: [
//       { sender: "Alice Smith", time: "2023-06-16 08:45", content: "I'm interested in upgrading my current plan. What are my options?" },
//       { sender: "Support Agent", time: "2023-06-16 09:15", content: "Thank you for your interest! I'd be happy to explain the upgrade options available to you." }
//     ]
//   },
//   {
//     id: "TKT003",
//     subject: "Unable to login",
//     affiliate: { name: "Robert Johnson", code: "AF003" },
//     category: "Technical",
//     priority: "High",
//     status: "In Progress",
//     lastUpdated: "2023-06-14 16:45",
//     description: "Customer is experiencing issues when trying to log into their account.",
//     messages: [
//       { sender: "Robert Johnson", time: "2023-06-14 15:30", content: "I'm unable to login to my account. It says 'invalid credentials' but I'm sure my password is correct." },
//       { sender: "Support Agent", time: "2023-06-14 16:45", content: "I've reset your password. Please check your email for the temporary password and instructions." }
//     ]
//   },
//   {
//     id: "TKT004",
//     subject: "Commission rate query",
//     affiliate: { name: "Mary Williams", code: "AF004" },
//     category: "Commission",
//     priority: "Low",
//     status: "Closed",
//     lastUpdated: "2023-06-12 10:22",
//     description: "Affiliate has questions about commission rates for the new promotion.",
//     messages: [
//       { sender: "Mary Williams", time: "2023-06-12 09:15", content: "What are the commission rates for the summer promotion?" },
//       { sender: "Support Agent", time: "2023-06-12 10:22", content: "The commission rate for the summer promotion is 12%. Let me know if you have any other questions!" }
//     ]
//   },
//   {
//     id: "TKT005",
//     subject: "E-Pin transfer issue",
//     affiliate: { name: "Patricia Davis", code: "AF006" },
//     category: "E-Pin",
//     priority: "Medium",
//     status: "Open",
//     lastUpdated: "2023-06-17 08:55",
//     description: "Customer is unable to transfer e-pins to another account.",
//     messages: [
//       { sender: "Patricia Davis", time: "2023-06-17 08:30", content: "I'm trying to transfer my e-pins to my new account but getting an error." },
//       { sender: "Support Agent", time: "2023-06-17 08:55", content: "I'll check the issue with e-pin transfers right away. Are you getting any specific error message?" }
//     ]
//   }
// ];

// export default function SupportTicketDashboard() {
//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [showModal, setShowModal] = useState(false);
  
//   const openTickets = ticketData.filter(ticket => ticket.status === "Open").length;
//   const inProgressTickets = ticketData.filter(ticket => ticket.status === "In Progress").length;
//   const closedThisWeekTickets = ticketData.filter(ticket => ticket.status === "Closed").length;
  
//   const handleViewTicket = (ticket) => {
//     setSelectedTicket(ticket);
//     setShowModal(true);
//   };
  
//   const closeModal = () => {
//     setShowModal(false);
//   };
  
//   return (
//     <div className="bg-slate-900 text-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Support Tickets</h1>
//           <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded flex items-center gap-2">
//             <span>Create New Ticket</span>
//           </button>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           {/* Stats Cards */}
//           <div className="bg-white rounded p-4 text-black">
//             <div className="bg-blue-600 text-white inline-block px-2 py-1 mb-2 rounded">Open Tickets</div>
//             <h2 className="text-3xl font-bold">{openTickets}</h2>
//             <p className="text-blue-600">Waiting for response</p>
//           </div>
          
//           <div className="bg-white rounded p-4 text-black">
//             <div className="bg-blue-600 text-white inline-block px-2 py-1 mb-2 rounded">In Progress</div>
//             <h2 className="text-3xl font-bold">{inProgressTickets}</h2>
//             <p className="text-blue-600">Being worked on</p>
//           </div>
          
//           <div className="bg-white rounded p-4 text-black">
//             <div className="bg-blue-600 text-white inline-block px-2 py-1 mb-2 rounded">Closed This Week</div>
//             <h2 className="text-3xl font-bold">{closedThisWeekTickets}</h2>
//             <p className="text-blue-600">Successfully resolved</p>
//           </div>
          
//           <div className="bg-white rounded p-4 text-black">
//             <div className="bg-blue-600 text-white inline-block px-2 py-1 mb-2 rounded">Average Response Time</div>
//             <h2 className="text-3xl font-bold">4.2 hours</h2>
//             <p className="text-blue-600">In the last 7 days</p>
//           </div>
//         </div>
        
//         <div className="bg-slate-800 rounded-lg p-6">
//           <h2 className="text-xl font-bold mb-4">All Tickets</h2>
          
//           <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
//             <div className="relative">
//               <input 
//                 type="text" 
//                 placeholder="Search tickets..." 
//                 className="bg-slate-900 border border-slate-700 rounded py-2 px-4 pl-10 w-full md:w-80"
//               />
//               <svg className="absolute left-3 top-3 h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//               </svg>
//             </div>
            
//             <div className="flex gap-2">
//               <select className="bg-slate-900 border border-slate-700 rounded py-2 px-4">
//                 <option>All Status</option>
//                 <option>Open</option>
//                 <option>In Progress</option>
//                 <option>Closed</option>
//               </select>
              
//               <select className="bg-slate-900 border border-slate-700 rounded py-2 px-4">
//                 <option>All...</option>
//                 <option>Payment</option>
//                 <option>Account</option>
//                 <option>Technical</option>
//                 <option>Commission</option>
//                 <option>E-Pin</option>
//               </select>
              
//               <select className="bg-slate-900 border border-slate-700 rounded py-2 px-4">
//                 <option>All Priority</option>
//                 <option>High</option>
//                 <option>Medium</option>
//                 <option>Low</option>
//               </select>
//             </div>
//           </div>
          
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-slate-700">
//                   <th className="text-left py-3 px-4">ID</th>
//                   <th className="text-left py-3 px-4">Subject</th>
//                   <th className="text-left py-3 px-4">Affiliate</th>
//                   <th className="text-left py-3 px-4">Category</th>
//                   <th className="text-left py-3 px-4">Priority</th>
//                   <th className="text-left py-3 px-4">Status</th>
//                   <th className="text-left py-3 px-4">Last Updated</th>
//                   <th className="text-left py-3 px-4">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {ticketData.map((ticket) => (
//                   <tr key={ticket.id} className="border-b border-slate-700 hover:bg-slate-700">
//                     <td className="py-3 px-4">{ticket.id}</td>
//                     <td className="py-3 px-4">{ticket.subject}</td>
//                     <td className="py-3 px-4">
//                       {ticket.affiliate.name}
//                       <br />
//                       <span className="text-slate-400 text-sm">{ticket.affiliate.code}</span>
//                     </td>
//                     <td className="py-3 px-4">{ticket.category}</td>
//                     <td className="py-3 px-4">
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         ticket.priority === 'High' ? 'bg-red-100 text-red-800' :
//                         ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
//                         'bg-blue-100 text-blue-800'
//                       }`}>
//                         {ticket.priority}
//                       </span>
//                     </td>
//                     <td className="py-3 px-4">
//                       <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                         ticket.status === 'Open' ? 'bg-yellow-100 text-yellow-800' :
//                         ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
//                         'bg-green-100 text-green-800'
//                       }`}>
//                         {ticket.status}
//                       </span>
//                     </td>
//                     <td className="py-3 px-4">{ticket.lastUpdated}</td>
//                     <td className="py-3 px-4">
//                       <button 
//                         onClick={() => handleViewTicket(ticket)}
//                         className="text-blue-400 hover:text-blue-600"
//                       >
//                         <Eye size={20} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
          
//           <div className="mt-4 flex justify-between items-center">
//             <div className="text-sm text-slate-400">Showing 5 of 5 tickets</div>
//             <div className="flex gap-2">
//               <button className="px-4 py-2 bg-slate-700 rounded hover:bg-slate-600 disabled:opacity-50" disabled>Previous</button>
//               <button className="px-4 py-2 bg-slate-700 rounded hover:bg-slate-600">Next</button>
//             </div>
//           </div>
//         </div>
//       </div>
    
//       {/* Ticket Detail Modal */}
//       {showModal && selectedTicket && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-slate-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-slate-700">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-xl font-bold">{selectedTicket.subject}</h3>
//                 <button 
//                   onClick={closeModal}
//                   className="text-slate-400 hover:text-white"
//                 >
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
            
//             <div className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                 <div>
//                   <p className="text-slate-400 mb-1">Ticket ID</p>
//                   <p>{selectedTicket.id}</p>
//                 </div>
//                 <div>
//                   <p className="text-slate-400 mb-1">Status</p>
//                   <p>
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       selectedTicket.status === 'Open' ? 'bg-yellow-100 text-yellow-800' :
//                       selectedTicket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
//                       'bg-green-100 text-green-800'
//                     }`}>
//                       {selectedTicket.status}
//                     </span>
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-slate-400 mb-1">Priority</p>
//                   <p>
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       selectedTicket.priority === 'High' ? 'bg-red-100 text-red-800' :
//                       selectedTicket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
//                       'bg-blue-100 text-blue-800'
//                     }`}>
//                       {selectedTicket.priority}
//                     </span>
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-slate-400 mb-1">Category</p>
//                   <p>{selectedTicket.category}</p>
//                 </div>
//                 <div>
//                   <p className="text-slate-400 mb-1">Affiliate</p>
//                   <p>{selectedTicket.affiliate.name} ({selectedTicket.affiliate.code})</p>
//                 </div>
//                 <div>
//                   <p className="text-slate-400 mb-1">Last Updated</p>
//                   <p>{selectedTicket.lastUpdated}</p>
//                 </div>
//               </div>
              
//               <div className="mb-6">
//                 <h4 className="font-bold mb-2">Description</h4>
//                 <p className="bg-slate-900 p-4 rounded">{selectedTicket.description}</p>
//               </div>
              
//               <div>
//                 <h4 className="font-bold mb-2">Conversation</h4>
//                 <div className="space-y-4">
//                   {selectedTicket.messages.map((message, index) => (
//                     <div key={index} className={`p-4 rounded ${message.sender === 'Support Agent' ? 'bg-blue-900' : 'bg-slate-900'}`}>
//                       <div className="flex justify-between mb-2">
//                         <p className="font-medium">{message.sender}</p>
//                         <p className="text-sm text-slate-400">{message.time}</p>
//                       </div>
//                       <p>{message.content}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               <div className="mt-6">
//                 <h4 className="font-bold mb-2">Reply</h4>
//                 <textarea 
//                   className="w-full bg-slate-900 border border-slate-700 rounded p-3 min-h-32"
//                   placeholder="Type your response here..."
//                 ></textarea>
//                 <div className="mt-2 flex justify-end">
//                   <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded">
//                     Send Response
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }