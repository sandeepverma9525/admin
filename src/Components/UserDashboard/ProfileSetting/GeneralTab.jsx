

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function GeneralTab() {
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: ""
  });

   const [phoneNo, setPhoneNo] = useState(""); // ✅ Valid
   const [selectedFile, setSelectedFile] = useState(null);//


  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };



  // ! Update User Data  
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    
    try {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('adminId');

 const formData = new FormData();
    formData.append('name', profileData.fullName);
    formData.append('phone_no', profileData.phone);
    if (selectedImage) {
      formData.append('user_profile_img', selectedImage);
    }


    const res = await axios.put(
      `https://pronet.ap-1.evennode.com/api/admin/updateAdminData/${id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    alert('Profile updated successfully!');
    console.log('Updated:', res.data);
  } catch (err) {
    console.error('Profile update failed:', err);
    alert('Failed to update profile.');
  }
  };


//  !  Fetch User Data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('adminId');
        const res = await axios.get(
          `https://pronet.ap-1.evennode.com/api/admin/getAdmin/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        const user = res.data.data.data;
        setProfileData({
          fullName: user.name,
          email: user.email,
          phone: user.phone_no,
          address: user?.user_address || "",
        });
        if (user?.profileImage) {
          setPreviewUrl(user.profileImage);
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <div className="panel-header">
        <h2>Personal Information</h2>
        <p>Update your personal details</p>
      </div>

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
{/* 
          <div>
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
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #10b981"
              }}
            />
          )}
          <input   
            type="file"
            name='user_profile_img'
            accept="image/*"
             onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          {/* <button type="button" className="button-secondary" onClick={handleImageUpload}>
            Change Image
          </button> */}
        </div>

        <div className="form-actions">
          <button type="submit" className="button-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
