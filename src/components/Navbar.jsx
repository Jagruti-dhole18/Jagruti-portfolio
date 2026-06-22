import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import logo from "../assets/logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "technologies" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Coding", to: "coding" },
    { name: "Contact", to: "contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/jagruti-dhole-667159299",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/Jagruti-dhole18",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/d_jagruti_18",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo Image */}
          <Link
            to="hero"
            smooth
            duration={800}
            offset={-80}
            className="cursor-pointer flex-shrink-0"
          >
            <motion.img
              whileHover={{ scale: 1.08 }}
              src={logo}
              alt="Jagruti Dhole"
              className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border-2 border-purple-500 shadow-lg shadow-purple-500/20"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth
                  duration={800}
                  offset={-80}
                  spy
                  activeClass="text-purple-400"
                  className="relative cursor-pointer text-sm font-medium text-gray-300 hover:text-white transition group"
                >
                  {item.name}

                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            
          

            {/* Social Links */}
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
        >
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth
                  duration={800}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-gray-300 hover:text-white cursor-pointer transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 bg-white/5 text-white"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>

            {/* Mobile Socials */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-300 hover:text-white transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;