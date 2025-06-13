import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {

  return (
    <nav className="nav">
      {/* Nav Links (Visible on larger screens, shows fly-out menu on mobile) */}
      <div className='nav-links-wrapper'>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
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