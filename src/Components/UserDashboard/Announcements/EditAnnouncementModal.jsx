
// import React, { useState, useEffect } from 'react';
// import { announcementService } from './AnnouncementService';

// const EditAnnouncementModal = ({
//   showModal,
//   setShowModal,
//   currentAnnouncement,
//   onSuccess,
//   getToken
// }) => {
//   const categories = ['Finance', 'System', 'Marketing', 'Promotion', 'Product'];
//   const statuses = ['active', 'draft', 'schedule'];
//   const visibilityOptions = ['all', 'rankAndAbove', 'user'];
//   const rankOptions = [
//     'All Affiliates', 'Iginator', 'Spark', 'Rise', 'Pioneer', 'Innovator',
//     'Catalyst', 'Trailbazer', 'Vanguard', 'Luminary', 'Mogul', 'Sovereigh', 'Zenith'
//   ];

//   const [formData, setFormData] = useState({
//     title: '',
//     category: 'Finance',
//     type: 'active',
//     schdule_date: '',
//     description: '',
//     targetType: 'all',
//     userId: '',
//     rank: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formErrors, setFormErrors] = useState({});
//   const [hasChanges, setHasChanges] = useState(false);
//   const [originalData, setOriginalData] = useState(null);

//   useEffect(() => {
//     if (currentAnnouncement && showModal) {
//       const formattedDate = currentAnnouncement.date
//         ? new Date(currentAnnouncement.date).toISOString().split('T')[0]
//         : new Date().toISOString().split('T')[0];

//       const scheduledDate = currentAnnouncement.schdule_date
//         ? new Date(currentAnnouncement.schdule_date).toISOString().split('T')[0]
//         : '';

//       const initialData = {
//         title: currentAnnouncement.title || '',
//         category: currentAnnouncement.category || 'Finance',
//         type: currentAnnouncement.type || 'active',
//         schdule_date: scheduledDate,
//         description: currentAnnouncement.description || '',
//         targetType: currentAnnouncement.targetType || 'all',
//         userId: currentAnnouncement.userId || '',
//         rank: currentAnnouncement.rank || ''
//       };

//       setFormData(initialData);
//       setOriginalData(initialData);
//       setHasChanges(false);
//       setFormErrors({});
//     }
//   }, [currentAnnouncement, showModal]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     const newFormData = { ...formData, [name]: value };
//     setFormData(newFormData);

//     if (originalData) {
//       const hasChanged = JSON.stringify(newFormData) !== JSON.stringify(originalData);
//       setHasChanges(hasChanged);
//     }

//     if (formErrors[name]) {
//       setFormErrors({ ...formErrors, [name]: '' });
//     }
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.title.trim()) errors.title = 'Title is required';
//     if (!formData.description.trim()) errors.description = 'Description is required';
//     if (formData.type === 'scheduled' && !formData.schdule_date) {
//       errors.schdule_date = 'Scheduled date is required';
//     }
//     if (formData.targetType === 'user' && !formData.userId.trim()) {
//       errors.userId = 'User ID is required';
//     }
//     if (formData.targetType === 'rankAndAbove' && !formData.rank) {
//       errors.rank = 'Please select a rank';
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;
//     setIsSubmitting(true);
//     try {
//       await announcementService.saveAnnouncement(formData, currentAnnouncement, getToken);
//       onSuccess('Announcement updated successfully!');
//       handleClose();
//     } catch (err) {
//       setFormErrors({ submit: err.message });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleClose = () => {
//     if (hasChanges) {
//       if (window.confirm('You have unsaved changes. Are you sure you want to close?')) {
//         setShowModal(false);
//         setHasChanges(false);
//         setFormErrors({});
//       }
//     } else {
//       setShowModal(false);
//     }
//   };

//   const resetForm = () => {
//     if (originalData) {
//       setFormData(originalData);
//       setHasChanges(false);
//       setFormErrors({});
//     }
//   };

//   if (!showModal || !currentAnnouncement) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal edit-modal">
//         <div className="modal-header">
//           <h3>✏️ Edit Announcement</h3>
//           <div className="modal-header-info">
//             <small>ID: {currentAnnouncement._id.substring(0, 8)}...</small>
//             {hasChanges && <span className="changes-indicator">• Unsaved changes</span>}
//           </div>
//           <button className="close-button" onClick={handleClose}>×</button>
//         </div>

//         <div className="modal-content">
//           {formErrors.submit && <div className="error-message">{formErrors.submit}</div>}

//           <div className="form-group">
//             <label>Title <span className="required">*</span></label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleInputChange}
//               placeholder="Enter title"
//               className={formErrors.title ? 'error' : ''}
//             />
//             {formErrors.title && <span className="field-error">{formErrors.title}</span>}
//           </div>

//           <div className="form-row">
//             <div className="form-group">
//               <label>Category</label>
//               <select name="category" value={formData.category} onChange={handleInputChange}>
//                 {categories.map(category => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Status</label>
//               <select name="type" value={formData.type} onChange={handleInputChange}>
//                 {statuses.map(status => (
//                   <option key={status} value={status}>{status}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="form-group">
//               <label>Target Type</label>
//               <select name="targetType" value={formData.targetType} onChange={handleInputChange}>
//                 {visibilityOptions.map(option => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {formData.type === 'schedule' && (
//             <div className="form-group">
//               <label>Scheduled Date <span className="required">*</span></label>
//               <input
//                 type="date"
//                 name="schdule_date"
//                 value={formData.schdule_date}
//                 onChange={handleInputChange}
//                 min={new Date().toISOString().split('T')[0]}
//                 className={formErrors.schdule_date ? 'error' : ''}
//               />
//               {formErrors.schdule_date && <span className="field-error">{formErrors.schdule_date}</span>}
//             </div>
//           )}

//           {formData.targetType === 'rankAndAbove' && (
//             <div className="form-group">
//               <label>Rank & Above <span className="required">*</span></label>
//               <select
//                 name="rank"
//                 value={formData.rank}
//                 onChange={handleInputChange}
//                 className={formErrors.rank ? 'error' : ''}
//               >
//                 <option value="">Select Rank</option>
//                 {rankOptions.map(rank => (
//                   <option key={rank} value={rank}>{rank}</option>
//                 ))}
//               </select>
//               {formErrors.rank && <span className="field-error">{formErrors.rank}</span>}
//             </div>
//           )}

//           {formData.targetType === 'user' && (
//             <div className="form-group">
//               <label>User ID <span className="required">*</span></label>
//               <input
//                 type="text"
//                 name="userId"
//                 value={formData.userId}
//                 onChange={handleInputChange}
//                 placeholder="Enter User ID"
//                 className={formErrors.userId ? 'error' : ''}
//               />
//               {formErrors.userId && <span className="field-error">{formErrors.userId}</span>}
//             </div>
//           )}

//           <div className="form-group">
//             <label>Description <span className="required">*</span></label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               rows="4"
//               placeholder="Enter description"
//               className={formErrors.description ? 'error' : ''}
//             ></textarea>
//             {formErrors.description && <span className="field-error">{formErrors.description}</span>}
//           </div>
//         </div>

//         <div className="modal-footer">
//           <button className="cancel-button" onClick={handleClose} disabled={isSubmitting}>Cancel</button>
//           {hasChanges && (
//             <button className="reset-button" onClick={resetForm} disabled={isSubmitting}>
//               Reset Changes
//             </button>
//           )}
//           <button
//             className={`submit-button update-button ${!hasChanges ? 'no-changes' : ''}`}
//             onClick={handleSubmit}
//             disabled={isSubmitting || !hasChanges}
//           >
//             {isSubmitting ? 'Updating...' : hasChanges ? '💾 Save Changes' : 'No Changes'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditAnnouncementModal;






import React, { useState, useEffect } from 'react';

const EditAnnouncementModal = ({
  showModal,
  setShowModal,
  currentAnnouncement,
  onSuccess,
  getToken
}) => {
  const categories = ['Finance', 'System', 'Marketing', 'Promotion', 'Product'];
  const statuses = ['active', 'draft', 'schedule'];
  const visibilityOptions = ['all', 'rankAndAbove', 'user'];
  const rankOptions = [
    'All Affiliates', 'Iginator', 'Spark', 'Rise', 'Pioneer', 'Innovator',
    'Catalyst', 'Trailbazer', 'Vanguard', 'Luminary', 'Mogul', 'Sovereigh', 'Zenith'
  ];

  const [formData, setFormData] = useState({
    title: '',
    category: 'Finance',
    type: 'active',
    schdule_date: '',
    description: '',
    targetType: 'all',
    userId: '',
    rank: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [hasChanges, setHasChanges] = useState(false);
  const [originalData, setOriginalData] = useState(null);

  useEffect(() => {
    if (currentAnnouncement && showModal) {
      const scheduledDate = currentAnnouncement.schdule_date
        ? new Date(currentAnnouncement.schdule_date).toISOString().split('T')[0]
        : '';

      const initialData = {
        title: currentAnnouncement.title || '',
        category: currentAnnouncement.category || 'Finance',
        type: currentAnnouncement.type || 'active',
        schdule_date: scheduledDate,
        description: currentAnnouncement.description || '',
        targetType: currentAnnouncement.targetType || 'all',
        userId: currentAnnouncement.userId || '',
        rank: currentAnnouncement.rank || ''
      };

      setFormData(initialData);
      setOriginalData(initialData);
      setHasChanges(false);
      setFormErrors({});
    }
  }, [currentAnnouncement, showModal]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    if (originalData) {
      setHasChanges(JSON.stringify(newFormData) !== JSON.stringify(originalData));
    }

    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.title.trim()) errors.title = 'Title is required';
    if (!formData.description.trim()) errors.description = 'Description is required';
    if (formData.type === 'schedule' && !formData.schdule_date) {
      errors.schdule_date = 'Scheduled date is required';
    }
    if (formData.targetType === 'user' && !formData.userId.trim()) {
      errors.userId = 'User ID is required';
    }
    if (formData.targetType === 'rankAndAbove' && !formData.rank) {
      errors.rank = 'Please select a rank';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const saveAnnouncement = async () => {
    try {
      const token = getToken();

      const payload = {
        title: formData.title,
        category: formData.category,
        type: formData.type,
        description: formData.description,
        targetType: formData.targetType,
        user: []
      };

      if (formData.type === 'schedule') {
        if (!formData.schdule_date) throw new Error('Please select a scheduled date');
        payload.schdule_date = formData.schdule_date;
        payload.date = formData.schdule_date;
      } else {
        payload.date = formData.date || new Date().toISOString();
      }

      if (formData.targetType === 'rankAndAbove') {
        if (!formData.rank) throw new Error('Please select a rank');
        payload.rank = formData.rank.toLowerCase();
      }

      if (formData.targetType === 'user') {
        if (!formData.userId) throw new Error('Please provide User ID');
        payload.user = [formData.userId];
      }

      const response = await fetch(
        `https://pronet.ap-1.evennode.com/api/admin/updateNewsNew/${currentAnnouncement._id}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      );
      

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to save announcement');
      }

      // return response.json();
      const data = await response.json();
console.log(data); // yaha actual response data milega
return data;
    } catch (err) {
      throw new Error('Failed to save announcement: ' + err.message);
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      // await saveAnnouncement();
      // onSuccess('Announcement updated successfully!');
      // handleClose();
      const updatedData = await saveAnnouncement();
onSuccess('Announcement updated successfully!', updatedData);
handleClose();

    } catch (err) {
      setFormErrors({ submit: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (hasChanges) {
      // if (window.confirm('You have unsaved changes. Are you sure you want to close?')) {
        setShowModal(false);
        setHasChanges(false);
        setFormErrors({});
      // }
    } else {
      setShowModal(false);
    }
  };

  const resetForm = () => {
    if (originalData) {
      setFormData(originalData);
      setHasChanges(false);
      setFormErrors({});
    }
  };

  if (!showModal || !currentAnnouncement) return null;

  return (
    <div className="modal-overlay">
      <div className="modal edit-modal">
        <div className="modal-header">
          <h3>✏️ Edit Announcement</h3>
          <div className="modal-header-info">
            <small>ID: {currentAnnouncement._id.substring(0, 8)}...</small>
            {hasChanges && <span className="changes-indicator">• Unsaved changes</span>}
          </div>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>

        <div className="modal-content">
          {formErrors.submit && <div className="error-message">{formErrors.submit}</div>}

          <div className="form-group">
            <label>Title <span className="required">*</span></label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter title"
              className={formErrors.title ? 'error' : ''}
            />
            {formErrors.title && <span className="field-error">{formErrors.title}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category</label>
              <select name="category" value={formData.category} onChange={handleInputChange}>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select name="type" value={formData.type} onChange={handleInputChange}>
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Target Type</label>
              <select name="targetType" value={formData.targetType} onChange={handleInputChange}>
                {visibilityOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {formData.type === 'schedule' && (
            <div className="form-group">
              <label>Scheduled Date <span className="required">*</span></label>
              <input
                type="date"
                name="schdule_date"
                value={formData.schdule_date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className={formErrors.schdule_date ? 'error' : ''}
              />
              {formErrors.schdule_date && <span className="field-error">{formErrors.schdule_date}</span>}
            </div>
          )}

          {formData.targetType === 'rankAndAbove' && (
            <div className="form-group">
              <label>Rank & Above <span className="required">*</span></label>
              <select
                name="rank"
                value={formData.rank}
                onChange={handleInputChange}
                className={formErrors.rank ? 'error' : ''}
              >
                <option value="">Select Rank</option>
                {rankOptions.map(rank => (
                  <option key={rank} value={rank}>{rank}</option>
                ))}
              </select>
              {formErrors.rank && <span className="field-error">{formErrors.rank}</span>}
            </div>
          )}

          {formData.targetType === 'user' && (
            <div className="form-group">
              <label>User ID <span className="required">*</span></label>
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleInputChange}
                placeholder="Enter User ID"
                className={formErrors.userId ? 'error' : ''}
              />
              {formErrors.userId && <span className="field-error">{formErrors.userId}</span>}
            </div>
          )}

          <div className="form-group">
            <label>Description <span className="required">*</span></label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              placeholder="Enter description"
              className={formErrors.description ? 'error' : ''}
            ></textarea>
            {formErrors.description && <span className="field-error">{formErrors.description}</span>}
          </div>

          <div className="form-actions">
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={isSubmitting || !hasChanges}
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
            <button
              className="btn btn-secondary"
              onClick={resetForm}
              disabled={!hasChanges || isSubmitting}
            >
              Reset
            </button>
            <button
              className="btn btn-danger"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAnnouncementModal;
