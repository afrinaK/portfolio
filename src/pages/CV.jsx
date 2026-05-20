// src/pages/CV.jsx
import '../styles/CV.css';

const EXPERIENCE = [

  {
    role: 'Software Developer',
    org: 'DataSoft Systems Bangladesh Limited',
    period: 'Mar 2022 — Dec 2023',
    location: 'Dhaka, BD',
    points: [
      'Built company\'s design system from scratch, adopted across 6 product teams',
      'Migrated legacy class-based React app to hooks, improving TTI by 60%',
      'Integrated real-time features using WebSockets and SWR',
    ],
  },
  {
    role: 'Junior Developer',
    org: 'Freelance',
    period: '2019 — 2022',
    location: 'Dhaka, BD',
    points: [
      'Delivered 15+ client projects: landing pages, dashboards, REST APIs',
      'Built e-commerce platform handling 500+ daily transactions',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'B.Sc. Computer Science & Engineering',
    school: 'Bangladesh University of Engineering & Technology (MIST)',
    year: '2017 — 2021',
    note: 'CGPA 3.7 / 4.0',
  },
];

export default function CV() {
  return (
    <section id="cv" className="section cv">
      <div className="container cv__inner">
        {/* Header */}
        <div className="cv__header">
          <div>
            <p className="section-label">04 — cv</p>
            <h2 className="section-title">Curriculum Vitae</h2>
          </div>
          <a href="/cv.pdf" className="btn btn--ghost cv__download" download>
            ↓ download PDF
          </a>
        </div>

        <div className="cv__grid">
          {/* Experience */}
          <div className="cv__section">
            <h3 className="cv__section-title">
              <span className="cv__section-marker">// </span>experience
            </h3>

            <div className="cv__entries">
              {EXPERIENCE.map((job, i) => (
                <div key={i} className="cv-entry">
                  <div className="cv-entry__header">
                    <div className="cv-entry__meta">
                      <span className="cv-entry__role">{job.role}</span>
                      <span className="cv-entry__org">{job.org}</span>
                    </div>
                    <div className="cv-entry__aside">
                      <span className="cv-entry__period">{job.period}</span>
                      <span className="cv-entry__location">{job.location}</span>
                    </div>
                  </div>
                  <ul className="cv-entry__points">
                    {job.points.map((pt, j) => (
                      <li key={j} className="cv-entry__point">
                        <span className="cv-entry__bullet">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education + extras */}
          <div className="cv__sidebar">
            <div className="cv__section">
              <h3 className="cv__section-title">
                <span className="cv__section-marker">// </span>education
              </h3>
              {EDUCATION.map((edu, i) => (
                <div key={i} className="cv-edu">
                  <span className="cv-edu__degree">{edu.degree}</span>
                  <span className="cv-edu__school">{edu.school}</span>
                  <span className="cv-edu__year">{edu.year}</span>
                  <span className="cv-edu__note">{edu.note}</span>
                </div>
              ))}
            </div>

            <div className="cv__section">
              <h3 className="cv__section-title">
                <span className="cv__section-marker">// </span>highlights
              </h3>
              <div className="cv__chips">
                {[
                  'Open Source Contributor',
                  'Technical Writer',
                  'Speaker — DhakaTech 2023',
                  'Hacktoberfest Maintainer',
                  'ICPC Participant',
                ].map(h => (
                  <span key={h} className="chip">{h}</span>
                ))}
              </div>
            </div>

            <div className="cv__section">
              <h3 className="cv__section-title">
                <span className="cv__section-marker">// </span>languages
              </h3>
              <div className="cv__langs">
                {[
                  { lang: 'Bengali',  level: 'native' },
                  { lang: 'English',  level: 'fluent' },
                  { lang: 'Japanese', level: 'basic' },
                ].map(({ lang, level }) => (
                  <div key={lang} className="cv-lang">
                    <span className="cv-lang__name">{lang}</span>
                    <span className="cv-lang__level">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
