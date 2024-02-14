// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Asidebar from '../pages/Asidebar';
// import '../assets/css/Sidebar.css';
// import '../assets/css/Institute.css';

// const InstituteCard = ({ institute, isAdminPage, onEdit, onDelete }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedInstitute, setEditedInstitute] = useState({ ...institute });

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     // Save the changes (You can implement the save logic here)
//     setIsEditing(false);
//     onEdit(editedInstitute); // Pass the edited data to the parent component
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedInstitute((prevInstitute) => ({
//       ...prevInstitute,
//       [name]: value,
//     }));
//   };

//   const handleDeleteClick = () => {
//     onDelete(institute); // Pass the institute to be deleted to the parent component
//   };

//   return (
//     <div className={`institute-card ${isAdminPage ? 'admin-page' : ''}`}>
//       <h2 className='ih2'>{isEditing ? <input type="text" name="name" value={editedInstitute.name} onChange={handleInputChange} /> : institute.name}</h2>
//       <p className='ip'>Location: {isEditing ? <input type="text" name="location" value={editedInstitute.location} onChange={handleInputChange} /> : institute.location}</p>
//       <p className='ip'>Contact Number: {isEditing ? <input type="text" name="contactNumber" value={editedInstitute.contactNumber} onChange={handleInputChange} /> : institute.contactNumber}</p>
//       <p className='ip'>Description: {isEditing ? <input type="text" name="description" value={editedInstitute.description} onChange={handleInputChange} /> : institute.description}</p>
//       <p className='ip'>Email: {isEditing ? <input type="text" name="email" value={editedInstitute.email} onChange={handleInputChange} /> : institute.email}</p>
//       <p className='ip'>Courses Available: {isEditing ? <input type="text" name="coursesAvailable" value={editedInstitute.coursesAvailable} onChange={handleInputChange} /> : institute.coursesAvailable}</p>
      
//       {isAdminPage && (
//         <>
//           {isEditing ? (
//             <>
//               <button onClick={handleSaveClick} className="edit-button">Save</button>
//               <button onClick={handleDeleteClick} className="delete-button">Delete</button>
//             </>
//           ) : (
//             <>
//               <button onClick={handleEditClick} className="edit-button">Edit</button>
//               <button onClick={handleDeleteClick} className="delete-button">Delete</button>
//             </>
//           )}
//         </>
//       )}

//       <Link to={`/admincourse`}>
//         <button className="go-to-course-button">Go to Course</button>
//       </Link>
//     </div>
//   );
// };

// const AdminInstitute = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [institutes, setInstitutes] = useState([
//     {
//       name: 'Eswari Engineering College',
//       location: 'Chennai',
//       contactNumber: '9808989898',
//       description: 'Best Institute',
//       email: 'easwari@gmail.com',
//       coursesAvailable: 5,
//     },
//     {
//         name: 'KK Institute of Technology',
//         location: 'Bangalore',
//         contactNumber: '8838941332',
//         description: 'Best Institute for placements',
//         email: 'kk@gmail.com',
//         coursesAvailable: 4,
//       },
//       {
//         name: 'ABC Institute of Technology',
//         location: 'Mumbai',
//         contactNumber: '8964357578',
//         description: 'Best Institute for MBA',
//         email: 'abc@gmail.com',
//         coursesAvailable: 4,
//       },
//       {
//         name: 'CKS Institute',
//         location: 'Kerala',
//         contactNumber: '9090868878',
//         description: 'Best institute for MBA',
//         email: 'cks@gmail.com',
//         coursesAvailable: 2,
//       },
//       {
//         name: 'SKCET',
//         location: 'Coimbatore',
//         contactNumber: '8838941332',
//         description: 'Best Institute for placements',
//         email: 'skcet@gmail.com',
//         coursesAvailable: 4,
//       },
//       {
//         name: 'Coimbatore Institute of Technology',
//         location: 'Coimbatore',
//         contactNumber: '8838941332',
//         description: 'Best Institute for placements',
//         email: 'cit@gmail.com',
//         coursesAvailable: 4,
//       },
//       {
//         name: 'KPR Institute of Technology',
//         location: 'Mumbai',
//         contactNumber: '8964357578',
//         description: 'Best Institute for MBA',
//         email: 'abc@gmail.com',
//         coursesAvailable: 4,
//       },
//   ]);

//   const [showAddForm, setShowAddForm] = useState(false);
//   const [newInstitute, setNewInstitute] = useState({
//     name: '',
//     location: '',
//     contactNumber: '',
//     email: '',
//     coursesAvailable: '',
//   });
//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleEditInstitute = (editedInstitute) => {
//     // Update the edited institute in the state
//     const updatedInstitutes = institutes.map((inst) =>
//       inst.name === editedInstitute.name ? editedInstitute : inst
//     );
//     setInstitutes(updatedInstitutes);
//   };

//   const handleDeleteInstitute = (instituteToDelete) => {
//     // Remove the institute from the state
//     const updatedInstitutes = institutes.filter((inst) => inst !== instituteToDelete);
//     setInstitutes(updatedInstitutes);
//   };

//   const handleAddInstitute = () => {
//     // Validate the new institute data before adding it
//     if (
//       newInstitute.name &&
//       newInstitute.location &&
//       newInstitute.contactNumber &&
//       newInstitute.email &&
//       newInstitute.coursesAvailable
//     ) {
//       setInstitutes((prevInstitutes) => [...prevInstitutes, newInstitute]);
//       setNewInstitute({
//         name: '',
//         location: '',
//         contactNumber: '',
//         email: '',
//         coursesAvailable: '',
//       });
//       setShowAddForm(false);
//     } else {
//       alert('Please fill in all fields before adding an institute.');
//     }
//   };

//   return (
//     <>
//       <div>
//         <Asidebar></Asidebar>
//       </div>
//       <body className='ibody'>
//         <div className="college-admission-portal">
//           <div className='isearch'>
//             <input
//               type="text"
//               placeholder="Search for an institution..."
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//             <button onClick={() => setShowAddForm(true)} className="add-institute-button">
//               Add Institute
//             </button>
//           </div>
//           {showAddForm && (
//             <div className="add-institute-form">
//               <label>
//                 College Name:
//                 <input
//                   type="text"
//                   name="name"
//                   value={newInstitute.name}
//                   onChange={(e) => setNewInstitute({ ...newInstitute, name: e.target.value })}
//                 />
//               </label>
//               <label>
//                 Location:
//                 <input
//                   type="text"
//                   name="location"
//                   value={newInstitute.location}
//                   onChange={(e) => setNewInstitute({ ...newInstitute, location: e.target.value })}
//                 />
//               </label>
//               <label>
//                 Contact Number:
//                 <input
//                   type="text"
//                   name="contactNumber"
//                   value={newInstitute.contactNumber}
//                   onChange={(e) => setNewInstitute({ ...newInstitute, contactNumber: e.target.value })}
//                 />
//               </label>
//               <label>
//                 Email:
//                 <input
//                   type="text"
//                   name="email"
//                   value={newInstitute.email}
//                   onChange={(e) => setNewInstitute({ ...newInstitute, email: e.target.value })}
//                 />
//               </label>
//               <label>
//                 Courses Available:
//                 <input
//                   type="text"
//                   name="coursesAvailable"
//                   value={newInstitute.coursesAvailable}
//                   onChange={(e) => setNewInstitute({ ...newInstitute, coursesAvailable: e.target.value })}
//                 />
//               </label>
//               <button onClick={handleAddInstitute}>Add Institute</button>
//             </div>
//           )}
//           <div className="institutes-list">
//           {institutes
//               .filter((institute) =>
//                 institute.name.toLowerCase().includes(searchTerm.toLowerCase())
//               )
//               .map((institute, index) => (
//                 <InstituteCard
//                   key={index}
//                   institute={institute}
//                   isAdminPage={true}
//                   onEdit={handleEditInstitute}
//                   onDelete={handleDeleteInstitute}
//                 />
//               ))}
//           </div>
//         </div>
//       </body>
//     </>
//   );
// };

//  export default AdminInstitute;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Asidebar from '../pages/Asidebar';
import '../assets/css/Sidebar.css';
import '../assets/css/Institute.css';

const AdminInstitute = () => {
  const navigate=useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [institutes, setInstitutes] = useState(() => {
      const storedInstitutes =  localStorage.getItem('institutes');
      return storedInstitutes ? JSON.parse(storedInstitutes) : [];
    });
    const [showAddForm, setShowAddForm] = useState(false);
    const [newInstitute, setNewInstitute] = useState({
      instituteId: '', // Auto-generated by backend
      instituteName: '',
      instituteDescription: '',
      instituteAddress: '',
      mobile: '',
      email: '',
      noOfCoursesAvailable: '',
    });
    const [editingInstitute, setEditingInstitute] = useState(null);
  
    useEffect(() => {
      fetchInstitutes();
    }, []);
  
    const fetchInstitutes = async () => {
      try {
        const response = await axios.get('http://localhost:8081/institutes/');
        setInstitutes(response.data);
        localStorage.setItem('institutes', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching institutes:', error);
      }
    };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

 const handleEditInstitute = async (institute) => {
    setEditingInstitute(institute);
    setShowAddForm(true);
    setNewInstitute({
      instituteId: institute.instituteId,
      instituteName: institute.instituteName,
      instituteDescription: institute.instituteDescription,
      instituteAddress: institute.instituteAddress,
      mobile: institute.mobile,
      email: institute.email,
      noOfCoursesAvailable: institute.noOfCoursesAvailable,
    });
  };
  const handleDeleteInstitute = async (instituteToDelete) => {
    try {
      await axios.delete(`http://localhost:8081/institutes/${instituteToDelete.instituteId}`);
      const updatedInstitutes = institutes.filter((inst) => inst !== instituteToDelete);
      setInstitutes(updatedInstitutes);
      localStorage.setItem('institutes', JSON.stringify(updatedInstitutes));
    } catch (error) {
      console.error('Error deleting institute:', error);
    }
  };

  const handleAddInstitute = async () => {
    try {
      if (
        newInstitute.instituteName &&
        newInstitute.instituteDescription &&
        newInstitute.instituteAddress &&
        newInstitute.mobile &&
        newInstitute.email &&
        newInstitute.noOfCoursesAvailable
      ) {
        const response = await axios.post('http://localhost:8081/institutes/', newInstitute);
        setInstitutes([...institutes, response.data]);
        localStorage.setItem('institutes', JSON.stringify([...institutes, response.data]));
        setNewInstitute({
          instituteName: '',
          instituteDescription: '',
          instituteAddress: '',
          mobile: '',
          email: '',
          noOfCoursesAvailable: '',
        });
        setShowAddForm(false);
      } else {
        alert('Please fill in all fields before adding an institute.');
      }
    } catch (error) {
      console.error('Error adding institute:', error);
    }
  };

  const handleSaveEditedInstitute = async () => {
    try {
      // Axios request to save edited institute
      const response = await axios.put(
        `http://localhost:8081/institutes/${editingInstitute.instituteId}`,
        newInstitute
      );
      // Update institutes state with the edited institute
      const updatedInstitutes = institutes.map((inst) =>
        inst.instituteId === editingInstitute.instituteId ? newInstitute : inst
      );
      setInstitutes(updatedInstitutes);
      localStorage.setItem('institutes', JSON.stringify(updatedInstitutes));
      setEditingInstitute(null);
      setShowAddForm(false);
    } catch (error) {
      console.error('Error saving edited institute:', error);
      // Handle the error appropriately, such as displaying an error message to the user
    }
  };
  const handleCoursePage=(instituteId)=>{
    navigate('/admincourse',{state:{instituteId}});
  }

  return (
    <>
      <div>
        <Asidebar />
      </div>
      <body className="ibody">
        <div className="college-admission-portal">
          <div className="isearch">
            <input
              type="text"
              placeholder="Search for an institution..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <button onClick={() => setShowAddForm(true)} className="add-institute-button">
              Add Institute
            </button>
          </div>
          {showAddForm && (
            <div className="add-institute-form">
              <label>
                Institute Name:
                <input
                  type="text"
                  name="instituteName"
                  value={newInstitute.instituteName}
                  onChange={(e) =>
                    setNewInstitute({ ...newInstitute, instituteName: e.target.value })
                  }
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="instituteDescription"
                  value={newInstitute.instituteDescription}
                  onChange={(e) =>
                    setNewInstitute({ ...newInstitute, instituteDescription: e.target.value })
                  }
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="instituteAddress"
                  value={newInstitute.instituteAddress}
                  onChange={(e) =>
                    setNewInstitute({ ...newInstitute, instituteAddress: e.target.value })
                  }
                />
              </label>
              <label>
                Mobile:
                <input
                  type="text"
                  name="mobile"
                  value={newInstitute.mobile}
                  onChange={(e) => setNewInstitute({ ...newInstitute, mobile: e.target.value })}
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  value={newInstitute.email}
                  onChange={(e) => setNewInstitute({ ...newInstitute, email: e.target.value })}
                />
              </label>
              <label>
                Courses Available:
                <input
                  type="text"
                  name="noOfCoursesAvailable"
                  value={newInstitute.noOfCoursesAvailable}
                  onChange={(e) =>
                    setNewInstitute({ ...newInstitute, noOfCoursesAvailable: e.target.value })
                  }
                />
              </label>
              <button onClick={editingInstitute ? handleSaveEditedInstitute : handleAddInstitute}>
  {editingInstitute ? 'Save' : 'Add Institute'}
</button>

            </div>
          )}
          <div className="institutes-list">
            {institutes
              .filter((institute) =>
                institute.instituteName.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((institute, index) => (
                <div key={index} className="institute-card">
                  <h2>{institute.instituteName}</h2>
                  <p>Description: {institute.instituteDescription}</p>
                  <p>Address: {institute.instituteAddress}</p>
                  <p>Mobile: {institute.mobile}</p>
                  <p>Email: {institute.email}</p>
                  <p>Courses Available: {institute.noOfCoursesAvailable}</p>
                  {/* <Link to={`/admincourse?instituteName=${encodeURIComponent(institute.instituteName)}`}> */}
                    <button className="go-to-course-button" onClick={()=>handleCoursePage(institute.instituteId)}>Go to Course</button>
                  {/* </Link> */}
                  <div>
                    <button className="edit-button" onClick={() => handleEditInstitute(institute)}>
                      Edit
                    </button>
                    <button className="delete-button" onClick={() => handleDeleteInstitute(institute)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </body>
    </>
  );
};

export default AdminInstitute;

