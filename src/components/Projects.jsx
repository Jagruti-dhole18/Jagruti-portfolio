import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className="section-shell" id="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="project-stack">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={`${project.title}-${index}`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className={`project-case ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={`${tech}-${i}`} className="project-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    <span>Code</span>
                  </a>
                )}

                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
