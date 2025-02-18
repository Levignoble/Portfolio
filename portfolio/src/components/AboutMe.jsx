import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import '../styles/AboutMe.css';

const achievements = [
  {
    title: "Competitive Programming",
    description: "Achieved 1800+ rating on CodeForces and solved 300+ problems on LeetCode, demonstrating strong problem-solving skills.",
    icon: <FaTrophy />
  },
  {
    title: "Hackathon Winner",
    description: "First place in National Level Hackathon for developing an innovative AI-powered healthcare solution.",
    icon: <FaTrophy />
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to major open source projects with 50+ merged pull requests and 100+ stars on personal projects.",
    icon: <FaTrophy />
  }
];

const AboutMe = () => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="about__description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p>
            As a techno-enthusiast and Full Stack Developer, I thrive on turning innovative ideas into reality. 
            My passion for learning and growing in the ever-evolving tech landscape drives me to constantly explore 
            new technologies and best practices. I believe in the power of clean code and user-centric design to 
            create impactful digital solutions. Whether it's crafting seamless user experiences or architecting 
            robust backend systems, I'm always excited to take on new challenges and push the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="about__achievements">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="achievement__icon">
                {achievement.icon}
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 