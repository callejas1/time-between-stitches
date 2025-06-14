import { motion } from 'framer-motion';
import artist from '../content/artist';
import '../styles/bio.css';

function Bio() {
  return (
    <motion.div
      className="bio-page"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bio-content">
        {/* Artist Bio Section */}
        <motion.div
          className="bio-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="rubik bio-name">{artist.name}</h1>
          <p>{ artist.bio }</p>
          <p className="portfolio-title">{artist.statement}</p>

        </motion.div>

        {/* Artist Portrait Section */}
        <motion.div
          className="bio-portrait"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          <img
            src="/assets/images/fashion-clash-dress.jpeg"
            alt="Portrait of Martin Callejas"
            className="bio-image"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Bio;