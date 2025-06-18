import { useParams } from 'react-router-dom';
import projects from '../content/projects'; // Import the projects array
import '../styles/project.css'; // Import project-specific styling
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper components
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation module styles
import { Navigation } from 'swiper/modules'; // Optional module for Navigation Buttons

function Project() {
  const { id } = useParams(); // Get the dynamic project ID from the URL
  const project = projects.find((proj) => proj.id === id); // Find the project by ID

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="project-page">
      <header className="project-header">
        <h1 className="project-title">{project.title}</h1>
      </header>

      {/* Image Slider */}
      <div className="project-image-container">
        <Swiper
          modules={[Navigation]} // Enable navigation module
          spaceBetween={16} // Space between slides
          slidesPerView={1} // Show one slide at a time
          navigation // Enable navigation buttons
        >
          {project.images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={image.src}
                alt={image.alt || `Project image ${idx + 1}`}
                className="project-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Poetic Statement Section */}
      {project.poeticStatement && (
        <section className="project-poetic-statement">
          <h2 >Poetic Statement</h2>
          <p>{project.poeticStatement}</p>
        </section>
      )}

      {/* Technical Details Section */}
      <section className="project-details">
        <h2>Technical Details</h2>
        <ul>
          {project.technicalDetails.materials?.length > 0 && (
            <li>
              <h4>Materials:</h4>
              <ul>
                {project.technicalDetails.materials.map((material, idx) => (
                  <li key={idx}>{material}</li>
                ))}
              </ul>
            </li>
          )}
          <li>
            <p>Number of Garments</p>
            {project.technicalDetails.numberOfGarments}
          </li>
          <li>
            <p>Technique:</p> {project.technicalDetails.technique}
          </li>
          <li>
            <p>Dimensions</p>: {project.technicalDetails.dimensions}
          </li>
          <li>
            <p>Installation:</p> {project.technicalDetails.installation}
          </li>
          <li>
            <p>Symbolism:</p> {project.technicalDetails.symbolism}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Project;