import profile from '../assets/jagruti.jpeg';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const container = (delay) => ({
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, delay },
  },
});

const Hero = () => {
  return (
    <section className="section-shell hero-shell" id="hero">
      <div className="hero-layout">
        <div className="hero-copy">

          <motion.h1
            variants={container(0.08)}
            initial="hidden"
            animate="visible"
            className="hero-title display-font "
          >
            <span className="hero-line hero-line-top">Hi, I’m </span>
            <span className="hero-line hero-line-bottom"><span className="accent">Jagruti Dhole</span></span>
          </motion.h1>

          <motion.div
            variants={container(0.18)}
            initial="hidden"
            animate="visible"
            className="hero-role"
          >
            <span className="role-label">
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  1200,
                  'MERN Stack Developer',
                  1200,
                  'Backend Developer',
                  1200,
                  'Java Enthusiast',
                  1200,
                ]}
                speed={38}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          <motion.p
            variants={container(0.25)}
            initial="hidden"
            animate="visible"
            className="hero-description"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className="hero-actions"
          >
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-80}
              hashSpy={false}
              className="primary-button"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              hashSpy={false}
              className="secondary-button"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="portrait-wrap"
          >
            <div className="portrait-glow" aria-hidden="true" />
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              src={profile}
              alt="Jagruti Dhole"
              className="portrait-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
