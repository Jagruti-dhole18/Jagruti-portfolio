import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'technologies' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Coding', to: 'coding' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="footer-shell">
      <div className="footer-inner">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="footer-brand"
        >
          <h2>Jagruti Dhole</h2>
          <p>FullStack Developer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="footer-links"
        >
          {footerLinks.map((section) => (
            <Link
              key={section.name}
              to={section.to}
              smooth={true}
              duration={800}
              offset={-80}
              hashSpy={false}
              className="cursor-pointer"
            >
              {section.name}
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="footer-meta">
        <div className="footer-meta-text">
          <p className="footer-note">© {currentYear} Jagruti Dhole. All rights reserved.</p>
          <p className="footer-note footer-heart">Made with <span aria-label="love">❤</span> by Jagruti</p>
        </div>
        <Link to="hero" smooth={true} duration={800} offset={-80} hashSpy={false} className="back-to-top" aria-label="Back to top">
          <FaArrowUp />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
