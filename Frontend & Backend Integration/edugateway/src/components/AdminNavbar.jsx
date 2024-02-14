import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../assets/css/Navbar.css";
import logoImage from '../assets/images/logoImage.png'
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3 className="logo">
          <img src={logoImage} alt="Logo" />
          <h2 style={{ color: 'white' }}>Learn Vista</h2>
        </h3>
			<nav ref={navRef}>
				<a href="/adminprofile">Home</a>
				{/* <a href="/admininstitute">Institute</a> */}
				{/* <a href="/admincourse">Course</a> */}
				<a href="/adminabout">AboutUs</a>
                <a href="/adminlogin">Logout</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;