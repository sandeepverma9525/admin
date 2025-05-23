// import React, { useState } from 'react';
// import './Permissions.css';
// import { Shield, Users, Briefcase, Headphones } from 'lucide-react'; // ✅ Updated

// const Permissions = () => {
//   const [permissions, setPermissions] = useState({
//     'View Dashboard': {
//       description: 'Access to view the admin dashboard',
//       superAdmin: true,
//       admin: true,
//       manager: true,
//       support: true
//     },
//     'Manage Affiliates': {
//       description: 'Create, edit, and delete affiliates',
//       superAdmin: true,
//       admin: true,
//       manager: true,
//       support: false
//     },
//     'Approve KYC': {
//       description: 'Verify and approve KYC documents',
//       superAdmin: true,
//       admin: true,
//       manager: true,
//       support: false
//     },
//     'Manage Withdrawals': {
//       description: 'Process withdrawal requests',
//       superAdmin: true,
//       admin: true,
//       manager: false,
//       support: false
//     },
//     'Manage EPins': {
//       description: 'Create and manage EPins',
//       superAdmin: true,
//       admin: true,
//       manager: true,
//       support: false
//     },
//     'Manage Announcements': {
//       description: 'Create and publish announcements',
//       superAdmin: true,
//       admin: true,
//       manager: true,
//       support: false
//     },
//     'Manage Support': {
//       description: 'Handle support tickets',
//       superAdmin: true,
//       admin: true,
//       manager: false,
//       support: true
//     },
//     'View Reports': {
//       description: 'Access to financial and system reports',
//       superAdmin: true,
//       admin: true,
//       manager: true,
//       support: false
//     },
//     'Manage Settings': {
//       description: 'Change system settings',
//       superAdmin: true,
//       admin: false,
//       manager: false,
//       support: false
//     },
//     'Manage Roles': {
//       description: 'Create and manage user roles',
//       superAdmin: true,
//       admin: false,
//       manager: false,
//       support: false
//     }
//   });

//   const togglePermission = (permission, role) => {
//     setPermissions({
//       ...permissions,
//       [permission]: {
//         ...permissions[permission],
//         [role]: !permissions[permission][role]
//       }
//     });
//   };

//   const resetToDefaults = () => {
//     setPermissions({
//       'View Dashboard': {
//         description: 'Access to view the admin dashboard',
//         superAdmin: true,
//         admin: true,
//         manager: true,
//         support: true
//       },
//       'Manage Affiliates': {
//         description: 'Create, edit, and delete affiliates',
//         superAdmin: true,
//         admin: true,
//         manager: true,
//         support: false
//       },
//       'Approve KYC': {
//         description: 'Verify and approve KYC documents',
//         superAdmin: true,
//         admin: true,
//         manager: true,
//         support: false
//       },
//       'Manage Withdrawals': {
//         description: 'Process withdrawal requests',
//         superAdmin: true,
//         admin: true,
//         manager: false,
//         support: false
//       },
//       'Manage EPins': {
//         description: 'Create and manage EPins',
//         superAdmin: true,
//         admin: true,
//         manager: true,
//         support: false
//       },
//       'Manage Announcements': {
//         description: 'Create and publish announcements',
//         superAdmin: true,
//         admin: true,
//         manager: true,
//         support: false
//       },
//       'Manage Support': {
//         description: 'Handle support tickets',
//         superAdmin: true,
//         admin: true,
//         manager: false,
//         support: true
//       },
//       'View Reports': {
//         description: 'Access to financial and system reports',
//         superAdmin: true,
//         admin: true,
//         manager: true,
//         support: false
//       },
//       'Manage Settings': {
//         description: 'Change system settings',
//         superAdmin: true,
//         admin: false,
//         manager: false,
//         support: false
//       },
//       'Manage Roles': {
//         description: 'Create and manage user roles',
//         superAdmin: true,
//         admin: false,
//         manager: false,
//         support: false
//       }
//     });
//   };

//   const saveChanges = () => {
//     alert('Changes saved successfully!');
//   };

//   return (
//     <div className="role-permissions-container">
//       <div className="role-permissions-header">
//         <h1>Role Permissions</h1>
//         <div className="button-group">
//           <button className="reset-button" onClick={resetToDefaults}>Reset to Defaults</button>
//           <button className="save-button" onClick={saveChanges}>Save Changes</button>
//         </div>
//       </div>

//       <div className="role-permissions-content">
//         <div className="sidebar">
//           <div className="sidebar-header">
//             <Shield className="icon" />
//             <h2>Permission Management</h2>
//           </div>
//           <p className="sidebar-description">
//             Customize which permissions are granted to different admin roles in your system. Changes will affect all users with the corresponding role.
//           </p>

//           <div className="role-list">
//             <div className="role-item">
//               <Shield className="role-icon super-admin" />
//               <span className="role-name">Super Admin</span>
//               <span className="role-badge all">All permissions</span>
//             </div>

//             <div className="role-item">
//               <Users className="role-icon admin" />
//               <span className="role-name">Admin</span>
//               <span className="role-badge most">Most permissions</span>
//             </div>

//             <div className="role-item">
//               <Briefcase className="role-icon manager" />
//               <span className="role-name">Manager</span>
//               <span className="role-badge limited">Limited permissions</span>
//             </div>

//             <div className="role-item">
//               <Headphones className="role-icon support" /> {/* ✅ Updated here */}
//               <span className="role-name">Support</span>
//               <span className="role-badge support">Support permissions</span>
//             </div>
//           </div>
//         </div>

//         <div className="permissions-table">
//           <div className="table-header">
//             <div className="permission-column">Permission</div>
//             <div className="role-column">Super Admin</div>
//             <div className="role-column">Admin</div>
//             <div className="role-column">Manager</div>
//             <div className="role-column">Support</div>
//           </div>

//           {Object.keys(permissions).map((permName) => (
//             <div className="table-row" key={permName}>
//               <div className="permission-column">
//                 <div className="permission-name">{permName}</div>
//                 <div className="permission-description">{permissions[permName].description}</div>
//               </div>
//               {['superAdmin', 'admin', 'manager', 'support'].map((role) => (
//                 <div className="role-column" key={role}>
//                   <label className="toggle">
//                     <input 
//                       type="checkbox" 
//                       checked={permissions[permName][role]} 
//                       onChange={() => togglePermission(permName, role)}
//                     />
//                     <span className="toggle-slider"></span>
//                   </label>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Permissions;



// !POPBUTTON  For Affiliate Details Affiliates Components

import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import AffiliateModal from '../Affiliates/AffiliatePopup'; // Import the modal
import axios from 'axios';
import Swal from 'sweetalert2';

const Permissions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);




  // const fetchApi = async ()=>{
  //   const res = await fetch('https://pronet.ap-1.evennode.com/api/user/getAllUser')
  //   let finalData = await res.json()
  //   console.log("finalData", finalData)
  // }
  // fetchApi()



//   const handleRegister = async (userData) => {
//   try {
//     const res = await axios.get(
//       "https://pronet.ap-1.evennode.com/api/user/getAllUser",
//       userData,
//       { headers: { "Content-Type": "application/json" } }
//     );
//     console.log(res)

//     Swal.fire({
//       icon: 'success',
//       title: 'Registration Successful!',
//       confirmButtonColor: '#4FD298',
//     }).then(() => {
//       navigate('/login');
//     });

//   } catch (err) {
//     const message = err.response?.data?.message;

//     if (message?.includes("email")) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Email Exists',
//         text: 'This email is already registered',
//       });
//     } else if (message?.includes("phone")) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Phone Exists',
//         text: 'This phone number is already registered',
//       });
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Registration Failed',
//         text: message || 'Something went wrong!',
//       });
//     }
//   }
// };

// handleRegister()

  



  // Example affiliate data to pass into the modal
  const affiliateData = {
    id: 'AFF123',
    name: 'Sandeep Verma',
    email: 'sandeep@example.com',
    status: 'Active',
    level: 'Gold',
    joinDate: '2024-01-15',
    teamSize: 20,
    earnings: 12000.5,
    pendingAmount: 1500.75
  };

  const handleViewClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="action-btn" onClick={handleViewClick}>
        <Eye size={18} />
      </button>

      <AffiliateModal
        affiliate={affiliateData}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Permissions;
