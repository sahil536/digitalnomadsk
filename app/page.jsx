import "./globals.css";

const services = [
  {
    number: "01",
    tag: "AGENTIC AI",
    title: "Agents that move your business forward",
    description:
      "Purpose-built AI agents that connect to your tools, reason through workflows and take meaningful action with your team.",
    footer: "Strategy → Intelligence → Action",
    icon: "✦",
    className: "cyan",
  },
  {
    number: "02",
    tag: "DIGITAL PRODUCTS",
    title: "Beautifully useful, built to last",
    description:
      "High-performance web platforms and mobile applications designed around real customer needs, scalable architecture and exceptional experiences.",
    footer: "Web · Mobile · Platforms",
    icon: "⌘",
    className: "violet",
  },
  {
    number: "03",
    tag: "ML SYSTEMS",
    title: "Models made ready for the real world",
    description:
      "From experiments to production-ready machine learning through evaluation, fine-tuning, data pipelines and dependable deployment.",
    footer: "Data → Model → Impact",
    icon: "◎",
    className: "pink",
  },
  {
    number: "04",
    tag: "CYBER SECURITY",
    title: "Security that earns their trust",
    description:
      "Proactive security engineering that identifies risk early and protects applications, data and the people who matter.",
    footer: "Secure by design",
    icon: "◇",
    className: "orange",
  },
];

export default function Home() {
  return (
    <main className="site">

      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="brand">
          <span className="brand-mark">D</span>
          <span>Digital<span>Nomadsk</span></span>
        </div>

        <div className="nav-links">
          <a href="#services">What we do</a>
          <a href="#about">Who we are</a>
          <a href="#work">Our work</a>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="login-link">
            Let's talk
          </a>
          <a href="#contact" className="nav-button">
            Start a project
            <span>↗</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />

        <div className="hero-content">

          <div className="eyebrow">
            <span className="eyebrow-dot" />
            DIGITAL ENGINEERING STUDIO
          </div>

          <h1>
            We build the
            <br />
            <em>next version</em>
            <br />
            of your business.
          </h1>

          <p className="hero-description">
            AI-native products, intelligent systems and secure digital
            experiences designed to turn ambitious ideas into real-world
            impact.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-button">
              Book a conversation
              <span>↗</span>
            </a>

            <a href="#services" className="secondary-button">
              Explore our work
              <span>↓</span>
            </a>
          </div>
        </div>

        {/* FLOATING INFO */}
        <div className="hero-card hero-card-left">
          <span>01</span>
          <strong>AI-FIRST</strong>
          <small>Engineering</small>
        </div>

        <div className="hero-card hero-card-right">
          <span className="pulse" />
          <div>
            <strong>BUILDING</strong>
            <small>What comes next</small>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div />
        </div>
      </section>

      {/* INTRO */}
      <section className="intro" id="about">
        <div className="intro-label">
          <span>01</span>
          WHO WE ARE
        </div>

        <div className="intro-content">
          <p className="intro-small">
            End-to-end thinking for the next version of your business.
          </p>

          <h2>
            Technology should create
            <span> momentum.</span>
          </h2>

          <p className="intro-text">
            We partner with ambitious companies to design, engineer and
            secure digital products that solve meaningful problems. From
            intelligent automation to production-grade platforms, we bring
            strategy and technology together.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">

        <div className="services-header">
          <div>
            <span className="section-label">02 / OUR SERVICES</span>
            <h2>
              Built for the
              <br />
              <span>real world.</span>
            </h2>
          </div>

          <p>
            From intelligent agents to secure platforms, we help businesses
            turn complex technology into simple, useful experiences.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article
              className={`service-card ${service.className}`}
              key={service.number}
            >
              <div className="card-top">
                <span className="card-number">{service.number}</span>

                <div className="service-icon">
                  {service.icon}
                </div>
              </div>

              <div className="card-body">
                <span className="service-tag">
                  {service.tag}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="card-footer">
                <span>{service.footer}</span>
                <span className="arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURE */}
      <section className="feature" id="work">

        <div className="feature-number">03</div>

        <div className="feature-content">
          <span className="section-label">HOW WE WORK</span>

          <h2>
            Think deeply.
            <br />
            <span>Build boldly.</span>
          </h2>

          <p>
            Great technology isn't about adding complexity. It's about
            removing it. We combine product thinking, engineering discipline
            and emerging AI capabilities to build systems that actually work.
          </p>

          <div className="feature-list">
            <div>
              <span>01</span>
              <strong>Understand</strong>
              <p>We uncover the real problem before writing the first line of code.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Design</strong>
              <p>We turn complex requirements into clear digital experiences.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Engineer</strong>
              <p>We build scalable, maintainable and production-ready systems.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Evolve</strong>
              <p>We continuously improve products using data, feedback and AI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">

        <div className="cta-glow" />

        <span className="section-label">04 / LET'S BUILD</span>

        <h2>
          Have an idea?
          <br />
          <span>Let's make it real.</span>
        </h2>

        <p>
          Tell us what you're building, what you're solving or where you're
          stuck. We'll figure out the next step together.
        </p>

        <a href="mailto:admin@digitalnomadsk.com" className="cta-button">
          Start a conversation
          <span>↗</span>
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <span className="brand-mark">D</span>
          Digital<span>Nomadsk</span>
        </div>

        <p>
          AI · Digital Products · ML · Cyber Security
        </p>

        <span>© 2026 Digital Nomadsk</span>
      </footer>

    </main>
  );
}