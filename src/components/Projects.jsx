import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-20" id="projects">
      
    
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-16 text-center text-4xl font-semibold text-white"
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-neutral-900 border border-neutral-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 hover:scale-[1.03] transition duration-300"
          >

            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-5">

              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-3">
                
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    <FaGithub size={20} />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Projects;
