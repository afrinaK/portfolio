// src/components/Footer.jsx
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__left">
          <span className="footer__logo">
            <span className="footer__bracket">&lt;</span>dev<span className="footer__bracket">/&gt;</span>
          </span>
        </span>
        <span className="footer__copy">
          © {year} — built with <span className="footer__accent">React</span> &amp; pure CSS
        </span>
        <div className="footer__links">
          {['github', 'linkedin', 'twitter'].map(link => (
            <a key={link} href="#" className="footer__link">{link}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
