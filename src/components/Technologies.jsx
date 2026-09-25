import { RiReactjsLine } from 'react-icons/ri';
import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaCloud,
  FaServer,
  FaShieldAlt,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiC,
  SiMysql,
  SiTailwindcss,
  SiSpringboot,
  SiCplusplus,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRender,
} from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';

const makeBadge = (label, color = '#7dd3fc') => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '2.1rem',
      height: '1.6rem',
      padding: '0 0.45rem',
      borderRadius: '999px',
      fontSize: '0.68rem',
      fontWeight: 700,
      letterSpacing: '0.04em',
      color,
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.1)',
    }}
  >
    {label}
  </span>
);

const skillGroups = [
  {
    title: 'Programming Languages',
    items: [
      { icon: <FaJava />, name: 'Java', color: '#ED8B00' },
      { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
      { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
      { icon: <SiC />, name: 'C', color: '#A8B9CC' },
      { icon: <SiCplusplus />, name: 'C++', color: '#00599C' },
      
    ],
  },
  {
    title: 'Frontend',
    items: [
      { icon: <RiReactjsLine />, name: 'React.js', color: '#61DBFB' },
      { icon: <SiNextdotjs />, name: 'Next.js', color: '#111111' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#38BDF8' },
      { icon: makeBadge('MUI', '#007FFF'), name: 'Material UI', color: '#007FFF' },
      { icon: makeBadge('RDX', '#764ABC'), name: 'Redux', color: '#764ABC' },
      { icon: makeBadge('RTC', '#22C55E'), name: 'WebRTC', color: '#22C55E' },
      { icon: <FaHtml5 />, name: 'HTML', color: '#E34F26' },
      { icon: <FaCss3Alt />, name: 'CSS', color: '#1572B6' }
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: <SiSpringboot />, name: 'Spring Boot', color: '#6DB33F' },
      { icon: <SiNodedotjs />, name: 'Node.js', color: '#68A063' },
      { icon: <SiExpress />, name: 'Express.js', color: '#4d4d4d' },
      { icon: makeBadge('WS', '#8B5CF6'), name: 'WebSocket', color: '#8B5CF6' },
      { icon: makeBadge('JDBC', '#F97316'), name: 'JDBC', color: '#F97316' },
      { icon: makeBadge('MS', '#14B8A6'), name: 'Microservices', color: '#14B8A6' },
      { icon: makeBadge('O2', '#22C55E'), name: 'OAuth 2.0', color: '#22C55E' },
      { icon: makeBadge('KC', '#8B5CF6'), name: 'Keycloak', color: '#8B5CF6' },
      { icon: makeBadge('BA', '#14B8A6'), name: 'Better Auth', color: '#14B8A6' },
    ],
  },
  {
    title: 'Database',
    items: [
      { icon: <SiMongodb />, name: 'MongoDB', color: '#4DB33D' },
      { icon: <SiMysql />, name: 'MySQL', color: '#00758F' },
      { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
      { icon: <FaCloud />, name: 'Kubernetes', color: '#38BDF8' },
      { icon: makeBadge('GHA', '#181717'), name: 'GitHub Actions', color: '#181717' },
      { icon: makeBadge('JEN', '#D97706'), name: 'Jenkins', color: '#D97706' },
      { icon: <FaServer />, name: 'CI/CD', color: '#60A5FA' },
      { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
      { icon: <FaGithub />, name: 'GitHub', color: '#181717' },
      { icon: <BiLogoVisualStudio />, name: 'VS Code', color: '#007ACC' },
      { icon: <SiPostman />, name: 'Postman', color: '#FF6C37' },
      { icon: <SiVercel />, name: 'Vercel', color: '#000000' },
      { icon: <SiNetlify />, name: 'Netlify', color: '#00C7B7' },
      { icon: <SiRender />, name: 'Render', color: '#46ECA5' },
    ],
  },
  {
    title: 'Integrations',
    items: [
      { icon: makeBadge('K', '#4F46E5'), name: 'Kafka', color: '#4F46E5' },
      { icon: makeBadge('RMQ', '#FF6600'), name: 'RabbitMQ', color: '#FF6600' },
      { icon: makeBadge('E', '#0EA5E9'), name: 'Eureka', color: '#0EA5E9' },
      { icon: makeBadge('ING', '#10B981'), name: 'Inngest', color: '#10B981' },
    ],
  },
];

const Technologies = () => {
  return (
    <section className="section-shell" id="technologies">
      <div className="section-header">
        <h2 className="section-title">Tech-Stack</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.items.map((item) => (
                <div key={item.name} className="skill-item">
                  <span className="skill-icon" style={{ color: item.color }}>{item.icon}</span>
                  <span>{item.name}</span>
                  {item.badge && <span className="skill-badge">{item.badge}</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
