// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'home',     href: '#home' },
  { label: 'about',    href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'stacks',   href: '#stacks' },
  { label: 'cv',       href: '#cv' },
  { label: 'contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState('home');
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active section
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    // smooth scroll
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo / wordmark */}
        <a className="navbar__logo" href="#home" onClick={() => handleLinkClick('#home')}>
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">dev</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        {/* Desktop nav */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`navbar__link ${active === href.slice(1) ? 'navbar__link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(href); }}
              >
                <span className="navbar__link-num">_</span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <ul className="navbar__drawer-links">
          {NAV_LINKS.map(({ label, href }, i) => (
            <li key={label} style={{ '--i': i }}>
              <a
                href={href}
                className={`navbar__drawer-link ${active === href.slice(1) ? 'navbar__drawer-link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(href); }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
