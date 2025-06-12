import { motion } from 'framer-motion';
import projects from '../content/projects';
import '../styles/projects.css';
import artist from '../content/artist';

function Home() {
  return (
    <div className="home-page">
      <h1 className="rubik-dirt-regular artist-name">{artist.name}</h1>

      {/* Projects Section */}
      <div className="projects-wrapper">
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          {projects?.map((project, index) => (
            <motion.a
              href={`/projects/${project.id}`} // Make entire card clickable
              key={`${project.id}-${index}`}
              className={`project-card project-card-${index}`}
              whileHover={{ scale: 1.05 }}
            >
              {/* Background image */}
              <div
                className="project-background"
                style={{
                  backgroundImage: `url(${project.images[0]?.src})`,
                }}
              />
              {/* Project Title */}
              <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Home;