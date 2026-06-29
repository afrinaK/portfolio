// src/pages/CV.jsx
import '../styles/CV.css';

const EXPERIENCE = [
  {
    role: 'Software Developer',
    org: 'DataSoft Systems Bangladesh Limited',
    period: 'Sept 2023 — Current',
    location: 'Dhaka, BD',
    points: [
      'Developed CH Terminal, a full-stack internal tool for metro rail operations — automating database-driven report generation, revenue calculation, and operational control workflows, cutting manual query time significantly.',
      'Built and enhanced the user dashboard of the RapidPass website, improving usability and commuter experience.',
      'Worked on a bKash application, delivering real-time transaction monitoring, risk profiling and secure transaction controls.',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'B.Sc. Computer Science & Engineering',
    school: 'Military Institute of Science and Technology (MIST)',
    year: '2019 — 2023',
  },
];

const SKILLS = ['PHP', 'Laravel', 'SQL', 'React', 'Angular', 'Spring Boot', 'Flutter'];

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

        <div className="cv__stack">

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

          {/* Education + Skills side by side */}
          
{/*         <div className="cv__section">
              <h3 className="cv__section-title">
                <span className="cv__section-marker">// </span>skills
              </h3>
              <div className="cv__chips">
                {SKILLS.map(s => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div> */}

            <div className="cv__section">
              <h3 className="cv__section-title">
                <span className="cv__section-marker">// </span>education
              </h3>
              {EDUCATION.map((edu, i) => (
                <div key={i} className="cv-edu">
                  <div className="cv-edu__header">
                    <div className="cv-edu__meta">
                      <span className="cv-edu__degree">{edu.degree}</span>
                      <span className="cv-edu__school">{edu.school}</span>
                      <span className="cv-edu__year">{edu.year}</span>
                    </div>
                    
                  </div>
                  {edu.note && <span className="cv-edu__note">{edu.note}</span>}
                </div>
              ))}
            </div>

          

        </div>
      </div>
    </section>
  );
}