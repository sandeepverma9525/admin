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
  const [statusFilter, setStatusFilter] = useState(""); // default all


  
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
          <div className="support-tableheadfilter">
          <h2>All Tickets</h2>


          <div className="supportfilter-bar">
  <label>Status Filter: </label>
  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="supportfilter-dropdown"
  >
    <option value="">All</option>
    <option value="open">Open</option>
    <option value="in_progress">In Progress</option>
    <option value="closed">Closed</option>
  </select>
</div>
</div>

{/* ! TABLE */}
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

   {[...ticketData]
    .filter(ticket => !statusFilter || ticket.status === statusFilter)
    .reverse()
    .map(ticket => (
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
        {/* <span className={`badge ${getStatusClass(ticket.status)}`}> */}
          {ticket.status.charAt(0).toUpperCase()+ticket.status.slice(1)}
        {/* </span> */}
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



{/*  !POPUP MODULE  */}
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
