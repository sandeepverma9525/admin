export default function AddResourceModal({ 
  formData, 
  setFormData, 
  categories, 
  accessLevels, 
  onClose, 
  onAdd 
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
    if (!formData.file) {
      alert("Please select a file");
      return;
    }
    onAdd({ ...formData });
  };

  return (
    <div className="downloadecenter-modal-overlay">
      <div className="downloadecenter-modal-content">
        <div className="downloadecenter-modal-header">
          <h2>Add New Resource</h2>
          <button className="downloadecenter-close-btn" onClick={onClose}>
            <svg className="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="downloadecenter-modal-body">
          <div className="downloadecenter-input-group">
            {/* <div>
              <label>ID</label>
              <input type="text" name="id" value={formData.id} readOnly />
            </div> */}
            {/* <div>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div> */}
            <div>
              <label>Category</label>
              <select name="category" 
              // value={formData.category} onChange={handleInputChange}
              >
                {/* {categories.map(category => ( */}
                  <option>Select</option> 
                  <option>PPT</option> 
                  <option>Video </option> 
                  <option>PDF </option> 
                  <option>Agreement</option>
                {/* ))} */}
              </select>
            </div>
            <div>
              <label>Access Level</label>
              <select name="accessLevel" value={formData.accessLevel} onChange={handleInputChange}>
                {accessLevels.map(level => (
                  <option key={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="downloadecenter-input-grou downloadecenter-file-upload">
            <label>File</label>
            <div className="downloadecenter-file-selector">
              <label className="downloadecenter-file-btn">
                Select File
                <input
                  type="file"
                  className="downloadecenter-file-input"
                  onChange={handleFileSelect}
                />
              </label>
              <span className="downloadecenter-file-name">
                {formData.file ? formData.file.name : "No file selected"}
              </span>
            </div>
            {formData.file && (
              <div className="downloadecenter-file-info">
                File type: {formData.type} | Size: {formData.size}
              </div>
            )}
          </div>

          <div className="downloadecenter-modal-footer">
            <button type="button" className="downloadecenter-cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="downloadecenter-add-btn" onClick={handleSubmit}>
              Add Resource
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}