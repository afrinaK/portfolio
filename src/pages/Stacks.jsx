import { useEffect, useRef } from 'react';
import '../styles/Stacks.css';

const STACKS = [

  { category: 'Frontend',  items: ['HTML5', 'CSS3', 'Bootstrap', 'Angular', 'React.js'] },
  { category: 'Backend',   items: ['PHP', 'Laravel', 'Django', 'Flask', 'Spring Boot'] },
  { category: 'Languages', items: ['Python', 'C++', 'Java', 'SQL', 'TypeScript', 'Dart'] },
  { category: 'Tools',     items: ['Git / GitHub', 'Linux / Bash', 'Figma'] },
  { category: 'Database',  items: ['MySQL', 'Firebase', 'Oracle'] },


];

export default function Stacks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const pills = sectionRef.current?.querySelectorAll('.stacks__pill');
    if (!pills) return;
    let fired = false;

    const run = () => {
      if (fired) return;
      fired = true;
      pills.forEach((p, i) => setTimeout(() => p.classList.add('visible'), 80 + i * 45));
    };

    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { run(); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stacks" className="section stacks" ref={sectionRef}>
      <div className="container stacks__inner">
        <div className="stacks__header">
          <p className="section-label">03 — stacks</p>
          <h2 className="section-title">Tech I Use</h2>
          <p className="section-desc">
            Tools and technologies I reach for when building things.
          </p>
        </div>
        <div className="stacks__table">
          {STACKS.map((row) => (
            <div key={row.category} className="stacks__row">
              <div className="stacks__cat">{row.category}</div>
              <div className="stacks__pills">
                {row.items.map((item) => (
                  <span key={item} className="stacks__pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}