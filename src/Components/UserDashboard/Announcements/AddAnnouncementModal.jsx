
// import React, { useState } from 'react';
// import { announcementService } from './AnnouncementService';

// const AddAnnouncementModal = ({
//   showModal,
//   setShowModal,
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

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     if (formErrors[name]) {
//       setFormErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.title.trim()) errors.title = 'Title is required';
//     if (!formData.description.trim()) errors.description = 'Description is required';
//     if (formData.type === 'schedule' && !formData.schdule_date) {
//       errors.schdule_date = 'Schedule date is required';
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
//       await announcementService.saveAnnouncement(formData, null, getToken);
//       onSuccess('Announcement created successfully!');
//       handleClose();
//     } catch (err) {
//       setFormErrors({ submit: err.message });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleClose = () => {
//     setFormData({
//       title: '',
//       category: 'Finance',
//       type: 'active',
//       schdule_date: '',
//       description: '',
//       targetType: 'all',
//       userId: '',
//       rank: ''
//     });
//     setFormErrors({});
//     setShowModal(false);
//   };

//   if (!showModal) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal add-modal">
//         <div className="modal-header">
//           <h3>📢 Create New Announcement</h3>
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
//           <button className="submit-button create-button" onClick={handleSubmit} disabled={isSubmitting}>
//             {isSubmitting ? 'Creating...' : '✨ Create Announcement'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddAnnouncementModal;








import React, { useState } from 'react';

const AddAnnouncement = ({ showModal, setShowModal, onSuccess, getToken }) => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.title.trim()) errors.title = 'Title is required';
    if (!formData.description.trim()) errors.description = 'Description is required';
    if (formData.type === 'schedule' && !formData.schdule_date) {
      errors.schdule_date = 'Schedule date is required';
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

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);

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
        payload.schdule_date = formData.schdule_date;
      }

      if (formData.targetType === 'rankAndAbove') {
        payload.rank = formData.rank.toLowerCase();
      } else if (formData.targetType === 'user') {
        payload.user = [formData.userId];
      }

      // POST API call only (PATCH logic removed)
      const response = await fetch(
        'https://pronet.ap-1.evennode.com/api/admin/createNewsNew',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to create announcement');
      }

      onSuccess('Announcement created successfully!');
      handleClose();
    } catch (err) {
      setFormErrors({ submit: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      title: '',
      category: 'Finance',
      type: 'active',
      schdule_date: '',
      description: '',
      targetType: 'all',
      userId: '',
      rank: ''
    });
    setFormErrors({});
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal add-modal">
        <div className="modal-header">
          <h3>📢 Create New Announcement</h3>
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
        </div>

        <div className="modal-footer">
          <button className="cancel-button" onClick={handleClose} disabled={isSubmitting}>Cancel</button>
          <button className="submit-button create-button" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Creating...' : '✨ Create Announcement'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAnnouncement;
