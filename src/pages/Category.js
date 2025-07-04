import { motion } from 'framer-motion';
import { useParams, Link } from "react-router-dom";
import projects from "../content/projects";
import "../styles/category.css";
import Breadcrumb from "../components/Breadcrumb";

function Category() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) return <p>Category not found.</p>;

  const formatDescription = (text) => {
    return text?.split(".").map((sentence, idx) => (
      sentence.trim() && (
        <span key={idx}>
          {sentence}.
          <br />
        </span>
      )
    ));
  };

  return (
    <motion.div
    className="category-page"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
      <Breadcrumb />
      <header className="category-header">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-description">{formatDescription(project.description)}</p>
      </header>
      <div className="subprojects-grid">
        {project.subprojects?.map((subproject, index) => (
          <div key={subproject.id + index}>
            <Link
              key={subproject.id}
              to={`/${id}/${subproject.id}`}
              className="subproject-card"
            >
              <div className="image-container">
                <img
                  src={subproject.mainImage}
                  alt={subproject.title}
                  className="subproject-image"
                />
                <div className="image-overlay">
                  <span className="image-text">
                    {subproject.images.length} Image{subproject.images.length > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
            </Link>
            <p className="subproject-description">{formatDescription(subproject.description)}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Category;