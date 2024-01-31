import React, { useState } from 'react';
import { FaUserAlt, FaBook, FaCertificate, FaTrophy, FaSignOutAlt,FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "../assets/css/sidebar.css";
// import logo from "../assets/images/logo.png";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      path: "/student",
      name: "Student",
      icon: <FaUserAlt />
    },
    {
      path: "/course",
      name: "Course",
      icon: <FaBook />
    },
    {
      path: "/institute",
      name: "Institute",
      icon: <FaCertificate />
    },
    {
      path: "/",
      name: "Logout",
      icon: <FaSignOutAlt />
    }
  ];

  return (
    <div className="sidebar-container">
   <div style={{ width: isOpen ? "200px" : "50px" }} className={`sidebar ${isOpen ? 'open' : ''}`}>

      <div className="top-section">
        
        <div style={{ display: isOpen ? "block" : "none" }}>
          
        </div>
        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
          <FaBars onClick={toggle} />
        </div>
      </div>
        {menuItems.map((item, index) => (
          <NavLink to={item.path} key={index} className="sidebar-link" activeClassName="sidebar-active">
            <div className="sidebar-icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link-text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;