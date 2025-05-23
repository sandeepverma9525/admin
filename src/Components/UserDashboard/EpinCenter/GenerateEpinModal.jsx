import React from 'react';
import axios from "axios";
import Swal from "sweetalert2";

const GenerateModal = ({ 
  show, 
  onClose, 
  generateAmount, 
  setGenerateAmount, 
  generateQuantity,
  setGenerateQuantity,
  // handleGenerateEpin
}) => {
  if (!show) return null;
  



const handleGenerateEpin = async () => {
  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const adminId = currentUser?.admin?._id;

  if (!token || !adminId) {
    Swal.fire("Error", "Admin not logged in properly", "error");
    return;
  }

  try {
    const response = await axios.post(
      "https://pronet.ap-1.evennode.com/api/user/generateEpin",
      {
        numberOfEpins: generateQuantity,
        value: 2,
        generated_by: adminId,
        generatedByType: "admin",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response:", response.data);
    Swal.fire("Success", "E-Pins generated successfully!", "success");
    onClose(); // Modal close
  } catch (error) {
    console.error("E-Pin Generation Error:", error);
    Swal.fire("Error", "Failed to generate E-Pins", "error");
  }
};

  return (
    <div className="epinmodal-overlay">
      <div className="epinmodal">
        <div className="epinmodal-header">
          <h3 className="epinmodal-title">Generate E-Pins</h3>
          <button 
            onClick={onClose}
            className="epinmodal-close"
          >
            ✕
          </button>
        </div>
        
        
        <div className="epinmodal-form-group">
  <label className="epinmodal-label">
    Amount (USD)
  </label>
  <input
    type="text"
    value="$2"
    readOnly
    className="modal-input"
  />
  
</div>
        <div className="epinmodal-form-group">
          <label className="epinmodal-label">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={generateQuantity}
            onChange={(e) => setGenerateQuantity(Number(e.target.value))}
            className="epinmodal-input"
          />
        </div>
        
        <div className="modal-footer">
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary"
            style={{background:'#7f322b',
              width:'155px',
              height:'50px'

            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleGenerateEpin}
            className="epinbtn-primary generate-btn"
            style={{background:'#059669',
              width:'155px'
            }}
          >
            Generate E-Pins
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateModal;