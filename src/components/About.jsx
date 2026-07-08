import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <h2 className="section-title" data-reveal data-reveal-delay="0">About Us</h2>
      <p className="section-subtitle" data-reveal data-reveal-delay="1">Our Story</p>
      <div className="section-divider" data-reveal data-reveal-delay="2" />

      <div className="about-content">
        <div className="about-image-wrapper" data-reveal data-reveal-delay="2">
          <img
            className="about-image"
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop"
            alt="Salon interior with elegant decor"
          />
        </div>

        <div className="about-text" data-reveal data-reveal-delay="3">
          <h3>A Legacy of Elegance Since 2010</h3>
          <p>
            Crowning Glory was born from a simple belief — that everyone
            deserves to feel extraordinary. Founded in the heart of the city,
            our salon has grown into a destination for those who seek artistry,
            precision, and an unparalleled experience.
          </p>
          <p>
            Our team of master stylists brings together decades of expertise,
            continuous education, and a genuine passion for hair. We use only
            premium, salon-grade products to ensure your hair looks stunning
            and stays healthy.
          </p>

          <div className="about-stats">
            <div className="about-stat" data-reveal data-reveal-delay="4">
              <strong>15+</strong>
              <span>Years Experience</span>
            </div>
            <div className="about-stat" data-reveal data-reveal-delay="5">
              <strong>8k+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="about-stat" data-reveal data-reveal-delay="6">
              <strong>12</strong>
              <span>Expert Stylists</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
