// src/pages/Projects.jsx
import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Works.css';
import { FiStar, FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  SiPhp, SiPython, SiFlask, SiOpencv,
  SiDart, SiFirebase, SiReact, SiBootstrap,
  SiHtml5, SiCss, SiJavascript,
} from 'react-icons/si';

const TAG_ICON_MAP = {
  PHP:        { icon: SiPhp,        color: '#777BB4' },
  Python:     { icon: SiPython,     color: '#3776AB' },
  Flask:      { icon: SiFlask,      color: '#ffffff' },
  OpenCv:     { icon: SiOpencv,     color: '#5C3EE8' },
  Dart:       { icon: SiDart,       color: '#0175C2' },
  Firebase:   { icon: SiFirebase,   color: '#FFCA28' },
  React:      { icon: SiReact,      color: '#61DAFB' },
  Bootstrap:  { icon: SiBootstrap,  color: '#7952B3' },
  HTML:       { icon: SiHtml5,      color: '#E34F26' },
  CSS:        { icon: SiCss,        color: '#1572B6' },
  JS:         { icon: SiJavascript, color: '#F7DF1E' },
};

const PROJECTS = [
  {
    id: '01',
    slug: 'shoppers-stop',
    title: 'Shoppers Stop',
    image: '/images/projects/shoppers.png',
    tags: ['PHP', 'Oracle'],
  },
  {
    id: '02',
    slug: 'twin',
    title: 'TWIN',
    image: '/images/projects/twin_raw.png',
    tags: ['Python', 'AI', 'Flask'],
  },
  {
    id: '03',
    slug: 'expense-tracker',
    title: 'Expense Tracker App',
    image: '/images/projects/expense_app.png',
    tags: ['Dart', 'Firebase'],
  },
];


export default function Projects() {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  const trackRef = useRef(null);

  const filtered = filter === 'featured'
    ? PROJECTS.filter(p => p.featured)
    : PROJECTS;

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.scroll-card');
    const amount = card ? card.offsetWidth + 20 : 320;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section projects">
      <div className="container projects__inner">
        {/* Header */}
        <div className="projects__header">
          <div>
            <p className="section-label">02 — projects</p>
            <h2 className="section-title">Selected Work</h2>
          </div>

          <div className="projects__header-controls">
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

            <div className="scroll-arrows">
              <button className="scroll-arrow" onClick={() => scrollByCard(-1)} aria-label="Scroll left">
                <FiChevronLeft />
              </button>
              <button className="scroll-arrow" onClick={() => scrollByCard(1)} aria-label="Scroll right">
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div className="scroll-track" ref={trackRef}>
          {filtered.map((project) => (
            <Link
              key={project.title}
              to={`/projects#${project.id}`}
              className="scroll-card"
            >
              <div className="scroll-card__image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>

              <h3 className="scroll-card__title">{project.title}</h3>

              <div className="scroll-card__tags">
                {project.tags.slice(0, 4).map(tag => (
                  <span key={tag} className="scroll-card__tag">{tag}</span>
                ))}
              </div>
            </Link>

          ))}


          <button className="scroll-card scroll-card--more" onClick={() => navigate('/projects')}>
            <span>See all projects</span>
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}