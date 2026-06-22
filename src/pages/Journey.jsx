// src/pages/Journey.jsx
import { useEffect, useRef, useState } from 'react';
import '../styles/Journey.css';

const MILESTONES = [
  {
    id: 1,
    year: '2022',
    type: 'competition',
    title: 'NGPC — National Girls Programming Contest',
    institution: 'National Programming Competition',
    description:
      'Secured 24th position in Ada Lovelace National Girls programming contest and secured 13th position in the preliminery round.',
    detail: 'competitive programming',
    certificate: '/images/journey/Ada_lovelace_new.png'
  },
  {
    id: 2,
    year: '2022',
    type: 'achievement',
    title: 'Project Competition',
    institution: 'Inter-University Project Showcase',
    description:
      'Secured 1st Runner Up position in Inter-University project showcasing competion arranged by Bangladesh Open Source Network.',
    detail: 'project showcased',
    certificate: '/images/journey/Bdosn.png',
  },
  {
    id: 3,
    year: '2021',
    type: 'competition',
    title: 'Debate Competition',
    institution: 'University Debate Club',
    description:
      'Among co‑curriculars, enjoyed debate and public speaking — attended competitions and won a few awards.',
    detail: 'public speaking & logic',
    certificate: null,

  },
  {
    id: 4,
    year: '2020',
    type: 'competition',
    title: 'IT Olympiad',
    institution: 'IT Competition',
    description:
      'Secured 2nd Runner Up position in IT olmpiad arranged by TECHWARNO, a non profit organization.',
    detail: 'competed nationally',
    certificate: '/images/journey/techwarno.png',

    
  },
  {
    id: 5,
    year: '2019',
    type: 'education',
    title: 'B.Sc. in Computer Science',
    institution: 'MIST — Military Institute of Science & Technology',
    description:
      'Joined the Computer Science and Engineering department at MIST, the journey to my dream began here.',
    detail: 'SSC 2016 · HSC 2018 · B.Sc. 2023',
    certificate: null,
  },
];

const TOTAL = MILESTONES.length;

export default function Journey() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef(null);

  const goTo = (index) => {
    if (animating) return;
    const clamped = Math.max(0, Math.min(TOTAL - 1, index));
    if (clamped === current) return;
    setAnimating(true);
    setCurrent(clamped);
    setTimeout(() => setAnimating(false), 750);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goTo(current + 1);
      if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  goTo(current - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, animating]);

  // Wheel navigation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let cooldown = false;
    const onWheel = (e) => {
      e.preventDefault();
      if (cooldown) return;
      cooldown = true;
      setTimeout(() => { cooldown = false; }, 800);
      if (e.deltaY > 0) goTo(current + 1);
      else goTo(current - 1);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [current, animating]);

  // Touch swipe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startY = 0;
    const onTouchStart = (e) => { startY = e.touches[0].clientY; };
    const onTouchEnd = (e) => {
      const diff = startY - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 40) {
        if (diff > 0) goTo(current + 1);
        else goTo(current - 1);
      }
    };
    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchend', onTouchEnd);
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [current, animating]);

  const milestone = MILESTONES[current];
  const displayNum = String(current + 1).padStart(2, '0');
  const totalNum   = String(TOTAL).padStart(2, '0');

  return (
    <section id="journey" className="journey" ref={containerRef}>

      {/* Prompt 
      <p className="journey__prompt">
        <span className="journey__prompt-dollar">$ </span>
        cat ./my_journey.log
      </p>
      */}

      {/* Slides track */}
      <div
        className="journey__track"
        style={{ transform: `translateY(-${current * 100}vh)` }}
      >
        {MILESTONES.map((m, i) => (
          <div
            key={m.id}
            className={`journey__slide ${i === current ? 'journey__slide--active' : ''}`}
            aria-hidden={i !== current}
          >
            <div className="journey__accent" />

            <div className="journey__content">
              <span className={`journey__badge journey__badge--${m.type}`}>
                {m.type}
              </span>

              <h2 className="journey__title">{m.title}</h2>
              <p className="journey__inst">{m.institution}</p>
              <p className="journey__desc">{m.description}</p>

              {m.detail && (
                <p className="journey__detail">
                  <span className="journey__detail-arrow">↳ </span>
                  {m.detail}
                </p>
              )}

              {/* Certificate slot — competition & achievement only */}
              {m.type !== 'education' && (
                <div className="journey__cert">
                  {m.certificate ? (
                    <img
                      src={m.certificate}
                      alt={`${m.title} certificate`}
                      className="journey__cert-img"
                    />
                  ) : (
                    <div className="journey__cert-placeholder">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="journey__cert-icon">
                        <rect x="3" y="3" width="18" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4" />
                      </svg>
                      <span>certificate</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Ghost year */}
            <span className="journey__ghost-year" aria-hidden="true">{m.year}</span>

            {/* Slide counter */}
            <span className="journey__counter">{displayNum} / {totalNum}</span>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="journey__nav" aria-label="Timeline navigation">
        <button
          className="journey__nav-btn"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Previous milestone"
        >↑</button>

        <div className="journey__dots" role="tablist">
          {MILESTONES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to milestone ${i + 1}`}
              className={`journey__dot ${i === current ? 'journey__dot--active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <button
          className="journey__nav-btn"
          onClick={() => goTo(current + 1)}
          disabled={current === TOTAL - 1}
          aria-label="Next milestone"
        >↓</button>
      </nav>

      {/* Progress */}
      <p className="journey__progress" aria-live="polite">
        {TOTAL - current} / {TOTAL}
      </p>

    </section>
  );
}
