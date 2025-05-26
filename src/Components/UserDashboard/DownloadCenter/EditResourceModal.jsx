export default function EditResourceModal({ 
  formData, 
  setFormData, 
  categories, 
  accessLevels, 
  onClose, 
  onUpdate 
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.name.split('.').pop().toUpperCase();
      const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(1) + " MB";

      setFormData({
        ...formData,
        file: file,
        type: fileType,
        size: fileSizeInMB
      });
    }
  };

  const handleSubmit = () => {
    onUpdate({ ...formData });
  };

  return (
    <div className="downloadedit-modal-overlay">
      <div className="downloadedit-modal-container">
        <div className="downloadedit-modal-header">
          <h2>Edit Resource</h2>
          <button onClick={onClose} className="downloadedit-close-btn">
            <svg className="downloadedit-close-icon" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="downloadedit-modal-content">
          <div className="downloadedit-form-grid">
            <div className="downloadedit-form-group">
              <label>ID</label>
              <input type="text" name="id" value={formData.id} readOnly />
            </div>
            <div className="downloadedit-form-group">
              <label>Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
            </div>
            <div className="downloadedit-form-group">
              <label>Category</label>
              <select name="category" value={formData.category} onChange={handleInputChange}>
                {categories.map(category => <option key={category}>{category}</option>)}
              </select>
            </div>
            <div className="downloadedit-form-group">
              <label>Access Level</label>
              <select name="accessLevel" value={formData.accessLevel} onChange={handleInputChange}>
                {accessLevels.map(level => <option key={level}>{level}</option>)}
              </select>
            </div>
            <div className="downloadedit-form-group">
              <label>Type</label>
              <input type="text" name="type" value={formData.type} readOnly />
            </div>
          </div>

          <div className="downloadedit-form-group">
            <label>Description</label>
            <textarea 
              name="description" 
              rows="3" 
              value={formData.description} 
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="downloadedit-form-group">
            <label>Replace File</label>
            <div className="downloadedit-file-input">
              <label className="downloadedit-file-label">
                Select File
                <input 
                  type="file" 
                  className="downloadedit-file-input-hidden" 
                  onChange={handleFileSelect} 
                />
              </label>
              <span className="downloadedit-file-info">
                {formData.file ? formData.file.name : "Current file will be kept"}
              </span>
            </div>
          </div>

          <div className="downloadedit-modal-actions">
            <button onClick={onClose} className="downloadedit-cancel-btn">Cancel</button>
            <button onClick={handleSubmit} className="downloadedit-update-btn">Update Resource</button>
          </div>
        </div>
      </div>
    </div>
  );
}