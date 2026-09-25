import { useState } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'technologies' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Coding', to: 'coding' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jagruti-dhole-667159299',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      link: 'https://github.com/Jagruti-dhole18',
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      link: 'https://www.instagram.com/d_jagruti_18',
    },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="navbar-shell"
    >
      <div className="navbar-inner">
        <Link
          to="hero"
          smooth
          duration={800}
          offset={-70}
          className="brand-mark"
          aria-label="Scroll to the top section"
        >
          <motion.img
            whileHover={{ scale: 1.04 }}
            src={logo}
            alt="Jagruti Dhole"
            className="brand-logo"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth
                  duration={800}
                  offset={-80}
                  spy
                  hashSpy={false}
                  activeClass="active"
                  className="nav-link"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="desktop-actions">
          <div className="social-stack" aria-label="Social profiles">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="social-link"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className="mobile-menu"
        >
          <ul className="mobile-nav-list">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth
                  duration={800}
                  offset={-80}
                  hashSpy={false}
                  onClick={() => setIsOpen(false)}
                  className="mobile-nav-link"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>


          <div className="mobile-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="social-link"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;