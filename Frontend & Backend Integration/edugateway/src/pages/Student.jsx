// import React, { useState } from 'react';
// import Sidebar from '../pages/Sidebar';
// import '../assets/css/Student.css';
// import '../assets/css/Sidebar.css';

// const Student = () => {
//   // Initial state for profile data, errors, and edit mode
//   const initialProfile = {
//     name: 'John Doe',
//     dob: '1990-01-01',
//     gender: 'Male',
//     email: 'john.doe@example.com',
//     phone: '1234567890',
//     address: '123 Main St, City',
//     community: 'Community',
//     sslcMarks: '90',
//     hscMarks: '85',
//   };

//   const [profile, setProfile] = useState(initialProfile);
//   const [editMode, setEditMode] = useState(false);
//   const [tempProfile, setTempProfile] = useState({}); // Temporary storage for changes
//   const [errors, setErrors] = useState({});

//   // Handle input changes
//   const handleChange = (field, value) => {
//     // Numeric validation for specific fields
//     if (['phone', 'sslcMarks', 'hscMarks'].includes(field) && isNaN(value)) {
//       return;
//     }

//     // Update temporary profile state
//     setTempProfile({
//       ...tempProfile,
//       [field]: value,
//     });

//     // Clear error message when the user starts typing
//     setErrors({
//       ...errors,
//       [field]: '',
//     });
//   };

//   // Handle form submission (temporary save)
//   const handleSaveChanges = (e) => {
//     e.preventDefault();
//     // Update the main profile with temporary changes
//     setProfile({
//       ...profile,
//       ...tempProfile,
//     });
//     setTempProfile({}); // Clear temporary changes
//     setEditMode(false); // Disable edit mode after saving
//   };

//   // Toggle edit mode
//   const toggleEditMode = () => {
//     if (editMode) {
//       // Discard changes if switching from edit to view
//       setTempProfile({});
//     }
//     setEditMode(!editMode);
//   };

//   return (
//     <>
//       <div>
//         <Sidebar></Sidebar>
//       </div>
//       <body className="scrollable-body">
//         <div className='hbody'>
//           <div className='hdiv1'>
//             <div className="student-profile">
//               <form>
//                 <h3>Name :</h3>
//                 <label>
//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     value={editMode ? tempProfile.name || profile.name : profile.name}
//                     onChange={(e) => handleChange('name', e.target.value)}
//                     readOnly={!editMode} // Make the field readonly when not in edit mode
//                   />
//                 </label>
//                 {errors.name && <div className="error-message">{errors.name}</div>}

//                 <h3>Date of Birth :</h3>
//                 <label>
//                   <input
//                     type="text"
//                     placeholder="Enter your date of birth (YYYY-MM-DD)"
//                     value={editMode ? tempProfile.dob || profile.dob : profile.dob}
//                     onChange={(e) => handleChange('dob', e.target.value)}
//                     readOnly={!editMode}
//                   />
//                 </label>
//                 {errors.dob && <div className="error-message">{errors.dob}</div>}

//                 <h3>Gender :</h3>
//                 <label>
//                   <input
//                     type="text"
//                     placeholder="Enter your gender"
//                     value={editMode ? tempProfile.gender || profile.gender : profile.gender}
//                     onChange={(e) => handleChange('gender', e.target.value)}
//                     readOnly={!editMode}
//                   />
//                 </label>
//                 {errors.gender && <div className="error-message">{errors.gender}</div>}

//                 <h3>Email :</h3>
//                 <label>
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     value={editMode ? tempProfile.email || profile.email : profile.email}
//                     onChange={(e) => handleChange('email', e.target.value)}
//                     readOnly={!editMode}
//                   />
//                 </label>
//                 {errors.email && <div className="error-message">{errors.email}</div>}

//                 <h3>Phone :</h3>
//                 <label>
//                   <input
//                     type="text"
//                     placeholder="Enter your phone number"
//                     value={editMode ? tempProfile.phone || profile.phone : profile.phone}
//                     onChange={(e) => handleChange('phone', e.target.value)}
//                     readOnly={!editMode}
//                   />
//                 </label>
//                 {errors.phone && <div className="error-message">{errors.phone}</div>}

//                 <h3>Address:</h3>
//                 <label>
//                   <textarea
//                     placeholder="Enter your address"
//                     value={editMode ? tempProfile.address || profile.address : profile.address}
//                     onChange={(e) => handleChange('address', e.target.value)}
//                     readOnly={!editMode}
//                   />
//                 </label>
//                 {errors.address && <div className="error-message">{errors.address}</div>}

//                 <h3>Community:</h3>
//                 <label>
//                   <input
//                     type="text"
//                     placeholder="Enter your community"
//                     value={editMode ? tempProfile.community || profile.community : profile.community}
//                     onChange={(e) => handleChange('community', e.target.value)}
//                     readOnly={!editMode}
//                   />
//                 </label>
//                 {errors.community && <div className="error-message">{errors.community}</div>}

//                 <h3>SSLC Marks:</h3>
//                 <label>
//                   <input
//                     type="text"
//                     placeholder="Enter your SSLC marks"
//                     value={editMode ? tempProfile.sslcMarks || profile.sslcMarks : profile.sslcMarks}
//                     onChange={(e) => handleChange('sslcMarks', e.target.value)}
//                     readOnly={!editMode}
//                   />
//                 </label>
//                 {errors.sslcMarks && <div className="error-message">{errors.sslcMarks}</div>}

//                 <h3>HSC Marks:</h3>
//                 <label>
//                   <input
//                     type="text"
//                     placeholder="Enter your HSC marks"
//                     value={editMode ? tempProfile.hscMarks || profile.hscMarks : profile.hscMarks}
//                     onChange={(e) => handleChange('hscMarks', e.target.value)}
//                     readOnly={!editMode}
//                   />
//                 </label>
//                 {errors.hscMarks && <div className="error-message">{errors.hscMarks}</div>}

//                 <div className="button-container">
//                   <button type="button" className={editMode ? "save-button" : "edit-button"} onClick={editMode ? handleSaveChanges : toggleEditMode}>
//                     {editMode ? "Save Profile" : "Edit Profile"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </body>
//     </>
//   );
// };

// export default Student;


import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../pages/Sidebar';
import '../assets/css/Student.css';
import '../assets/css/Sidebar.css';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Student = () => {
  const [profile, setProfile] = useState({
    studentId: null, // No initial ID until fetched from backend
    name: '',
    dob: '',
    gender: '',
    motherName: '',
    fatherName: '',
    nationality: '',
    age: '',
    address: '',
    mobile: '',
    marksSSLC: '',
    marksHSC: '',
    marksDiploma: '',
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = () => {
    axios.get('http://localhost:8081/students')
      .then(response => {
        const studentData = response.data;
        if (studentData.length > 0) {
          setProfile(studentData[0]); // Assuming only one student data is returned
        }
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  };

  const handleChange = (field, value) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    axios.put(`http://localhost:8081/students/${profile.studentId}`, profile)
      .then(response => {
        setProfile(response.data);
        setEditMode(false);
      })
      .catch(error => {
        console.error('Error updating student data:', error);
      });
  };

  const toggleEditMode = () => {
    setEditMode(prevEditMode => !prevEditMode);
  };

  return (
    <>
      <div>
        <Sidebar></Sidebar>
      </div>
      <body className="scrollable-body">
        <div className='hbody'>
          <div className='hdiv1'>
            <div className="student-profile">
              <form>
                <h3>Name :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={profile.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    readOnly={!editMode}
                  />
                </label>

                <h3>Date of Birth :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your date of birth"
                    value={profile.dob}
                    onChange={(e) => handleChange('dob', e.target.value)}
                    readOnly={!editMode}
                  />
                </label>

                <h3>Gender :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your gender"
                    value={profile.gender}
                    onChange={(e) => handleChange('gender', e.target.value)}
                    readOnly={!editMode}
                  />
                </label>

                <h3>Mother's Name :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your mother's name"
                    value={profile.motherName}
                    onChange={(e) => handleChange('motherName', e.target.value)}
                    readOnly={!editMode}
                  />
                </label>

                <h3>Father's Name :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your father's name"
                    value={profile.fatherName}
                    onChange={(e) => handleChange('fatherName', e.target.value)}
                    readOnly={!editMode}
                  />
                </label>

                <h3>Nationality :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your nationality"
                    value={profile.nationality}
                    onChange={(e) => handleChange('nationality', e.target.value)}
                    readOnly={!editMode}
                  />
                </label>

                <h3>Age :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your age"
                    value={profile.age}
                    onChange={(e) => handleChange('age', e.target.value)}
                    readOnly={!editMode}
                  />
                </label>

                <h3>Address :</h3>
                <label>
                  <textarea
                    placeholder="Enter your address"
                    value={profile.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    readOnly={!editMode}
                  />
                </label>

                <h3>Mobile :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    value={profile.mobile}
                    onChange={(e) => handleChange('mobile', e.target.value)}
                    readOnly={!editMode}
                  />
                </label>

                <h3>SSLC Marks :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your SSLC marks"
                    value={profile.marksSSLC}
                    onChange={(e) => handleChange('marksSSLC', e.target.value)}
                    readOnly={!editMode}
                  />
                </label>

                <h3>HSC Marks :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your HSC marks"
                    value={profile.marksHSC}
                    onChange={(e) => handleChange('marksHSC', e.target.value)}
                    readOnly={!editMode}
                  />
                </label>

                <h3>Diploma Marks :</h3>
                <label>
                  <input
                    type="text"
                    placeholder="Enter your diploma marks"
                    value={profile.marksDiploma}
                    onChange={(e) => handleChange('marksDiploma', e.target.value)}
                    readOnly={!editMode}
                  />
                </label>

                <div className="button-container">
                  <button type="button" className={editMode ? "save-button" : "edit-button"} onClick={editMode ? handleSaveChanges : toggleEditMode}>
                    {editMode ? "Save Profile" : "Edit Profile"}
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
