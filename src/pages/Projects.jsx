// src/pages/Projects.jsx
import '../styles/Projects.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PROJECTS = [
  {
    id: '01',
    title: 'Shoppers Stop',
    desc: 'A full‑stack, database‑intensive e‑commerce platform that features a dedicated Admin Panel for managing customer orders, products, suppliers, and deliveries. It also has a Customer Panel where users can browse product details, view images, and place orders. The system includes advanced database engineering — including triggers, stored procedures, relational constraints.',
    tags: ['PHP', 'Oracle', 'SQL'],
    status: 'live',
    year: '2021',
    image: '/images/projects/shoppers_2.png',
    link: '#',
    repo: 'https://github.com/afrinaK/Online-Business-Management',
  },
  {
    id: '02',
    title: 'TWIN',
    desc: 'A companion robot featuring owner and strangers detection, mood detection of the monitored person, reminders(By voice and app), security alerts,answering questions and real-time video monitoring. The hardware is powered by a Raspberry Pi with input devices, while the software stack combines Python, Flask, OpenCV, and AI models. A companion app(flutter) enables the owner to receive alerts, view video of certain intervals, and manage notifications.',
    tags: ['Python', 'Flask', 'OpenCV', 'AI' , 'Flutter'],
    status: 'live',
    year: '2021',
    image: '/images/projects/robot_collage_updated.png',
    link: '#',
    repo: 'https://github.com/afrinaK/Twin-main',
  },
  {
    id: '03',
    title: 'Expense Tracker App',
    desc: 'Expense Tracker App is a Flutter mobile application for managing personal finances. Users can login, add, edit, and delete expenses, organize them by category, and store data . The app provides visual insights into spending patterns through charts and summaries, helping users understand and control their expenses.',
    tags: ['Dart', 'Flutter', 'Firebase'],
    status: 'live',
    year: '2023',
    image: '/images/projects/expense_app.png',
    link: '#',
    repo: 'https://github.com/afrinaK/Expense_Tracker_App',
  },
  {
    id: '04',
    title: 'Gymnesia',
    desc: 'Gymnesia is a responsive gym website built with React 19 and Vite, designed to showcase a fitness centers services including personal training, aerobics, yoga, and zumba. Bootstrap 5 handles the layout and component structure, while Axios is integrated for dynamic data fetching. The project demonstrates component-driven UI development with a fast, modern build workflow powered by Vites HMR and bundling capabilities',
    tags: ['React', 'Bootstrap', 'JavaScript'],
    status: 'live',
    year: '2023',
    image: '/images/projects/rizz_cover.png',
    link: '#',
    repo: 'https://github.com/afrinaK/rizz-pharma',
  },
  {
    id: '05',
    title: 'The Dessert Club',
    desc: 'The Dessert Club is designed for an online dessert shop. It includes a homepage, menu, about, contact, and blog sections, along with prototype login/signup pages. The project focuses on clean layout, responsive design, and smooth navigation for a pleasant browsing experience.',
    tags: ['HTML', 'CSS', 'JS', 'Firebase'],
    status: 'live',
    year: '2022',
    image: '/images/projects/dessert_home.png',
    link: '#',
    repo: 'https://github.com/afrinaK/TheDessertClub.github.io',
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
    <a
      href={project.repo}
      target="_blank"
      rel="noreferrer"
      className="dl-proj-row__img-link"
    >
      <img
        src={project.image}
        alt={project.title}
        className="dl-proj-row__img"
        loading="lazy"
        onError={() => setErrored(true)}
      />
    </a>
  );
}


export default function Projects() {
  const { hash } = useLocation();

  // Scroll to the linked project card when arriving via /projects#01 etc.
  useEffect(() => {
    if (!hash) return;

    const id = hash.replace('#', '');
    // Wait a tick so the section has mounted/rendered before scrolling.
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);

    return () => clearTimeout(timer);
  }, [hash]);

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
              id={project.id}
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
                </div>

                <h3 className="dl-proj-row__title">{project.title}</h3>
                <p className="dl-proj-row__desc">{project.desc}</p>

                <div className="dl-proj-row__tags">
                  {project.tags.map((t) => (
                    <span key={t} className="dl-proj-row__tag">{t}</span>
                  ))}
                </div>

                <div className="dl-proj-row__links">

                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="dl-proj-row__link">
                      Github
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
