import React, { useState } from 'react';
import Sidebar from '../pages/Sidebar';
import '../assets/css/Student.css';
import '../assets/css/Sidebar.css'
const Student = () => {
  // Initial state for profile data and errors
  const initialProfile = {
    name: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    community: '',
    sslcMarks: '',
    hscMarks: '',
  };

  const [profile, setProfile] = useState(initialProfile);
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (field, value) => {
    // Numeric validation for specific fields
    if (['graduationYear', 'phone', 'gpa', 'sslcMarks', 'hscMarks'].includes(field) && isNaN(value)) {
      return;
    }

    // Update profile state
    setProfile({
      ...profile,
      [field]: value,
    });

    // Clear error message when the user starts typing
    setErrors({
      ...errors,
      [field]: '',
    });
  };

  // Handle form submission
  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Validate fields before saving
    if (!validateFields()) {
      // Show error message or handle validation failure
      return;
    }
    // Additional logic to save changes if needed
  };

  // Validate form fields
  const validateFields = () => {
    // Simple validation examples, you can enhance these based on your requirements
    const phoneRegex = /^\d{10}$/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const numericRegex = /^[0-9]+$/;

    const requiredFields = ['name', 'dob', 'gender', 'email', 'phone', 'address', 'highSchool', 'graduationYear', 'gpa', 'sslcMarks', 'hscMarks'];

    let isValid = true;
    const newErrors = {};

    requiredFields.forEach((field) => {
      // Check if required fields are filled out
      if (!profile[field]) {
        isValid = false;
        newErrors[field] = 'Please fill out this field.';
      }
    });

    // Additional field validations
    if (profile.phone && !phoneRegex.test(profile.phone)) {
      isValid = false;
      newErrors.phone = 'Invalid phone number. Please enter a valid 10-digit phone number.';
    }

    if (profile.dob && !dateRegex.test(profile.dob)) {
      isValid = false;
      newErrors.dob = 'Invalid date of birth. Please use the format YYYY-MM-DD.';
    }

    if (!numericRegex.test(profile.graduationYear)) {
      isValid = false;
      newErrors.graduationYear = 'Invalid graduation year. Please enter a valid numeric value.';
    }

    if (!numericRegex.test(profile.sslcMarks)) {
      isValid = false;
      newErrors.sslcMarks = 'Invalid SSLC marks. Please enter a valid numeric value.';
    }

    if (!numericRegex.test(profile.hscMarks)) {
      isValid = false;
      newErrors.hscMarks = 'Invalid HSC marks. Please enter a valid numeric value.';
    }

    // Set errors state
    setErrors(newErrors);

    return isValid;
  };

  return (
    <>
      {/* <header>
        <Navbar></Navbar>
      </header> */}
      <div>
        <Sidebar></Sidebar>
      </div>
      <body className="scrollable-body">
        <div className='hbody'>
          <div className='hdiv1'>
            <div className="student-profile">
              <form>
                {/* Input fields with placeholders and error messages */}
                <h3>Name :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={profile.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                  />
                </label>
                {errors.name && <div className="error-message">{errors.name}</div>}

                <h3>Date of Birth :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your date of birth (YYYY-MM-DD)"
                    value={profile.dob}
                    onChange={(e) => handleChange('dob', e.target.value)}
                  />
                </label>
                {errors.dob && <div className="error-message">{errors.dob}</div>}

                <h3>Gender :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your gender"
                    value={profile.gender}
                    onChange={(e) => handleChange('gender', e.target.value)}
                  />
                </label>
                {errors.gender && <div className="error-message">{errors.gender}</div>}

                                 <label>
                   <h3>Email :</h3>
                   <input
                     type="email"
                    placeholder="Enter your email"
                    value={profile.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </label>
                {errors.email && <div className="error-message">{errors.email}</div>}

                <label>
                  <h3>Phone :</h3>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={profile.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </label>
                {errors.phone && <div className="error-message">{errors.phone}</div>}

                <h3>Address:</h3>
                <label>
                  <textarea
                    placeholder="Enter your address"
                    value={profile.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                  />
                </label>
                {errors.address && <div className="error-message">{errors.address}</div>}
                <label>
                  <h3>Community:</h3>
                  <input
                    type="text"
                    placeholder="Enter your community"
                    value={profile.community}
                    onChange={(e) => handleChange('community', e.target.value)}
                  />
                </label>
                {errors.address && <div className="error-message">{errors.address}</div>}

                <label>
                  <h3>SSLC Marks:</h3>
                  <input
                    type="text"
                    placeholder="Enter your SSLC marks"
                    value={profile.sslcMarks}
                    onChange={(e) => handleChange('sslcMarks', e.target.value)}
                  />
                </label>
                {errors.sslcMarks && <div className="error-message">{errors.sslcMarks}</div>}

                <label>
                  <h3>HSC Marks:</h3>
                  <input
                    type="text"
                    placeholder="Enter your HSC marks"
                    value={profile.hscMarks}
                    onChange={(e) => handleChange('hscMarks', e.target.value)}
                  />
                </label>
                {errors.hscMarks && <div className="error-message">{errors.hscMarks}</div>}
                <div className="button-container">
                  <button type="submit" className="save-button" onClick={handleSaveChanges}>
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>

    </>
  );
};

export default Student;
