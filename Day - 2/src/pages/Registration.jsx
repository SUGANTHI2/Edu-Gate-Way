
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import '../assets/css/Registration.css';

const Registration = () => {
  const navigate = useNavigate();  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

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

    // Basic validation
    if (formData.username.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: 'Username is required',
      }));
      return;
    }

    if (formData.email.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      return;
    }

    if (formData.password.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password is required',
      }));
      return;
    }

    if (formData.confirmPassword.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Confirm Password is required',
      }));
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match',
      }));
      return;
    }
    console.log('Form submitted:', formData);
    navigate('/login');
  };

  return (
    <div className='container'>
    <div className='image-container'></div>
    <div className='registration-container'>
      <div className='registration-wrapper'>
        <form>
          <h1>Register!!</h1>
          <div className='form-input'>
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          {errors.username && <p className='error-message'>{errors.username}</p>}
          <div className='form-input'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {errors.email && <p className='error-message'>{errors.email}</p>}
        <div className='form-input'>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {errors.password && <p className='error-message'>{errors.password}</p>}
        <div className='form-input'>
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {errors.confirmPassword && (
          <p className='error-message'>{errors.confirmPassword}</p>
        )}
          <button type='submit' className='btn' onClick={handleSubmit}>
            Register
          </button>
          <div className='already-have-account'>
            <p>
              Already have an account?{' '}
              <Link to='/Login' className='btn1'>
                Login
              </Link>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
