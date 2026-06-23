// src/pages/Projects.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Works.css';

const PROJECTS = [
  {
    id: '01',
    title: 'Shoppers Stop',
    desc: 'A full‑stack e‑commerce platform with admin and customer panels, powered by advanced database automation.',
    tags: ['PHP', 'Oracle'],
    status: 'live',
    year: '2021',
    link: '#',
    repo: '#',
    featured: true,
  },
  {
    id: '02',
    title: 'TWIN',
    desc: 'A smart robot that cares, protects, and connects — with real‑time monitoring blending AI. ',
    tags: ['Python', 'AI','Flask', 'OpenCv'],
    status: 'live',
    year: '2021',
    link: '#',
    repo: '#',
    featured: true,
  },
  {
    id: '03',
    title: 'Expense Tracker App',
    desc: 'A Flutter mobile app for tracking expenses with category management and visual spending insights.',
    tags: ['Dart', 'Firebase'],
    status: 'live',
    year: '2023',
    link: '#',
    repo: '#',
    featured: true,
  },
  // {
  //   id: '04',
  //   title: 'Gymnesia',
  //   desc: 'A gym website built with React 19, Vite, Bootstrap 5, and Axios, showcasing fitness services for a Dhaka-based fitness center',
  //   tags: ['React', 'Bootstrap', 'HTML', 'JS'],
  //   status: 'live',
  //   year: '2023',
  //   link: '#',
  //   repo: '#',



  //   featured: false,
  // },
  // {
  //   id: '05',
  //   title: 'The Dessert Club',
  //   desc: 'A basic dessert selling website built with  HTML, CSS, and JavaScript, hosted on GitHub Pages.',
  //   tags: ['HTML', 'CSS', 'JS','Firebase'],
  //   status: 'live',
  //   year: '2022',
  //   link: '#',
  //   repo: '#',
  //   featured: false,
  // },

];

const STATUS_MAP = {
  live:     { label: 'live',     color: 'var(--status-live)' },
  wip:      { label: 'wip',      color: 'var(--status-wip)' },
  archived: { label: 'archived', color: 'var(--status-archived)' },
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const filtered = filter === 'featured'
    ? PROJECTS.filter(p => p.featured)
    : PROJECTS;

  return (
    <section id="projects" className="section projects">
      <div className="container projects__inner">
        {/* Header */}
        <div className="projects__header">
          <div>
            <p className="section-label">02 — projects</p>
            <h2 className="section-title">Selected Work</h2>
          </div>

          {/* Filter pills */}
          <div className="projects__filters">
            {['all', 'featured'].map(f => (
              <button
                key={f}
                className={`projects__filter ${filter === f ? 'projects__filter--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Table header */}
        <div className="projects__table-head">
          <span>_id</span>
          <span>project</span>
          <span className="projects__col-tags">stack</span>
          <span>year</span>
          <span>status</span>
          <span>links</span>
        </div>

        {/* Rows */}
        <div className="projects__list">
          {filtered.map((project) => {
            const status = STATUS_MAP[project.status];
            return (
              <div key={project.id} className="project-row">
                <span className="project-row__id">{project.id}</span>

                <div className="project-row__info">
                  <span className="project-row__title">{project.title}</span>
                  <span className="project-row__desc">{project.desc}</span>
                </div>

                <div className="project-row__tags">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="project-row__tag">{tag}</span>
                  ))}
                </div>

                <span className="project-row__year">{project.year}</span>

                <span
                  className="project-row__status"
                  style={{ '--status-color': status.color }}
                >
                  <span className="project-row__status-dot" />
                  {status.label}
                </span>

                <div className="project-row__links">
                  <a href={project.link} className="project-row__link" title="Live site">↗</a>
                  <a href={project.repo} className="project-row__link" title="Repository">{ }</a>
                </div>


              </div>
            );
          })}
        </div>
        {/* Footer with See More button */}
        <div className="work__footer">
          <button 
            className="see-more-btn" 
            onClick={() => navigate('/projects')}
          >
            See More →
          </button>
        </div>
      </div>
    </section>
  );
}
