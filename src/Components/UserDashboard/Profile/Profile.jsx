


import { useEffect, useState } from 'react';
import './ProfileSettings.css';
import axios from 'axios';


export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState('general');
  
  // !Admin Details 
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    phone: "",
    // address: "",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    
    console.log("Form Submitted:", profileData);
  };

  useEffect(() => {
    const fetchProfile = async () => {

      try {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('adminId');
        // console.log(token)
        // console.log(id)

        const res = await axios.get(
          `https://pronet.ap-1.evennode.com/api/admin/getAdmin/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(res)
        // console.log("ID:", id);
        // console.log("Token:", token);

        // const user = res.data?.admin;
        const user = res.data.data.data;
        setProfileData({
          fullName: user.name,
      email: user.email,
      phone: user.phone_no
          // address: user?.user_address || "",
        });
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);


  // Password
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  

  const agreements = [
    { id: 1, name: 'Terms of Service', date: '2025-01-15', status: 'Accepted' },
    { id: 2, name: 'Privacy Policy', date: '2025-01-15', status: 'Accepted' },
    { id: 3, name: 'Data Processing Agreement', date: '2025-02-20', status: 'Pending' }
  ];

  // const handleProfileChange = (e) => {
  //   const { name, value } = e.target;
  //   setProfileData(prev => ({ ...prev, [name]: value }));
  // };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  // const handleProfileSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Profile information saved successfully!');
  // };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Password changed successfully!');
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const downloadAgreement = (id) => {
    alert(`Downloading agreement ${id}...`);
  };

  return (
    <div className="settings-container">
      <div className="settings-wrapper">
        <div className="settings-header">
          <div className="settings-title">
            <h1>Profile Settings</h1>
            <p>Manage your account settings and preferences</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="settings-tabs">
          <button
            className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            General
          </button>

          <button
            className={`tab-button ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            Security
          </button>

          {/* <button 
            className={`tab-button ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
            Notifications
          </button> */}

          <button
            className={`tab-button ${activeTab === 'agreements' ? 'active' : ''}`}
            onClick={() => setActiveTab('agreements')}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Agreements
          </button>
        </div>

        {/* Content */}
        {/* Admin Details  */}
        <div className="content-panel">
          {activeTab === 'general' && (
            <div>
              <div className="panel-header">
                <h2>Personal Information</h2>
                <p>Update your personal details</p>
              </div>

              {/* <form onSubmit={handleProfileSubmit}>
                <div className="form-grid">
                  <div>
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={profileData.fullName}
                      onChange={handleProfileChange}
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      readOnly
                      className="form-input"
                    />
                    <p className="form-help">Contact support to change your email</p>
                  </div>
                  
                  <div>
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      value={profileData.address}
                      onChange={handleProfileChange}
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="profile-picture">
                  <div className="avatar">JD</div>
                  <button type="button" className="button-secondary">
                    Change Image
                  </button>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="button-primary">
                    Save Changes
                  </button>
                </div>
              </form> */}

              <form onSubmit={handleProfileSubmit}>
                <div className="form-grid">
                  <div>
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={profileData.fullName}
                      onChange={handleProfileChange}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      readOnly
                      className="form-input"
                    />
                    <p className="form-help">Contact support to change your email</p>
                  </div>

                  <div>
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      className="form-input"
                    />
                  </div>


                  

                  {/* <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={profileData.address}
            onChange={handleProfileChange}
            className="form-input"
          />
        </div> */}
                </div>
                <div className="profile-picture">
                  {/* <div className="avatar">JD</div> */}
                  <input type="file"
                  className="profile-picture" />
                  <button type="button" className="button-secondary">
                    Change Image
                  </button>
                </div>

                <div className="form-actions">
                  <button type="submit" className="button-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'security' && (
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
          )}

          {activeTab === 'notifications' && (
            <div>
              <div className="panel-header">
                <h2>Notification Preferences</h2>
                <p>Manage your notification settings</p>
              </div>

              <div>
                <div className="notification-item">
                  <div className="notification-info">
                    <h3>Email Notifications</h3>
                    <p>Receive updates via email</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" defaultChecked />
                    <div className="toggle-bg active">
                      <div className="toggle-circle"></div>
                    </div>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h3>SMS Notifications</h3>
                    <p>Receive updates via text message</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <div className="toggle-bg">
                      <div className="toggle-circle"></div>
                    </div>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <h3>Marketing Communications</h3>
                    <p>Receive promotional offers and updates</p>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" />
                    <div className="toggle-bg">
                      <div className="toggle-circle"></div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="form-actions">
                <button className="button-primary">
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {activeTab === 'agreements' && (
            <div>
              <div className="panel-header">
                <h2>User Agreements</h2>
                <p>Manage your agreements and contracts</p>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table className="agreements-table">
                  <thead>
                    <tr>
                      <th>Agreement</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agreements.map((agreement) => (
                      <tr key={agreement.id}>
                        <td>{agreement.name}</td>
                        <td>{agreement.date}</td>
                        <td>
                          <span className={`status-badge status-${agreement.status.toLowerCase()}`}>
                            {agreement.status}
                          </span>
                        </td>
                        <td>
                          <button
                            onClick={() => downloadAgreement(agreement.id)}
                            className="table-action-button"
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}