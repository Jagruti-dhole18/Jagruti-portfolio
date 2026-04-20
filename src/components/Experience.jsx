import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-20" id="experience">
      

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-16 text-center text-4xl font-semibold text-white"
      >
        Experience
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">


        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-purple-500/30" />

        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >


            <div className="absolute left-2 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black z-10" />


            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 px-6"
            >
              <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] transition duration-300">


                <p className="text-sm text-purple-400 mb-2">{exp.year}</p>


                <h3 className="text-lg font-semibold text-white">
                  {exp.role}
                </h3>


                <p className="text-sm text-gray-400 mb-3">
                  {exp.company}
                </p>


                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>


                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
