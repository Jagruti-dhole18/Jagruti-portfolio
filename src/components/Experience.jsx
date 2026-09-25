import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section className="section-shell experience-shell" id="experience">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="timeline">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={`${exp.role}-${exp.company}-${index}`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className={`timeline-item ${index % 2 === 0 ? 'odd' : 'even'}`}
          >
            <div className="timeline-marker" aria-hidden="true" />

            <article className="timeline-card">
              <div className="timeline-meta">
                <span className="timeline-date">{exp.year}</span>
              </div>

              <h3 className="timeline-role">{exp.role}</h3>
              <p className="timeline-company">{exp.company}</p>
              <p className="timeline-description">{exp.description}</p>

              <div className="timeline-tech">
                {exp.technologies.map((tech, i) => (
                  <span key={`${tech}-${i}`}>{tech}</span>
                ))}
              </div>
            </article>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
