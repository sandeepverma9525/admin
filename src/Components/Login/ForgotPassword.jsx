
// import React, { useState } from 'react';
// import './Auth.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom'; // ✅ import navigate

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [newPass, setNewPass] = useState('');
//   const [showPass, setShowPass] = useState(false);

//   const toggleShowPass = () => setShowPass(!showPass);

//   const navigate = useNavigate(); // ✅ useNavigate hook

//   const handleReset = (e) => {
//     e.preventDefault();
//     const user = JSON.parse(localStorage.getItem(email));
//     if (user) {
//       user.password = newPass;
//       localStorage.setItem(email, JSON.stringify(user));
//       alert('Password updated successfully!');
      
//      // ✅ Reset fields after registration
//     // ✅ Reset and redirect to login
//       setEmail('');
//       setNewPass('');
//       navigate('/login'); // ✅ Redirect to login page
//     } else {
//       alert('User not found!');
//       setNewPass(''); // ❌ Optional: clear password field on error
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleReset}>
//         <h2>Reset Password</h2>

//         <input
//           type="email"
//           value={email}
//           placeholder="Email"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />

// <div className="password-wrapper">
//         <input
//           type={showPass ? 'text' : 'password'}
//           value={newPass}
//           placeholder="New Password"
//           required
//           onChange={(e) => setNewPass(e.target.value)}
//         />
//         <span onClick={toggleShowPass} className="eye-icon">
//                     {showPass ? <FaEyeSlash /> : <FaEye />}
//                   </span>

// </div>

//         <button type="submit">Update Password</button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;





import React, { useState } from 'react';
import './Auth.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false)

  const navigate = useNavigate();
  const toggleShowPass = () => setShowPass(!showPass);
  const toggleShowConfirmPass = () => setShowConfirmPass(!showConfirmPass);


  const handleReset = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem(email));

    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'User Not Found',
        text: 'Please check the email entered.',
      });
      return;
    }

    if (newPass !== confirmPass) {
      Swal.fire({
        icon: 'warning',
        title: 'Password Mismatch',
        text: 'New password and confirm password must match.',
      });
      return;
    }

    // ✅ Update password
    user.password = newPass;
    localStorage.setItem(email, JSON.stringify(user));

    // ✅ Success alert + redirect
    Swal.fire({
      icon: 'success',
      title: 'Password Updated',
      text: 'Login with your new password!',
    }).then(() => {
        // ✅ Reset form fields
      setEmail('');
      setNewPass('');
      setConfirmPass('');
      navigate('/login');
    });
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleReset}>
        <h2>Reset Password</h2>

        <input
          type="email"
          value={email}
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-wrapper">
          <input
            type={showPass ? 'text' : 'password'}
            value={newPass}
            placeholder="New Password"
            required
            onChange={(e) => setNewPass(e.target.value)}
          />
          <span onClick={toggleShowPass} className="eye-icon">
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="password-wrapper">
        <input
          type={showConfirmPass ? 'text' : 'password'}
          value={confirmPass}
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <span onClick={toggleShowConfirmPass} className="eye-icon">
            {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
          </span>
          </div>

        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
