import { useParams } from 'react-router-dom';
import projects from '../content/projects';
import '../styles/project.css'; 

function Project() {
  // Get the dynamic project ID from the URL
  const { id } = useParams();

  // Find the project object by ID
  const project = projects.find((proj) => proj.id === id);

  // If the project is not found
  if (!project) return <p>Project not found.</p>;

  // Display project details dynamically
  return (
    <div className="project-page">
      {/* Project Title and Subtitle */}
      <header className="project-header">
        <h1 className="project-title">{project.title}</h1>
      </header>

      {/* Project Image */}
      <div className="project-image-container">
        <img
          src={project.images[0]?.src}
          alt={project.images[0]?.alt || "Project image"}
          className="project-image"
        />
      </div>

      {/* Project Details */}
      <section className="project-details">
        <h2>Details</h2>
        <ul>
          { project.details}
        </ul>
      </section>

      {/* Poetic Statement */}
      {project.poeticStatement && (
        <section className="project-poetic-statement">
          <p>{project.poeticStatement}</p>
        </section>
      )}

      {/* Collaborators */}
      {project.collaborators && (
        <section className="project-collaborators">
          <h2>Collaborators</h2>
          <ul>
            {project.collaborators.map((collaborator, idx) => (
              <li key={idx}>{collaborator}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default Project;