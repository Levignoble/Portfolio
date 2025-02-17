import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import '../styles/Contact.css';
import SectionSeparator from './SectionSeparator';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <SectionSeparator />
      
      <div className="contact__content">
        <motion.div 
          className="contact__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__description">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="contact__container">
          <motion.form 
            className="contact__form"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form__group">
              <input 
                type="text" 
                className="form__input" 
                id="name" 
                placeholder=" "
                required 
              />
              <label htmlFor="name" className="form__label">Your Name</label>
            </div>

            <div className="form__group">
              <input 
                type="email" 
                className="form__input" 
                id="email" 
                placeholder=" "
                required 
              />
              <label htmlFor="email" className="form__label">Email Address</label>
            </div>

            <div className="form__group">
              <textarea 
                className="form__textarea" 
                id="message" 
                placeholder=" "
                required
              ></textarea>
              <label htmlFor="message" className="form__label">Your Message</label>
            </div>

            <motion.button 
              className="form__button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div 
            className="contact__info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact__info-item">
              <FaPhone className="contact__info-icon" />
              <div>
                <h3>Phone</h3>
                <a href="tel:+919548783353">+91 9548783353</a>
              </div>
            </div>

            <div className="contact__info-item">
              <FaEnvelope className="contact__info-icon" />
              <div>
                <h3>Email</h3>
                <a href="mailto:sakshamsinghrawat6@gmail.com">sakshamsinghrawat6@gmail.com</a>
              </div>
            </div>

            <div className="contact__info-item">
              <FaWhatsapp className="contact__info-icon" />
              <div>
                <h3>WhatsApp</h3>
                <a href="https://wa.me/919548783353" target="_blank" rel="noopener noreferrer">
                  Ping me on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;