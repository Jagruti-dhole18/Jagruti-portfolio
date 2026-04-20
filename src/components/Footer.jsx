import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 mt-20 py-10 px-6 text-white">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl font-semibold">Jagruti Dhole</h2>
          <p className="text-gray-400 text-sm mt-1">
            FullStack Developer
          </p>
          <p className="text-gray-500 text-xs mt-3">
            © 2026 All Rights Reserved
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 text-sm"
        >
          {["hero", "aboutme", "projects", "technologies", "experience", "coding", "contact"].map((section, i) => (
            <Link
              key={i}
              to={section}
              smooth={true}
              duration={800}
              className="cursor-pointer text-gray-400 hover:text-pink-400 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </motion.div>

      </div>

      <div className="mt-10 flex flex-col items-center gap-4">


        <p className="text-sm text-gray-500">
          Made with <span className="text-pink-500">❤</span> by Jagruti
        </p>

        <Link
          to="hero"
          smooth={true}
          duration={800}
          className="p-3 rounded-full bg-neutral-800 hover:bg-purple-500 transition cursor-pointer"
        >
          <FaArrowUp />
        </Link>

      </div>

    </footer>
  );
};

export default Footer;
