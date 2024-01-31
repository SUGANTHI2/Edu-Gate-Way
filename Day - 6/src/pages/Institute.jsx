
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Institute.css';
import Sidebar from '../pages/Sidebar'
const InstituteCard = ({ institute }) => {
  return (
    <div className="institute-card">
      <h2 className='ih2'>{institute.name}</h2>
      <p className='ip'>Location: {institute.location}</p>
      <p className='ip'>Contact Number: {institute.contactNumber}</p>
      <p className='ip'>Description: {institute.description}</p>
      <p className='ip'>Email: {institute.email}</p>
      <p className='ip'>Courses Available: {institute.coursesAvailable}</p>
      
      {/* "Go to Course" button */}
      <Link to={`/course`}>
        <button className="go-to-course-button">Go to Course</button>
      </Link>
    </div>
  );
};

const Institute = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const institutes = [
    {
      name: 'Eswari Engineering College',
      location: 'Chennai',
      contactNumber: '9808989898',
      description: 'Best Institute',
      email: 'easwari@gmail.com',
      coursesAvailable: 5,
    },
    {
      name: 'KK Institute of Technology',
      location: 'Bangalore',
      contactNumber: '8838941332',
      description: 'Best Institute for placements',
      email: 'kk@gmail.com',
      coursesAvailable: 4,
    },
    {
      name: 'ABC Institute of Technology',
      location: 'Mumbai',
      contactNumber: '8964357578',
      description: 'Best Institute for MBA',
      email: 'abc@gmail.com',
      coursesAvailable: 4,
    },
    {
      name: 'CKS Institute',
      location: 'Kerala',
      contactNumber: '9090868878',
      description: 'Best institute for MBA',
      email: 'cks@gmail.com',
      coursesAvailable: 2,
    },
    {
      name: 'SKCET',
      location: 'Coimbatore',
      contactNumber: '8838941332',
      description: 'Best Institute for placements',
      email: 'skcet@gmail.com',
      coursesAvailable: 4,
    },
    {
      name: 'Coimbatore Institute of Technology',
      location: 'Coimbatore',
      contactNumber: '8838941332',
      description: 'Best Institute for placements',
      email: 'cit@gmail.com',
      coursesAvailable: 4,
    },
    // Add more institutes as needed
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredInstitutes = institutes.filter((institute) =>
    institute.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* <header>
        <Navbar />
      </header> */}
      <div>
        <Sidebar></Sidebar>
      </div>
      <body className='ibody'>
        <div className="college-admission-portal">
          <div className='isearch'>
            <input
              type="text"
              placeholder="Search for an institution..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="institutes-list">
            {filteredInstitutes.map((institute, index) => (
              <InstituteCard key={index} institute={institute} />
            ))}
          </div>
        </div>
      </body>
    </>
  );
};

export default Institute;
