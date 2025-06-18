import { Link, useLocation } from 'react-router-dom'; // Minimal imports
import '../styles/navbar.css'; // Styling

function Navbar() {
  const location = useLocation(); // Get current path

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const heading = document.getElementById("first-heading"); 
      if (heading) {
        heading.scrollIntoView({
          behavior: "smooth", // Enable smooth scrolling
          block: "start", // Align to the top of the viewport
        });
      }
    } 
  };

  return (
    <nav className="nav">
      <div className="nav-links-wrapper">
        <ul className="nav-links">
          <li>
            {/* Home button: Scroll or Navigate */}
            <Link to="/" onClick={handleHomeClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/bio">Bio</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;