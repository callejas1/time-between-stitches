// import { Link, useLocation } from "react-router-dom";
// import "../styles/navbar.css";
// import projects from "../content/projects";

// function Navbar() {
//   const location = useLocation();

//   // Function to capitalize the first letter of each word
//   const capitalizeWords = (text) => {
//     return text
//       .split(" ")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//   };

//   // Function to handle smooth scrolling across all <li> elements
//   const handleClick = (elementId) => (e) => {
//     if (location.pathname === elementId) {
//       e.preventDefault();
//       const heading = document.getElementById(elementId);
//       if (heading) {
//         heading.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     }
//   };

//   return (
//     <nav className="nav">
//       <div className="nav-links-wrapper">
//         <ul className="nav-links">
//           <li>
//             <Link to="/" onClick={handleClick("first-heading")}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/bio" onClick={handleClick("bio-content")}>Bio</Link>
//           </li>
//           {projects?.map((project, index) => (
//             <li key={`${project.id}-${index}`}>
//               <Link
//                 to={`/${project.id}`}
//                 onClick={handleClick(project.id)}
//               >
//                 {capitalizeWords(project.id.replace(/-/g, " "))}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import projects from "../content/projects";

function Navbar() {
  const location = useLocation();

  const capitalizeWords = (text) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

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
            <Link to="/" onClick={handleHomeClick}>Home</Link>
          </li>
          <li>
            <Link to="/bio">Bio</Link>
          </li>
          <li className="dropdown-projects">
            <button className="dropdown-button">Projects</button>
            <ul className="dropdown-menu">
              {projects?.map((project, index) => (
                <li key={`${project.id}-${index}`}>
                  <Link to={`/${project.id}`}>
                    {capitalizeWords(project.id.replace(/-/g, " "))}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;