import { Link } from 'react-router-dom'
import projects from '../data/projects'

export default function ProjectsPage() {
  return (
    <section className="projects-all projects" id="projects">
      <div className="projects-header">
        <h2>
          All <span>Projects</span>
        </h2>
        <p>All of my recent design and development work.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <div>
                <span className="project-number">{project.number}</span>
                <h3>{project.title}</h3>
                <p>
                  {project.description.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < project.description.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              </div>
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View Project <i className="fa-solid fa-arrow-right"></i>{' '}
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-back">
        <Link className="btn1" to="/">
          <i className="fa-solid fa-arrow-left"></i> Back to Home
        </Link>
      </div>
    </section>
  )
}
