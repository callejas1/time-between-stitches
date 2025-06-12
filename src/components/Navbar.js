import { Link } from 'react-router-dom';
import '../styles/navbar.css'; 

function Navbar() {
  return (
      <nav className='nav'>
          <div className='nav-logo'>
            <ul className='nav-links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/bio'>Bio</Link></li>
                {/* <li><Link to='/projects'>Projects</Link></li> */}
            </ul>  
          </div>
      
    </nav>
  );
}

export default Navbar;
