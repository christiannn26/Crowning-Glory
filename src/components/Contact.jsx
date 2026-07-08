import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const sectionRef = useScrollReveal();

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

        <form className="contact-form" data-reveal data-reveal-delay="3" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" id="contact-name" />
          <input type="email" placeholder="Your Email" id="contact-email" />
          <input type="text" placeholder="Subject" id="contact-subject" />
          <textarea placeholder="Your Message" id="contact-message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
