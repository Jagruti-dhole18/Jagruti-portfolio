import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10"
    >
      <div className="flex items-center justify-between py-4 px-6 md:px-16 text-white">
        
       
        <h1 className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 hover:scale-105 transition duration-300 cursor-pointer">
          Jagruti
        </h1>

       
        <div className="flex items-center gap-6 text-xl md:text-2xl">
          
          <a
            href="https://www.linkedin.com/in/jagruti-dhole-667159299"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-125 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Jagruti-dhole18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 hover:scale-125 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/d_jagruti_18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 hover:scale-125 transition duration-300"
          >
            <FaInstagram />
          </a>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
