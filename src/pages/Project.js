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
        {project.subtitle && <h2 className="project-subtitle">{project.subtitle}</h2>}
        {project.description && <p className="project-description">{project.description}</p>}
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

      {project.technicalDetails && (
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
            {project.technicalDetails.numberOfGarments && (
              <li>
                <p>Number of Garments:</p>
                {project.technicalDetails.numberOfGarments}
              </li>
            )}
            {project.technicalDetails.technique && (
              <li>
                <p>Technique:</p>
                {project.technicalDetails.technique}
              </li>
            )}
            {project.technicalDetails.dimensions && (
              <li>
                <p>Dimensions:</p>
                {project.technicalDetails.dimensions}
              </li>
            )}
            {project.technicalDetails.installation && (
              <li>
                <p>Installation:</p>
                {project.technicalDetails.installation}
              </li>
            )}
            {project.technicalDetails.symbolism && (
              <li>
                <p>Symbolism:</p>
                {project.technicalDetails.symbolism}
              </li>
            )}
          </ul>
        </section>
      )}
    </div>
  );
}

export default Project;

// import { useParams } from 'react-router-dom';
// import projects from '../content/projects';
// import '../styles/project.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination } from 'swiper/modules';

// function Project() {
//   const { id } = useParams();
//   const project = projects.find((proj) => proj.id === id);

//   if (!project) return <p>Project not found.</p>;

//   const handleSlideChange = (swiper) => {
//     const currentSlideIndex = swiper.activeIndex;
//     const sectionId = `section-${currentSlideIndex}`;
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     }
//   };

//   return (
//     <div className="project-page">
//       <header className="project-header">
//         <h1 className="project-title">{project.title}</h1>
//         {project.subtitle && <h2 className="project-subtitle">{project.subtitle}</h2>}
//         {project.description && <p className="project-description">{project.description}</p>}
//       </header>

//       <div className="project-content">
//         <div className="project-left-column">
//           {project?.images?.map((image, idx) => (
//             <section
//               key={idx}
//               id={`section-${idx}`}
//               className="project-description-section"
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt || `Image ${idx + 1}`}
//                 className="project-image-static"
//               />
//               {image.description && <p className="image-description">{image.description}</p>}
//             </section>
//           ))}
//         </div>

//         <div className="project-right-column">
//           <Swiper
//             modules={[Navigation, Pagination]}
//             spaceBetween={16}
//             slidesPerView={1}
//             navigation
//             pagination={{ clickable: true }}
//             onSlideChange={handleSlideChange}
//           >
//             {project?.images?.map((image, idx) => (
//               <SwiperSlide key={idx}>
//                 <img
//                   src={image.src}
//                   alt={image.alt || `Slide ${idx + 1}`}
//                   className="project-image-slider"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Project;
