// src/pages/Projects.jsx
import { useState } from 'react';
import '../styles/Projects.css';

const PROJECTS = [
  {
    id: '01',
    title: 'NeuralBoard',
    desc: 'An AI-powered kanban system with intelligent task prioritization, natural language input, and team analytics dashboard.',
    tags: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
    status: 'live',
    year: '2024',
    link: '#',
    repo: '#',
    featured: true,
  },
  {
    id: '02',
    title: 'Codeshift CLI',
    desc: 'Developer CLI tool for automated codebase migrations and refactoring with AST-level transformations.',
    tags: ['TypeScript', 'Node.js', 'AST', 'Babel'],
    status: 'live',
    year: '2024',
    link: '#',
    repo: '#',
    featured: true,
  },
  {
    id: '03',
    title: 'Spendlens',
    desc: 'Personal finance tracker with ML-powered categorization, custom budgets, and beautiful spend visualizations.',
    tags: ['Next.js', 'Python', 'scikit-learn', 'Supabase'],
    status: 'live',
    year: '2023',
    link: '#',
    repo: '#',
    featured: true,
  },
  {
    id: '04',
    title: 'DocFlow',
    desc: 'Real-time collaborative document editor with conflict-free replicated data types and offline support.',
    tags: ['React', 'CRDTs', 'WebSockets', 'IndexedDB'],
    status: 'wip',
    year: '2023',
    link: '#',
    repo: '#',
    featured: false,
  },
  {
    id: '05',
    title: 'Templ8',
    desc: 'CLI scaffolding tool that generates production-ready project structures from community-curated templates.',
    tags: ['Go', 'CLI', 'Open Source'],
    status: 'live',
    year: '2022',
    link: '#',
    repo: '#',
    featured: false,
  },
  {
    id: '06',
    title: 'StormWatch',
    desc: 'Hyperlocal weather app using multiple API aggregation and custom alert engine built on WebSockets.',
    tags: ['React Native', 'Node.js', 'Weather API'],
    status: 'archived',
    year: '2022',
    link: '#',
    repo: '#',
    featured: false,
  },
];

const STATUS_MAP = {
  live:     { label: 'live',     color: '#3fb950' },
  wip:      { label: 'wip',      color: '#f0883e' },
  archived: { label: 'archived', color: '#484f58' },
};

export default function Projects() {
  const [filter, setFilter] = useState('all');

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
      </div>
    </section>
  );
}
