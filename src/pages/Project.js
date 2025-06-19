import { useParams } from 'react-router-dom';
import projects from '../content/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../styles/project.css';

function Project() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) return <p>Project not found.</p>;

  return (
    <div className="project-page">
      <header className="project-header">
        <h1 className="project-title">{project.title}</h1>
        {project.description && (
          <div className="project-description">
            {project.description.split('.').map((sentence, idx) =>
              sentence.trim() ? (
                <span key={idx}>
                  {sentence}.
                  <br />
                </span>
              ) : null
            )}
          </div>
        ) }
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
    </div>
  );
}

export default Project;