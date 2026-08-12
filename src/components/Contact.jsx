import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', text: '' });

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/mk3bCADj48efgNhIj5Dc/webhook-trigger/b791b4c8-afae-4d6a-af14-1ab8cabcd08c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: 'Thank you. Your message has been received.' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact" ref={sectionRef}>
      <h2 className="section-title" data-reveal data-reveal-delay="0">Contact Us</h2>
      <p className="section-subtitle" data-reveal data-reveal-delay="1">Get In Touch</p>
      <div className="section-divider" data-reveal data-reveal-delay="2" />

      <div className="contact-wrapper">
        <div className="contact-info" data-reveal data-reveal-delay="2">
          <h3>We&rsquo;d Love to Hear From You</h3>
          <p>
            Whether you have a question about our services, pricing, or want
            to book an appointment, feel free to reach out. Our team is here
            to help you look and feel your best.
          </p>

          <div className="contact-detail" data-reveal data-reveal-delay="3">
            <div className="contact-detail-icon">📞</div>
            <div className="contact-detail-text">
              <span>Phone</span>
              <strong>(555) 123-4567</strong>
            </div>
          </div>

          <div className="contact-detail" data-reveal data-reveal-delay="4">
            <div className="contact-detail-icon">✉️</div>
            <div className="contact-detail-text">
              <span>Email</span>
              <strong>hello@crowningglory.com</strong>
            </div>
          </div>

          <div className="contact-detail" data-reveal data-reveal-delay="5">
            <div className="contact-detail-icon">🕐</div>
            <div className="contact-detail-text">
              <span>Hours</span>
              <strong>Tue – Sat, 9AM – 7PM</strong>
            </div>
          </div>
        </div>

        <form className="contact-form" data-reveal data-reveal-delay="3" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" id="contact-name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" id="contact-email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Your contact number" id="contact-phone" value={formData.phone} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" id="contact-message" value={formData.message} onChange={handleChange} required />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitMessage.text && (
            <p style={{
              color: submitMessage.type === 'success' ? 'var(--gold)' : '#ff4444',
              marginTop: '1rem',
              textAlign: 'center',
              fontWeight: 500
            }}>
              {submitMessage.text}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
