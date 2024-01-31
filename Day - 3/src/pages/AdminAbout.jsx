

import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/About.css';

function AdminAbout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body className='abody' >
      <div className='whole'>
      <div className='left-content' contentEditable="true">
          <p className='ahp'>Welcome to The Educational Gateway - Your Path to College Admission Success!</p>
          At The Educational Gateway, we are committed to empowering students with the knowledge and resources.It encourages individuals to endure the difficulties.
          </div>
          <div className='center-content' contentEditable="true">
          <p className='ahp'>Our mission is to simplify the college admission process and make quality education accessible to all aspiring students. We believe in fostering a learning environment that encourages personal growth, critical thinking.</p>
          </div>

          <div className='right-content'contentEditable="true">
          <h3 className='ah2'>What Sets Us Apart</h3>
          <p className='ahp'>1. Expert Guidance: Our team of experienced educators and college admission experts provide personalized guidance to help you navigate the complexities of college admissions.</p>
          </div>
        </div>
      </body>
      <footer className="footer">
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/insta.png" alt="Instagram" />
            <span className="icon-name">Instagram</span>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/t1.png" alt="Twitter" />
            <span className="icon-name">X</span>
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/wp.png" alt="WhatsApp" />
            <span className="icon-name">Whatsapp</span>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/fb.png" alt="Facebook" />
            <span className="icon-name">Facebook</span>
          </a>
          <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/ld.png" alt="LinkedIn" />
            <span className="icon-name">LinkedIn</span>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/images/yt.png" alt="YouTube" />
            <span className="icon-name">YouTube</span>
          </a>
        </div>
        <p>Email: info@educationgateway.com | Phone: +1 (555) 123-4567</p>
        <p>&copy; 2024 The Educational Gateway. All rights reserved.</p>
      </footer>
    </>
  );
}

export default AdminAbout;
