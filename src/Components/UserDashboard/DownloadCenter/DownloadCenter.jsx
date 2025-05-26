
// import { useState } from "react";
// import './DownloadCenter.css'
// import { AiOutlineDownload, } from 'react-icons/ai'
// import { BsPencilSquare } from 'react-icons/bs'
// import { RiDeleteBin5Line } from 'react-icons/ri'

// const initialResources = [
//   {
//     id: "DOC001",
//     title: "Affiliate Marketing Guide",
//     category: "Marketing",
//     type: "PDF",
//     size: "2.4 MB",
//     accessLevel: "All Affiliates",
//     downloads: 145,
//     file: null
//   },
//   {
//     id: "DOC002",
//     title: "Commission Structure Document",
//     category: "Finance",
//     type: "PDF",
//     size: "1.2 MB",
//     accessLevel: "Platinum Only",
//     downloads: 203,
//     file: null
//   }
 
// ];

// const categories = ["Marketing", "Finance", "Product", "Legal"];
// const accessLevels = ["All Affiliates", "Platinum Only", "Gold & Above", "Premium Members", "Silver & Above"];

// export default function DownloadCenter() {
//   const [resources, setResources] = useState(initialResources);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [selectedResource, setSelectedResource] = useState(null);
//   const [formData, setFormData] = useState({
//     id: "",
//     title: "",
//     category: "Marketing",
//     type: "",
//     size: "",
//     accessLevel: "All Affiliates",
//     downloads: 0,
//     description: "",
//     file: null
//   });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categoryFilter, setCategoryFilter] = useState("All Categories");

//   const totalDownloads = resources.reduce((sum, resource) => sum + resource.downloads, 0);
//   const totalCategories = [...new Set(resources.map(r => r.category))].length;


//   // Filter resources based on search and category
//   const filteredResources = resources.filter(resource => {
//     const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       resource.id.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = categoryFilter === "All Categories" || resource.category === categoryFilter;
//     return matchesSearch && matchesCategory;
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleFileSelect = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       // Determine file type
//       const fileType = file.name.split('.').pop().toUpperCase();

//       // Calculate file size in MB
//       const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(1) + " MB";

//       setFormData({
//         ...formData,
//         file: file,
//         type: fileType,
//         size: fileSizeInMB
//       });
//     }
//   };

//   const openAddModal = () => {
//     setFormData({
//       id: `DOC${String(resources.length + 1).padStart(3, '0')}`,
//       title: "",
//       category: "Marketing",
//       type: "",
//       size: "",
//       accessLevel: "All Affiliates",
//       downloads: 0,
//       description: "",
//       file: null
//     });
//     setShowAddModal(true);
//   };

//   const openEditModal = (resource) => {
//     setSelectedResource(resource);
//     setFormData({
//       ...resource,
//       description: resource.description || ""
//     });
//     setShowEditModal(true);
//   };

//   const openDeleteModal = (resource) => {
//     setSelectedResource(resource);
//     setShowDeleteModal(true);
//   };

//   const handleAddResource = () => {
//     if (!formData.file) {
//       alert("Please select a file");
//       return;
//     }

//     const newResource = { ...formData };
//     setResources([...resources, newResource]);
//     setShowAddModal(false);
//   };

//   const handleEditResource = () => {
//     const updatedResources = resources.map(resource =>
//       resource.id === selectedResource.id ? { ...formData } : resource
//     );
//     setResources(updatedResources);
//     setShowEditModal(false);
//   };

//   const handleDeleteResource = () => {
//     const updatedResources = resources.filter(resource =>
//       resource.id !== selectedResource.id
//     );
//     setResources(updatedResources);
//     setShowDeleteModal(false);
//   };

//   const handleDownload = (resource) => {
//     // In a real app, this would trigger an actual download
//     // Here we'll just increment the download count
//     const updatedResources = resources.map(r =>
//       r.id === resource.id ? { ...r, downloads: r.downloads + 1 } : r
//     );
//     setResources(updatedResources);
//     alert(`Downloading ${resource.title}`);
//   };

//   return (
//     <div className="download-center-container">
//       <div className="download-center-header">
//         <h1 className="download-center-title">Download Center Management</h1>
//         <button className="download-center-button" onClick={openAddModal}>
//           {/* <span className="download-center-button-icon">+</span> */}
//           Add New Resource
//         </button>
//       </div>

//       <div className="download-stats-grid">
//         <div className="download-stats-card">
//           <div className="download-stats-label">Total Resources</div>
//           <h2 className="download-stats-count">{resources.length}</h2>
//           <p className="download-stats-text">Available for download</p>
//         </div>

//         <div className="download-stats-card">
//           <div className="download-stats-label">Total Downloads</div>
//           <h2 className="download-stats-count">{totalDownloads}</h2>
//           <p className="download-stats-text">All resources combined</p>
//         </div>

//         <div className="download-stats-card">
//           <div className="download-stats-label">Resource Categories</div>
//           <h2 className="download-stats-count">{totalDownloads}</h2>
//           <p className="download-stats-text">Different categories</p>
//         </div>
//       </div>
//       {/* Filter */}
//       <div className="download-filter-container">
//         <h2 className="download-filter-title">Download Resources</h2>

//         <div className="download-filter-controls">
//           <div className="download-filter-search">
//             <span className="download-filter-icon">
//               <svg className="download-filter-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </span>
//             <input
//               type="text"
//               placeholder="Search resources..."
//               className="download-filter-input"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           <div className="download-filter-dropdown">
//             <select
//               className="download-filter-select"
//               value={categoryFilter}
//               onChange={(e) => setCategoryFilter(e.target.value)}
//             >
//               <option>All Categories</option>
//               {categories.map(category => (
//                 <option key={category}>{category}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Table */}
//         <div className="download-overflow-x-auto">
//           <table className="download-resource-table">
//             <thead>
//               <tr className="download-table-header">
//                 <th>ID</th>
//                 <th>Title</th>
//                 <th>Category</th>
//                 <th>Type</th>
//                 <th>Size</th>
//                 <th>Access Level</th>
//                 <th>Downloads</th>
//                 <th className="text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredResources.map((resource) => (
//                 <tr key={resource.id} className="download-table-row">
//                   <td>{resource.id}</td>
//                   <td className="download-resource-title">
//                     {/* {resource.type === "PDF" && <span className="icon pdf" />} */}
//                     {/* {resource.type === "ZIP" && <span className="icon zip" />} */}
//                     {/* {resource.type === "PPTX" && <span className="icon pptx" />} */}
//                     {resource.title}
//                   </td>
//                   <td>{resource.category}</td>
//                   <td>{resource.type}</td>
//                   <td>{resource.size}</td>
//                   <td>{resource.accessLevel}</td>
//                   <td>{resource.downloads}</td>
//                   <td className="download-text-right">

//                     <button className="download-action-btn download" onClick={() => handleDownload(resource)} ><AiOutlineDownload /></button>
                     
//                     <button className="download-action-btn edit" onClick={() => openEditModal(resource)} ><BsPencilSquare/></button>
//                     <button className="download-action-btn delete" onClick={() => openDeleteModal(resource)} ><RiDeleteBin5Line className="download-delete-icon"/></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

// {/* !Modal Overlay  */}
//       {showAddModal && (
//         <div className="downloadecenter-modal-overlay">
//           <div className="downloadecenter-modal-content">
//             <div className="downloadecenter-modal-header">
//               <h2>Add New Resource</h2>
//               <button
//                 className="downloadecenter-close-btn"
//                 onClick={() => setShowAddModal(false)}
//               >
//                 <svg className="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             <div className="downloadecenter-modal-body">
//               <div className="downloadecenter-input-group">
//                 <div>
//                   <label>ID</label>
//                   <input
//                     type="text"
//                     name="id"
//                     value={formData.id}
//                     readOnly
//                   />
//                 </div>
//                 <div>
//                   <label>Title</label>
//                   <input
//                     type="text"
//                     name="title"
//                     value={formData.title}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div>
//                   <label>Category</label>
//                   <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleInputChange}
//                   >
//                     {categories.map(category => (
//                       <option key={category}>{category}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div>
//                   <label>Access Level</label>
//                   <select
//                     name="accessLevel"
//                     value={formData.accessLevel}
//                     onChange={handleInputChange}
//                   >
//                     {accessLevels.map(level => (
//                       <option key={level}>{level}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div className="downloadecenter-input-grou downloadecenter-file-upload">
//                 <label>File</label>
//                 <div className="downloadecenter-file-selector">
//                   <label className="downloadecenter-file-btn">
//                     Select File
//                     <input
//                       type="file"
//                       className="downloadecenter-file-input"
//                       onChange={handleFileSelect}
//                     />
//                   </label>
//                   <span className="downloadecenter-file-name">
//                     {formData.file ? formData.file.name : "No file selected"}
//                   </span>
//                 </div>
//                 {formData.file && (
//                   <div className="downloadecenter-file-info">
//                     File type: {formData.type} | Size: {formData.size}
//                   </div>
//                 )}
//               </div>

//               <div className="downloadecenter-modal-footer">
//                 <button
//                   type="button"
//                   className="downloadecenter-cancel-btn"
//                   onClick={() => setShowAddModal(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   className="downloadecenter-add-btn"
//                   onClick={handleAddResource}
//                 >
//                   Add Resource
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}


// {/* Edit  */}
//       {showEditModal && (
//         <div className="downloadedit-modal-overlay">
//           <div className="downloadedit-modal-container">
//             <div className="downloadedit-modal-header">
//               <h2>Edit Resource</h2>
//               <button onClick={() => setShowEditModal(false)} className="downloadedit-close-btn">
//                 <svg className="downloadedit-close-icon" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             <div className="downloadedit-modal-content">
//               <div className="downloadedit-form-grid">
//                 <div className="downloadedit-form-group">
//                   <label>ID</label>
//                   <input type="text" name="id" value={formData.id} readOnly />
//                 </div>
//                 <div className="downloadedit-form-group">
//                   <label>Title</label>
//                   <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
//                 </div>
//                 <div className="downloadedit-form-group">
//                   <label>Categodownloadedit-ry</label>
//                   <select name="category" value={formData.category} onChange={handleInputChange}>
//                     {categories.map(category => <option key={category}>{category}</option>)}
//                   </select>
//                 </div>
//                 <div className="downloadedit-form-group">
//                   <label>Access Level</label>
//                   <select name="accessLevel" value={formData.accessLevel} onChange={handleInputChange}>
//                     {accessLevels.map(level => <option key={level}>{level}</option>)}
//                   </select>
//                 </div>
//                 <div className="downloadedit-form-group">
//                   <label>Type</label>
//                   <input type="text" name="type" value={formData.type} readOnly />
//                 </div>
               
//               </div>

//               <div className="downloadedit-form-group">
//                 <label>Description</label>
//                 <textarea name="description" rows="3" value={formData.description} onChange={handleInputChange}></textarea>
//               </div>

//               <div className="downloadedit-form-group">
//                 <label>Replace File</label>
//                 <div className="downloadedit-file-input">
//                   <label className="downloadedit-file-label">
//                     Select File
//                     <input type="file" className="downloadedit-file-input-hidden" onChange={handleFileSelect} />
//                   </label>
//                   <span className="downloadedit-file-info">{formData.file ? formData.file.name : "Current file will be kept"}</span>
//                 </div>
//               </div>

//               <div className="downloadedit-modal-actions">
//                 <button onClick={() => setShowEditModal(false)} className="downloadedit-cancel-btn">Cancel</button>
//                 <button onClick={handleEditResource} className="downloadedit-update-btn">Update Resource</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}


// {/* downloaddelete- */}
//       {showDeleteModal && (
//         <div className="downloaddelete-modal-overlay">
//           <div className="downloaddelete-modal-container">
//             <h2 className="downloaddelete-modal-title">Confirm Deletion</h2>
//             <p className="downloaddelete-modal-message">
//               Are you sure you want to delete <strong>{selectedResource?.title}</strong>? This action cannot be undone.
//             </p>

//             <div className="downloaddelete-modal-actions">
//               <button onClick={() => setShowDeleteModal(false)} className="downloaddelete-cancel-btn">Cancel</button>
//               <button onClick={handleDeleteResource} className="downloaddelete-delete-btn">Delete</button>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }








import { useState } from "react";
import './DownloadCenter.css'
import StatsGrid from './StatsGrid.jsx';
import FilterControls from './FilterControls.jsx';
import ResourceTable from './ResourceTable.jsx';
import AddResourceModal from './AddResourceModal';
import EditResourceModal from './EditResourceModal.jsx';
import DeleteResourceModal from './DeleteResourceModal.jsx';

const initialResources = [
  {
    id: "DOC001",
    title: "Affiliate Marketing Guide",
    category: "Marketing",
    type: "PDF",
    size: "2.4 MB",
    accessLevel: "All Affiliates",
    downloads: 145,
    file: null
  },
  {
    id: "DOC002",
    title: "Commission Structure Document",
    category: "Finance",
    type: "PDF",
    size: "1.2 MB",
    accessLevel: "Platinum Only",
    downloads: 203,
    file: null
  }
];

const categories = ["ppt", "Flyers", "Agreement", "Video", 'PDF'];
const accessLevels = ["All Affiliates", "Platinum Only", "Gold & Above", "Premium Members", "Silver & Above"];

export default function DownloadCenter() {
  const [resources, setResources] = useState(initialResources);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "Marketing",
    type: "",
    size: "",
    accessLevel: "All Affiliates",
    downloads: 0,
    description: "",
    file: null
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  const totalDownloads = resources.reduce((sum, resource) => sum + resource.downloads, 0);
  const totalCategories = [...new Set(resources.map(r => r.category))].length;

  // Filter resources based on search and category
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "All Categories" || resource.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const openAddModal = () => {
    setFormData({
      id: `DOC${String(resources.length + 1).padStart(3, '0')}`,
      title: "",
      category: "Marketing",
      type: "",
      size: "",
      accessLevel: "All Affiliates",
      downloads: 0,
      description: "",
      file: null
    });
    setShowAddModal(true);
  };

  const openEditModal = (resource) => {
    setSelectedResource(resource);
    setFormData({
      ...resource,
      description: resource.description || ""
    });
    setShowEditModal(true);
  };

  const openDeleteModal = (resource) => {
    setSelectedResource(resource);
    setShowDeleteModal(true);
  };

  const handleAddResource = (newResource) => {
    setResources([...resources, newResource]);
    setShowAddModal(false);
  };

  const handleEditResource = (updatedResource) => {
    const updatedResources = resources.map(resource =>
      resource.id === selectedResource.id ? updatedResource : resource
    );
    setResources(updatedResources);
    setShowEditModal(false);
  };

  const handleDeleteResource = () => {
    const updatedResources = resources.filter(resource =>
      resource.id !== selectedResource.id
    );
    setResources(updatedResources);
    setShowDeleteModal(false);
  };

  const handleDownload = (resource) => {
    const updatedResources = resources.map(r =>
      r.id === resource.id ? { ...r, downloads: r.downloads + 1 } : r
    );
    setResources(updatedResources);
    alert(`Downloading ${resource.title}`);
  };

  return (
    <div className="download-center-container">
      <div className="download-center-header">
        <h1 className="download-center-title">Download Center Management</h1>
        <button className="download-center-button" onClick={openAddModal}>
          Add New Resource
        </button>
      </div>

      <StatsGrid 
        totalResources={resources.length}
        totalDownloads={totalDownloads}
        totalCategories={totalCategories}
      />

      <div className="download-filter-container">
        <h2 className="download-filter-title">Download Resources</h2>

        <FilterControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          categories={categories}
        />

        <ResourceTable
          resources={filteredResources}
          onDownload={handleDownload}
          onEdit={openEditModal}
          onDelete={openDeleteModal}
        />
      </div>

      {showAddModal && (
        <AddResourceModal
          formData={formData}
          setFormData={setFormData}
          categories={categories}
          accessLevels={accessLevels}
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddResource}
        />
      )}

      {showEditModal && (
        <EditResourceModal
          formData={formData}
          setFormData={setFormData}
          categories={categories}
          accessLevels={accessLevels}
          onClose={() => setShowEditModal(false)}
          onUpdate={handleEditResource}
        />
      )}

      {showDeleteModal && (
        <DeleteResourceModal
          resource={selectedResource}
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDeleteResource}
        />
      )}
    </div>
  );
}
