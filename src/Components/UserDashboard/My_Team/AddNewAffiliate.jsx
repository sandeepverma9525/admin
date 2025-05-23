// import React, { useState } from 'react';
// import './AddNewAffiliate.css';
// // import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [form, setForm] = useState({
//     name: '', phone: '', email: '', age: '', gender: '',
//     dob: '', state: '', city: '', address: '',
//     aadhar: '', password: '', confirmPassword: '',
//   });

// //   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//     localStorage.setItem('user', JSON.stringify(form));
//     alert('Signup successful!');
//     // navigate('/login');
//     setForm({   // 💡 Clear form
//         name: '', phone: '', email: '', age: '', gender: '',
//         dob: '', state: '', city: '', address: '',
//         aadhar: '', password: '', confirmPassword: '',
//       });
//   };

//   return (
//     <div className="signup-container">
//       <form onSubmit={handleSubmit} className="signup-form">
//         <input name="name" placeholder="Name" onChange={handleChange} value={form.name} required />

//         <input name="phone" placeholder="Phone" onChange={handleChange} value={form.phone} required />

//         <input name="email" type="email" placeholder="Email" onChange={handleChange} value={form.email} required />

//         <input name="age" placeholder="Age" onChange={handleChange} value={form.age} required />

//         <select name="gender" value={form.gender} onChange={handleChange} required>
//   <option value="">Select Gender</option>
//   <option value="Male">Male</option>
//   <option value="Female">Female</option>
//   <option value="Other">Other</option>
// </select>


//         <input name="dob" type="date" placeholder="DOB" onChange={handleChange} value={form.dob} required />

//         <input name="state" placeholder="State" onChange={handleChange} value={form.state} required />

//         <input name="city" placeholder="City" onChange={handleChange} value={form.city} required />

//         <input name="address" placeholder="Address" onChange={handleChange} value={form.address} required />

//         <input name="aadhar" placeholder="Aadhar Number" onChange={handleChange} value={form.aadhar} required />

//         <input name="password" type="password" placeholder="Password" onChange={handleChange} value={form.password} required />

//         <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} value={form.confirmPassword} required />

//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
