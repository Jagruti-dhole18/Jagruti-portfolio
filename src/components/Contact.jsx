import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT } from '../constants';
import zertifikate from '../assets/Zertifikate.pdf'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill all fields.');
      return;
    }

    setLoading(true);
    setStatus('Sending...');

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        setStatus('Message sent successfully.');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setStatus('Failed to send. Please try again.');
      });
  };

  return (
    <>
      <section className="section-shell german-shell">
        <div className="section-header">
          <h2 className="section-title">German-Certification.</h2>
        </div>

        <div className="german-card">
          <div className="german-badge">German A1</div>

          <p>
            I’ve successfully completed my German A1 certification and continue building my language skills while
            growing as a developer.
          </p>

          <div className="german-meta">
            <span>Listening</span>
            <span>Speaking</span>
            <span>Reading</span>
            <span>Writing</span>
          </div>

          <a href={zertifikate} className="german-button" >
            View License
          </a>
        </div>
      </section>

      <section className="section-shell" id="contact">
        <div className="section-header">
          <h2 className="section-title">Reach out</h2>
        </div>

        <div className="contact-grid">
        <motion.aside
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.45 }}
          className="contact-card"
        >
          <p className="section-copy contact-intro">
            I’m open to product engineering roles, frontend work, and collaborative build opportunities.
          </p>

          <div className="contact-list">
            <div className="contact-item">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>{CONTACT.address}</span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt aria-hidden="true" />
              <span>{CONTACT.phoneNo}</span>
            </div>

            <div className="contact-item">
              <FaEnvelope aria-hidden="true" />
              <span>{CONTACT.email}</span>
            </div>
          </div>
        </motion.aside>

        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.45 }}
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="input-field"
            aria-label="Your name"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="input-field"
            aria-label="Your email"
          />

          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            className="textarea-field"
            aria-label="Your message"
          ></textarea>

          <button type="submit" disabled={loading} className="primary-button" aria-label="Send message">
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status && <p className="form-status">{status}</p>}
        </motion.form>
      </div>
    </section>
    </>
  );
};

export default Contact;
