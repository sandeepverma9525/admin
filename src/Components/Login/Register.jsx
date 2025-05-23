
import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Swal from 'sweetalert2'; // ✅ SweetAlert2

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: '',
    dob: '',
    state: '',
    city: '',
    password: '',
    confirmPassword: '',
    agreed: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.agreed) {
      return Swal.fire({
        icon: 'warning',
        title: 'Please agree',
        text: 'You must agree to the Terms and Conditions',
        confirmButtonColor: '#f39c12',
      });
    }

    if (form.password !== form.confirmPassword) {
      return Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'Passwords do not match!',
        confirmButtonColor: '#d33',
      });
    }

    const { confirmPassword, ...userData } = form;
    localStorage.setItem(form.email, JSON.stringify(userData));

    // ✅ SweetAlert2 with manual close
    Swal.fire({
      icon: 'success',
      title: 'Registration Successful!',
      text: 'Click OK to continue to login.',
      confirmButtonColor: '#4FD298',
      showConfirmButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: true,
    }).then(() => {
      navigate('/login');
    });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form_heading">
          <h2>Create Account</h2>
        </div>

        <div className="bigcount">
          <div className="count1">
            <input name="name" placeholder="Name" required onChange={handleChange} />

            <PhoneInput
              className="phone_in"
              country={'in'}
              value={form.phone}
              onChange={(phone) => setForm({ ...form, phone })}
              inputProps={{ required: true }}
              containerClass="custom-phone-input"
              inputStyle={{
                width: '100%',
                height: '50px',
                borderRadius: '10px',
                color: '#fff',
                border: 'none',
              }}
              buttonStyle={{ background: 'transparent', border: 'none' }}
              containerStyle={{ borderRadius: '10px' }}
            />

            <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
            <input name="age" type="number" placeholder="Age" required onChange={handleChange} />

            <select name="gender" required onChange={handleChange}>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="count1">
            <input name="dob" type="date" required onChange={handleChange} />
            <input name="state" placeholder="State" required onChange={handleChange} />
            <input name="city" placeholder="City" required onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" required onChange={handleChange} />
            <input name="confirmPassword" type="password" placeholder="Confirm Password" required onChange={handleChange} />
          </div>
        </div>

        <div className="terms-container">
          <input type="checkbox" name="agreed" checked={form.agreed} onChange={handleChange} />
          <label>I agree to the Terms & Conditions</label>
        </div>

        <div className="button_cont">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
