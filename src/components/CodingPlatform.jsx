import { FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from 'react-icons/si';
import { motion } from 'framer-motion';
import resume from '../assets/resume.pdf';

const codingPlatforms = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Jagruti_Dhole/',
    accent: '#f4c95d',
    label: 'DSA',
    icon: <SiLeetcode />,
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/user/jagrutid9d33/',
    accent: '#17a673',
    label: 'Practice',
    icon: <SiGeeksforgeeks />,
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/jagrutidhole18',
    accent: '#2ec866',
    label: 'Coding',
    icon: <FaHackerrank />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Jagruti-dhole18',
    accent: '#7c83ff',
    label: 'Projects',
    icon: <FaGithub />,
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/jagruti_18',
    accent: '#8b5cf6',
    label: 'Contest',
    icon: <SiCodechef />,
  },
];

const CodingPlatforms = () => {
  return (
    <div className="coding-shell" id="coding">
      <div className="section-header coding-header">
        <h2 className="section-title">Coding Profiles</h2>
      </div>

      <div className="coding-grid">
        {codingPlatforms.map((platform, index) => (
          <motion.a
            key={`${platform.name}-${index}`}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -7, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260 }}
            className="coding-card"
            style={{ '--platform-color': platform.accent }}
          >
            <div className="coding-icon">{platform.icon}</div>
            <strong>{platform.name}</strong>
            <span>{platform.label}</span>
          </motion.a>
        ))}
      </div>

      <div className="coding-actions">
        <motion.a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          className="coding-resume"
        >
          View Resume
        </motion.a>
      </div>
    </div>
  );
};

export default CodingPlatforms;
