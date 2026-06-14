// src/pages/Projects.jsx
import { useState } from 'react';
import '../styles/Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Project Alpha',
    tag: 'full-stack',
    year: '2024',
    description:
      'A brief description of what this project does, the problem it solves, and anything notable about the approach or stack.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: '/images/project-alpha.png', // replace with your image path
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    id: 2,
    title: 'Project Beta',
    tag: 'frontend',
    year: '2023',
    description:
      'Another project description. Keep it to two or three sentences — enough to explain the idea and your role.',
    tech: ['Vue', 'Tailwind', 'Firebase'],
    image: '/images/project-beta.png',
    links: {
      live: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    id: 3,
    title: 'Project Gamma',
    tag: 'backend',
    year: '2023',
    description:
      'Description of a backend-focused project. Mention scale, interesting constraints, or architecture decisions.',
    tech: ['Laravel', 'MySQL', 'Redis'],
    image: '/images/project-gamma.png',
    links: {
      github: 'https://github.com',
    },
  },
];

const FILTERS = ['all', 'full-stack', 'frontend', 'backend'];

export default function Projects() {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.tag === active);

  return (
    <section id="projects" className="section projects">

      {/* Background glow */}
      <div className="projects__glow" aria-hidden="true" />

      <div className="container projects__inner">

        {/* ── Header ── */}
        <div className="projects__header animate-fade-up">
          <p className="projects__eyebrow">
            <span className="home__prompt">$ </span>ls ./projects
          </p>
          <h2 className="projects__heading">
            <span className="home__name-accent">Projects</span>
          </h2>

        </div>

        {/* ── Filters ── */}
{/*         <div className="projects__filters animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`projects__filter ${active === f ? 'projects__filter--active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div> */}

        {/* ── Grid ── */}
        <div className="projects__grid">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className="project-card animate-fade-up"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              {/* Image */}
              <div className="project-card__img-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__img"
                  loading="lazy"
                />
                <div className="project-card__img-overlay" />

                {/* Hover links */}
                <div className="project-card__hover-links">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__icon-link"
                      aria-label="View live site"
                    >
                      ↗
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__icon-link"
                      aria-label="View source"
                    >
                      gh
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__tag">{project.tag}</span>
                  <span className="project-card__year">{project.year}</span>
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                <ul className="project-card__tech">
                  {project.tech.map((t) => (
                    <li key={t} className="project-card__tech-item">{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
