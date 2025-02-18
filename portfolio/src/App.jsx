import { FormspreeProvider } from '@formspree/react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SectionSeparator from './components/SectionSeparator';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './styles/global.css';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FormspreeProvider>
      <div className="app">
        <Navbar isScrolled={isScrolled} />
        <main>
          <Hero />
          <SectionSeparator />
          <AboutMe />
          <SectionSeparator />
          <Projects id="projects" />
          <SectionSeparator />
          <TechStack id="tech-stack" />
          <SectionSeparator />
          <Contact id="contact" />
          <Footer />
        </main>
      </div>
    </FormspreeProvider>
  );
}

export default App;