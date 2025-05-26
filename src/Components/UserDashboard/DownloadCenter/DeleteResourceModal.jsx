export default function DeleteResourceModal({ resource, onClose, onDelete }) {
  return (
    <div className="downloaddelete-modal-overlay">
      <div className="downloaddelete-modal-container">
        <h2 className="downloaddelete-modal-title">Confirm Deletion</h2>
        <p className="downloaddelete-modal-message">
          Are you sure you want to delete <strong>{resource?.title}</strong>? This action cannot be undone.
        </p>

        <div className="downloaddelete-modal-actions">
          <button onClick={onClose} className="downloaddelete-cancel-btn">Cancel</button>
          <button onClick={onDelete} className="downloaddelete-delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
}