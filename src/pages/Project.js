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
        <h1 className="project-title rubik">{project.title}</h1>
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
          <h2 className='rubik'>Poetic Statement</h2>
          <p>{project.poeticStatement}</p>
        </section>
      )}

      {/* Technical Details Section */}
      <section className="project-details">
        <h2 className='rubik'>Technical Details</h2>
        <ul>
          {project.technicalDetails.materials?.length > 0 && (
            <li>
              <h4 className='rubik'>Materials:</h4>
              <ul>
                {project.technicalDetails.materials.map((material, idx) => (
                  <li key={idx}>{material}</li>
                ))}
              </ul>
            </li>
          )}
          <li> <p className='rubik'>Number of Garments</p>{project.technicalDetails.numberOfGarments}</li>
          <li><p className='rubik'>Technique:</p> {project.technicalDetails.technique}</li>
          <li><p className='rubik'>Dimensions</p>: {project.technicalDetails.dimensions}</li>
          <li><p className='rubik'>Installation:</p> {project.technicalDetails.installation}</li>
          <li> <p className='rubik'>Symbolism:</p> {project.technicalDetails.symbolism}</li>
        </ul>
      </section>
    </div>
  );
}

export default Project;