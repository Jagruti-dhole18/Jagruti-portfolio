import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { SiJavascript, SiC, SiMysql, SiTailwindcss, SiSpringboot, SiThymeleaf, SiBootstrap, SiPhp, SiCplusplus, SiTypescript, SiExpress, SiPostgresql, SiNodedotjs, SiMongodb, SiPython, SiNextdotjs, SiPostman, SiVercel, SiNetlify, SiRender } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { motion } from "framer-motion";

const techStack = [
  { icon: <RiReactjsLine />, name: "React", color: "text-cyan-400" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-400" },
  { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-400" },
  { icon: <SiBootstrap />, name: "Bootstrap", color: "text-purple-500" },

  { icon: <SiSpringboot />, name: "Spring Boot", color: "text-green-500" },
  { icon: <SiThymeleaf />, name: "Thymeleaf", color: "text-green-600" },
  { icon: <FaJava />, name: "Java", color: "text-red-500" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-400" },
  { icon: <SiExpress />, name: "Express.js", color: "text-gray-300" },

  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-400" },
  { icon: <SiMysql />, name: "MySQL", color: "text-blue-600" },

  { icon: <SiPython />, name: "Python", color: "text-yellow-300" },
  { icon: <SiC />, name: "C", color: "text-blue-700" },
  { icon: <SiCplusplus />, name: "C++", color: "text-blue-500" },
  { icon: <SiPhp />, name: "PHP", color: "text-indigo-400" },
];

const tools = [
  { icon: <FaGitAlt />, name: "Git", color: "text-orange-500" },
  { icon: <FaGithub />, name: "GitHub", color: "text-white" },
  { icon: <FaDocker />, name: "Docker", color: "text-blue-400" },
  { icon: <SiPostman />, name: "Postman", color: "text-orange-400" },
  { icon: <BiLogoVisualStudio />, name: "VS Code", color: "text-blue-500" },
  { icon: <SiVercel />, name: "Vercel", color: "text-white" },
  { icon: <SiNetlify />, name: "Netlify", color: "text-green-400" },
  { icon: <SiRender />, name: "Render", color: "text-purple-400" },
];

const MarqueeRow = ({ items, reverse = false }) => {
  
  
  const duration = items.length * 3; 

  return (
    <div className="relative w-full overflow-hidden">
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: duration, 
          ease: "linear",
        }}
        className="flex gap-6 w-max"
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[120px] bg-neutral-900 border border-neutral-700 rounded-2xl p-4 hover:scale-110 hover:shadow-purple-500/30 hover:shadow-lg transition duration-300"
          >
            <div className={`text-4xl ${item.color}`}>{item.icon}</div>
            <p className="text-sm text-gray-300 mt-2">{item.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id="technologies">
      
      <h2 className="my-16 text-center text-4xl text-white font-semibold">
        Technologies & Tools
      </h2>

      <MarqueeRow items={techStack} />

      <div className="mt-10">
        <MarqueeRow items={tools} reverse />
      </div>

    </div>
  );
};

export default Technologies;
