// src/pages/Stacks.jsx
import '../styles/Stacks.css';

const STACKS = [
  {
    category: 'Frontend',
    icon: '◈',
    items: [
      { name: 'React',       level: 95 },
      { name: 'TypeScript',  level: 90 },
      { name: 'Next.js',     level: 88 },
      { name: 'CSS / SCSS',  level: 92 },
      { name: 'Tailwind',    level: 85 },
      { name: 'React Native',level: 72 },
    ],
  },
  {
    category: 'Backend',
    icon: '◉',
    items: [
      { name: 'Node.js',     level: 90 },
      { name: 'Python',      level: 80 },
      { name: 'Go',          level: 65 },
      { name: 'REST APIs',   level: 95 },
      { name: 'GraphQL',     level: 78 },
      { name: 'WebSockets',  level: 75 },
    ],
  },
  {
    category: 'Data & Cloud',
    icon: '◎',
    items: [
      { name: 'PostgreSQL',  level: 85 },
      { name: 'MongoDB',     level: 78 },
      { name: 'Redis',       level: 72 },
      { name: 'AWS',         level: 70 },
      { name: 'Docker',      level: 80 },
      { name: 'Supabase',    level: 88 },
    ],
  },
  {
    category: 'Tools',
    icon: '◇',
    items: [
      { name: 'Git / GitHub',level: 95 },
      { name: 'Linux / Bash',level: 85 },
      { name: 'Figma',       level: 78 },
      { name: 'Vim',         level: 70 },
      { name: 'CI/CD',       level: 75 },
      { name: 'Testing',     level: 80 },
    ],
  },
];

export default function Stacks() {
  return (
    <section id="stacks" className="section stacks">
      <div className="container stacks__inner">
        <div className="stacks__header">
          <p className="section-label">03 — stacks</p>
          <h2 className="section-title">Tech I Use</h2>
          <p className="section-desc">
            Tools and technologies I reach for when building things. Skill bars reflect
            relative proficiency — always learning.
          </p>
        </div>

        <div className="stacks__grid">
          {STACKS.map((group) => (
            <div key={group.category} className="stack-card">
              <div className="stack-card__head">
                <span className="stack-card__icon">{group.icon}</span>
                <span className="stack-card__cat">{group.category}</span>
              </div>

              <div className="stack-card__items">
                {group.items.map((item) => (
                  <div key={item.name} className="stack-item">
                    <div className="stack-item__meta">
                      <span className="stack-item__name">{item.name}</span>
                      <span className="stack-item__pct">{item.level}%</span>
                    </div>
                    <div className="stack-item__bar">
                      <div
                        className="stack-item__fill"
                        style={{ '--width': `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
