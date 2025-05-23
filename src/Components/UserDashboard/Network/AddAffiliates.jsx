import React, { useState } from 'react';
import './AddAffiliates.css';

const AddAffiliates = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    affiliateLevel: 'Bronze', sponsorId: '',
    address: '', city: '', state: '', zip: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'Required';
    if (!formData.lastName) newErrors.lastName = 'Required';
    if (!formData.email) newErrors.email = 'Required';
    if (!formData.phone) newErrors.phone = 'Required';
    if (!formData.address) newErrors.address = 'Required';
    if (!formData.city) newErrors.city = 'Required';
    if (!formData.state) newErrors.state = 'Required';
    if (!formData.zip) newErrors.zip = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      alert('Affiliate added!');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Affiliate</h2>
      <form onSubmit={handleSubmit} className="affiliate-form">
        <div className="form-row">
          <input name="firstName" placeholder="Enter first name" value={formData.firstName} onChange={handleChange} />
          <input name="lastName" placeholder="Enter last name" value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="email" placeholder="Enter email address" value={formData.email} onChange={handleChange} />
          <input name="phone" placeholder="Enter phone number" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-row">
          <select name="affiliateLevel" value={formData.affiliateLevel} onChange={handleChange}>
            {['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ruby', 'Sapphire', 'Emerald', 'Titanium', 'Elite', 'Legendary'].map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
          <input name="sponsorId" placeholder="Enter sponsor ID" value={formData.sponsorId} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="address" placeholder="Enter address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="form-row">
          <input name="city" placeholder="Enter city" value={formData.city} onChange={handleChange} />
          <input name="state" placeholder="Enter state" value={formData.state} onChange={handleChange} />
          <input name="zip" placeholder="Enter ZIP code" value={formData.zip} onChange={handleChange} />
        </div>
        <div className="form-buttons">
          <button className='cancelbtn' type="button" onClick={() => setFormData({})} style={{background:'#0F1C2E'}}>Cancel</button>
          <button type="submit">Add Affiliate</button>
        </div>
        {Object.values(errors).length > 0 && (
          <div className="error-msg">Please fill all required fields.</div>
        )}
      </form>
    </div>
  );
};

export default AddAffiliates;
