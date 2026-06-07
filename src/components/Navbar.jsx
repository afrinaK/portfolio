import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'home',     href: '/',         type: 'route' },
  // { label: 'about',    href: '#about',    type: 'scroll' },
  { label: 'projects', href: '#projects', type: 'scroll' },
  { label: 'stacks',   href: '#stacks',   type: 'scroll' },
  { label: 'cv',       href: '/cv',       type: 'route' },
  { label: 'contact',  href: '/contact',  type: 'route' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActive(location.pathname);
      return;
    }
    setActive('home');
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== '/') return;
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS
        .filter(l => l.type === 'scroll')
        .map(l => l.href.slice(1));
      let found = false;
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          found = true;
          break;
        }
      }
      if (!found) setActive('home');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  const handleLinkClick = (link) => {
    setMenuOpen(false);
    if (link.type === 'scroll') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(link.href.slice(1));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(link.href.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (link) => {
    if (link.type === 'scroll') return active === link.href.slice(1);
    if (link.href === '/') return location.pathname === '/' && active === 'home';
    return location.pathname === link.href;
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link className="navbar__logo" to="/">
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">dev</span>
          <span className="navbar__logo-bracket">/&gt;</span>
        </Link>

        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {link.type === 'scroll' ? (
                <a
                  href={link.href}
                  className={`navbar__link ${isActive(link) ? 'navbar__link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link); }}
                >
                  <span className="navbar__link-num">_</span>
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className={`navbar__link ${isActive(link) ? 'navbar__link--active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="navbar__link-num">_</span>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}