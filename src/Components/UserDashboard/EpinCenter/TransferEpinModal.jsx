
import React from 'react';

const TransferModal = ({ 
  show, 
  onClose, 
  selectedEpin, 
  setSelectedEpin, 
  transferTo,
  setTransferTo,
  transferNote,
  setTransferNote,
  handleTransferEpin,
  unusedEpins
}) => {
  if (!show) return null;

  return (
    <div className="epinmodal-overlay">
      <div className="epinmodal">
        <div className="epinmodal-header">
          <h3 className="epinmodal-title">Transfer E-Pin</h3>
          <button 
            onClick={onClose}
            className="epinmodal-close"
          >
            ✕
          </button>
        </div>
        
        <div className="epinmodal-form-group">
          <label className="epinmodal-label">
            Select E-Pin
          </label>
          <select
            value={selectedEpin}
            onChange={(e) => setSelectedEpin(e.target.value)}
            className="modal-input"
          >
            <option value="">Select an E-Pin</option>
            {unusedEpins.map((epin) => (
              <option key={epin.id} value={epin.id}>
                {epin.id} - ${epin.amount}
              </option>
            ))}
          </select>
        </div>
        
        <div className="epinmodal-form-group">
          <label className="epinmodal-label">
            Transfer To
          </label>
          <input
            type="text"
            value={transferTo}
            onChange={(e) => setTransferTo(e.target.value)}
            placeholder="Enter receiver name or ID"
            className="modal-input"
          />
        </div>
        
        <div className="modal-form-group">
          <label className="modal-label">
            Note (Optional)
          </label>
          <textarea
            value={transferNote}
            onChange={(e) => setTransferNote(e.target.value)}
            placeholder="Add a note about this transfer"
            className="modal-textarea"
          ></textarea>
        </div>
        
        <div className="modal-footer">
          <button
            type="button"
            onClick={onClose}
            className="btn-secondary"
          >
            Cancel
          </button>
          <button
            type="button"
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