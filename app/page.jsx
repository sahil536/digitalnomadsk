'use client';

import { useState } from 'react';
import NetworkOrb from './components/NetworkOrb';

const services = [
  { icon: 'agent', label: 'Agentic AI', title: 'Agents that move your business forward', copy: 'Purpose-built AI agents that connect to your tools, reason through work and take meaningful action with your team.', note: 'From strategy to production', accent: '#54e2d2' },
  { icon: 'code', label: 'Digital products', title: 'Beautifully useful, built to last', copy: 'Web platforms and mobile applications shaped around real customer needs, robust systems and exceptional experiences.', note: 'Web · mobile · platforms', accent: '#9d83ff' },
  { icon: 'model', label: 'ML systems', title: 'Models made ready for the real world', copy: 'A practical path from promising data to reliable ML: experiments, fine-tuning, evaluation and dependable deployment.', note: 'Data → model → impact', accent: '#f083ca' },
  { icon: 'shield', label: 'Cyber security', title: 'Security that earns their trust', copy: 'Proactive security engineering that identifies risk early and protects the applications, data and people that matter.', note: 'Secure by design', accent: '#ff9b52' }
];

function ServiceIcon({ type }) {
  const icons = {
    agent: <><path d="M8 11V8a4 4 0 0 1 8 0v3"/><rect x="5" y="11" width="14" height="9" rx="3"/><path d="M2.5 14.5H5M19 14.5h2.5M9.5 15h.01M14.5 15h.01"/></>,
    code: <><path d="m9 8-4 4 4 4M15 8l4 4-4 4M13 6l-2 12"/></>,
    model: <><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16"/></>,
    shield: <><path d="M12 3 19 6v5c0 4.4-2.9 7.7-7 10-4.1-2.3-7-5.6-7-10V6l7-3Z"/><path d="m9.5 12 1.7 1.8 3.7-4"/></>
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[type]}</svg>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState('');

  const navigate = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const startProject = () => {
    setNotice('Tell us what you are building → admin@digitalnomadsk.com');
  };

  return (
    <main>
      <header className="nav">
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Nexa home">
          <span className="mark">✳</span><span>Digital Nomadsk</span>
        </button>
        <nav className={menuOpen ? 'open' : ''} aria-label="Primary navigation">
          <button onClick={() => navigate('work')}>Our Services</button>
          <button onClick={() => navigate('about')}>About us</button>
          <button onClick={() => navigate('contact')}>Contact</button>
        </nav>
        <button className="nav-cta" onClick={startProject}>Start a project <span>↗</span></button>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? '×' : '☰'}</button>
      </header>

      <section className="hero" id="about">
        <div className="hero-copy">
          <div className="eyebrow"><span className="spark">✳</span> Digital Nomadsk Studio</div>
          <h1>Intelligent systems <em>for the work</em> that matters.</h1>
          <div className="hero-bottom">
            <p>We design and engineer agentic applications, digital products and dependable AI infrastructure for ambitious organisations.</p>
            <button className="round-arrow" onClick={() => navigate('work')} aria-label="Explore our capabilities">↓</button>
          </div>
        </div>
        <NetworkOrb />
      </section>

      <section className="services" id="work">
        <div className="section-heading"><p className="section-label">Our Services</p><p>End-to-end thinking for the next version of your business.</p></div>
        <div className="service-grid">
          {services.map(({ icon, label, title, copy, note, accent }) => (
            <article className="service-card" key={label} style={{ '--accent': accent }}>
              <div className="service-icon"><ServiceIcon type={icon} /></div>
              <p className="service-label">{label}</p>
              <h3>{title}</h3><p className="service-copy">{copy}</p>
              <div className="service-footer"><span>{note}</span><span aria-hidden="true">↗</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing" id="contact">
        <p className="section-label">A good place to begin</p>
        <h2>What could your business become <span>with the right system behind it?</span></h2>
        <button className="contact-button" onClick={startProject}>Let’s make it real <span>↗</span></button>
        {notice && <p className="notice" role="status">{notice}</p>}
      </section>

      <footer><span>© 2026 Digital Nomadsk Studio</span><span>Built for what’s next.</span><span>India | Hong Kong</span></footer>
    </main>
  );
}
