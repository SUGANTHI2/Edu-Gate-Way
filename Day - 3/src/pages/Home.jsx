import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body className='hbody'>
        <div className='hdiv1'>
          <h1 className='animation'>
            Unlock Your Potential with
          </h1>
          <h1 className='animation'>
            The Educational Gateway
          </h1>
          <h3 >Your Gateway to Quality Education, Lifelong Learning, and Success</h3>
          <p>Take the first step towards unlocking your potential. Explore our courses, participate in events, and join a community of lifelong learners.<br></br> The Educational Gateway is here to support you on your educational journey.</p>
          <Link to="/student">
            <button className='div2'>Proceed</button>
          </Link>
        </div>
      </body>
    </>
  );
}

export default Home;
