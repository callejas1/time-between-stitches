import { Link, useLocation } from 'react-router-dom'; 
import '../styles/navbar.css';

function Navbar() {
  const location = useLocation(); 

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const heading = document.getElementById("first-heading"); 
      if (heading) {
        heading.scrollIntoView({
          behavior: "smooth", 
          block: "start", 
        });
      }
    } 
  };

  return (
    <nav className="nav">
      <div className="nav-links-wrapper">
        <ul className="nav-links">
          <li>
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