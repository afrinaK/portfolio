// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import '../styles/Home.css';

const ROLES = [
  'Full-Stack Developer',
  'Open Source Contributor',
  'Problem Solver',
  'UI/UX Enthusiast',
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="section home">
      <div className="container home__inner">
        {/* Left column */}
        <div className="home__content">
          <p className="home__greeting animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="home__prompt">$ </span>whoami
          </p>

          <h1 className="home__name animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Afrina <span className="home__name-accent">Kabir</span>
          </h1>

          <div className="home__role animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="home__role-prefix">// </span>
            <span className="home__role-text">{displayed}</span>
            <span className="home__cursor">▋</span>
          </div>

          <p className="home__bio animate-fade-up" style={{ animationDelay: '0.4s' }}>
            I craft clean, performant digital experiences. Passionate about the intersection
            of elegant code and thoughtful design.
          </p>

          <div className="home__actions animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="#projects"
              className="btn btn--primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              view work
            </a>
            <a
              href="#contact"
              className="btn btn--ghost"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              get in touch
            </a>
          </div>

          <div className="home__meta animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <span className="home__meta-item">
              <span className="home__meta-dot home__meta-dot--green" />
              available for work
            </span>
            <span className="home__meta-sep">·</span>
            <span className="home__meta-item">Dhaka, BD</span>
          </div>
        </div>

        {/* Right column — decorative terminal */}
        <div className="home__terminal animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="terminal">
            <div className="terminal__bar">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
              <span className="terminal__title">portfolio.sh</span>
            </div>
            <div className="terminal__body">
              <p><span className="t-prompt">~</span> <span className="t-cmd">cat about.json</span></p>
              <div className="terminal__json">
                <p><span className="t-brace">{'{'}</span></p>
                <p>{'  '}<span className="t-key">"name"</span>: <span className="t-str">"Afrina Kabir"</span>,</p>
                <p>{'  '}<span className="t-key">"role"</span>: <span className="t-str">"Full-Stack Dev"</span>,</p>
                <p>{'  '}<span className="t-key">"exp"</span>: <span className="t-num">2+</span>,</p>
                <p>{'  '}<span className="t-key">"remote"</span>: <span className="t-bool">true</span>,</p>
                <p>{'  '}<span className="t-key">"coffee"</span>: <span className="t-str">"essential"</span></p>
                <p><span className="t-brace">{'}'}</span></p>
              </div>
              <p className="t-gap"><span className="t-prompt">~</span> <span className="t-cmd">ls skills/</span></p>
              <p className="t-output">React&nbsp;&nbsp;Node&nbsp;&nbsp;TypeScript&nbsp;&nbsp;Python</p>
              <p className="t-output">Docker&nbsp;&nbsp;AWS&nbsp;&nbsp;PostgreSQL</p>
              <p className="t-gap"><span className="t-prompt">~</span> <span className="t-cursor">█</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="home__scroll">
        <div className="home__scroll-line" />
        <span className="home__scroll-text">scroll</span>
      </div>
    </section>
  );
}
