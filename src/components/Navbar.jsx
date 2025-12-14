// src/components/Navbar.jsx

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n.jsx';

const sections = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'certifications', labelKey: 'nav.certifications' },
  { id: 'studies', labelKey: 'nav.studies' },
  { id: 'contact', labelKey: 'nav.contact' },
];

function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLang = (value) => {
    setLang(value);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="logo" onClick={() => setIsOpen(false)}>
          A EB
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links desktop-only">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="nav-link">
              {t(section.labelKey)}
            </a>
          ))}
        </nav>

        <div className="navbar-controls">
          <div className="lang-switcher">
            <button
              type="button"
              className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
              onClick={() => handleChangeLang('fr')}
            >
              FR
            </button>
            <span className="lang-separator">/</span>
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => handleChangeLang('en')}
            >
              EN
            </button>
          </div>

          <button
            className="menu-toggle mobile-only"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {t(section.labelKey)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
