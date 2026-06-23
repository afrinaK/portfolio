// src/pages/Contact.jsx
import { useState } from 'react';
import '../styles/Contact.css';

const SOCIALS = [
  { label: 'github',   href: 'https://github.com/afrinaK', handle: '@afrinaK' },
  { label: 'linkedin', href: 'https://bd.linkedin.com/in/afrinak', handle: 'in/afrinak' },
//  { label: 'twitter',  href: '#', handle: '@alexm_dev' },
  { label: 'email',    href: 'mailto:afrinakabir10@gmail.com', handle: 'afrinakabir10@gmail.com' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://formspree.io/f/mkolgoad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
      } else {
        setError('Something went wrong. Please try again or email me directly.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        {/* Header */}
        <div className="contact__header">
          <p className="section-label">05 — contact</p>
          <h2 className="section-title">Let's Build Together</h2>
          <p className="section-desc">
            Have a project in mind, a question, or just want to say hi?
            My inbox is always open.
          </p>
        </div>

        <div className="contact__grid">
          {/* Form */}
          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <h3 className="contact__success-title">Message sent!</h3>
                <p className="contact__success-desc">
                  I'll get back to you within 24–48 hours. Thanks for reaching out.
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form-row form-row--half">
                  <div className="form-field">
                    <label className="form-label" htmlFor="name">name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="email">email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="message">message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Hey, I'd love to work with you on..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {error && (
                  <p className="contact__error">{error}</p>
                )}

                <button
                  type="submit"
                  className="btn btn--primary contact__submit"
                  disabled={loading}
                >
                  {loading ? 'sending...' : 'send message →'}
                </button>
              </form>
            )}
          </div>

          {/* Socials */}
          <div className="contact__socials">
            <h3 className="contact__socials-heading">
              <span className="contact__prompt">// </span>find me on
            </h3>
            <div className="contact__social-list">
              {SOCIALS.map(({ label, href, handle }) => (
                <a key={label} href={href} className="contact__social-item">
                  <div className="contact__social-info">
                    <span className="contact__social-label">{label}</span>
                    <span className="contact__social-handle">{handle}</span>
                  </div>
                  <span className="contact__social-arrow">↗</span>
                </a>
              ))}
            </div>

            <div className="contact__availability">
              <div className="contact__avail-dot" />
              <div>
                <p className="contact__avail-title">Open to opportunities</p>
                <p className="contact__avail-desc">
                  Freelance · Full-time · Remote
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}