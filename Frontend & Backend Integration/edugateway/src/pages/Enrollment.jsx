// // Enrollment.js
// import React, { useState, useEffect } from 'react';
// import '../assets/css/Enrollment.css';

// const Enrollment = ({ course, onClose }) => {
//   const [formData, setFormData] = useState({
//     courseName: '',
//     instituteName: '',
//     courseFee: '',
//     percentage: '',
//   });

//   useEffect(() => {
//     // Populate form data when the course changes
//     if (course) {
//       setFormData({
//         courseName: course.name,
//         instituteName: course.institution,
//         courseFee: '',
//         percentage: '',
//       });
//     }
//   }, [course]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to handle form submission

//     // Display alert for successful enrollment
//     alert(`You have successfully enrolled in ${formData.courseName} at ${formData.instituteName}!`);

//     onClose(); // Close the enrollment popup
//   };

//   return (
//     <div className="enrollment-popup">
//       <div className="enrollment-form-container">
//         <span className="close-btn" onClick={onClose}>&times;</span>
//         <form className="enrollment-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="courseName">Course Name:</label>
//             <input
//               type="text"
//               id="courseName"
//               name="courseName"
//               value={formData.courseName}
//               readOnly
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="instituteName">Institute Name:</label>
//             <input
//               type="text"
//               id="instituteName"
//               name="instituteName"
//               value={formData.instituteName}
//               readOnly
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="courseFee">Course Fee:</label>
//             <input
//               type="number"
//               id="courseFee"
//               name="courseFee"
//               value={formData.courseFee}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="percentage">Percentage :</label>
//             <input
//               type="number"
//               id="percentage"
//               name="percentage"
//               value={formData.percentage}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <button type="submit" className="submit-btn">
//             Enroll
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Enrollment;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Enrollment.css';

const Enrollment = ({ studentId, course, onClose }) => {
  const [formData, setFormData] = useState({
    studentId: 1,
    courseName: course.courseName,
    courseFee: course.fees,
    percentage: '',
    status: 'Pending', // Default value for status
  });

  useEffect(() => {
    setFormData(prevState => ({
      ...prevState,
      studentId: studentId
    }));
  }, [studentId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/admissions', formData);
      alert(`You have successfully enrolled in ${formData.courseName}!`);
      onClose();
    } catch (error) {
      console.error('Error enrolling:', error);
    }
  };

  return (
    <div className="enrollment-popup">
      <div className="enrollment-form-container">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <form className="enrollment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="studentId">Student ID:</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
            
            />
          </div>
          <div className="form-group">
            <label htmlFor="courseName">Course Name:</label>
            <input
              type="text"
              id="courseName"
              name="courseName"
              value={formData.courseName}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="courseFee">Course Fee:</label>
            <input
              type="number"
              id="courseFee"
              name="courseFee"
              value={formData.courseFee}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="percentage">Percentage:</label>
            <input
              type="number"
              id="percentage"
              name="percentage"
              value={formData.percentage}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              readOnly
            />
          </div>
          <button type="submit" className="submit-btn">
            Enroll
          </button>
        </form>
      </div>
    </div>
  );
};

export default Enrollment;
