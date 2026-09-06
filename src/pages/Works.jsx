// src/pages/Works.jsx
import { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Works.css';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
  const navigate = useNavigate();
  const trackRef = useRef(null);

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

          <div className="scroll-arrows">
            <button type="button" className="scroll-arrow" onClick={() => scrollByCard(-1)} aria-label="Scroll left">
              <FiChevronLeft />
            </button>
            <button type="button" className="scroll-arrow" onClick={() => scrollByCard(1)} aria-label="Scroll right">
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Horizontal scroll track */}
        <div className="scroll-track" ref={trackRef}>
          {PROJECTS.map((project) => (
            <Link key={project.id} to={`/projects#${project.id}`} className="scroll-card">
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

          <button type="button" className="scroll-card scroll-card--more" onClick={() => navigate('/projects')}>
            <span>See all projects</span>
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}
