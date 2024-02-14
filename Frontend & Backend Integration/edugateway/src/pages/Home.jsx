// import React from 'react';
// import Navbar from '../components/Navbar';
// import '../assets/css/Home.css';
// import { Link, useLocation } from 'react-router-dom';
// function Home() {
//   // const userEmail = useSelector((state) => state.user.email);

//   const location = useLocation();
//   const userEmail=location.state && location.state.userEmail;
//   return (
//     <>
//       <header>
//         <Navbar userEmail={userEmail} />
//       </header>
//       <body className='hbody'>
//         <div className='hdiv1'>
//           <h1 className='animation'>
//             Unlock Your Potential with
//           </h1>
//           <h1 className='animation'>
//             The Educational Gateway
//           </h1>
//           <h3 >Your Gateway to Quality Education, Lifelong Learning, and Success</h3>
//           <p>Take the first step towards unlocking your potential. Explore our courses, participate in events, and join a community of lifelong learners.<br></br> The Educational Gateway is here to support you on your educational journey.</p>
//           <Link to={{ pathname: "/student", state: { userEmail: userEmail } }}>
//             <button className='div2'>Proceed</button>
//           </Link>
//         </div>
//       </body>
//     </>
//   );
// }

// export default Home;


import React from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/Home.css';
import { Link, useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const userEmail = location.state && location.state.userEmail;

  return (
    <>
      <header>
        <Navbar userEmail={userEmail} />
      </header>
      <body className='hbody'>
        <div className='hdiv1'>
          <h1 className='animation'>
            Unlock Your Potential with
          </h1>
          <h1 className='animation'>
            The Educational Gateway
          </h1>
          <h3>Your Gateway to Quality Education, Lifelong Learning, and Success</h3>
          <p>
            Take the first step towards unlocking your potential. Explore our courses, participate in events, and join a community of lifelong learners. The Educational Gateway is here to support you on your educational journey.
          </p>
          <Link to={{ pathname: "/student", state: { userEmail: userEmail } }}>
            <button className='div2'>Proceed</button>
          </Link>
        </div>
      </body>
    </>
  );
}

export default Home;
