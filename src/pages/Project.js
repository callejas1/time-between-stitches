import { useParams } from 'react-router-dom';
import projects from '../content/projects'; // Import the projects array
import '../styles/project.css'; // Import project-specific styling

function Project() {
  const { id } = useParams(); // Get the dynamic project ID from the URL
  const project = projects.find((proj) => proj.id === id); // Find the project by ID

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="project-page">
      <header className="project-header">
        <h1 className="project-title">{project.title}</h1>
      </header>

      <div className="project-image-container">
        <img
          src={project.images[0]?.src}
          alt={project.images[0]?.alt || "Project image"}
          className="project-image"
        />
      </div>

      {/* Poetic Statement Section */}
      {project.poeticStatement && (
        <section className="project-poetic-statement">
          <h2>Poetic Statement</h2>
          <p>{project.poeticStatement}</p>
        </section>
      )}

      {/* Technical Details Section */}
      <section className="project-details">
        <h2>Technical Details</h2>
        <ul>
          {project.technicalDetails.materials?.length > 0 && (
            <li>
              <strong>Materials:</strong>
              <ul>
                {project.technicalDetails.materials.map((material, idx) => (
                  <li key={idx}>{material}</li>
                ))}
              </ul>
            </li>
          )}
          <li><strong>Number of Garments:</strong> {project.technicalDetails.numberOfGarments}</li>
          <li><strong>Technique:</strong> {project.technicalDetails.technique}</li>
          <li><strong>Dimensions:</strong> {project.technicalDetails.dimensions}</li>
          <li><strong>Installation:</strong> {project.technicalDetails.installation}</li>
          <li><strong>Symbolism:</strong> {project.technicalDetails.symbolism}</li>
        </ul>
      </section>
    </div>
  );
}

export default Project;