"use client";

import "./globals.css";
import { useState } from "react";

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
const [projectModalOpen, setProjectModalOpen] = useState(false);
const [scopeOpen, setScopeOpen] = useState(false);
const [projectScope, setProjectScope] = useState(
  "AI & Intelligent Systems"
);

const [formSubmitting, setFormSubmitting] = useState(false);
const [formMessage, setFormMessage] = useState("");

  const projectScopes = [
    "AI & Intelligent Systems",
    "Digital Products",
    "ML Systems",
    "Cyber Security",
    "Strategic Technology Advisory",
  ];

  return (
    <main className="site">
      <nav className="navbar">
        <a href="#top" className="brand">
          <span className="brand-mark">D</span>
          <span>
            Digital<span>Nomadsk</span>
            <small>PRIVATE DIGITAL ENGINEERING STUDIO</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#services">What we do</a>
          <a href="#about">Who we are</a>
          <a href="#work">Our work</a>
        </div>

        <div className="nav-actions">
          <a href="#contact" className="login-link">
            Let&apos;s talk
          </a>
          <button
            type="button"
            className="nav-button"
            onClick={() => setProjectModalOpen(true)}
          >
            Start a project
            <span>↗</span>
          </button>
          <button className="mobile-menu" aria-label="Open navigation">☰</button>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-grain" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            DIGITAL ENGINEERING STUDIO
          </div>

          <div className="hero-kicker">01 — DIGITAL TRANSFORMATION / PRIVATE PARTNERSHIP</div>

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
            <button
              type="button"
              className="primary-button"
              onClick={() => setProjectModalOpen(true)}
            >
              Book a conversation
              <span>↗</span>
            </button>
            <a href="#services" className="secondary-button">
              Explore our work
              <span>↓</span>
            </a>
          </div>

          <div className="hero-footerline">
            <span>STRATEGY · ENGINEERING · INTELLIGENCE</span>
            <span>EST. 2026</span>
          </div>
        </div>

        <div className="hero-card hero-card-left">
          <span>01</span>
          <div>
            <strong>AI-FIRST</strong>
            <small>Engineering</small>
          </div>
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

          <div className="intro-rule">
            <span>PRIVATE TECHNOLOGY PARTNERSHIP</span>
            <span>01 / 04</span>
          </div>
        </div>
      </section>

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
                <div className="service-icon">{service.icon}</div>
              </div>

              <div className="card-body">
                <span className="service-tag">{service.tag}</span>
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
            Great technology isn&apos;t about adding complexity. It&apos;s about
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

      <section className="cta" id="contact">
        <div className="cta-glow cta-glow-one" />
        <div className="cta-glow cta-glow-two" />

        <span className="section-label">04 / LET&apos;S BUILD</span>

        <h2>
          Have an idea?
          <br />
          <span>Let&apos;s make it real.</span>
        </h2>

        <p>
          Tell us what you&apos;re building, what you&apos;re solving or where you&apos;re
          stuck. We&apos;ll figure out the next step together.
        </p>

        <button
          type="button"
          className="cta-button"
          onClick={() => setProjectModalOpen(true)}
        >
          Start a conversation
          <span>↗</span>
        </button>
      </section>


      {/* PRIVATE PROJECT CONSULTATION MODAL */}
      {projectModalOpen && (
        <div
          className="project-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setProjectModalOpen(false);
            }
          }}
        >
          <div className="project-modal">
            <button
              type="button"
              className="project-modal-close"
              aria-label="Close consultation"
              onClick={() => setProjectModalOpen(false)}
            >
              ×
            </button>

            <div className="project-modal-seal">
              <span>A</span>
            </div>

            <div className="project-modal-label">CONFIDENTIAL ADVISORY</div>

            <h2 id="project-modal-title">
              Start a Private
              <br />
              <em>Project.</em>
            </h2>

            <p className="project-modal-intro">
              Share only what you are comfortable disclosing. A senior advisor
              will respond directly.
            </p>

            <form
  className="project-modal-form"
  onSubmit={async (event) => {
    event.preventDefault();

    // IMPORTANT:
    // Capture the form before await.
    const form = event.currentTarget;

    setFormSubmitting(true);
    setFormMessage("");

    const formData = new FormData(form);

    const data = {
      fullName: formData.get("fullName"),
      mobile: formData.get("mobile"),
      email: formData.get("email"),
      projectScope: formData.get("projectScope"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong."
        );
      }

      setFormMessage(
        "Your request has been received successfully."
      );

      // IMPORTANT:
      // Use captured form instead of event.currentTarget
      form.reset();

      setProjectScope("AI & Intelligent Systems");
      setScopeOpen(false);

      setTimeout(() => {
        setProjectModalOpen(false);
        setFormMessage("");
      }, 1800);

    } catch (error) {
      console.error("Form submission error:", error);

      setFormMessage(
        "Unable to submit your request. Please try again."
      );
    } finally {
      setFormSubmitting(false);
    }
  }}
>
  {/* FULL NAME */}
  <label>
    Your Full Name

    <input
      required
      name="fullName"
      placeholder="Your full name"
      autoComplete="name"
    />
  </label>


  {/* MOBILE + EMAIL */}
  <div className="project-modal-row">
    <label>
      Mobile

      <input
        required
        name="mobile"
        type="tel"
        placeholder="+91 00000 00000"
        autoComplete="tel"
      />
    </label>

    <label>
      Email

      <input
        required
        name="email"
        type="email"
        placeholder="principal@example.com"
        autoComplete="email"
      />
    </label>
  </div>


  {/* PROJECT SCOPE */}
  <label className="project-scope-field">
    Project Scope

    <div
      className={`project-scope ${
        scopeOpen ? "is-open" : ""
      }`}
    >
      <button
        type="button"
        className="project-scope-trigger"
        aria-haspopup="listbox"
        aria-expanded={scopeOpen}
        onClick={() =>
          setScopeOpen((open) => !open)
        }
      >
        <span>{projectScope}</span>

        <span className="project-scope-chevron">
          ⌄
        </span>
      </button>

      {scopeOpen && (
        <div
          className="project-scope-menu"
          role="listbox"
          aria-label="Project Scope"
        >
          {projectScopes.map((scope) => (
            <button
              type="button"
              role="option"
              aria-selected={
                projectScope === scope
              }
              className={`project-scope-option ${
                projectScope === scope
                  ? "selected"
                  : ""
              }`}
              key={scope}
              onClick={() => {
                setProjectScope(scope);
                setScopeOpen(false);
              }}
            >
              <span>{scope}</span>

              {projectScope === scope && (
                <span>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>

    <input
      type="hidden"
      name="projectScope"
      value={projectScope}
    />
  </label>


  {/* PROJECT DETAILS */}
<label className="project-message-field">
  Project Details

  <textarea
    name="message"
    placeholder="Tell us about your project, goals, requirements or challenges..."
    rows={5}
    maxLength={2000}
  />
</label>


  {/* CONSENT */}
  <label className="project-modal-consent">
    <input
      type="checkbox"
      name="consent"
      required
    />

    <span>
      I acknowledge the confidential nature
      of this request.
    </span>
  </label>


  {/* SUCCESS / ERROR MESSAGE */}
  {formMessage && (
    <div
      className={
        formMessage.includes("received")
          ? "form-success"
          : "form-error"
      }
    >
      {formMessage}
    </div>
  )}


  {/* SUBMIT */}
  <button
    type="submit"
    className="project-modal-submit"
    disabled={formSubmitting}
  >
    {formSubmitting
      ? "SUBMITTING..."
      : "CONFIRM REQUEST"}

    {!formSubmitting && (
      <span>→</span>
    )}
  </button>
</form>
          </div>
        </div>
      )}

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">D</span>
          Digital<span>Nomadsk</span>
        </div>

        <p>AI · Digital Products · ML · Cyber Security</p>

        <span>© 2026 Digital Nomadsk |Hong Kong</span>
      </footer>
    </main>
  );
}
