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
  { 
    name: 'C++', 
    icon: <SiCplusplus />,
    color: '#00599C'  // C++ blue
  },
  { 
    name: 'JavaScript', 
    icon: <FaJs />,
    color: '#F7DF1E'  // JavaScript yellow
  },
  { 
    name: 'Python', 
    icon: <FaPython />,
    color: '#3776AB'  // Python blue
  },
  { 
    name: 'React', 
    icon: <FaReact />,
    color: '#61DAFB'  // React light blue
  },
  { 
    name: 'REST API', 
    icon: <FaServer />,
    color: '#FF6C37'  // Orange
  },
  { 
    name: 'PostgreSQL', 
    icon: <DiPostgresql />,
    color: '#336791'  // PostgreSQL blue
  },
  { 
    name: 'HTML5', 
    icon: <FaHtml5 />,
    color: '#E34F26'  // HTML orange
  },
  { 
    name: 'CSS', 
    icon: <FaCss3Alt />,
    color: '#1572B6'  // CSS blue
  },
  { 
    name: 'Node.js', 
    icon: <FaNodeJs />,
    color: '#339933'  // Node.js green
  },
  { 
    name: 'Bootstrap', 
    icon: <FaBootstrap />,
    color: '#7952B3'  // Bootstrap purple
  },
  { 
    name: 'Tailwind', 
    icon: <BiLogoTailwindCss />,
    color: '#06B6D4'  // Tailwind cyan
  },
  { 
    name: 'Express', 
    icon: <FaServer />,
    color: '#000000'  // Express black
  },
  { 
    name: 'Flask', 
    icon: <FaPython />,
    color: '#000000'  // Flask black
  },
  { 
    name: 'MongoDB', 
    icon: <DiMongodb />,
    color: '#47A248'  // MongoDB green
  },
  { 
    name: 'MySQL', 
    icon: <DiMysql />,
    color: '#4479A1'  // MySQL blue
  },
  { 
    name: 'Firebase', 
    icon: <FaDatabase />,
    color: '#FFCA28'  // Firebase yellow
  }
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
            <div 
              className="tech-stack__icon"
              style={{ color: tech.color }}  // Apply brand color to icon
            >
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