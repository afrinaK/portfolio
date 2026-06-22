// src/pages/Projects.jsx
import '../styles/Projects.css';
import { useState } from 'react';

const PROJECTS = [
  {
    id: '01',
    title: 'Online Business Management System',
    desc: 'A full-stack, database-intensive e-commerce platform built with PHP and Oracle, featuring advanced database engineering such as triggers, stored procedures, relational constraints, and automated workflows.',
    tags: ['PHP', 'Oracle', 'SQL'],
    status: 'live',
    year: '2021',
    image: '/images/projects/obms.png',
    link: '#',
    repo: '#',
  },
  {
    id: '02',
    title: 'TWIN',
    desc: 'A companion robot built with Raspberry Pi and Python, featuring mood detection, reminders, security alerts, and real-time video monitoring.',
    tags: ['Python', 'Flask', 'OpenCV', 'AI'],
    status: 'live',
    year: '2021',
    image: '/images/projects/twin.png',
    link: '#',
    repo: '#',
  },
  {
    id: '03',
    title: 'Expense Tracker App',
    desc: 'A Flutter mobile app for tracking and analyzing personal expenses, with category management, local storage, and visual spending insights.',
    tags: ['Dart', 'Flutter', 'Firebase'],
    status: 'live',
    year: '2023',
    image: '/images/projects/expense-tracker.png',
    link: '#',
    repo: '#',
  },
  {
    id: '04',
    title: 'Gymnesia',
    desc: 'A gym and fitness center website built with React 19, Vite, Bootstrap 5, and Axios, showcasing services for a Dhaka-based fitness center.',
    tags: ['React', 'Bootstrap', 'JavaScript'],
    status: 'live',
    year: '2023',
    image: '/images/projects/gymnesia.png',
    link: '#',
    repo: '#',
  },
  {
    id: '05',
    title: 'The Dessert Club',
    desc: 'A dessert-selling storefront site built with HTML, CSS, and JavaScript, with Firebase handling data, hosted on GitHub Pages.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    status: 'live',
    year: '2022',
    image: '/images/projects/dessert-club.png',
    link: '#',
    repo: '#',
  },
];

const STATUS_LABEL = {
  live: 'live',
  wip: 'in progress',
  archived: 'archived',
};

function ProjectMedia({ project }) {
  const [errored, setErrored] = useState(false);

  if (!project.image || errored) {
    return (
      <div className="dl-proj-row__media-placeholder">
        <span>{project.title}</span>
        <span>add screenshot</span>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={project.title}
      className="dl-proj-row__img"
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section dl-proj">
      <div className="container dl-proj__inner">

        {/* Header */}
        <div className="dl-proj__header animate-fade-up">
          <p className="section-label">$ ls ./projects</p>
          <h2 className="section-title">All Projects</h2>
          <p className="section-desc">
            A complete list of things I've built — from full-stack systems to small
            experiments.
          </p>
        </div>

        {/* Zigzag list */}
        <div className="dl-proj__list">
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              className={`dl-proj-row animate-fade-up ${i % 2 === 1 ? 'dl-proj-row--reverse' : ''}`}
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="dl-proj-row__media">
                <ProjectMedia project={project} />
                <div className="dl-proj-row__media-overlay" />
              </div>

              <div className="dl-proj-row__content">
                <div className="dl-proj-row__top">
                  <span className="dl-proj-row__index">{project.id}</span>
                  <span className="dl-proj-row__year">{project.year}</span>
                  <span
                    className="dl-proj-row__status"
                    style={{ '--status-color': `var(--status-${project.status})` }}
                  >
                    <span className="dl-proj-row__status-dot" />
                    {STATUS_LABEL[project.status]}
                  </span>
                </div>

                <h3 className="dl-proj-row__title">{project.title}</h3>
                <p className="dl-proj-row__desc">{project.desc}</p>

                <div className="dl-proj-row__tags">
                  {project.tags.map((t) => (
                    <span key={t} className="dl-proj-row__tag">{t}</span>
                  ))}
                </div>

                <div className="dl-proj-row__links">
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="dl-proj-row__link dl-proj-row__link--primary"
                    >
                      live ↗
                    </a>
                  )}

                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="dl-proj-row__link">
                      code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}