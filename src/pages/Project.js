import { useParams } from 'react-router-dom';
import projects from '../content/projects';

function Project() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className='project-page'>
      <h1>{project.title}</h1>
      <p>{project.poeticStatement}</p>

      <h3>Details:</h3>
      <ul>
        <li>Number of garments: {project.details.garments}</li>
        <li>Materials: {project.details.materials.join(', ')}</li>
        <li>Technique: {project.details.technique}</li>
        <li>Symbolism: {project.details.symbolism}</li>
      </ul>

      <h3>Performance Highlights</h3>
      <p>{project.performance?.description}</p>

      <h3>Collaborators</h3>
      <ul>
        {project.collaborators.map((collaborator, index) => (
          <li key={index}>{collaborator}</li>
        ))}
      </ul>
    </div>
  );
}

export default Project;