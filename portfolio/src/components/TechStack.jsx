import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaCss3Alt, 
  FaPython, 
  FaHtml5, 
  FaJs, 
  FaBootstrap,
  FaServer,
  FaDatabase
} from 'react-icons/fa';
import { DiMongodb, DiMysql, DiPostgresql } from 'react-icons/di';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { SiCplusplus } from 'react-icons/si';
import '../styles/TechStack.css';

const technologies = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Tailwind', icon: <BiLogoTailwindCss /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <FaServer /> },
  { name: 'Flask', icon: <FaPython /> },
  { name: 'PostgreSQL', icon: <DiPostgresql /> },
  { name: 'MongoDB', icon: <DiMongodb /> },
  { name: 'MySQL', icon: <DiMysql /> },
  { name: 'Firebase', icon: <FaDatabase /> }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="tech-stack">
      <h2>Tech Stack</h2>
      <div className="tech-stack__grid">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="tech-stack__item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
            }}
          >
            <div className="tech-stack__icon">
              {tech.icon}
            </div>
            <span>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;