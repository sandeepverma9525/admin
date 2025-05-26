
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TransferModal = ({
  show,
  onClose,
  selectedEpin,
  setSelectedEpin,
  transferTo,
  setTransferTo,
  transferNote,
  setTransferNote,
  // handleTransferEpin,
  // unusedEpins
}) => {
  if (!show) return null;

  const [unUsed, setUnUsed] = useState([]);

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

        // Filter only unused epins
        const unused = response.data.epins
          .filter((item) => item.status === "unused")
          .flatMap((item) =>
            item.epin_codes.map((code) => ({
              code,
              amount: item.value,
            }))
          );

        setUnUsed(unused);
        // console.log(response.data)
      } catch (error) {
        console.error("Error fetching epins:", error.message);
      }
    };

    fetchEpins();
  }, []);


  const [affiliates, setAffiliates] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://pronet.ap-1.evennode.com/api/user/getAllUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log("Affiliates data:", res.data);
        setAffiliates(res.data.data); // 👈 yeh important hai (res.data.data)
      })
      .catch((err) => console.error("Error fetching affiliates:", err));
  }, []);


  const handleTransferEpin = async () => {
    const token = localStorage.getItem("token");
    const senderUserId = localStorage.getItem("adminId");

    if (!selectedEpin || !transferTo) {
      alert("Please select E-Pin and user to transfer.");
      return;
    }

    const payload = {
      epinCodes: [selectedEpin],
      senderUserId,
      senderType: "admin",
      receiverUserId: transferTo,
      epin_note: transferNote || ""
    };

    try {
      const res = await axios.post(
        "https://pronet.ap-1.evennode.com/api/user/transferEpin",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      // console.log("Transfer Successful", res.data);
      alert("E-Pin transferred successfully!");
      onClose();
      // Reset fields if needed
      setSelectedEpin("");
      setTransferTo("");
      setTransferNote("");
    } catch (err) {
      console.error("Transfer failed:", err.response?.data || err.message);
      alert("Transfer failed! Try again.");
    }
  };




  return (
    <div className="epinmodal-overlay">
      <div className="epinmodal">
        <div className="epinmodal-header">
          <h3 className="epinmodal-title">Transfer E-Pin</h3>
          <button onClick={onClose} className="epinmodal-close">✕</button>
        </div>

        <div className="epinmodal-form-group">
          <label className="epinmodal-label">Select E-Pin</label>
          <select
            value={selectedEpin}
            onChange={(e) => setSelectedEpin(e.target.value)}
            className="modal-input"
          >
            <option value="">Select an E-Pin</option>
            {unUsed.map((epin, index) => (
              <option key={index} value={epin.code}>
                {epin.code} - ₹{epin.amount}
              </option>
            ))}
          </select>
        </div>


        {/* 🔽 Dropdown for Transfer To */}
        <div className="epinmodal-form-group">
          <label className="epinmodal-label">Transfer To</label>
          <select
            value={transferTo}
            onChange={(e) => setTransferTo(e.target.value)}
            className="modal-input"
          >
            <option value="">Select User</option>
            {affiliates.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
        </div>

        <div className="modal-form-group">
          <label className="modal-label">Note (Optional)</label>
          <textarea
            value={transferNote}
            onChange={(e) => setTransferNote(e.target.value)}
            placeholder="Add a note about this transfer"
            className="modal-textarea"
          ></textarea>
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="btn-secondary">Cancel</button>
          <button
            onClick={handleTransferEpin}
            className="btn-primary transfer-btn"
            disabled={!selectedEpin || !transferTo}
          >
            Transfer E-Pin
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferModal;
