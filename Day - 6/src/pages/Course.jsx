
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Enrollment from './Enrollment';
import '../assets/css/Course.css';
import Sidebar from '../pages/Sidebar'
const Course = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnrollmentPopup, setShowEnrollmentPopup] = useState(false);
  const navigate = useNavigate();

  const courses = [
    {
      name: 'Computer Science of Engineering',
      duration: 4,
      fees: '$10000',
      description: 'Computer Applications',
      institution: 'Easwari Engineering College',
      availableSeats: 5,
    },
    {
      name: 'Information Technology',
      duration: 4,
      fees: '$10000',
      description: 'Computer science',
      institution: 'CKS Institute',
      availableSeats: 20,
    },
    {
      name: 'Electrical Engineering',
      duration: 4,
      fees: '$100000',
      description: 'Electrical Course',
      institution: 'ABC Institute of Technology',
      availableSeats: 20,
    },
    // Add more course data as needed
  ];

  const handleSearch = () => {
    const results = courses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleEnrollClick = (course) => {
    // Fetch the complete course data to get the institute name
    const completeCourseData = courses.find((c) => c.name === course.name);
    setSelectedCourse(completeCourseData);
    setShowEnrollmentPopup(true);
  };

  const handleEnrollmentClose = () => {
    setShowEnrollmentPopup(false);
  };

  return (
    <>
      {/* <header>
        <Navbar />
      </header> */}
      <div>
        <Sidebar></Sidebar>
      </div>
      <body className='cbody'>
        <div className='ct'>
          <div className='search-bar'>
            <div className='searchcourse'>
              <input
                type='text'
                placeholder='Search for a course...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className='coursesdiv'>
            <table className='courses-table'>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Duration</th>
                  <th>Description</th>
                  <th>Institute Name</th>
                  <th>Available Seats</th>
                  <th>Fees</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {searchTerm.trim() === '' ? (
                  // Display all courses when no search term
                  courses.map((course, index) => (
                    <tr key={index}>
                      <td>{course.name}</td>
                      <td>{course.duration}</td>
                      <td>{course.description}</td>
                      <td>{course.institution}</td>
                      <td>{course.availableSeats}</td>
                      <td>{course.fees}</td>
                      <td>
                        <button
                          className='enroll-button'
                          onClick={() => handleEnrollClick(course)}
                        >
                          Enroll
                        </button>
                      </td>
                    </tr>
                  ))
                ) : searchResults.length > 0 ? (
                  // Display search results when available
                  searchResults.map((course, index) => (
                    <tr key={index}>
                      <td>{course.name}</td>
                      <td>{course.duration}</td>
                      <td>{course.description}</td>
                      <td>{course.institution}</td>
                      <td>{course.availableSeats}</td>
                      <td>{course.fees}</td>
                      <td>
                        <button
                          className='enroll-button'
                          onClick={() => handleEnrollClick(course)}
                        >
                          Enroll
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  // Display message when no search results
                  <tr>
                    <td colSpan="7">No such course available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {showEnrollmentPopup && (
            <Enrollment
              course={selectedCourse}
              onClose={handleEnrollmentClose}
            />
          )}
        </div>
      </body>
    </>
  );
};

export default Course;
