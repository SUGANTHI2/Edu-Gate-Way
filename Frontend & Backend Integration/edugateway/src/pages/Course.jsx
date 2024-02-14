import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Enrollment from './Enrollment';
import '../assets/css/Course.css';
import Sidebar from '../pages/Sidebar';

const Course = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showEnrollmentPopup, setShowEnrollmentPopup] = useState(false);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  // Function to fetch courses from backend
  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:8081/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // Fetch courses when component mounts
  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSearch = () => {
    const results = courses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setShowEnrollmentPopup(true);
  };

  const handleEnrollmentClose = () => {
    setShowEnrollmentPopup(false);
  };

  return (
    <>
      <div>
        <Sidebar />
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
                      <td>{course.courseName}</td>
                      <td>{course.courseDuration}</td>
                      <td>{course.courseDescription}</td>
                      <td>{course.noOfSeats}</td>
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
                      <td>{course.courseName}</td>
                      <td>{course.courseDuration}</td>
                      <td>{course.courseDescription}</td>
                      <td>{course.noOfSeats}</td>
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
                    <td colSpan='7'>No such course available.</td>
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
