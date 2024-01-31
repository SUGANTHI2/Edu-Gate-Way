import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Student from './pages/Student'
import Institute from './pages/Institute'
import Course from './pages/Course'
import Login from './pages/Login'
import Registration from './pages/Registration'
import AdminLogin from './pages/AdminLogin'
import Enrollment from './pages/Enrollment'
import AdminProfile from './pages/AdminProfile'
import AdminInstitute from './pages/AdminInstitute'
import AdminCourse from './pages/AdminCourse'
import Sidebar from './pages/Sidebar'
import AdminAbout from './pages/AdminAbout'
// import StudentProfile from './pages/StudentProfile'
// import AdminCourse from './pages/AdminCourse'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route  path="/home" element={<Home/>}></Route>
      <Route  index path="/" element={<Login/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/course' element={<Course/>}></Route>
          <Route path='/student' element={<Student/>}></Route>
          <Route path='/institute' element={<Institute/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/adminlogin' element={<AdminLogin/>}></Route>
          <Route path='/enrollment' element={<Enrollment/>}></Route>
          <Route path='/adminprofile' element={<AdminProfile/>}></Route>
          <Route path='/admininstitute' element={<AdminInstitute/>}></Route>
          <Route path='/admincourse' element={<AdminCourse/>}></Route>
          <Route path='/adminabout' element={<AdminAbout/>}></Route>
          <Route path='/sidebar' element={<Sidebar/>}></Route>
      </Routes>
    </Router>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    // <Hello_World/>
  )
}

export default App
