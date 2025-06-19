import { Link, useLocation } from "react-router-dom";
import "../styles/breadcrumb.css";

function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter((segment) => segment);

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const isLast = index === pathSegments.length - 1;
    const path = "/" + pathSegments.slice(0, index + 1).join("/");

    return (
      <li key={index} className={`breadcrumb-item ${isLast ? "active" : ""}`}>
        {isLast ? (
          <span>{segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</span>
        ) : (
          <Link to={path}>
            {segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} /
          </Link>
        )}
      </li>
    );
  });

  return (
    <nav className="breadcrumb-wrapper">
      <ul className="breadcrumb-list">
        <li className='breadcrumb-item'>
          <Link to="/">Home /</Link>
        </li>
        {breadcrumbItems}
      </ul>
    </nav>
  );
}

export default Breadcrumb;