import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const projects = [
  {
    title: "ATS Resume Builder",
    description: "An AI-powered resume builder that helps users create ATS-friendly resumes. Built with Next.js 14, MongoDB, and Clerk authentication. Features include AI-powered resume generation, real-time preview, and easy customization options.",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "MongoDB",
      "Clerk Auth",
      "TailwindCSS",
      "Gemini API"
    ],
    githubLink: "https://github.com/Levignoble/AtsResumeBuilder",
    liveLink: ""
  },
  {
    title: "OneBookMarker",
    description: "A browser extension that synchronizes bookmarks across all Chromium browsers. Uses AI to automatically categorize bookmarks and provides smart organization features. Includes tag-based search and bookmark analytics.",
    techStack: [
      "JavaScript",
      "Chrome Extensions API",
      "OpenAI API",
      "Firebase",
      "React",
      "Node.js"
    ],
    githubLink: "https://github.com/yourusername/OneBookMarker",
    liveLink: "https://chrome.google.com/webstore/dummy-link"
  },
  {
    title: "Fake News Detection",
    description: "A machine learning model using LSTM (Long Short-Term Memory) networks to detect fake news articles. Achieves 94% accuracy on test data. Features include real-time analysis, detailed explanation of detection logic, and API endpoints.",
    techStack: [
      "Python",
      "TensorFlow",
      "LSTM",
      "Flask",
      "NLP",
      "scikit-learn"
    ],
    githubLink: "https://github.com/yourusername/fake-news-lstm",
    liveLink: "https://fake-news-detector-demo.herokuapp.com"
  },
  {
    title: "Food Bank Management",
    description: "A comprehensive MERN stack application for managing food bank operations. Features include inventory tracking, donor management, distribution scheduling, and analytics dashboard. Supports multiple user roles and real-time updates.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux",
      "Material-UI"
    ],
    githubLink: "https://github.com/yourusername/food-bank-manager",
    liveLink: "https://food-bank-demo.netlify.app"
  }
];

const Projects = () => {
  // Split projects into rows of 2
  const firstRow = projects.slice(0, 2);
  const secondRow = projects.slice(2, 4);

  return (
    <section id="projects" className="projects">
      <div className="projects__content">
        <h2>Projects</h2>
        <div className="projects__grid">
          {/* First Row */}
          {firstRow.map((project, index) => (
            <motion.div
              key={index}
              className="projects__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="projects__tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="projects__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="projects__links">
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    <FaGithub /> View Code
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}

          {/* Second Row */}
          {secondRow.map((project, index) => (
            <motion.div
              key={index + 2}
              className="projects__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 2) * 0.2 }}
            >
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="projects__tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="projects__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="projects__links">
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    <FaGithub /> View Code
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;