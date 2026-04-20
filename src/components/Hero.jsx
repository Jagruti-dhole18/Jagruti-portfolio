import profile from "../assets/image.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay },
  },
});

const Hero = () => {
  return (
    <div className="pt-28 border-b border-neutral-900 pb-20" id="hero">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h2
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Jagruti Dhole</span>
          </motion.h2>

          <motion.div
            variants={container(0.4)}
            initial="hidden"
            animate="visible"
            className="mt-4 text-xl md:text-2xl font-semibold text-purple-400"
          >
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1500,
                "MERN Stack Developer",
                1500,
                "Backend Developer",
                1500,
                "Java Enthusiast",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className="mt-6 text-gray-400 max-w-lg text-sm md:text-base leading-relaxed mx-auto lg:mx-0"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
            className="mt-8 flex justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm md:text-base hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition text-sm md:text-base"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full"></div>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.6 }}
              src={profile}
              alt="Jagruti"
              className="relative w-[150px] h-[150px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] object-cover rounded-full border-4 border-purple-500 shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
