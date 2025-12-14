import { projects } from '../data/projects';
import { useLanguage } from '../i18n.jsx';

function ProjectsSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <h2 className="section-title">{t('projects.title')}</h2>
        <p className="section-intro">{t('projects.intro')}</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title[lang]}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              <p className="project-description">{project.description[lang]}</p>
              <div className="project-tags">
                {project.stack.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
