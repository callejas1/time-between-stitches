import { motion } from 'framer-motion';
import projects from '../content/projects';
import '../styles/home.css';
import artist from '../content/artist';

function Home() {
  return (
    <div id="first-heading" className="home-page">
      <h1 className="artist-name">{ artist.name }</h1>
      <blockquote className="artist-quote"> 
        "Each stitch is a silence being torn open. <br/>
        Between every thread, memory lingers. <br/>
        This is not an archive of paper, <br />
        but of garments, bodies, and absences. <br />
        The time here is not measured in hours, <br/>
        but in mourning, in thread, in movement."
        </blockquote>
        <h4 className='page-title-heading'>THE TIME BETWEEN STITCHES</h4>

      <div className="projects-wrapper">
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          {projects?.map((project, index) => (
            <motion.a
              href={`/${project.id}`} 
              key={`${project.id}-${index}`}
              className={`project-card project-card-${index}`}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="project-background"
                style={{
                  backgroundImage: `url(${project.cover})`,
                }}
              />
              <div className="project-info">
                <h2 className="project-card-title">{project.subtitle}</h2>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Home;