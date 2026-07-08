import useScrollReveal from '../hooks/useScrollReveal';

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=12898-12050+S+Willow+Ave,+Fresno,+CA+93725,+USA';

export default function Location() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section location" id="location" ref={sectionRef}>
      {/* Map background image with dark overlay */}
      <div className="location-bg">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&h=900&fit=crop"
          alt="Map background"
          className="location-bg-img"
        />
        <div className="location-bg-overlay" />
      </div>

      <h2 className="section-title" data-reveal data-reveal-delay="0">Location</h2>
      <p className="section-subtitle" data-reveal data-reveal-delay="1">Find Us</p>
      <div className="section-divider" data-reveal data-reveal-delay="2" />

      <div className="location-content">
        <div className="location-map" data-reveal data-reveal-delay="2">
          <div className="map-placeholder">
            <div className="map-pin">📍</div>
            <p>12898-12050 S Willow Ave</p>
            <p>Fresno, CA 93725, USA</p>
          </div>
        </div>

        <div className="location-details" data-reveal data-reveal-delay="3">
          <h3>Visit Our Salon</h3>
          <p>
            Located on South Willow Avenue in Fresno, our salon is your
            destination for luxury hair care. Ample free parking is available
            for all guests.
          </p>

          <div className="hours-list">
            <div className="hours-row">
              <span>Monday</span>
              <span>Closed</span>
            </div>
            <div className="hours-row">
              <span>Tuesday – Friday</span>
              <span>9:00 AM – 7:00 PM</span>
            </div>
            <div className="hours-row">
              <span>Saturday</span>
              <span>9:00 AM – 6:00 PM</span>
            </div>
            <div className="hours-row">
              <span>Sunday</span>
              <span>10:00 AM – 4:00 PM</span>
            </div>
          </div>

          <a
            className="location-cta"
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
