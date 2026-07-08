export default function Hero() {
  return (
    <section className="hero" id="hero">
      <p className="hero-tagline">Premium Hair Salon Experience</p>
      <h1 className="hero-title">
        Where Beauty <em>Meets</em> Artistry
      </h1>
      <p className="hero-description">
        Discover a sanctuary of style and sophistication. Our master stylists
        craft looks that celebrate your unique beauty — because you deserve
        nothing less than extraordinary.
      </p>
      <a
        className="hero-cta"
        href="https://links.blissfulbeauty.online/widget/bookings/crowning-glory-booking"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book Our Services
      </a>
      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
