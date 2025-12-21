import { useLanguage } from '../i18n.jsx';
import PasswordFinder from './PasswordFinder.jsx';


function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="home" className="section hero">
      <div className="section-inner hero-inner">
        <div>
          <p className="hero-kicker">{t('hero.kicker')}</p>
          <div className="hero-title">
            <PasswordFinder />
          </div>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
          <div className="hero-actions">
            <a
              href={lang === 'fr' ? '/cv_fr.pdf' : '/cv_en.pdf'}
              className="btn primary"
              target="_blank"
              rel="noreferrer"
            >
              {t('hero.downloadCv')}
            </a>
            <a href="#projects" className="btn secondary">
              {t('hero.viewProjects')}
            </a>
            <a href="#contact" className="btn secondary">
              {t('hero.contactMe')}
            </a>
          </div>
        </div>
        <div className="hero-side">
          <div className="hero-card">
            <p className="hero-side-title">{t('hero.currentlyTitle')}</p>
            <p className="hero-side-text">{t('hero.currentlyBody')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Hero;
