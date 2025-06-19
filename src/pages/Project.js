import { useParams } from 'react-router-dom';
import projects from '../content/projects';
import '../styles/project.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

function Project() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="project-page">
      <header className="project-header">
        <h1 className="project-title">{project.title}</h1>
      </header>
      <div className="project-image-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
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
      {project.poeticStatement && (
        <section className="project-poetic-statement">
          <h2>Poetic Statement</h2>
          <p>{project.poeticStatement}</p>
        </section>
      )}
      <section className="project-details">
        <h2>Technical Details</h2>
        <ul>
          {project.technicalDetails?.materials?.length > 0 && (
            <li>
              <h4>Materials:</h4>
              <ul>
                {project?.technicalDetails?.materials?.map((material, idx) => (
                  <li key={idx}>{material}</li>
                ))}
              </ul>
            </li>
          )}
          <li>
            <p>Number of Garments</p>
            {project.technicalDetails?.numberOfGarments}
          </li>
          <li>
            <p>Technique:</p> {project.technicalDetails?.technique}
          </li>
          <li>
            <p>Dimensions</p>: {project.technicalDetails?.dimensions}
          </li>
          <li>
            <p>Installation:</p> {project.technicalDetails?.installation}
          </li>
          <li>
            <p>Symbolism:</p> {project.technicalDetails?.symbolism}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Project;