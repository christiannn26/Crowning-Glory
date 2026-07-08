import useScrollReveal from '../hooks/useScrollReveal';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&h=700&fit=crop',
    label: 'Balayage Artistry',
  },
  {
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=400&fit=crop',
    label: 'Elegant Updo',
  },
  {
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop',
    label: 'Vibrant Color',
  },
  {
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=400&fit=crop',
    label: 'Natural Waves',
  },
  {
    src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=400&fit=crop',
    label: 'Classic Cut',
  },
  {
    src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop',
    label: 'Bridal Styling',
  },
  {
    src: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=400&h=400&fit=crop',
    label: 'Glossy Blowout',
  },
  {
    src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=400&h=400&fit=crop',
    label: 'Bold Highlights',
  },
  {
    src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&h=400&fit=crop',
    label: 'Texture & Volume',
  },
];

export default function Gallery() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section gallery" id="gallery" ref={sectionRef}>
      <h2 className="section-title" data-reveal data-reveal-delay="0">Gallery</h2>
      <p className="section-subtitle" data-reveal data-reveal-delay="1">Our Work Speaks</p>
      <div className="section-divider" data-reveal data-reveal-delay="2" />

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div className="gallery-item" data-reveal data-reveal-delay={i + 2} key={i}>
            <img src={img.src} alt={img.label} loading="lazy" />
            <div className="gallery-overlay">
              <span>{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
