// src/pages/About.jsx
import '../styles/About.css';

const STATS = [
  { value: '2+',  label: 'years exp.' },
  { value: '20+', label: 'projects' },
  { value: '5+', label: 'clients' },
  { value: '∞',   label: 'coffee cups' },
];

const TIMELINE = [
  { year: '2023', role: 'Software Developer', org: 'DataSoft Systems Bd Ltd', type: 'work' },
  { year: '2023', role: 'B.Sc. Computer Science', org: 'MIST', type: 'edu' },
  { year: '2021', role: 'Internship', org: 'Robi Axiata Ltd.', type: 'edu' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        {/* Header */}
        <div className="about__header">
          <p className="section-label">01 — about</p>
          <h2 className="section-title">Who I Am</h2>
        </div>

        {/* Grid body */}
        <div className="about__grid">
          {/* Bio block */}
          <div className="about__bio">
            <p className="about__text">
              I'm a full-stack developer based in <span className="about__hl">Dhaka, Bangladesh</span>,
              focused on building modern, performant web applications that people love to use.
            </p>
            <p className="about__text">
              My approach blends technical rigor with design sensibility — I believe great software
              should be both rock-solid under the hood and a pleasure to interact with. I enjoy
              working across the entire stack, from database schema design to pixel-perfect UIs.
            </p>
            <p className="about__text">
              Outside of code, I contribute to open source, write about web development,
              and obsess over mechanical keyboards.
            </p>

            <div className="about__links">
              <a href="#" className="about__link">↗ github</a>
              <a href="#" className="about__link">↗ linkedin</a>
              <a href="#" className="about__link">↗ blog</a>
            </div>
          </div>

          {/* Stats */}
          <div className="about__stats-col">
            <div className="about__stats">
              {STATS.map(({ value, label }) => (
                <div key={label} className="about__stat">
                  <span className="about__stat-value">{value}</span>
                  <span className="about__stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="about__timeline-section">
          <h3 className="about__timeline-heading">
            <span className="about__prompt">$ </span>git log --oneline
          </h3>
          <div className="about__timeline">
            {TIMELINE.map((item, i) => (
              <div key={i} className="about__timeline-item">
                <div className="about__timeline-year">{item.year}</div>
                <div className="about__timeline-dot" />
                <div className="about__timeline-content">
                  <span className="about__timeline-role">{item.role}</span>
                  <span className="about__timeline-org">— {item.org}</span>
                  <span className={`about__timeline-badge about__timeline-badge--${item.type}`}>
                    {item.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
