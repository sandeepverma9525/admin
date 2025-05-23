
import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
// import logo from './logoo.png'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_no: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log('📦 Form Data:', formData);

    if (formData.password !== formData.confirmPassword) {
      alert(" ❌ Passwords do not match!");
      return;
    }else if (!/^\d{10}$/.test(formData.phone_no)) {
  alert("❌ Please enter a valid 10-digit phone number!");
  return;
}

    // !Api 
    try{
      const res = await axios.post(
        'https://pronet.ap-1.evennode.com/api/admin/adminRegistration',
        {
          name:formData.name,
          email:formData.email,
          phone_no:formData.phone_no,
          password:formData.password
        }
      );
      
// console.log('✅ Response from server:', res.data); 
      alert("Signup Sucessfully");
      window.location.href='/';
     
      

    }catch(err){
      // console.error('❌ Error:', err.response?.data || err.message); 
    
      const message = err.response?.data.message;
      if(message?.includes('email')){
        alert('❌ This email is already registered.')
      }else if(message?.includes('phone')){
        alert('❌ This phone number is already registered.');
      }else{
        alert('❌ Signup failed: ' + (message || 'Something went wrong!'))
      }  
    }
    // !Api 


    //  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // const newUser = {
    //   name: formData.name,
    //   email: formData.email,
    //   phone: formData.phone,
    //   password: formData.password
    // };

    // localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

    // alert("Signup successful!");
    // window.location.href = "/";
  };

  return (
    <div className="signup-container">
      <form className="signup-box" onSubmit={handleSubmit}>
        <div className='logo'>
                {/* <img src={logo} alt="" /> */}
              </div>
        <h2>Create Account</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone_no"
          placeholder="Phone Number"
          value={formData.phone_no}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button className='signupbutton' type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
