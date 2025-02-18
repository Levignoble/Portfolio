import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/Hero.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const timelineData = [
  {
    date: "October 2022",
    title: "Started Coding Journey"
  },
  {
    date: "July 2023",
    title: "Started Web Development Journey"
  },
  {
    date: "November 2023",
    title: "Became a Full Stack Developer"
  },
  {
    date: "April 2024",
    title: "Learnt deeplearning models and builtproject"
  },
  {
    date: "Januaary 2025",
    title: "Milestone-300 questions solved on Leetcode"
  }
];

const Hero = () => {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section className="hero">
      <div className="hero__content">
        <motion.h1 
          className="hero__name"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Saksham Singh Rawat
        </motion.h1>

        <div className="hero__sections">
          {/* Left Section - Image */}
          <motion.div 
            className="hero__section hero__section--left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="hero__image-container">
              <div className="animated-border"></div>
              <img 
                src="/profile.jpg" 
                alt="Saksham Singh Rawat" 
                className="hero__image"
              />
            </div>
          </motion.div>

          {/* Middle Section - Info */}
          <motion.div 
            className="hero__section hero__section--middle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="hero__title">Full Stack Developer</h2>
            <p className="hero__intro">
              A passionate Full Stack Developer with expertise in creating 
              seamless web experiences. I blend creativity with technical 
              prowess to build innovative solutions that make a difference.
            </p>
            
            <div className="hero__actions">
              <motion.a
                href="https://drive.google.com/file/d/14ShzkaYlhD051d-68sq2SgnGJErZI759/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__resume-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="12" y1="18" x2="12" y2="12"/>
                  <line x1="9" y1="15" x2="15" y2="15"/>
                </svg>
              </motion.a>

              <div className="hero__social-links">
                <a 
                  href="https://www.linkedin.com/in/saksham-singh-rawat-1344b1252/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hero__social-link"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/Levignoble" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hero__social-link"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://leetcode.com/u/Sakshamlev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hero__social-link"
                >
                  <SiLeetcode />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Timeline */}
          <motion.div 
            className="hero__section hero__section--right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="timeline">
              {timelineData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="timeline__item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="timeline__node"></div>
                  <div className="timeline__content">
                    <span className="timeline__date">{item.date}</span>
                    <h3 className="timeline__title">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


          <motion.div 
  className="hero__section herosectionextra"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.4 }}
>
  <div className="achievements">
    <h2 className="achievements__title">Achievements</h2>
    <ul className="achievements__list">
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        Built a full-stack web application
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        Solved 300+ Leetcode problems
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        Created a deep learning model for image classification
      </motion.li>
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        Open-source contributions on GitHub
      </motion.li>
    </ul>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;