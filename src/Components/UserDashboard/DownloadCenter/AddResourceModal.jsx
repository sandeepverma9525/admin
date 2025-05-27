// export default function AddResourceModal({ 
//   formData, 
//   setFormData, 
//   categories, 
//   accessLevels, 
//   onClose, 
//   onAdd 
// }) {
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
//       const fileType = file.name.split('.').pop().toUpperCase();
//       const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(1) + " MB";

//       setFormData({
//         ...formData,
//         file: file,
//         type: fileType,
//         size: fileSizeInMB
//       });
//     }
//   };

//   const handleSubmit = () => {
//     if (!formData.file) {
//       alert("Please select a file");
//       return;
//     }
//     onAdd({ ...formData });
//   };

//   return (
//     <div className="downloadecenter-modal-overlay">
//       <div className="downloadecenter-modal-content">
//         <div className="downloadecenter-modal-header">
//           <h2>Add New Resource</h2>
//           <button className="downloadecenter-close-btn" onClick={onClose}>
//             <svg className="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <div className="downloadecenter-modal-body">
//           <div className="downloadecenter-input-group">
            
//             <div>
//               <label>Category</label>
//               <select name="category" 
//               >
//                   <option>Select</option> 
//                   <option>PPT</option> 
//                   <option>Flyers </option> 
//                   <option>Video </option> 
//                 {/* ))} */}
//               </select>
//             </div>
//             <div>
//               <label>Access Level</label>
//               <select name="accessLevel" value='all' onChange={handleInputChange}>
//                 {accessLevels.map(level => (
//                   <option key={level}>{level}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="downloadecenter-input-grou downloadecenter-file-upload">
//             <label>File</label>
//             <div className="downloadecenter-file-selector">
//               <label className="downloadecenter-file-btn">
//                 Select File
//                 <input
//                   type="file"
//                   className="downloadecenter-file-input"
//                   onChange={handleFileSelect}
//                 />
//               </label>
//               <span className="downloadecenter-file-name">
//                 {formData.file ? formData.file.name : "No file selected"}
//               </span>
//             </div>
//             {formData.file && (
//               <div className="downloadecenter-file-info">
//                 File type: {formData.type} | Size: {formData.size}
//               </div>
//             )}
//           </div>

//           <div className="downloadecenter-modal-footer">
//             <button type="button" className="downloadecenter-cancel-btn" onClick={onClose}>
//               Cancel
//             </button>
//             <button type="button" className="downloadecenter-add-btn" onClick={handleSubmit}>
//               Add Resource
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// import React, { useState } from "react";
// import axios from "axios";

// const UploadModal = ({ onClose }) => {
//   const accessLevels = ["all", "admin", "user"];
//   const [formData, setFormData] = useState({
//     category: "",
//     accessLevel: "all",
//     file: null,
//     type: "",
//     size: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFileSelect = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({
//         ...formData,
//         file,
//         type: file.type,
//         size: (file.size / 1024).toFixed(2) + " KB",
//       });
//     }
//   };

//   const handleSubmit = async () => {
//     if (!formData.category || !formData.file) {
//       alert("Please select category and file.");
//       return;
//     }

//     const token = localStorage.getItem("token");
//     const form = new FormData();
//     form.append("category", formData.category);
//     form.append("accessLevel", formData.accessLevel);
//     form.append("file", formData.file);

//     try {
//       const res = await axios.post(
//         "https://pronet.ap-1.evennode.com/api/user/addFilesNew",
//         form,
//         {
//           headers: {
//             // "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Upload success:", res.data);
//       alert(res.data.message);
//       onClose();
//     } catch (err) {
//       console.error("Upload error:", err);
//       alert("Something went wrong while uploading.");
//     }
//   };

//   return (
//     <div className="downloadecenter-modal-overlay">
//       <div className="downloadecenter-modal-content">
//         <div className="downloadecenter-modal-header">
//           <h2>Add New Resource</h2>
//           <button className="downloadecenter-close-btn" onClick={onClose}>
//             <svg className="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <div className="downloadecenter-modal-body">
//           <div className="downloadecenter-input-group">
//             <div>
//               <label>Category</label>
//               <select name="category" value={formData.category} onChange={handleInputChange}>
//                 <option value="">Select</option>
//                 <option value="ppt">PPT</option>
//                 <option value="flyers">Flyers</option>
//                 <option value="video">Video</option>
//               </select>
//             </div>

//             <div>
//               <label>Access Level</label>
//               <select name="accessLevel" value={formData.accessLevel} onChange={handleInputChange}>
//                 {accessLevels.map((level) => (
//                   <option key={level} value={level}>
//                     {level}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="downloadecenter-input-grou downloadecenter-file-upload">
//             <label>File</label>
//             <div className="downloadecenter-file-selector">
//               <label className="downloadecenter-file-btn">
//                 Select File
//                 <input type="file" className="downloadecenter-file-input" onChange={handleFileSelect} />
//               </label>
//               <span className="downloadecenter-file-name">
//                 {formData.file ? formData.file.name : "No file selected"}
//               </span>
//             </div>
//             {formData.file && (
//               <div className="downloadecenter-file-info">
//                 File type: {formData.type} | Size: {formData.size}
//               </div>
//             )}
//           </div>

//           <div className="downloadecenter-modal-footer">
//             <button type="button" className="downloadecenter-cancel-btn" onClick={onClose}>
//               Cancel
//             </button>
//             <button type="button" className="downloadecenter-add-btn" onClick={handleSubmit}>
//               Add Resource
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploadModal;








import React, { useState } from "react";
import axios from "axios";

const UploadModal = ({ onClose }) => {
  const accessLevels = ["all", "admin", "user"];
  const [formData, setFormData] = useState({
    category: "",
    accessLevel: "all",
    file: null,
    type: "",
    size: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        file,
        type: file.type,
        size: (file.size / 1024).toFixed(2) + " KB",
      });
    }
  };

  // const handleSubmit = async () => {
  //   if (!formData.category || !formData.file) {
  //     alert("Please select category and file.");
  //     return;
  //   }

  //   const token = localStorage.getItem("token");
  //   const form = new FormData();
  //   form.append("category", formData.category);
  //   form.append("accessLevel", formData.accessLevel);
  //   form.append("file", formData.file);

  //   try {
  //     const res = await axios.post(
  //       "https://pronet.ap-1.evennode.com/api/user/addFilesNew",
  //       form,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
            
  //         },
  //       }
  //     );

  //     console.log(res.data)
  //     if (res.data.success) {
  //       alert(res.data.message);
  //       onClose();
  //     } else {
  //       alert("Upload failed: " + res.data.message);
  //     }
  //     console.log("Upload response:", res.data);
  //   } catch (err) {
  //     console.error("Upload error:", err);
  //     alert("Something went wrong while uploading.");
  //   }
  // };


  const handleSubmit = async () => {
  const { category, accessLevel, file } = formData;

  if (!category || !file) {
    alert("Please select category and file.");
    return;
  }

  const form = new FormData();

  // ✅ Add file under dynamic key (ppt/flyers/video)
  form.append(category, file);

  // ✅ Add fixed field
  form.append("targetType", "all");

  const token = localStorage.getItem("token");

  try {
    const res = await axios.patch(
      "https://pronet.ap-1.evennode.com/api/user/addFilesNew",
      form,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.success) {
      alert(res.data.message);
      onClose();
    } else {
      alert("Upload failed: " + res.data.message);
    }
  } catch (err) {
    console.error("Upload error:", err);
    alert("Something went wrong while uploading.");
  }
};



  return (
    <div className="downloadecenter-modal-overlay">
      <div className="downloadecenter-modal-content">
        <div className="downloadecenter-modal-header">
          <h2>Add New Resource</h2>
          <button className="downloadecenter-close-btn" onClick={onClose}>
            <svg
              className="close-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={20}
              height={20}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="downloadecenter-modal-body">
          <div className="downloadecenter-input-group">
            <div>
              <label>Category</label>
              <select name="category" value={formData.category} onChange={handleInputChange}>
                <option value="">Select</option>
                <option value="ppt">PPT</option>
                <option value="flyers">Flyers</option>
                <option value="video">Video</option>
              </select>
            </div>

            <div>
              <label>Access Level</label>
              <select name="accessLevel" value={formData.accessLevel} onChange={handleInputChange}>
                {accessLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="downloadecenter-input-grou downloadecenter-file-upload">
            <label>File</label>
            <div className="downloadecenter-file-selector">
              <label className="downloadecenter-file-btn" style={{ cursor: "pointer" }}>
                Select File
                <input
                  type="file"
                  className="downloadecenter-file-input"
                  onChange={handleFileSelect}
                  style={{ display: "none" }}
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
};

export default UploadModal;
