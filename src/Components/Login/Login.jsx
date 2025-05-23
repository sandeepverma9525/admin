import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
// import logo from './logo1.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("📧 Email:", email);
    console.log("🔐 Password:", password);

    // !Api 

    try {
      const res = await axios.post('https://pronet.ap-1.evennode.com/api/admin/loginAdmin', {
        email,
        password
      });

      // console.log("✅ Login Response:", res.data);
      // const token = response.data?.admin?.tokens?.[0]?.token;
       console.log("✅ Login Response:", res.data);

    // const token = res.data?.admin?.tokens?.[0]?.token;
    // console.log(token) // !👀 Debug line

      if (res.status === 200) {
        const token = res.data?.admin?.tokens?.[0]?.token;
        console.log('Usertoken',token) // !👀 Debug line
        const id = res.data?.admin?._id;
        console.log('adminId',id) // !👀 Debug line

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        localStorage.setItem("token", token); // ✅ Store token
        localStorage.setItem('adminId', id); 
        alert('✅ Login successful!');
        window.location.href = '/dashboard';
      }
    } catch (err) {
      console.error("❌ Login Error:", err.response?.data || err.message);
      alert('❌ Invalid email or password!');
    }
  };

  // !LocalStorage 
    // const userMatch = users.find(
    //   user => user.email === email && user.password === password
    // );

    // if (userMatch) {
    //   localStorage.setItem('isLoggedIn', 'true');
    //   localStorage.setItem('currentUser', JSON.stringify(userMatch));
    //   alert('Login successful!');
    //   window.location.href = '/dashboard';
    // } else {
    //   alert('Invalid email or password!');
    // }
  // };

  return (
    <div className="login-container">
      
      <form className="login-box" onSubmit={handleSubmit}>
      <div className='logo'>
        {/* <img src={logo} alt="" /> */}
      </div>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='loginbutton' type="submit">Sign In</button>
        
        <p className="signup-link">
          Don't have an account? <a href="/signup">Create new account</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
