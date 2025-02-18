import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from '@formspree/react';
import { SiBuymeacoffee } from 'react-icons/si';
import { FiSend } from 'react-icons/fi';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwqorkp");
  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      setShowToast(true);
      e.target.reset();
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="contact__header">
          <h1>Get In Touch</h1>
          <p>Have a project in mind? Let's work together to create something amazing.</p>
        </div>

        <div className="contact__wrapper">
          {/* Contact Form Section */}
          <motion.div 
            className="contact__form-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="section__header">
              <h2>Send Message</h2>
              <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
            </div>
            
            <form onSubmit={onSubmit} className="contact__form">
              <div className="form__group">
                <input type="text" name="name" required placeholder="Your Name" />
              </div>
              <div className="form__group">
                <input type="email" name="email" required placeholder="Your Email" />
              </div>
              <div className="form__group">
                <textarea name="message" required placeholder="Your Message"></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={state.submitting}
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                <FiSend />
              </motion.button>
            </form>
          </motion.div>

          {/* Support Section with Contact Info */}
          <div className="contact__right">
            <motion.div 
              className="contact__support"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="support__content">
                <h2>Support My Work</h2>
                <p>If you find my work helpful or want to support my journey, consider buying me a coffee!</p>
                <motion.a
                  href="https://buymeacoffee.com/sakshamlev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coffee-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <SiBuymeacoffee />
                  <span>Buy me a coffee</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              className="contact__info"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="info__item">
                <FaEnvelope className="info__icon" />
                <a href="mailto:sakshamsinghrawat6@gmail.com">sakshamsinghrawat6@gmail.com</a>
              </div>
              <div className="info__item">
                <FaWhatsapp className="info__icon" />
                <a href="https://wa.me/919548783353" target="_blank" rel="noopener noreferrer">
                  Ping Me!!
                </a>
              </div>
              <div className="info__item">
                <FaPhone className="info__icon" />
                <a href="tel:+919548783353">+91 9548783353</a>
              </div>
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {showToast && (
            <motion.div 
              className="toast"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              Message sent successfully! ✨
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Contact;