// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import '../styles/Home.css';

const ROLES = [
  'Full-Stack Developer',
  'Problem Solver',
  'Travel Enthusiast',
];

const STATS = [
  { value: '2+',  label: 'years exp.' },
  { value: '20+', label: 'projects' },
  { value: '5+',  label: 'clients' },
  { value: '∞',   label: 'coffee cups' },
];

const TIMELINE = [
  { year: '2023', role: 'Software Developer',    org: 'DataSoft Systems Bd Ltd', type: 'work' },
  { year: '2023', role: 'B.Sc. Computer Science', org: 'MIST',                   type: 'edu'  },
  { year: '2021', role: 'Internship',             org: 'Robi Axiata Ltd.',        type: 'edu'  },
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

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

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="section home">

      {/* ── Hero ───────────────────────────────────────────── */}
      <div className="container home__inner">
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

          {/* ── Divider ── */}
          <hr className="home__divider animate-fade-up" style={{ animationDelay: '0.35s' }} />

          {/* ── Bio + Stats grid ── */}
          <div className="home__grid animate-fade-up" style={{ animationDelay: '0.4s' }}>

            {/* Bio */}
            <div className="home__bio">
              <p className="home__bio-text">
                I'm a full-stack developer based in{' '}
                <span className="home__hl">Dhaka, Bangladesh</span>, focused on building
                modern, performant web applications that people love to use.
              </p>
              <p className="home__bio-text">
                My approach blends technical rigor with design sensibility — I believe great
                software should be rock-solid under the hood and a pleasure to interact with.
                
              </p>
{/*               <p className="home__bio-text">
                Outside of code, I contribute to open source, write about web development,
                and obsess over mechanical keyboards.I enjoy working across the entire stack, from database schema design to
                pixel-perfect UIs.
              </p> */}

              <div className="home__actions">
                <a href="#projects" className="btn btn--primary" onClick={scrollTo('projects')}>
                  view work
                </a>
                <a href="#contact" className="btn btn--ghost" onClick={scrollTo('contact')}>
                  get in touch
                </a>
{/*                 <a href="#" className="btn btn--ghost">↗ github</a>
                <a href="#" className="btn btn--ghost">↗ linkedin</a> */}
              </div>

              <div className="home__meta">
                <span className="home__meta-item">
                  <span className="home__meta-dot home__meta-dot--green" />
                  available for work
                </span>
                <span className="home__meta-sep">·</span>
                <span className="home__meta-item">Dhaka, BD</span>
              </div>
            </div>

            {/* Stats */}
            <div className="home__stats">
              {STATS.map(({ value, label }) => (
                <div key={label} className="home__stat">
                  <span className="home__stat-value">{value}</span>
                  <span className="home__stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Timeline ── */}
          <div className="home__timeline-section animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="home__timeline-heading">
              <span className="home__prompt">$ </span>git log --oneline
            </h3>
            <div className="home__timeline">
              {TIMELINE.map((item, i) => (
                <div key={i} className="home__timeline-item">
                  <div className="home__timeline-year">{item.year}</div>
                  <div className="home__timeline-dot" />
                  <div className="home__timeline-content">
                    <span className="home__timeline-role">{item.role}</span>
                    <span className="home__timeline-org">— {item.org}</span>
                    <span className={`home__timeline-badge home__timeline-badge--${item.type}`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              ))}
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
