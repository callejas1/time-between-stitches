import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../content/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useCallback, useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/project.css";

function Project() {
  const { categoryId, subprojectId } = useParams();
  const category = projects.find((proj) => proj.id === categoryId);
  const subproject = category?.subprojects.find((sub) => sub.id === subprojectId);
  const project = projects.find((p) => p.id === subproject?.parentId);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!subproject) return <p>Project not found.</p>;

  const openModal = (index) => {
    setCurrentSlideIndex(index);
      setIsModalOpen(true);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
  const closeModal = useCallback(() => {
      setIsModalOpen(false);
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" & isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    
  }, [isModalOpen, closeModal]);

  return (
    <motion.div
      className="project-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Breadcrumb />
      <header className="project-header">
        <h1 className="project-title">{project?.title}</h1>
      </header>
      <div className="project-image-container">
        <div className="image-tiles-grid">
          {subproject.images.map((image, idx) => (
            <div
              key={idx}
              className="image-tiles-container"
              onClick={() => openModal(idx)}
            >
              <img
                src={image.src}
                alt={image.alt || `Image ${idx + 1}`}
                className="project-image-tiles"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal active"
          onClick={closeModal}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent propagation when clicking inside modal
          >
            <button
              className="close close-btn"
              onClick={closeModal} // Close modal when clicking the X button
            >
              &times;
            </button>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
                initialSlide={currentSlideIndex} // Jump to the clicked image in Swiper
            >
              {subproject.images.map((image, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={image.src}
                    alt={image.alt || `Slide ${idx + 1}`}
                    className="project-image-modal"
                  />
                  <p className="modal-description">
                    {image.description}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Project;