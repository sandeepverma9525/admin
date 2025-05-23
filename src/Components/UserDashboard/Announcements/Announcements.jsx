

// import { useState } from 'react';
// import './Announcements.css';

// export default function AnnouncementManagement() {
//   // Sample announcement data
//   const [announcements, setAnnouncements] = useState([
//     { 
//       id: 'AN001', 
//       title: 'New Commission Structure', 
//       category: 'Finance', 
//       date: '2023-07-15', 
//       visibility: 'All Affiliates', 
//       status: 'Active' 
//     },
//     { 
//       id: 'AN002', 
//       title: 'System Maintenance Notice', 
//       category: 'System', 
//       date: '2023-07-20', 
//       visibility: 'All Users', 
//       status: 'Active' 
//     },
//     { 
//       id: 'AN003', 
//       title: 'New Marketing Materials Available', 
//       category: 'Marketing', 
//       date: '2023-07-22', 
//       visibility: 'Gold & Above', 
//       status: 'Active' 
//     },
//     { 
//       id: 'AN004', 
//       title: 'Special Promotion', 
//       category: 'Promotion', 
//       date: '2023-07-10', 
//       visibility: 'All Affiliates', 
//       status: 'Inactive' 
//     },
//     { 
//       id: 'AN005', 
//       title: 'New Product Launch', 
//       category: 'Product', 
//       date: '2023-08-01', 
//       visibility: 'All Users', 
//       status: 'Scheduled' 
//     }
//   ]);

//   // State for filtered data
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState('All Categories');
//   const [statusFilter, setStatusFilter] = useState('All Status');

//   // State for modal forms
//   const [showModal, setShowModal] = useState(false);
//   const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
//   const [formData, setFormData] = useState({
//     id: '',
//     title: '',
//     category: '',
//     date: '',
//     visibility: '',
//     status: '',
//     description: ''
//   });

//   // Category options
//   const categories = ['All Categories', 'Finance', 'System', 'Marketing', 'Promotion', 'Product'];
//   const statuses = ['All Status', 'Active', 'Scheduled'];
//   const visibilityOptions = ['All Affiliates', 'Iginator & Above','Spark & Above', 'Rise & Above', 'Pioneer & Above', 'Innovator & Above', 'Catalyst & Above', 'Trailbazer & Above', 'Vanguard & Above', 'Luminary & Above', 'Mogul & Above', 'Sovereigh & Above', 'Zenith & Above'  ];

//   // Handle new announcement button click
//   const handleNewAnnouncement = () => {
//     // Generate new ID (ANxxx format)
//     const newId = `AN${(announcements.length + 1).toString().padStart(3, '0')}`;
    
//     setFormData({
//       id: newId,
//       title: '',
//       category: 'Finance', // Default value
//       date: new Date().toISOString().split('T')[0],
//       visibility: 'All Affiliates',
//       status: 'Active',
//       description: ''
//     });
    
//     setCurrentAnnouncement(null);
//     setShowModal(true);
//   };

//   // Handle edit button click
//   const handleEdit = (announcement) => {
//     setFormData({
//       ...announcement,
//       description: announcement.description || '' // In case there's no description
//     });
//     setCurrentAnnouncement(announcement);
//     setShowModal(true);
//   };

//   // Handle delete button click
//   const handleDelete = (id) => {
//     if (window.confirm('Are you sure you want to delete this announcement?')) {
//       setAnnouncements(announcements.filter(item => item.id !== id));
//     }
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = () => {
//     if (currentAnnouncement) {
//       // Update existing announcement
//       setAnnouncements(announcements.map(item => 
//         item.id === formData.id ? formData : item
//       ));
//     } else {
//       // Add new announcement
//       setAnnouncements([...announcements, formData]);
//     }
    
//     setShowModal(false);
//   };

//   // Filter announcements based on search and filters
//   const filteredAnnouncements = announcements.filter(announcement => {
//     // Search term filter
//     const matchesSearch = searchTerm === '' || 
//       announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       announcement.category.toLowerCase().includes(searchTerm.toLowerCase());
    
//     // Category filter
//     const matchesCategory = categoryFilter === 'All Categories' || 
//       announcement.category === categoryFilter;
    
//     // Status filter
//     const matchesStatus = statusFilter === 'All Status' || 
//       announcement.status === statusFilter;
    
//     return matchesSearch && matchesCategory && matchesStatus;
//   });

//   return (
//     <div className="announcement-management">
//       <div className="header">
//         <h1>Announcement Management</h1>
//         <button className="new-button" onClick={handleNewAnnouncement}>
//           {/* <span className="plus-icon">+</span>  */}
//           New Announcement
//         </button>
//       </div>

//       <div className="announcement-container">
//         <h2>All Announcements</h2>
        
//         <div className="filters">
//           <div className="search-box">
//             <input 
//               type="text" 
//               placeholder="Search announcements..." 
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
          
//           <div className="dropdown">
//             <select 
//               value={categoryFilter} 
//               onChange={(e) => setCategoryFilter(e.target.value)}
//             >
//               {categories.map(category => (
//                 <option key={category} value={category}>{category}</option>
//               ))}
//             </select>
//           </div>
          
//           <div className="dropdown">
//             <select 
//               value={statusFilter} 
//               onChange={(e) => setStatusFilter(e.target.value)}
//             >
//               {statuses.map(status => (
//                 <option key={status} value={status}>{status}</option>
//               ))}
//             </select>
//           </div>
//         </div>
        
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Title</th>
//                 <th>Category</th>
//                 <th>Date</th>
//                 <th>Visibility</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredAnnouncements.map(announcement => (
//                 <tr key={announcement.id}>
//                   <td>{announcement.id}</td>
//                   <td>
//                     <div className="title-cell">
//                       <span className="notification-icon">🔔</span>
//                       {announcement.title}
//                     </div>
//                   </td>
//                   <td>{announcement.category}</td>
//                   <td>{announcement.date}</td>
//                   <td>{announcement.visibility}</td>
//                   <td>
//                     <span className={`status-badge ${announcement.status.toLowerCase()}`}>
//                       {announcement.status}
//                     </span>
//                   </td>
//                   <td>
//                     <div className="action-buttons">
//                       <button className="edit-button" onClick={() => handleEdit(announcement)}>
//                         ✏️
//                       </button>
//                       <button className="delete-button" onClick={() => handleDelete(announcement.id)}>
//                         🗑️
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal for Add/Edit Announcement */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <div className="modal-header">
//               <h3>{currentAnnouncement ? 'Edit Announcement' : 'New Announcement'}</h3>
//               <button className="close-button" onClick={() => setShowModal(false)}>×</button>
//             </div>
            
//             <div className="modal-content">
             
              
//               <div className="form-group">
//                 <label>Title</label>
//                 <input 
//                   type="text" 
//                   name="title" 
//                   value={formData.title} 
//                   onChange={handleInputChange} 
//                   placeholder="Enter announcement title" 
//                 />
//               </div>
              
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Category</label>
//                   <select 
//                     name="category" 
//                     value={formData.category} 
//                     onChange={handleInputChange}
//                   >
//                     {categories.filter(cat => cat !== 'All Categories').map(category => (
//                       <option key={category} value={category}>{category}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div className="form-group">
//                   <label>Status</label>
//                   <select 
//                     name="status" 
//                     value={formData.status} 
//                     onChange={handleInputChange}
//                   >
//                     {statuses.filter(stat => stat !== 'All Status').map(status => (
//                       <option key={status} value={status}>{status}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div className="form-group">
//                   <label>Visibility</label>
//                   <select 
//                     name="visibility" 
//                     value={formData.visibility} 
//                     onChange={handleInputChange}
//                   >
//                     {visibilityOptions.map(option => (
//                       <option key={option} value={option}>{option}</option>
//                     ))}
//                   </select>
//                 </div>
                
//               </div>

//               <div className="form-group">
//                   <label>Date</label>
//                   <input 
//                     type="date" 
//                     name="date" 
//                     value={formData.date} 
//                     onChange={handleInputChange} 
//                   />
//                 </div> 
              
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea 
//                   name="description" 
//                   value={formData.description} 
//                   onChange={handleInputChange} 
//                   placeholder="Enter announcement description" 
//                   rows="4"
//                 ></textarea>
//               </div>
//             </div>
            
//             <div className="modal-footer">
//               <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
//               <button className="submit-button" onClick={handleSubmit}>
//                 {currentAnnouncement ? 'Save Changes' : 'Create Announcement'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





// import { useState, useEffect } from 'react';
// import './Announcements.css';

// export default function AnnouncementManagement() {
//   // State for announcements data
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // State for filtered data
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState('All Categories');
//   const [statusFilter, setStatusFilter] = useState('All Status');

//   // State for modal forms
//   const [showModal, setShowModal] = useState(false);
//   const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     category: 'Finance',
//     date: new Date().toISOString().split('T')[0],
//     schdule_date: '',
//     type: 'active',
//     description: '',
//     user: [] // This will be populated from the backend
//   });

//   // Category options
//   const categories = ['All Categories', 'Finance', 'System', 'Marketing', 'Promotion', 'Product'];
//   const statuses = ['All Status', 'active', 'scheduled'];
//   const visibilityOptions = ['All Affiliates', 'Iginator & Above', 'Spark & Above', 'Rise & Above', 'Pioneer & Above', 'Innovator & Above', 'Catalyst & Above', 'Trailbazer & Above', 'Vanguard & Above', 'Luminary & Above', 'Mogul & Above', 'Sovereigh & Above', 'Zenith & Above'];

//   // Fetch token from localStorage
//   const getToken = () => {
//     return localStorage.getItem('token');
//   };

//   // API config with token
//   const getConfig = () => {
//     const token = getToken();
//     return {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     };
//   };

//   // Fetch announcements from API
//   const fetchAnnouncements = async () => {
//     try {
//       setLoading(true);
//       const token = getToken();
      
//       const response = await fetch('https://pronet.ap-1.evennode.com/api/admin/getAllNews', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch announcements');
//       }
      
//       const data = await response.json();
//       setAnnouncements(data.data);
//       setError(null);
//     } catch (err) {
//       setError('Failed to fetch announcements. Please try again later.');
//       console.error('Error fetching announcements:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchAnnouncements();
//   }, []);

//   // Handle new announcement button click
//   const handleNewAnnouncement = () => {
//     setFormData({
//       title: '',
//       category: 'Finance', // Default value
//       date: new Date().toISOString().split('T')[0],
//       schdule_date: '',
//       type: 'active',
//       description: '',
//       user: []
//     });
    
//     setCurrentAnnouncement(null);
//     setShowModal(true);
//   };

//   // Handle edit button click
//   const handleEdit = (announcement) => {
//     // Format the date for the form
//     let formattedDate = new Date().toISOString().split('T')[0];
//     let scheduledDate = '';
    
//     if (announcement.date) {
//       formattedDate = new Date(announcement.date).toISOString().split('T')[0];
//     }
    
//     if (announcement.schdule_date) {
//       scheduledDate = new Date(announcement.schdule_date).toISOString().split('T')[0];
//     }
    
//     setFormData({
//       ...announcement,
//       date: formattedDate,
//       schdule_date: scheduledDate,
//     });
    
//     setCurrentAnnouncement(announcement);
//     setShowModal(true);
//   };

//   // Handle delete button click
//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this announcement?')) {
//       try {
//         const token = getToken();
        
//         const response = await fetch(`https://pronet.ap-1.evennode.com/api/admin/deleteNews/${id}`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         });
        
//         if (!response.ok) {
//           throw new Error('Failed to delete announcement');
//         }
        
//         // Refresh the announcement list
//         fetchAnnouncements();
//       } catch (err) {
//         setError('Failed to delete announcement. Please try again later.');
//         console.error('Error deleting announcement:', err);
//       }
//     }
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     try {
//       const token = getToken();
      
//       // Prepare data for API
//       const payload = {
//         ...formData
//       };
      
//       // Only include schedule_date if type is 'scheduled'
//       if (formData.type !== 'scheduled') {
//         payload.schdule_date = null;
//       }
      
//       let response;
      
//       if (currentAnnouncement) {
//         // Update existing announcement
//         response = await fetch(
//           `https://pronet.ap-1.evennode.com/api/admin/updateNewsNew/${currentAnnouncement._id}`,
//           {
//             method: 'PATCH',
//             headers: {
//               'Authorization': `Bearer ${token}`,
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(payload)
//           }
//         );
//       } else {
//         // Add new announcement
//         response = await fetch(
//           'https://pronet.ap-1.evennode.com/api/admin/createNewsNew',
//           {
//             method: 'POST',
//             headers: {
//               'Authorization': `Bearer ${token}`,
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(payload)
//           }
//         );
//       }
      
//       // if (!response.ok) {
//       //   throw new Error('Failed to save announcement');
//       // }
//       if (response.status !== 200 && !response.ok) {
//   throw new Error('Failed to save announcement');
// }


//       // Refresh the announcement list
//       fetchAnnouncements();
//       setShowModal(false);
//     } catch (err) {
//       setError('Failed to save announcement. Please try again later.');
//       console.error('Error saving announcement:', err);
//     }
//   };

//   // Format date for display
//   // const formatDate = (dateStr) => {
//   //   if (!dateStr) return '-';
//   //   return new Date(dateStr).toLocaleDateString();
//   // };

//   // Format date (safe check)
// const formatDate = (dateStr) => {
//   if (!dateStr || isNaN(new Date(dateStr))) return '-';
//   return new Date(dateStr).toLocaleDateString();
// };

//   // Filter announcements based on search and filters
//   const filteredAnnouncements = Array.isArray(announcements)
//   ? announcements.filter(announcement => {
//       const matchesSearch = searchTerm === '' || 
//         announcement.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         announcement.category?.toLowerCase().includes(searchTerm.toLowerCase());
      
//       const matchesCategory = categoryFilter === 'All Categories' || 
//         announcement.category === categoryFilter;

//       const matchesStatus = statusFilter === 'All Status' || 
//         announcement.type === statusFilter;

//       return matchesSearch && matchesCategory && matchesStatus;
//     })
//   : []; // fallback if announcements is not an array

// console.log('Announcements:', announcements);

//   return (
//     <div className="announcement-management">
//       <div className="header">
//         <h1>Announcement Management</h1>
//         <button className="new-button" onClick={handleNewAnnouncement}>
//           New Announcement
//         </button>
//       </div>

//       <div className="announcement-container">
//         <h2>All Announcements</h2>
        
//         <div className="filters">
//           <div className="search-box">
//             <input 
//               type="text" 
//               placeholder="Search announcements..." 
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
          
//           <div className="dropdown">
//             <select 
//               value={categoryFilter} 
//               onChange={(e) => setCategoryFilter(e.target.value)}
//             >
//               {categories.map(category => (
//                 <option key={category} value={category}>{category}</option>
//               ))}
//             </select>
//           </div>
          
//           <div className="dropdown">
//             <select 
//               value={statusFilter} 
//               onChange={(e) => setStatusFilter(e.target.value)}
//             >
//               {statuses.map(status => (
//                 <option key={status} value={status === 'All Status' ? status : status}>
//                   {status.charAt(0).toUpperCase() + status.slice(1)}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
        
//         {loading ? (
//           <div className="loading">Loading announcements...</div>
//         ) : error ? (
//           <div className="error">{error}</div>
//         ) : (
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Title</th>
//                   <th>Category</th>
//                   <th>Date</th>
//                   <th>Visibility</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredAnnouncements.length === 0 ? (
//                   <tr>
//                     <td colSpan="7" className="no-results">No announcements found</td>
//                   </tr>
//                 ) : (
//                   filteredAnnouncements.map(announcement => (
//                     <tr key={announcement._id}>
//                       <td>{announcement._id.substring(0, 6)}...</td>
//                       <td>
//                         <div className="title-cell">
//                           <span className="notification-icon">🔔</span>
//                           {announcement.title}
//                         </div>
//                       </td>
//                       <td>{announcement.category || '-'}</td>
//                       <td>{formatDate(announcement.type === 'scheduled' ? announcement.schdule_date : announcement.date)}</td>
//                       <td>{announcement.user ? `${announcement.user.length} Users` : 'All Users'}</td>
//                       <td>
//                         <span className={`status-badge ${announcement.type}`}>
//                           {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
//                         </span>
//                       </td>
//                       <td>
//                         <div className="action-buttons">
//                           <button className="edit-button" onClick={() => handleEdit(announcement)}>
//                             ✏️
//                           </button>
//                           <button className="delete-button" onClick={() => handleDelete(announcement._id)}>
//                             🗑️
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* Modal for Add/Edit Announcement */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <div className="modal-header">
//               <h3>{currentAnnouncement ? 'Edit Announcement' : 'New Announcement'}</h3>
//               <button className="close-button" onClick={() => setShowModal(false)}>×</button>
//             </div>
            
//             <div className="modal-content">
//               <div className="form-group">
//                 <label>Title</label>
//                 <input 
//                   type="text" 
//                   name="title" 
//                   value={formData.title} 
//                   onChange={handleInputChange} 
//                   placeholder="Enter announcement title" 
//                 />
//               </div>
              
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Category</label>
//                   <select 
//                     name="category" 
//                     value={formData.category} 
//                     onChange={handleInputChange}
//                   >
//                     {categories.filter(cat => cat !== 'All Categories').map(category => (
//                       <option key={category} value={category}>{category}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div className="form-group">
//                   <label>Status</label>
//                   <select 
//                     name="type" 
//                     value={formData.type} 
//                     onChange={handleInputChange}
//                   >
//                     {statuses.filter(stat => stat !== 'All Status').map(status => (
//                       <option key={status} value={status}>
//                         {status.charAt(0).toUpperCase() + status.slice(1)}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div className="form-group">
//                   <label>Visibility</label>
//                   <select 
//                     name="visibility" 
//                     value={formData.visibility || 'All Affiliates'} 
//                     onChange={handleInputChange}
//                   >
//                     {visibilityOptions.map(option => (
//                       <option key={option} value={option}>{option}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {formData.type === 'scheduled' && (
//                 <div className="form-group">
//                   <label>Scheduled Date</label>
//                   <input 
//                     type="date" 
//                     name="schdule_date" 
//                     value={formData.schdule_date} 
//                     onChange={handleInputChange} 
//                   />
//                 </div>
//               )}
              
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea 
//                   name="description" 
//                   value={formData.description} 
//                   onChange={handleInputChange} 
//                   placeholder="Enter announcement description" 
//                   rows="4"
//                 ></textarea>
//               </div>
//             </div>
            
//             <div className="modal-footer">
//               <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
//               <button className="submit-button" onClick={handleSubmit}>
//                 {currentAnnouncement ? 'Save Changes' : 'Create Announcement'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }










// // // useEffect(()=>{
// //     const fetchNews = async () =>{
// //       try {
// //         const token = localStorage.getItem('token');
// //         console.log(token)
        
// //         const res = await axios.get('https://pronet.ap-1.evennode.com/api/admin/getAllNews',
// //           {
// //             headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //           }
// //         );
// //         console.log(res.data.data)
// //         const data = res.data.data;
// //         setAnnouncements(data)
// //       } catch (error) {
        
// //       }
// //     }
// //   // })

// //   useEffect(()=>{
// //     fetchNews()
// //   })

















// import { useState, useEffect } from 'react';
// import './Announcements.css';

// export default function AnnouncementManagement() {
//   // State for announcements data
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // State for filtered data
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState('All Categories');
//   const [statusFilter, setStatusFilter] = useState('All Status');

//   // State for modal forms
//   const [showModal, setShowModal] = useState(false);
//   const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     category: 'Finance',
//     date: new Date().toISOString().split('T')[0],
//     schdule_date: '',
//     type: 'active',
//     description: '',
//     user: [] // This will be populated from the backend
//   });

//   // Category options
//   const categories = ['All Categories', 'Finance', 'System', 'Marketing', 'Promotion', 'Product'];
//   const statuses = ['All Status', 'active', 'scheduled'];
//   const visibilityOptions = ['All Affiliates', 'Iginator & Above', 'Spark & Above', 'Rise & Above', 'Pioneer & Above', 'Innovator & Above', 'Catalyst & Above', 'Trailbazer & Above', 'Vanguard & Above', 'Luminary & Above', 'Mogul & Above', 'Sovereigh & Above', 'Zenith & Above'];

//   // Fetch token from localStorage
//   const getToken = () => {
//     return localStorage.getItem('token');
//   };

//   // API config with token
//   const getConfig = () => {
//     const token = getToken();
//     return {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     };
//   };

//   // Fetch announcements from API
//   const fetchAnnouncements = async () => {
//     try {
//       setLoading(true);
//       const token = getToken();
      
//       const response = await fetch('https://pronet.ap-1.evennode.com/api/admin/getAllNews', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch announcements');
//       }
      
//       const data = await response.json();
//       setAnnouncements(data.data);
//       setError(null);
//     } catch (err) {
//       setError('Failed to fetch announcements. Please try again later.');
//       console.error('Error fetching announcements:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchAnnouncements();
//   }, []);

//   // Handle new announcement button click
//   const handleNewAnnouncement = () => {
//     setFormData({
//       title: '',
//       category: 'Finance', // Default value
//       date: new Date().toISOString().split('T')[0],
//       schdule_date: '',
//       type: 'active',
//       description: '',
//       user: []
//     });
    
//     setCurrentAnnouncement(null);
//     setShowModal(true);
//   };

//   // Handle edit button click
//   const handleEdit = (announcement) => {
//     // Format the date for the form
//     let formattedDate = new Date().toISOString().split('T')[0];
//     let scheduledDate = '';
    
//     if (announcement.date) {
//       formattedDate = new Date(announcement.date).toISOString().split('T')[0];
//     }
    
//     if (announcement.schdule_date) {
//       scheduledDate = new Date(announcement.schdule_date).toISOString().split('T')[0];
//     }
    
//     setFormData({
//       ...announcement,
//       date: formattedDate,
//       schdule_date: scheduledDate,
//     });
    
//     setCurrentAnnouncement(announcement);
//     setShowModal(true);
//   };

//   // Handle delete button click
//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this announcement?')) {
//       try {
//         const token = getToken();
        
//         const response = await fetch(`https://pronet.ap-1.evennode.com/api/admin/deleteNews/${id}`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         });
        
//         if (!response.ok) {
//           throw new Error('Failed to delete announcement');
//         }
        
//         // Refresh the announcement list
//         fetchAnnouncements();
//       } catch (err) {
//         setError('Failed to delete announcement. Please try again later.');
//         console.error('Error deleting announcement:', err);
//       }
//     }
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     try {
//       const token = getToken();
      
//       // Prepare data for API
//       const payload = {
//         ...formData
//       };
      
//       // Handle schedule_date based on type
//       if (formData.type === 'scheduled') {
//         // Make sure schdule_date is provided when type is scheduled
//         if (!formData.schdule_date) {
//           alert('Please select a scheduled date');
//           return;
//         }
//       } else {
//         // If type is not scheduled, set schdule_date to empty string rather than null
//         payload.schdule_date = '';
//       }
      
//       let response;
      
//       if (currentAnnouncement) {
//         // Update existing announcement
//         response = await fetch(
//           `https://pronet.ap-1.evennode.com/api/admin/updateNewsNew/${currentAnnouncement._id}`,
//           {
//             method: 'PATCH',
//             headers: {
//               'Authorization': `Bearer ${token}`,
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(payload)
//           }
//         );
//       } else {
//         // Add new announcement
//         response = await fetch(
//           'https://pronet.ap-1.evennode.com/api/admin/createNewsNew',
//           {
//             method: 'POST',
//             headers: {
//               'Authorization': `Bearer ${token}`,
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(payload)
//           }
//         );
//       }
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to save announcement');
//       }

//       // Refresh the announcement list
//       fetchAnnouncements();
//       setShowModal(false);
//     } catch (err) {
//       setError('Failed to save announcement. Please try again later.');
//       console.error('Error saving announcement:', err);
//     }
//   };

//   // Format date (safe check)
//   const formatDate = (dateStr) => {
//     if (!dateStr || isNaN(new Date(dateStr))) return '-';
//     return new Date(dateStr).toLocaleDateString();
//   };

//   // Filter announcements based on search and filters
//   const filteredAnnouncements = Array.isArray(announcements)
//   ? announcements.filter(announcement => {
//       const matchesSearch = searchTerm === '' || 
//         announcement.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         announcement.category?.toLowerCase().includes(searchTerm.toLowerCase());
      
//       const matchesCategory = categoryFilter === 'All Categories' || 
//         announcement.category === categoryFilter;

//       const matchesStatus = statusFilter === 'All Status' || 
//         announcement.type === statusFilter;

//       return matchesSearch && matchesCategory && matchesStatus;
//     })
//   : []; // fallback if announcements is not an array

//   return (
//     <div className="announcement-management">
//       <div className="header">
//         <h1>Announcement Management</h1>
//         <button className="new-button" onClick={handleNewAnnouncement}>
//           New Announcement
//         </button>
//       </div>

//       <div className="announcement-container">
//         <h2>All Announcements</h2>
        
//         <div className="filters">
//           <div className="search-box">
//             <input 
//               type="text" 
//               placeholder="Search announcements..." 
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
          
//           <div className="dropdown">
//             <select 
//               value={categoryFilter} 
//               onChange={(e) => setCategoryFilter(e.target.value)}
//             >
//               {categories.map(category => (
//                 <option key={category} value={category}>{category}</option>
//               ))}
//             </select>
//           </div>
          
//           <div className="dropdown">
//             <select 
//               value={statusFilter} 
//               onChange={(e) => setStatusFilter(e.target.value)}
//             >
//               {statuses.map(status => (
//                 <option key={status} value={status === 'All Status' ? status : status}>
//                   {status.charAt(0).toUpperCase() + status.slice(1)}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
        
//         {loading ? (
//           <div className="loading">Loading announcements...</div>
//         ) : error ? (
//           <div className="error">{error}</div>
//         ) : (
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Title</th>
//                   <th>Category</th>
//                   <th>Date</th>
//                   <th>Visibility</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredAnnouncements.length === 0 ? (
//                   <tr>
//                     <td colSpan="7" className="no-results">No announcements found</td>
//                   </tr>
//                 ) : (
//                   filteredAnnouncements.map(announcement => (
//                     <tr key={announcement._id}>
//                       <td>{announcement._id.substring(0, 6)}...</td>
//                       <td>
//                         <div className="title-cell">
//                           <span className="notification-icon">🔔</span>
//                           {announcement.title}
//                         </div>
//                       </td>
//                       <td>{announcement.category || '-'}</td>
//                       <td>{formatDate(announcement.type === 'scheduled' ? announcement.schdule_date : announcement.date)}</td>
//                       <td>{announcement.user ? `${announcement.user.length} Users` : 'All Users'}</td>
//                       <td>
//                         <span className={`status-badge ${announcement.type}`}>
//                           {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
//                         </span>
//                       </td>
//                       <td>
//                         <div className="action-buttons">
//                           <button className="edit-button" onClick={() => handleEdit(announcement)}>
//                             ✏️
//                           </button>
//                           <button className="delete-button" onClick={() => handleDelete(announcement._id)}>
//                             🗑️
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* Modal for Add/Edit Announcement */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <div className="modal-header">
//               <h3>{currentAnnouncement ? 'Edit Announcement' : 'New Announcement'}</h3>
//               <button className="close-button" onClick={() => setShowModal(false)}>×</button>
//             </div>
            
//             <div className="modal-content">
//               <div className="form-group">
//                 <label>Title</label>
//                 <input 
//                   type="text" 
//                   name="title" 
//                   value={formData.title} 
//                   onChange={handleInputChange} 
//                   placeholder="Enter announcement title" 
//                   required
//                 />
//               </div>
              
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Category</label>
//                   <select 
//                     name="category" 
//                     value={formData.category} 
//                     onChange={handleInputChange}
//                   >
//                     {categories.filter(cat => cat !== 'All Categories').map(category => (
//                       <option key={category} value={category}>{category}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div className="form-group">
//                   <label>Status</label>
//                   <select 
//                     name="type" 
//                     value={formData.type} 
//                     onChange={handleInputChange}
//                   >
//                     {statuses.filter(stat => stat !== 'All Status').map(status => (
//                       <option key={status} value={status}>
//                         {status.charAt(0).toUpperCase() + status.slice(1)}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div className="form-group">
//                   <label>Visibility</label>
//                   <select 
//                     name="visibility" 
//                     value={formData.visibility || 'All Affiliates'} 
//                     onChange={handleInputChange}
//                   >
//                     {visibilityOptions.map(option => (
//                       <option key={option} value={option}>{option}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {formData.type === 'scheduled' && (
//                 <div className="form-group">
//                   <label>Scheduled Date</label>
//                   <input 
//                     type="date" 
//                     name="schdule_date" 
//                     value={formData.schdule_date || ''} 
//                     onChange={handleInputChange} 
//                     required={formData.type === 'scheduled'}
//                     min={new Date().toISOString().split('T')[0]}
//                   />
//                 </div>
//               )}
              
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea 
//                   name="description" 
//                   value={formData.description || ''} 
//                   onChange={handleInputChange} 
//                   placeholder="Enter announcement description" 
//                   rows="4"
//                   required
//                 ></textarea>
//               </div>
//             </div>
            
//             <div className="modal-footer">
//               <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
//               <button className="submit-button" onClick={handleSubmit}>
//                 {currentAnnouncement ? 'Save Changes' : 'Create Announcement'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





import { useState, useEffect } from 'react';
import './Announcements.css';

export default function AnnouncementManagement() {
  // State for announcements data
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for filtered data
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [statusFilter, setStatusFilter] = useState('All Status');

  // State for modal forms
  const [showModal, setShowModal] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Finance',
    date: new Date().toISOString().split('T')[0],
    schdule_date: '',
    type: 'active',
    description: '',
    user: [] // This will be populated from the backend
  });

  // Category options
  const categories = ['All Categories', 'Finance', 'System', 'Marketing', 'Promotion', 'Product'];
  const statuses = ['All Status', 'active', 'scheduled'];
  const visibilityOptions = ['All Affiliates', 'Iginator & Above', 'Spark & Above', 'Rise & Above', 'Pioneer & Above', 'Innovator & Above', 'Catalyst & Above', 'Trailbazer & Above', 'Vanguard & Above', 'Luminary & Above', 'Mogul & Above', 'Sovereigh & Above', 'Zenith & Above'];

  // Fetch token from localStorage
  const getToken = () => {
    return localStorage.getItem('token');
  };

  // API config with token
  const getConfig = () => {
    const token = getToken();
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  };

  // Fetch announcements from API
  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const token = getToken();
      
      const response = await fetch('https://pronet.ap-1.evennode.com/api/admin/getAllNews', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch announcements');
      }
      
      const data = await response.json();
      setAnnouncements(data.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch announcements. Please try again later.');
      console.error('Error fetching announcements:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  // Handle new announcement button click
  const handleNewAnnouncement = () => {
    setFormData({
      title: '',
      category: 'Finance', // Default value
      date: new Date().toISOString().split('T')[0],
      schdule_date: '',
      type: 'active',
      description: '',
      user: []
    });
    
    setCurrentAnnouncement(null);
    setShowModal(true);
  };

  // Handle edit button click
  const handleEdit = (announcement) => {
    // Format the date for the form
    let formattedDate = new Date().toISOString().split('T')[0];
    let scheduledDate = '';
    
    if (announcement.date) {
      formattedDate = new Date(announcement.date).toISOString().split('T')[0];
    }
    
    if (announcement.schdule_date) {
      scheduledDate = new Date(announcement.schdule_date).toISOString().split('T')[0];
    }
    
    setFormData({
      ...announcement,
      date: formattedDate,
      schdule_date: scheduledDate,
    });
    
    setCurrentAnnouncement(announcement);
    setShowModal(true);
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      try {
        const token = getToken();
        
        const response = await fetch(`https://pronet.ap-1.evennode.com/api/admin/deleteNews/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete announcement');
        }
        
        // Refresh the announcement list
        fetchAnnouncements();
      } catch (err) {
        setError('Failed to delete announcement. Please try again later.');
        console.error('Error deleting announcement:', err);
      }
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const token = getToken();
      
      // Prepare data for API
      const payload = {
        title: formData.title,
        category: formData.category,
        date: formData.date,
        type: formData.type,
        description: formData.description,
        // Set targetType to 'all' by default, which means all users
        targetType: 'all',
        // Initialize empty array for users (required by API)
        user: []
      };
      
      // Handle schedule_date based on type
      if (formData.type === 'scheduled') {
        // Make sure schdule_date is provided when type is scheduled
        if (!formData.schdule_date) {
          alert('Please select a scheduled date');
          return;
        }
        payload.schdule_date = formData.schdule_date;
      } else {
        // If type is not scheduled, we don't include schdule_date in the payload
        // This avoids API validation errors
      }
      
      // Handle visibility settings
      if (formData.visibility && formData.visibility !== 'All Affiliates') {
        // If specific visibility is selected, set targetType to 'rank'
        payload.targetType = 'rank';
        // Extract rank from visibility option (you may need to adjust this based on API requirements)
        const rank = formData.visibility.split(' & ')[0].toLowerCase();
        payload.rank = rank;
      }
      
      console.log('Sending payload:', payload);
      
      let response;
      
      if (currentAnnouncement) {
        // Update existing announcement
        response = await fetch(
          `https://pronet.ap-1.evennode.com/api/admin/updateNewsNew/${currentAnnouncement._id}`,
          {
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }
        );
      } else {
        // Add new announcement
        response = await fetch(
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
      }
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to save announcement');
      }

      // Refresh the announcement list
      fetchAnnouncements();
      setShowModal(false);
    } catch (err) {
      setError('Failed to save announcement: ' + err.message);
      console.error('Error saving announcement:', err);
    }
  };

  // Format date (safe check)
  const formatDate = (dateStr) => {
    if (!dateStr || isNaN(new Date(dateStr))) return '-';
    return new Date(dateStr).toLocaleDateString();
  };

  // Filter announcements based on search and filters
  const filteredAnnouncements = Array.isArray(announcements)
  ? announcements.filter(announcement => {
      const matchesSearch = searchTerm === '' || 
        announcement.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        announcement.category?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = categoryFilter === 'All Categories' || 
        announcement.category === categoryFilter;

      const matchesStatus = statusFilter === 'All Status' || 
        announcement.type === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    })
  : []; // fallback if announcements is not an array

  return (
    <div className="announcement-management">
      <div className="header">
        <h1>Announcement Management</h1>
        <button className="new-button" onClick={handleNewAnnouncement}>
          New Announcement
        </button>
      </div>

      <div className="announcement-container">
        <h2>All Announcements</h2>
        
        <div className="filters">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search announcements..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="dropdown">
            <select 
              value={categoryFilter} 
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="dropdown">
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statuses.map(status => (
                <option key={status} value={status === 'All Status' ? status : status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {loading ? (
          <div className="loading">Loading announcements...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Category</th>
                  {/* <th>Date</th> */}
                  {/* <th>Visibility</th> */}
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAnnouncements.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="no-results">No announcements found</td>
                  </tr>
                ) : (
                  filteredAnnouncements.map(announcement => (
                    <tr key={announcement._id}>
                      <td>{announcement._id.substring(0, 6)}...</td>
                      <td>
                        <div className="title-cell">
                          <span className="notification-icon">🔔</span>
                          {announcement.title}
                        </div>
                      </td>
                      <td>{announcement.category || '-'}</td>
                      {/* <td>{formatDate(announcement.type === 'scheduled' ? announcement.schdule_date : announcement.date)}</td> */}
                      {/* <td>{announcement.user ? `${announcement.user.length} Users` : 'All Users'}</td> */}
                      <td>
                        <span className={`status-badge ${announcement.type}`}>
                          {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="edit-button" onClick={() => handleEdit(announcement)}>
                            ✏️
                          </button>
                          <button className="delete-button" onClick={() => handleDelete(announcement._id)}>
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal for Add/Edit Announcement */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>{currentAnnouncement ? 'Edit Announcement' : 'New Announcement'}</h3>
              <button className="close-button" onClick={() => setShowModal(false)}>×</button>
            </div>
            
            <div className="modal-content">
              <div className="form-group">
                <label>Title</label>
                <input 
                  type="text" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleInputChange} 
                  placeholder="Enter announcement title" 
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Category</label>
                  <select 
                    name="category" 
                    value={formData.category} 
                    onChange={handleInputChange}
                  >
                    {categories.filter(cat => cat !== 'All Categories').map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Status</label>
                  <select 
                    name="type" 
                    value={formData.type} 
                    onChange={handleInputChange}
                  >
                    {statuses.filter(stat => stat !== 'All Status').map(status => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>


                {/* visibility */}
{/*                 
                <div className="form-group">
                  <label>Visibility</label>
                  <select 
                    name="visibility" 
                    value={formData.visibility || 'All Affiliates'} 
                    onChange={handleInputChange}
                  >
                    {visibilityOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div> */}
              </div>

              {formData.type === 'scheduled' && (
                <div className="form-group">
                  <label>Scheduled Date</label>
                  <input 
                    type="date" 
                    name="schdule_date" 
                    value={formData.schdule_date || ''} 
                    onChange={handleInputChange} 
                    required={formData.type === 'scheduled'}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              )}
              
              <div className="form-group">
                <label>Description</label>
                <textarea 
                  name="description" 
                  value={formData.description || ''} 
                  onChange={handleInputChange} 
                  placeholder="Enter announcement description" 
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="submit-button" onClick={handleSubmit}>
                {currentAnnouncement ? 'Save Changes' : 'Create Announcement'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}





// import { useState, useEffect } from 'react';
// import './Announcements.css';

// export default function AnnouncementManagement() {
//   // State for announcements data
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // State for filtered data
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState('All Categories');
//   const [statusFilter, setStatusFilter] = useState('All Status');

//   // State for modal forms
//   const [showModal, setShowModal] = useState(false);
//   const [currentAnnouncement, setCurrentAnnouncement] = useState(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     category: 'Finance',
//     date: new Date().toISOString().split('T')[0],
//     schdule_date: '',
//     type: 'active',
//     description: '',
//     user: [] // This will be populated from the backend
//   });

//   // Category options
//   const categories = ['All Categories', 'Finance', 'System', 'Marketing', 'Promotion', 'Product'];
//   const statuses = ['All Status', 'active', 'scheduled'];
//   const visibilityOptions = ['All Affiliates', 'Iginator & Above', 'Spark & Above', 'Rise & Above', 'Pioneer & Above', 'Innovator & Above', 'Catalyst & Above', 'Trailbazer & Above', 'Vanguard & Above', 'Luminary & Above', 'Mogul & Above', 'Sovereigh & Above', 'Zenith & Above'];

//   // Fetch token from localStorage
//   const getToken = () => {
//     return localStorage.getItem('token');
//   };

//   // API config with token
//   const getConfig = () => {
//     const token = getToken();
//     return {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     };
//   };

//   // Fetch announcements from API
//   const fetchAnnouncements = async () => {
//     try {
//       setLoading(true);
//       const token = getToken();
      
//       const response = await fetch('https://pronet.ap-1.evennode.com/api/admin/getAllNews', {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch announcements');
//       }
      
//       const data = await response.json();
//       setAnnouncements(data.data);
//       setError(null);
//     } catch (err) {
//       setError('Failed to fetch announcements. Please try again later.');
//       console.error('Error fetching announcements:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchAnnouncements();
//   }, []);

//   // Handle new announcement button click
//   const handleNewAnnouncement = () => {
//     setFormData({
//       title: '',
//       category: 'Finance', // Default value
//       date: new Date().toISOString().split('T')[0],
//       schdule_date: '',
//       type: 'active',
//       description: '',
//       visibility: 'All Affiliates', // Add default visibility
//       user: []
//     });
    
//     setCurrentAnnouncement(null);
//     setShowModal(true);
//   };

//   // Handle edit button click
//   const handleEdit = (announcement) => {
//     // Format the date for the form
//     let formattedDate = new Date().toISOString().split('T')[0];
//     let scheduledDate = '';
    
//     if (announcement.date) {
//       try {
//         formattedDate = new Date(announcement.date).toISOString().split('T')[0];
//       } catch (e) {
//         console.error('Invalid date format:', announcement.date);
//       }
//     }
    
//     if (announcement.schdule_date) {
//       try {
//         scheduledDate = new Date(announcement.schdule_date).toISOString().split('T')[0];
//       } catch (e) {
//         console.error('Invalid scheduled date format:', announcement.schdule_date);
//       }
//     }
    
//     // Create a clean formData object with only the necessary properties
//     const cleanedFormData = {
//       title: announcement.title || '',
//       category: announcement.category || 'Finance',
//       date: formattedDate,
//       schdule_date: scheduledDate,
//       type: announcement.type || 'active',
//       description: announcement.description || '',
//       // Determine visibility based on targetType and rank
//       visibility: announcement.targetType === 'rank' && announcement.rank 
//         ? `${announcement.rank.charAt(0).toUpperCase() + announcement.rank.slice(1)} & Above` 
//         : 'All Affiliates',
//       user: announcement.user || []
//     };
    
//     setFormData(cleanedFormData);
//     setCurrentAnnouncement(announcement);
//     setShowModal(true);
//   };

//   // Handle delete button click
//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this announcement?')) {
//       try {
//         const token = getToken();
        
//         const response = await fetch(`https://pronet.ap-1.evennode.com/api/admin/deleteNews/${id}`, {
//           method: 'DELETE',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         });
        
//         if (!response.ok) {
//           throw new Error('Failed to delete announcement');
//         }
        
//         // Refresh the announcement list
//         fetchAnnouncements();
//       } catch (err) {
//         setError('Failed to delete announcement. Please try again later.');
//         console.error('Error deleting announcement:', err);
//       }
//     }
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     try {
//       const token = getToken();
      
//       // Basic validation
//       if (!formData.title || !formData.description) {
//         alert('Title and description are required');
//         return;
//       }
      
//       if (formData.type === 'scheduled' && !formData.schdule_date) {
//         alert('Please select a scheduled date');
//         return;
//       }
      
//       // Prepare data for API - only include necessary fields
//       const payload = {
//         title: formData.title,
//         category: formData.category,
//         description: formData.description,
//         type: formData.type
//       };
      
//       // Add date only if it exists
//       if (formData.date) {
//         payload.date = formData.date;
//       }
      
//       // Add scheduled date only for scheduled type
//       if (formData.type === 'scheduled' && formData.schdule_date) {
//         payload.schdule_date = formData.schdule_date;
//       }
      
//       // Handle visibility based on selected option
//       if (formData.visibility && formData.visibility !== 'All Affiliates') {
//         payload.targetType = 'rank';
//         const rank = formData.visibility.split(' & ')[0].toLowerCase();
//         payload.rank = rank;
//       } else {
//         payload.targetType = 'all';
//       }
      
//       // Always include user array
//       payload.user = formData.user || [];
      
//       console.log('Sending payload:', payload);
      
//       let response;
      
//       if (currentAnnouncement) {
//         // Update existing announcement
//         const updateEndpoint = `https://pronet.ap-1.evennode.com/api/admin/updateNewsNew/${currentAnnouncement._id}`;
//         console.log('Sending update to:', updateEndpoint);
        
//         response = await fetch(updateEndpoint, {
//           method: 'PATCH',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(payload)
//         });
//       } else {
//         // Add new announcement
//         response = await fetch(
//           'https://pronet.ap-1.evennode.com/api/admin/createNewsNew',
//           {
//             method: 'POST',
//             headers: {
//               'Authorization': `Bearer ${token}`,
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(payload)
//           }
//         );
//       }
      
//       // Check for server errors
//       if (response.status === 500) {
//         throw new Error('Server error. The API is having issues processing your request.');
//       }
      
//       if (!response.ok) {
//         let errorMessage = 'Failed to save announcement';
//         try {
//           const errorData = await response.json();
//           errorMessage = errorData.message || errorMessage;
//         } catch (e) {
//           // If parsing JSON fails, use status text
//           errorMessage = response.statusText || errorMessage;
//         }
//         throw new Error(errorMessage);
//       }

//       // Success! Refresh the announcement list
//       fetchAnnouncements();
//       setShowModal(false);
//       setError(null); // Clear any previous errors
//     } catch (err) {
//       setError('Failed to save announcement: ' + err.message);
//       console.error('Error saving announcement:', err);
//       // Keep the modal open so user can try again
//     }
//   };

//   // Format date (safe check)
//   const formatDate = (dateStr) => {
//     if (!dateStr || isNaN(new Date(dateStr))) return '-';
//     return new Date(dateStr).toLocaleDateString();
//   };

//   // Filter announcements based on search and filters
//   const filteredAnnouncements = Array.isArray(announcements)
//   ? announcements.filter(announcement => {
//       const matchesSearch = searchTerm === '' || 
//         announcement.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         announcement.category?.toLowerCase().includes(searchTerm.toLowerCase());
      
//       const matchesCategory = categoryFilter === 'All Categories' || 
//         announcement.category === categoryFilter;

//       const matchesStatus = statusFilter === 'All Status' || 
//         announcement.type === statusFilter;

//       return matchesSearch && matchesCategory && matchesStatus;
//     })
//   : []; // fallback if announcements is not an array

//   return (
//     <div className="announcement-management">
//       <div className="header">
//         <h1>Announcement Management</h1>
//         <button className="new-button" onClick={handleNewAnnouncement}>
//           New Announcement
//         </button>
//       </div>

//       <div className="announcement-container">
//         <h2>All Announcements</h2>
        
//         <div className="filters">
//           <div className="search-box">
//             <input 
//               type="text" 
//               placeholder="Search announcements..." 
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
          
//           <div className="dropdown">
//             <select 
//               value={categoryFilter} 
//               onChange={(e) => setCategoryFilter(e.target.value)}
//             >
//               {categories.map(category => (
//                 <option key={category} value={category}>{category}</option>
//               ))}
//             </select>
//           </div>
          
//           <div className="dropdown">
//             <select 
//               value={statusFilter} 
//               onChange={(e) => setStatusFilter(e.target.value)}
//             >
//               {statuses.map(status => (
//                 <option key={status} value={status === 'All Status' ? status : status}>
//                   {status.charAt(0).toUpperCase() + status.slice(1)}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
        
//         {loading ? (
//           <div className="loading">Loading announcements...</div>
//         ) : error ? (
//           <div className="error">{error}</div>
//         ) : (
//           <div className="table-container">
//             <table>
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Title</th>
//                   <th>Category</th>
//                   <th>Date</th>
//                   <th>Visibility</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredAnnouncements.length === 0 ? (
//                   <tr>
//                     <td colSpan="7" className="no-results">No announcements found</td>
//                   </tr>
//                 ) : (
//                   filteredAnnouncements.map(announcement => (
//                     <tr key={announcement._id}>
//                       <td>{announcement._id.substring(0, 6)}...</td>
//                       <td>
//                         <div className="title-cell">
//                           <span className="notification-icon">🔔</span>
//                           {announcement.title}
//                         </div>
//                       </td>
//                       <td>{announcement.category || '-'}</td>
//                       <td>{formatDate(announcement.type === 'scheduled' ? announcement.schdule_date : announcement.date)}</td>
//                       <td>{announcement.user ? `${announcement.user.length} Users` : 'All Users'}</td>
//                       <td>
//                         <span className={`status-badge ${announcement.type}`}>
//                           {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
//                         </span>
//                       </td>
//                       <td>
//                         <div className="action-buttons">
//                           <button className="edit-button" onClick={() => handleEdit(announcement)}>
//                             ✏️
//                           </button>
//                           <button className="delete-button" onClick={() => handleDelete(announcement._id)}>
//                             🗑️
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* Modal for Add/Edit Announcement */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <div className="modal-header">
//               <h3>{currentAnnouncement ? 'Edit Announcement' : 'New Announcement'}</h3>
//               <button className="close-button" onClick={() => setShowModal(false)}>×</button>
//             </div>
            
//             <div className="modal-content">
//               <div className="form-group">
//                 <label>Title</label>
//                 <input 
//                   type="text" 
//                   name="title" 
//                   value={formData.title} 
//                   onChange={handleInputChange} 
//                   placeholder="Enter announcement title" 
//                   required
//                 />
//               </div>
              
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Category</label>
//                   <select 
//                     name="category" 
//                     value={formData.category} 
//                     onChange={handleInputChange}
//                   >
//                     {categories.filter(cat => cat !== 'All Categories').map(category => (
//                       <option key={category} value={category}>{category}</option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div className="form-group">
//                   <label>Status</label>
//                   <select 
//                     name="type" 
//                     value={formData.type} 
//                     onChange={handleInputChange}
//                   >
//                     {statuses.filter(stat => stat !== 'All Status').map(status => (
//                       <option key={status} value={status}>
//                         {status.charAt(0).toUpperCase() + status.slice(1)}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div className="form-group">
//                   <label>Visibility</label>
//                   <select 
//                     name="visibility" 
//                     value={formData.visibility || 'All Affiliates'} 
//                     onChange={handleInputChange}
//                   >
//                     {visibilityOptions.map(option => (
//                       <option key={option} value={option}>{option}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {formData.type === 'scheduled' && (
//                 <div className="form-group">
//                   <label>Scheduled Date</label>
//                   <input 
//                     type="date" 
//                     name="schdule_date" 
//                     value={formData.schdule_date || ''} 
//                     onChange={handleInputChange} 
//                     required={formData.type === 'scheduled'}
//                     min={new Date().toISOString().split('T')[0]}
//                   />
//                 </div>
//               )}
              
//               <div className="form-group">
//                 <label>Description</label>
//                 <textarea 
//                   name="description" 
//                   value={formData.description || ''} 
//                   onChange={handleInputChange} 
//                   placeholder="Enter announcement description" 
//                   rows="4"
//                   required
//                 ></textarea>
//               </div>
//             </div>
            
//             <div className="modal-footer">
//               <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
//               <button className="submit-button" onClick={handleSubmit}>
//                 {currentAnnouncement ? 'Save Changes' : 'Create Announcement'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }