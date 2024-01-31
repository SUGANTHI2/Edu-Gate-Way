import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/css/Login.css';

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!])[a-zA-Z\d@#$%^&*!]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email.trim() === '' || !formData.email.includes('@')) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address',
      }));
      return;
    }

    if (formData.password.trim() === '' || !validatePassword(formData.password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password should have at least 8 characters, one special character, one uppercase, one lowercase, and alphanumeric letters',
      }));
      return;
    }

    console.log('Form submitted:', formData);
    navigate('/home'); // Use navigate to redirect to the home page
  };

  return (
    <div className='top'>
      <div className='container'>
        <div className='image-container'></div>
        <div className='login-container'>
          <div className='wrapper'>
            <form>
              <h1>Login</h1>
              <div className='input-box'>
                <input
                  type='text'
                  name='email'
                  placeholder='Email Id'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FaUser className='icon' />
              </div>
              {errors.email && <p className='error-message'>{errors.email}</p>}
              <div className='input-box'>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <FaLock className='icon' />
              </div>
              {errors.password && <p className='error-message'>{errors.password}</p>}
              <Link to="/home">
                <button type='submit' onClick={handleSubmit}>
                  Login
                </button>
              </Link>
              <div className='register-link'>
                <p>
                  Don't have an account? <Link to='/registration'>Register</Link>
                </p>
              </div>
              <div className='register-link'>
                <p>
                  Admin? <Link to='/adminlogin'>Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
