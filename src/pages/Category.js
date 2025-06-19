import { useParams, Link } from "react-router-dom";
import projects from "../content/projects";
import { IoIosArrowBack } from "react-icons/io";
import "../styles/category.css";

function Category() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) return <p>Category not found.</p>;

  return (
    <div className="category-page">
      <header className="category-header">
        <Link to="/" className="back-button"> <IoIosArrowBack />
        Home</Link>
        <h1 className='project-title'>{project.title}</h1>
        <p className='project-description'>{project.description}</p>
      </header>
      <div className="subprojects-grid">
              { project.subprojects?.map((subproject) => (
            <div >
            <Link
                key={subproject.id}
                to={`/${id}/${subproject.id}`}
                className="subproject-card"
            >
                <img
                src={subproject.mainImage}
                alt={subproject.title}
                className="subproject-image"
                />
            </Link>
            <p>{ subproject.description }</p>
            </div>
        )) }
      </div>
    </div>
  );
}

export default Category;