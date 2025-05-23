// import { useState } from 'react';

// export default function SecurityTab() {
//   const [passwordData, setPasswordData] = useState({
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: ''
//   });

//   const handlePasswordChange = (e) => {
//     const { name, value } = e.target;
//     setPasswordData(prev => ({ ...prev, [name]: value }));
//   };
  
//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     if (passwordData.newPassword !== passwordData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     alert('Password changed successfully!');
//     setPasswordData({
//       currentPassword: '',
//       newPassword: '',
//       confirmPassword: ''
//     });
//   };

//   return (
//     <div>
//       <div className="panel-header">
//         <h2>Change Password</h2>
//         <p>Update your password</p>
//       </div>
      
//       <form onSubmit={handlePasswordSubmit}>
//         <div className="form-group">
//           <label>Current Password</label>
//           <input
//             type="password"
//             name="currentPassword"
//             value={passwordData.currentPassword}
//             onChange={handlePasswordChange}
//             className="form-input"
//           />
//         </div>
        
//         <div className="form-group">
//           <label>New Password</label>
//           <input
//             type="password"
//             name="newPassword"
//             value={passwordData.newPassword}
//             onChange={handlePasswordChange}
//             className="form-input"
//           />
//           <p className="form-help">Minimum 8 characters with at least one number</p>
//         </div>
        
//         <div className="form-group">
//           <label>Confirm New Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={passwordData.confirmPassword}
//             onChange={handlePasswordChange}
//             className="form-input"
//           />
//         </div>
        
//         <div className="form-actions">
//           <button type="submit" className="button-primary">
//             Update Password
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }





import axios from 'axios';
import { useState } from 'react';

export default function SecurityTab() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const id = localStorage.getItem('adminId');
      const token = localStorage.getItem('token');
      console.log("ID:", id);
      console.log("Token:", token);

      const res = await axios.patch(
        `https://pronet.ap-1.evennode.com/api/admin/editAdminPassword/${id}`,
        {
          oldPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Password Changed Successfully!');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });

    } catch (error) {
      console.error('Password Change Error:', error);
      alert(error.response?.data?.message || 'Failed to change password');
    }
  };

  return (
    <div>
      <div className="panel-header">
        <h2>Change Password</h2>
        <p>Update your password</p>
      </div>

      <form onSubmit={handlePasswordSubmit}>
        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
            className="form-input"
          />
          <p className="form-help">Minimum 8 characters with at least one number</p>
        </div>

        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handlePasswordChange}
            className="form-input"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="button-primary">
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
}
