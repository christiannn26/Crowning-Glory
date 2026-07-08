import useScrollReveal from '../hooks/useScrollReveal';

const services = [
  {
    icon: '✂️',
    title: 'Haircuts & Styling',
    description:
      'From classic cuts to modern trends, our stylists craft looks tailored to your face shape, lifestyle, and personality.',
    price: 'From $65',
  },
  {
    icon: '🎨',
    title: 'Color & Highlights',
    description:
      'Balayage, ombré, full color, or subtle highlights — we use premium products that deliver vibrant, long-lasting results.',
    price: 'From $120',
  },
  {
    icon: '💆',
    title: 'Treatments & Repair',
    description:
      'Keratin smoothing, deep conditioning, and restorative treatments that bring damaged hair back to life.',
    price: 'From $85',
  },
  {
    icon: '👰',
    title: 'Bridal & Events',
    description:
      'Make your special day unforgettable. We offer bridal packages with trials, updos, and on-location styling.',
    price: 'From $200',
  },
  {
    icon: '💇',
    title: 'Blowouts & Waves',
    description:
      'Silky blowouts, bouncy curls, or effortless beach waves — perfect for everyday glamour or a night out.',
    price: 'From $45',
  },
  {
    icon: '🧴',
    title: 'Scalp Therapy',
    description:
      'Targeted scalp treatments using botanical ingredients to promote healthy growth and deep relaxation.',
    price: 'From $75',
  },
];

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="services" ref={sectionRef}>
      <h2 className="section-title" data-reveal data-reveal-delay="0">Our Services</h2>
      <p className="section-subtitle" data-reveal data-reveal-delay="1">What We Offer</p>
      <div className="section-divider" data-reveal data-reveal-delay="2" />

      <div className="services-grid">
        {services.map((service, i) => (
          <div className="service-card" data-reveal data-reveal-delay={i + 2} key={i}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-price">{service.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
