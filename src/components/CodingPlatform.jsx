import { FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { motion } from "framer-motion";
import resume from "../assets/resume.jpg";

const codingPlatforms = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Jagruti_Dhole/",
    icon: <SiLeetcode className="text-yellow-500 text-4xl" />,
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/jagrutid9d33/",
    icon: <SiGeeksforgeeks className="text-green-600 text-4xl" />,
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/jagrutidhole18",
    icon: <FaHackerrank className="text-green-500 text-4xl" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/Jagruti-dhole18",
    icon: <FaGithub className="text-white text-4xl" />,
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/jagruti_18",
    icon: <SiCodechef className="text-purple-600 text-4xl" />,
  },
];

const CodingPlatforms = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id="coding">
      
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-16 text-center text-4xl font-semibold text-white"
      >
        Coding Profiles
      </motion.h2>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        
        {codingPlatforms.map((platform, index) => (
          <motion.a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group"
          >
            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-neutral-900 border border-neutral-700 hover:border-purple-500 hover:shadow-purple-500/20 hover:shadow-lg transition duration-300">

              
              <div className="mb-3">
                {platform.icon}
              </div>

              
              <p className="text-sm text-gray-300 group-hover:text-white">
                {platform.name}
              </p>

            </div>
          </motion.a>
        ))}

      </div>

      <div className="mt-16 flex justify-center">
        <motion.a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-purple-500/30 transition duration-300"
        >
          View Resume
        </motion.a>
      </div>

    </div>
  );
};

export default CodingPlatforms;
