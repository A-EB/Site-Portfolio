// src/components/CertificationsSection.jsx

import { useState } from 'react';
import { certifications } from '../data/certifications';
import { useLanguage } from '../i18n.jsx';

function CertificationsSection() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const total = certifications.length;
  const hasCerts = total > 0;

  const goTo = (index) => {
    if (!hasCerts) return;
    const normalized = ((index % total) + total) % total;
    setCurrent(normalized);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  if (!hasCerts) {
    return (
      <section id="certifications" className="section">
        <div className="section-inner">
          <h2 className="section-title">{t('certs.title')}</h2>
          <p className="section-intro">{t('certs.intro')}</p>
          <p className="section-intro">No certifications yet.</p>
        </div>
      </section>
    );
  }

  const cert = certifications[current];
  const previewSrc = cert.link ?? null;

  return (
    <section id="certifications" className="section">
      <div className="section-inner">
        <h2 className="section-title">{t('certs.title')}</h2>
        <p className="section-intro">{t('certs.intro')}</p>

        <div className="cert-slider">
          <button
            type="button"
            className="cert-nav"
            onClick={prev}
            aria-label="Previous certificate"
          >
            ‹
          </button>

          <div className="cert-viewport">
            <article key={cert.id} className="cert-item cert-item-large">
              <div className="cert-header">
                <div className="cert-text">
                  <h3 className="cert-name">{cert.title}</h3>
                  <div className="cert-meta">
                    <span className="cert-index">
                      {current + 1}/{total}
                    </span>
                  </div>
                </div>
              </div>

              {previewSrc && (
                <div className="cert-preview">
                  <img
                    src={previewSrc}
                    alt={cert.title}
                    className="cert-image"
                  />
                </div>
              )}


            </article>
          </div>

          <button
            type="button"
            className="cert-nav"
            onClick={next}
            aria-label="Next certificate"
          >
            ›
          </button>
        </div>

        <div className="cert-dots">
          {certifications.map((c, index) => (
            <button
              key={c.id}
              type="button"
              className={`cert-dot-btn ${index === current ? 'active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={c.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
