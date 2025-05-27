// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { AiOutlineDownload } from 'react-icons/ai';
// import { BsPencilSquare } from 'react-icons/bs';
// import { RiDeleteBin5Line } from 'react-icons/ri';

// // export default function ResourceTable({ resources, onDownload, onEdit, onDelete }) {
//   // const [resources, setResources] = useState([]);
//   export default function ResourceTable({ resources: initialResources, onDownload, onEdit, onDelete }) {
//     // const [resources, setResources] = useState(initialResources);
//     const [loading, setLoading] = useState(true);
//     const [users, setUsers] = useState([]);

//  useEffect(() => {
//   const token = localStorage.getItem("token");

//   axios
//     .get("https://pronet.ap-1.evennode.com/api/user/getAllUser", {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//     .then((res) => {
//       if (res.data.Status) {
//         setUsers(res.data.data);
//         console.log(res.data.data); // ✅ inside .then now
//       }
//     })
//     .catch((err) => console.error(err))
//     .finally(() => setLoading(false));
// }, []);


//   // Ek helper function to flatten files from users
//   const getFilesData = () => {
//     // Sab users ke files ko ek array me la rahe hain
//     let allFiles = [];
//     users.forEach((user) => {
//       if (user.files && user.files.length > 0) {
//         user.files.forEach((fileObj) => {
//           // fileObj me multiple types hote hain, unko iterate karenge
//           Object.entries(fileObj).forEach(([key, value]) => {
//             if (key !== "_id" && Array.isArray(value) && value.length > 0) {
//               // For each file name, push an object with details
//               value.forEach((fileName) => {
//                 allFiles.push({
//                   id: fileObj._id,
//                   category: key, // ebook, ppt, flyers, video, guidelines etc
//                   type: fileName,
//                   accessLevel: user.user_status || "N/A",
//                   userName: user.name,
//                 });
//               });
//             }
//           });
//         });
//       }
//     });
//     return allFiles;
//   };

//   const filesData = getFilesData();

//   if (loading) return <div>Loading...</div>;




//   return (
//     <div className="download-overflow-x-auto">
//       <table className="download-resource-table">
//         <thead>
//           <tr className="download-table-header">
//             <th>ID</th>
//             <th>Category</th>
//             <th>Type</th>
//             <th>Access Level</th>
//             <th className="text-right">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filesData.length === 0 && (
//             <tr>
//               <td colSpan="6" style={{ textAlign: "center" }}>
//                 No files found
//               </td>
//             </tr>
//           )}
//           {filesData.map((file,index) => (
//             <tr key={file.id} className="download-table-row">
//               <td>{file.id}</td>
//               <td>{file.category}</td>
//               <td>{file.type}</td>
//               <td>{file.accessLevel}</td>
//               <td className="download-text-right">
//                 <button
//                   className="download-action-btn download"
//                   onClick={() => onDownload(file)}
//                 >
//                   <AiOutlineDownload />
//                 </button>
//                 <button
//                   className="download-action-btn edit"
//                   onClick={() => onEdit(file)}
//                 >
//                   <BsPencilSquare />
//                 </button>
//                 <button
//                   className="download-action-btn delete"
//                   onClick={() => onDelete(file)}
//                 >
//                   <RiDeleteBin5Line className="download-delete-icon" />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }







import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineDownload } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function ResourceTable({ onDownload, onEdit, onDelete }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://pronet.ap-1.evennode.com/api/user/getAllUser", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.Status) {
          setUsers(res.data.data);
          console.log(res.data.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Flatten files from all users


  // Helper function to extract extension
const getFileExtension = (fileName) => {
  const parts = fileName.split('.');
  return parts.length > 1 ? parts[parts.length - 1] : fileName;
};

// Flatten files from all users
const getFilesData = () => {
  const allFiles = [];
  users.forEach((user) => {
    if (user.files && user.files.length > 0) {
      user.files.forEach((fileObj) => {
        Object.entries(fileObj).forEach(([key, value]) => {
          if (key !== "_id" && Array.isArray(value) && value.length > 0) {
            value.forEach((fileName) => {
              allFiles.push({
                id: fileObj._id,
                category: key,
                type: getFileExtension(fileName), 
                userName: user.name,
                
              });
            });
          }
        });
      });
    }
  });
  return allFiles;
};

  const filesData = getFilesData();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="download-overflow-x-auto">
      <table className="download-resource-table">
        <thead>
          <tr className="download-table-header">
            <th>Name</th>
            <th>ID</th>
            <th>Category</th>
            <th>Type</th>
            {/* <th>Access Level</th> */}
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filesData.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No files found
              </td>
            </tr>
          ) : (
            filesData.map((file, index) => (
              <tr key={`${file.id}-${index}`} className="download-table-row">
                <td>{file.userName}</td>
                <td>{file.id}</td>
                <td>
                  {file.category.charAt(0).toUpperCase() + file.category.slice(1)}
                </td>
                <td>{file.type}</td>
                {/* <td>{file.accessLevel}</td> */}
                <td className="download-text-right">
                  <button
                    className="download-action-btn download"
                    onClick={() => onDownload?.(file)}
                  >
                    <AiOutlineDownload />
                  </button>
                  <button
                    className="download-action-btn edit"
                    onClick={() => onEdit?.(file)}
                  >
                    <BsPencilSquare />
                  </button>
                  {/* <button
                    className="download-action-btn delete"
                    onClick={() => onDelete?.(file)}
                  >
                    <RiDeleteBin5Line className="download-delete-icon" />
                  </button> */}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
