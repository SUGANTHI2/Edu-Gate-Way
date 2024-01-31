import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Asidebar from '../pages/Asidebar';
import '../assets/css/Sidebar.css';
import '../assets/css/Course.css';

const AdminCourse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [editCourse, setEditCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({
    name: '',
    duration: '',
    description: '',
    institution: '',
    availableSeats: '',
    fees: '',
  });
  const [courses, setCourses] = useState([
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
    // Add more sample courses as needed
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = (course) => {
    setEditCourse(course);
    setEditing(true);
  };

  const handleEditClose = () => {
    setEditCourse(null);
    setEditing(false);
  };

  const handleSaveEdit = (editedCourse) => {
    // Find the index of the edited course in the courses array
    const index = courses.findIndex((course) => course.name === editedCourse.name);

    // Update the course in the courses array
    const updatedCourses = [...courses];
    updatedCourses[index] = editedCourse;

    // Update the courses state
    setCourses(updatedCourses);

    // Close the edit popup
    handleEditClose();
  };

  const handleDeleteClick = (course) => {
    // Temporarily remove the selected course from the courses array
    const updatedCourses = courses.filter((c) => c !== course);
    setCourses(updatedCourses);
  };

  const handleAddCourse = () => {
    setNewCourse({
      name: '',
      duration: '',
      description: '',
      institution: '',
      availableSeats: '',
      fees: '',
    });
    setEditing(false);
    setShowAddForm(true);
  };

  const handleAddCourseSubmit = () => {
    // Validate the new course data before adding it
    if (
      newCourse.name &&
      newCourse.duration &&
      newCourse.description &&
      newCourse.institution &&
      newCourse.availableSeats &&
      newCourse.fees
    ) {
      // Add the new course to the courses array
      setCourses((prevCourses) => [...prevCourses, newCourse]);
      setNewCourse({
        name: '',
        duration: '',
        description: '',
        institution: '',
        availableSeats: '',
        fees: '',
      });
      setShowAddForm(false);
    } else {
      alert('Please fill in all fields before adding a course.');
    }
  };

  const handleSearch = () => {
    const results = courses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <>
      <div>
        <Asidebar></Asidebar>
      </div>
      <div className='cbody'>
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
            <button onClick={handleAddCourse} className="add-course-button">
              Add Course
            </button>
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
                  <th className="action-column">Action</th>
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
                        <button onClick={() => handleEditClick(course)} className="edit-button">Edit</button>
                        <button onClick={() => handleDeleteClick(course)} className="delete-button">Delete</button>
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
                        <button onClick={() => handleEditClick(course)} className="edit-button">Edit</button>
                        <button onClick={() => handleDeleteClick(course)} className="delete-button">Delete</button>
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

          {/* Add Course and Edit Popup */}
          {(showAddForm || editCourse) && (
            <div className="edit-course-popup">
              <h2>{editing ? 'Edit Course' : 'Add Course'}</h2>
              <label>
                Course Name:
                <input
                  type="text"
                  value={editing ? editCourse.name : newCourse.name}
                  onChange={(e) =>
                    editing
                      ? setEditCourse((prevCourse) => ({
                          ...prevCourse,
                          name: e.target.value,
                        }))
                      : setNewCourse((prevCourse) => ({
                          ...prevCourse,
                          name: e.target.value,
                        }))
                  }
                />
              </label>
              <label>
                Duration:
                <input
                  type="text"
                  value={editing ? editCourse.duration : newCourse.duration}
                  onChange={(e) =>
                    editing
                      ? setEditCourse((prevCourse) => ({
                          ...prevCourse,
                          duration: e.target.value,
                        }))
                      : setNewCourse((prevCourse) => ({
                          ...prevCourse,
                          duration: e.target.value,
                        }))
                  }
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  value={editing ? editCourse.description : newCourse.description}
                  onChange={(e) =>
                    editing
                      ? setEditCourse((prevCourse) => ({
                          ...prevCourse,
                          description: e.target.value,
                        }))
                      : setNewCourse((prevCourse) => ({
                          ...prevCourse,
                          description: e.target.value,
                        }))
                  }
                />
              </label>
              <label>
                Institute Name:
                <input
                  type="text"
                  value={editing ? editCourse.institution : newCourse.institution}
                  onChange={(e) =>
                    editing
                      ? setEditCourse((prevCourse) => ({
                          ...prevCourse,
                          institution: e.target.value,
                        }))
                      : setNewCourse((prevCourse) => ({
                          ...prevCourse,
                          institution: e.target.value,
                        }))
                  }
                />
              </label>
              <label>
                Available Seats:
                <input
                  type="text"
                  value={editing ? editCourse.availableSeats : newCourse.availableSeats}
                  onChange={(e) =>
                    editing
                      ? setEditCourse((prevCourse) => ({
                          ...prevCourse,
                          availableSeats: e.target.value,
                        }))
                      : setNewCourse((prevCourse) => ({
                          ...prevCourse,
                          availableSeats: e.target.value,
                        }))
                  }
                />
              </label>
              <label>
                Fees:
                <input
                  type="text"
                  value={editing ? editCourse.fees : newCourse.fees}
                  onChange={(e) =>
                    editing
                      ? setEditCourse((prevCourse) => ({
                          ...prevCourse,
                          fees: e.target.value,
                        }))
                      : setNewCourse((prevCourse) => ({
                          ...prevCourse,
                          fees: e.target.value,
                        }))
                  }
                />
              </label>
              <button
                onClick={() => (editing ? handleSaveEdit(editCourse) : handleAddCourseSubmit())}
              >
                {editing ? 'Save' : 'Add Course'}
              </button>
              <button onClick={editing ? handleEditClose : handleAddCourse}>Cancel</button>

            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminCourse;
