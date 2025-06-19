import { useParams } from "react-router-dom";
import projects from "../content/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../styles/project.css";
import { useState } from "react";

function Project() {
  const { categoryId, subprojectId } = useParams();
  const category = projects.find((proj) => proj.id === categoryId);
  const subproject = category?.subprojects.find((sub) => sub.id === subprojectId);
  const project = projects.find((project) => project.id === subproject.parentId)
  const [currentDescription, setCurrentDescription] = useState(
    subproject?.images[0]?.description || ""
  );

  if (!subproject) return <p>Project not found.</p>;

  const handleSlideChange = (swiper) => {
    const activeSlideIndex = swiper.activeIndex;
    const activeImage = subproject.images[activeSlideIndex];
    setCurrentDescription(activeImage?.description || ""); // Update description dynamically
  };

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
          onSlideChange={handleSlideChange} // Update description on slide change
        >
          {subproject.images.map((image, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={image.src}
                alt={image.alt || `Slide ${idx + 1}`}
                className="project-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {currentDescription && (
        // <div className="image-description-container">
          <p className="image-description">{currentDescription}</p>
        // </div>
      )}
    </div>
  );
}

export default Project;