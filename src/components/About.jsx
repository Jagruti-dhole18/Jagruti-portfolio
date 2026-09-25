import aboutme from '../assets/aboutme.png';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section-shell" id="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-layout">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
          className="about-visual"
        >
          <img src={aboutme} alt="Jagruti Dhole" className="about-photo" />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.5 }}
          className="about-copy"
        >
         <p>
  I’m a <span className="about-highlight">Computer Engineering student</span> and
  <span className="about-highlight"> Full-Stack Developer</span> passionate about
  building scalable, responsive, and user-focused web applications.
</p>

<p>
  I enjoy turning ideas into real-world products and have hands-on experience
  developing applications using <span className="about-highlight">React,
  Next.js, Node.js, and Spring Boot</span>, from designing APIs and backend
  services to building interactive frontend experiences.
</p>

<p>
  My technical interests include <span className="about-highlight">Java,
  JavaScript, MERN, Microservices, REST APIs, MongoDB, MySQL, Docker,
  Kafka, and DevOps</span>. I continuously strengthen my problem-solving
  skills through projects, coding practice, and learning modern software
  development practices.
</p>
         
        </motion.div>
      </div>
    </section>
  );
};

export default About;
